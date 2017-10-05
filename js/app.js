app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/potterpics',{
    templateUrl: "../pages/potter.html"
    //animation: 'first animated zoomIn'
  })
  .when('/events',{
    templateUrl: "../pages/events.html"
    //animation: 'first'
  })
  .when('/blaster',{
    templateUrl: "../pages/blaster.html"
    //animation: 'first'
  })
  .when('/bayberry',{
    templateUrl: "../pages/bayberry.html"
    //animation: 'first'
  })
  .when('/barberry',{
    templateUrl: "../pages/barberry.html"
    //animation: 'first'
  })
  .when('/mares',{
    templateUrl: "../pages/mars.html"
    //animation: 'first'
  })
  .when('/loxe',{
    templateUrl: "../pages/loxe.html"
    //animation: 'first'
  })
  .when('/rizikitoto',{
    templateUrl: "../pages/rizikitoto.html"
    //animation: 'first'
  })
  .when('/bilberry',{
    templateUrl: "../pages/bilberry.html"
    //animation: 'first'
  })
  .when('/vaporposter',{
    templateUrl: "../pages/vaporposter.html"
    //animation: 'first'
  })
  .when('/lewittmotion',{
    templateUrl: "../pages/lewittmotion.html"
    //animation: 'first'
  })
  .when('/weeklymotion',{
    templateUrl: "../pages/weeklymotion.html"
    //animation: 'first'
  })
  .when('/stitch',{
    templateUrl: "../pages/stitch.html"
    //animation: 'first'
  })
  .when('/',{
   templateUrl: "../pages/grid.html"
    //animation: 'second'
  })
  .otherwise({redirectTo: '/'});

}).animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      //$('body').removeClass('gridcolorchange');
      element.fadeIn(500, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(500, done);
      //$('body').addClass('gridcolorchange');
      return function() {
        element.stop();
      }
    }
  }
});


app.controller('ctrl', function($scope, $rootScope){
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
  $rootScope.animation = currRoute.animation;
  });
});
