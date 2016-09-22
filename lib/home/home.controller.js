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

                if (it.homeScore === it.awayScore) {
                  it.background = it.home;
                } else if (it.homeScore > it.awayScore) {
                  it.background = it.home;
                } else {
                  it.background = it.away;
                }

                console.log(it.home)
                console.log(it.away)


                switch (j + 1 ) {
                    case 1:
                        it.span.row = it.span.col = 2;
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        it.span.col = 2;
                        break;
                    case 5:
                        it.span.row = it.span.col = 2;
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        break;
                    case 11:
                        break;
                    case 12:
                        it.span.col = 2;
                        break;

                }

                results.push(it);
            }
            return results;
        }
    }
}

export default HomeController;