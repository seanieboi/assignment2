'use strict';

class NavbarController {
  //start-non-standard
   menu = [{
    'title': 'Home',
    'link': '/'
  },
  {
    'title': 'Games',
    'link': '/games'
  },
  {
    'title': 'Contact Us',
    'link': '/contact'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('assignment2App')
  .controller('NavbarController', NavbarController);
