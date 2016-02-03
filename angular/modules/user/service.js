(function () {

    'use strict';

    angular
        .module('app.modules')
        .factory('UserCtrlService', UserCtrlService);

    function UserCtrlService(DataProvider) {

        return {
            GetPerson: GetPerson,
            AddUser: AddUser
        };

        // Function Definitions
        
        function GetPerson(id)
        {

            var people = DataProvider.Get('people');
            var result = null;

            angular.forEach(people, function (val, idx) {
                if (people[idx].id === id) {
                    result = people[idx];
                    return;
                }
            });

            return result;

        }

        function AddUser(newUser)
        {
            var people = DataProvider.Get('people');

            newUser.id = people.length;

            people.push(newUser);

            DataProvider.Set('people', people);

        }

    }

}());