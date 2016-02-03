(function () {

    'use strict';

    angular
        .module('app.modules')
        .controller('UserController', UserController);

    function UserController($state, $stateParams, UserCtrlService) {

        var vm = this;

        vm.mode = 0;
        vm.message = 'Messages';
        vm.form = { id: null, name: null, email: null };

        function Initialize()
        {

            // If user id is passed then search for user
            if ($stateParams.id.length) {
                vm.form = UserCtrlService.GetPerson(Number($stateParams.id));;
                vm.mode = 1;
            }

        }

        vm.AddUser = function () {
            console.log('Adding User');
            UserCtrlService.AddUser(vm.form);
            $state.go('home');
        }

        Initialize();

    }

}());