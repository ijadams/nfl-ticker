var HomeService='home.service';

const HTTP = new WeakMap();

class nflService
{
  constructor($http)
  {
    HTTP.set(this, $http);
  }

  getScores(){
    return HTTP.get(this).get("http://www.nfl.com/liveupdate/scorestrip/ss.xml",
                {   //convert XML to JSON
                    transformResponse: function (cnv) {
                        var x2js = new X2JS();
                        var aftCnv = x2js.xml_str2json(cnv);
                        return aftCnv;
                    }
                }).then(result => result.data );
  }


  static nflFactory($http){
    return new nflService($http);
  }
}

nflService.nflFactory.$inject = ['$http'];

angular.module(HomeService, [])
  .factory('nflSvc', nflService.nflFactory);

export default HomeService;
