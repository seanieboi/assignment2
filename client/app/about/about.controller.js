'use strict';
(function(){

class AboutComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('funTimesApp')
  .component('about', {
    templateUrl: 'app/about/about.html',
    controller: AboutComponent
  });

})();
