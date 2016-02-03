(function () {

    'use strict';

    angular
        .module('app.modules')
        .controller('HomeController', HomeController);

    function HomeController(HomeCtrlService) {

        var vm = this;

        vm.people = HomeCtrlService.GetPeople();

    }

}());