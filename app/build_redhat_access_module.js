angular.module('RedhatAccess', [
    'ngSanitize',
    'ui.select2',
    'RedhatAccess.header',
    'RedhatAccess.template',
    'RedhatAccess.cases',
    'RedhatAccess.security',
    'RedhatAccess.search',
    'RedhatAccess.logViewer',
    'RedhatAccess.ui-utils'
]).config([
    '$provide',
    function ($provide) {
        $provide.value('SECURITY_CONFIG', {
            displayLoginStatus: true,
            autoCheckLogin: true,
            forceLogin: false,
            loginURL: '',
            logoutURL: ''
        });
    }
]).run([
    'TITLE_VIEW_CONFIG',
    '$http',
    'securityService',
    'gettextCatalog',
    'CHAT_SUPPORT',
    function (TITLE_VIEW_CONFIG, $http, securityService, gettextCatalog, CHAT_SUPPORT) {
        TITLE_VIEW_CONFIG.show = true;
        CHAT_SUPPORT.enableChat = true;
    }
]);