(function () {

    'use strict';

    angular.module('app').run(AutoStart);

    function AutoStart(DataProvider)
    {
        DataProvider.Set('people', [
            { id: 1, name: 'John Doe', email: 'john.doe@anonymous.com', gender: 'M' },
            { id: 2, name: 'Jane Doe', email: 'jane.doe@anonymous.com', gender: 'F' },
            { id: 3, name: 'Ben Solo', email: 'ive@ben.solo', gender: 'M' }
        ]);
    }
    
}());