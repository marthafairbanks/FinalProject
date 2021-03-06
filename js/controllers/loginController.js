(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('loginController', function(API, $state, back) {
            var vm = this;

            vm.showAlert = false;

            vm.submit = function() {

                var login = back.login(vm.form);

                login.then(function(results) {
                    if (results.data.data[0]) 
                    {
                        API.saveToken(results.data.data[0].token);
                        API.saveUserId(results.data.data[0].id);
                        vm.showAlert = false;
                        $state.go('home');
                    } 
                    else {
                        vm.showAlert = true;
                    }
                })
            }

        });
})();