angular.module('myApp').service('mainService', function ($http) {
    let serverUrl = 'http://localhost:3005'
    this.getName = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/name'

        })
    }
})
