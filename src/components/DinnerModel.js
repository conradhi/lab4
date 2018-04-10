const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};
const DinnerModel = function () {

  let numberOfGuests = 4;
  let observers = [];
  let menu = [];
  let menuId = [];
  let currentDishId = 100;
  let search = "";
  let type = "all";
  let numberOfItems = 6;
  let total = 0;

  this.loadMenu = function () {
    menuId = JSON.parse(localStorage["menu"]);
    for (var i = 0; i < menuId.length; i++) {
      this.getAllInfo(menuId[i]).then(dish => {
        var inMenu = false;
        for (var i = 0; i < menu.length; i++) {
          if (menu[i].id === dish.id) {
            inMenu = true;
          }
        };
        if (!inMenu) {
          menu.push(dish);
          this.setLocalStorage();
        }
      })
    }
    return menu;
  };



  this.getNumberOfGuests = function () {
    if (isNaN(localStorage.numberOfGuests)) {
      numberOfGuests = 1;
      localStorage.numberOfGuests = numberOfGuests;
    }
    else {
      numberOfGuests = localStorage.numberOfGuests;
    }
    return numberOfGuests;

  };

  this.setNumberOfGuests = function (change) {
    if (change === "add") {
      numberOfGuests++;
      localStorage.numberOfGuests = numberOfGuests;
    }
    if (change === "sub" && numberOfGuests >= 1) {
      numberOfGuests--;
      localStorage.numberOfGuests = numberOfGuests;

    }

    notifyObservers();
  };

  this.getCurrentDishId = function () {
    currentDishId = localStorage.currentDish;
    return currentDishId;
  };

  this.setCurrentDishId = function (num) {
    currentDishId = num;
    localStorage.currentDish = currentDishId;
  };

  this.editMenu = function (edit, dish) {
    if (edit === "check") {
      var inMenu = false;
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === dish.id) {
          inMenu = true;
        }
      };
      return inMenu;
    }

    if (edit === "add") {
      if (menu.length === 0) {

        menu.push(dish);
      this.setLocalStorage();
      }
      var inMenu = false;
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === dish.id) {
          inMenu = true;
        }
      };
      if (!inMenu) {
        menu.push(dish);
        this.setLocalStorage();
      }
      notifyObservers();
      this.getDishes();
    }

    if (edit === "remove") {
      var newMenu = [];
      var newMenuId = [];
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id !== dish.id) {
          newMenu.push(menu[i]);
        }
      };
      menu = newMenu;
      this.setLocalStorage();
      notifyObservers();
    }
  };

  this.setLocalStorage = function (){
    menuId = [];
    for (var i = 0; i < menu.length; i++) {
      menuId.push(menu[i].id);
    };
    localStorage["menu"] = JSON.stringify(menuId);
  };

  this.getMenu = function () {
    return menu;
    notifyObservers();
  };

  this.getTotalPrice = function (){
    var total = 0;
    for (var i = 0; i < menu.length; i++) {
      total += menu[i].pricePerServing;
    };
    localStorage.total = total*numberOfGuests;
    return total*numberOfGuests;
  };

  this.getTotalPriceLoad = function (){
    return localStorage.total;
  };

  this.setSearch = function (string){
    search = string;
  }

  this.setType = function (string){
    type = string;
  }

  this.getType = function (string){
    return type
  }

  // API Calls

  this.getAllDishes = function () {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=12'
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }

  this.getAllInfo = function (id) {
    if (isNaN(id)) {
      const url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + this.getCurrentDishId() + "/information"
      return fetch(url, httpOptions)
        .then(processResponse)
        .catch(handleError)
    }

    else {
      const url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information"
      return fetch(url, httpOptions)
        .then(processResponse)
        .catch(handleError)
    }
  }

  this.getDishes = function () {
    if (search === "" && type === "all") {
      console.log("random");
      const url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=" + numberOfItems
      return fetch(url, httpOptions)
        .then(processResponse)
        .catch(handleError)
    }

    if (search === "" && type !== "all") {
      console.log(type);
      const url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=false&number=" + numberOfItems + "&type=" + type
      return fetch(url, httpOptions)
        .then(processResponse)
        .catch(handleError)
    }

    if (search !== "" && type !== "all") {
      console.log(search + " " + type);
      const url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=false&number=" + numberOfItems + "&query=" + search + "&type=" + type
      return fetch(url, httpOptions)
        .then(processResponse)
        .catch(handleError)
    }

    else {
      console.log(search);

      const url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=false&number=" + numberOfItems + "&query=" + search
      return fetch(url, httpOptions)
        .then(processResponse)
        .catch(handleError)
    }
  }

  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }

  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
