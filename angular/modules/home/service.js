(function () {

    'use strict';

    angular
        .module('app.modules')
        .factory('HomeCtrlService', HomeCtrlService);

    function HomeCtrlService(DataProvider) {

        return {
            GetPeople: GetPeople
        };

        // Function Definitions
        
        function GetPeople()
        {
            if (DataProvider.Get('people')) {
                return DataProvider.Get('people'); 
            } else {
                return [];
            }
        }

    }

}());