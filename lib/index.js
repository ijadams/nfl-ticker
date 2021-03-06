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

    //example object
    $scope.scores =
       {
         "ss": {
           "gms": {
             "g": [
               {
                 "_eid": "2016092200",
                 "_gsis": "56933",
                 "_d": "Thu",
                 "_t": "8:25",
                 "_q": "F",
                 "_h": "NE",
                 "_hnn": "patriots",
                 "_hs": "27",
                 "_v": "HOU",
                 "_vnn": "texans",
                 "_vs": "0",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092500",
                 "_gsis": "56934",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "F",
                 "_h": "BUF",
                 "_hnn": "bills",
                 "_hs": "33",
                 "_v": "ARI",
                 "_vnn": "cardinals",
                 "_vs": "18",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092501",
                 "_gsis": "56935",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "F",
                 "_h": "CAR",
                 "_hnn": "panthers",
                 "_hs": "10",
                 "_v": "MIN",
                 "_vnn": "vikings",
                 "_vs": "22",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092502",
                 "_gsis": "56936",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "F",
                 "_h": "CIN",
                 "_hnn": "bengals",
                 "_hs": "17",
                 "_v": "DEN",
                 "_vnn": "broncos",
                 "_vs": "29",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092503",
                 "_gsis": "56937",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "F",
                 "_h": "GB",
                 "_hnn": "packers",
                 "_hs": "34",
                 "_v": "DET",
                 "_vnn": "lions",
                 "_vs": "27",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092504",
                 "_gsis": "56938",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "F",
                 "_h": "JAX",
                 "_hnn": "jaguars",
                 "_hs": "17",
                 "_v": "BAL",
                 "_vnn": "ravens",
                 "_vs": "19",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092505",
                 "_gsis": "56939",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "FO",
                 "_h": "MIA",
                 "_hnn": "dolphins",
                 "_hs": "30",
                 "_v": "CLE",
                 "_vnn": "browns",
                 "_vs": "24",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092506",
                 "_gsis": "56940",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "F",
                 "_h": "NYG",
                 "_hnn": "giants",
                 "_hs": "27",
                 "_v": "WAS",
                 "_vnn": "redskins",
                 "_vs": "29",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092507",
                 "_gsis": "56941",
                 "_d": "Sun",
                 "_t": "1:00",
                 "_q": "F",
                 "_h": "TEN",
                 "_hnn": "titans",
                 "_hs": "10",
                 "_v": "OAK",
                 "_vnn": "raiders",
                 "_vs": "17",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092508",
                 "_gsis": "56942",
                 "_d": "Sun",
                 "_t": "4:05",
                 "_q": "F",
                 "_h": "SEA",
                 "_hnn": "seahawks",
                 "_hs": "37",
                 "_v": "SF",
                 "_vnn": "49ers",
                 "_vs": "18",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092509",
                 "_gsis": "56943",
                 "_d": "Sun",
                 "_t": "4:05",
                 "_q": "F",
                 "_h": "TB",
                 "_hnn": "buccaneers",
                 "_hs": "32",
                 "_v": "LA",
                 "_vnn": "rams",
                 "_vs": "37",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092511",
                 "_gsis": "56944",
                 "_d": "Sun",
                 "_t": "4:25",
                 "_q": "F",
                 "_h": "IND",
                 "_hnn": "colts",
                 "_hs": "26",
                 "_v": "SD",
                 "_vnn": "chargers",
                 "_vs": "22",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092512",
                 "_gsis": "56945",
                 "_d": "Sun",
                 "_t": "4:25",
                 "_q": "F",
                 "_h": "KC",
                 "_hnn": "chiefs",
                 "_hs": "24",
                 "_v": "NYJ",
                 "_vnn": "jets",
                 "_vs": "3",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092510",
                 "_gsis": "56946",
                 "_d": "Sun",
                 "_t": "4:25",
                 "_q": "F",
                 "_h": "PHI",
                 "_hnn": "eagles",
                 "_hs": "34",
                 "_v": "PIT",
                 "_vnn": "steelers",
                 "_vs": "3",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092513",
                 "_gsis": "56947",
                 "_d": "Sun",
                 "_t": "8:30",
                 "_q": "F",
                 "_h": "DAL",
                 "_hnn": "cowboys",
                 "_hs": "31",
                 "_v": "CHI",
                 "_vnn": "bears",
                 "_vs": "17",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               },
               {
                 "_eid": "2016092600",
                 "_gsis": "56948",
                 "_d": "Mon",
                 "_t": "8:30",
                 "_q": "P",
                 "_h": "NO",
                 "_hnn": "saints",
                 "_hs": "0",
                 "_v": "ATL",
                 "_vnn": "falcons",
                 "_vs": "0",
                 "_rz": "0",
                 "_ga": "",
                 "_gt": "REG"
               }
             ],
             "_w": "3",
             "_y": "2016",
             "_t": "R",
             "_gd": "1",
             "_bph": "137"
           }
         }
       }


       //get this weeks scores
          $http({
                method  : 'GET',
                url     : 'http://www.nfl.com/liveupdate/scorestrip/ss.xml',
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
              return 'error';
          });





    vm.toggleSidenav = () => {
        $mdSidenav('left').toggle();
    };
    vm.closeSidenav = () => {
        $mdSidenav('left').close();
    };
});
