angular.module('myApp').component('meComp', {
    templateUrl: '../views/me.html',
    controller: function (mainService) {
        let that = this;
       mainService.getName().then(response => {
           console.log(response.data);
           that.name = response.data;
       })
    }
})

