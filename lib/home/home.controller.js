class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope) {
        'ngInject';

        var vm = this;
        vm.tiles = buildGridModel({
            home: '',
            away: '',
            homeScore: '',
            awayScore: '',
            gameTime: '',
            icon: "avatar:svg-",
            title: "Svg-",
            background: ""
        });


        function buildGridModel(tileTmpl) {
            var it, results = [];
            for (var j = 0; j < $scope.scores.ss.gms.g.length; j++) {
                it = angular.extend({}, tileTmpl);
                it.home = $scope.scores.ss.gms.g[j]._h;
                it.away = $scope.scores.ss.gms.g[j]._v;
                it.homeScore = $scope.scores.ss.gms.g[j]._hs;
                it.awayScore = $scope.scores.ss.gms.g[j]._vs;
                it.gameTime = new Date($scope.scores.ss.gms.g[j]._eid.slice(0,4) + '-' + $scope.scores.ss.gms.g[j]._eid.slice(4, 6) + '-' + $scope.scores.ss.gms.g[j]._eid.slice(6, 8));
                it.icon = it.icon + (j + 1);
                it.title = $scope.scores.ss.gms.g[j]._h + ' vs ' + $scope.scores.ss.gms.g[j]._v;
                it.span = {
                    row: 1,
                    col: 1
                };
                switch (j + 1) {
                    case 1:
                        it.background = "red";
                        it.span.row = it.span.col = 2;
                        break;
                    case 2:
                        it.background = "green";
                        break;
                    case 3:
                        it.background = "darkBlue";
                        break;
                    case 4:
                        it.background = "blue";
                        it.span.col = 2;
                        break;
                    case 5:
                        it.background = "yellow";
                        it.span.row = it.span.col = 2;
                        break;
                    case 6:
                        it.background = "pink";
                        break;
                    case 7:
                        it.background = "darkBlue";
                        break;
                    case 8:
                        it.background = "purple";
                        break;
                    case 9:
                        it.background = "deepBlue";
                        break;
                    case 10:
                        it.background = "lightPurple";
                        break;
                    case 11:
                        it.background = "yellow";
                        break;
                }
                results.push(it);
            }
            return results;
        }
    }
}

export default HomeController;
