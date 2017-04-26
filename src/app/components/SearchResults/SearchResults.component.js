export default class SearchResults {

  constructor($scope, $element, $attrs, $http){
    '$inject';
    
    this.results = $scope.results
    this._$http = $http
  }

  logResults(data){
    return this._$http.get("http://pokeapi.co/api/v2/pokemon/" + data).then((res)=>{
      this.chosenOne = res.data
    })
  }

}
