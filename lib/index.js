// Import angular
import 'angular';
// Material design css
import 'angular-material/angular-material.css';
// Icons
import 'font-awesome/css/font-awesome.css';
// Animation
import angularAnimate from 'angular-animate';
// Materail Design lib
import angularMaterial from 'angular-material';
// Router
import angularUIRouter from 'angular-ui-router';
// Our modules
import home from './home/home.module';
import sidenav from './sidenav/sidenav.module';

// Project specific style
import './scss/bootstrap.scss'

// Create our demo module
export const demoModule = angular.module('demo', [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    home,
    sidenav
]);

demoModule.config(($stateProvider) => {
    $stateProvider.state('public', {
        url: "/public",
        abstract: true,
        views: {
            'sidenav': {
                templateUrl: require("./sidenav/sidenav.html"),
                controller: "SidenavController as sidenav"
            }
        }
    });
});

demoModule.controller('MainController', function($mdSidenav,$http,$scope,$window) {
    let vm = this;
    $scope.scores = '';
          $http({
                method  : 'GET',
                url     : 'http://www.nfl.com/liveupdate/scorestrip/ss.xml',
                timeout : 10000,
                params  : {},  // Query Parameters (GET)
                transformResponse: function (cnv) {
                        var x2js = new X2JS();
                        var aftCnv = x2js.xml_str2json(cnv);
                        return aftCnv;
                }
            }).success(function(data) {
                console.dir(data);  // XML document object
                $scope.scores = data;
            }).error(function(data, status, headers, config) {
          });

    vm.toggleSidenav = () => {
        $mdSidenav('left').toggle();
    };
    vm.closeSidenav = () => {
        $mdSidenav('left').close();
    };
});
