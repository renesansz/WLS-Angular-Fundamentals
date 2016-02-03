(function () {

    'use strict';

    angular.module('app.providers').service('DataProvider', DataProvider);

    function DataProvider() {

        var vm = this;

        vm.Get = Get;
        vm.Set = Set;

        /**
         * Gets the data from the global variable
         *
         * @param {String} identifier
         */
        function Get(identifier)
        {
            return vm[identifier];
        }

        /**
         * Set a global variable with its value.
         *
         * @param {String} identifier
         * @param {Any} value
         */
        function Set(identifier, value)
        {
            vm[identifier] = value;
        }

    }

}());