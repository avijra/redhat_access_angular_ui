'use strict';
/*global $ */
angular.module('RedhatAccess.cases').controller('ProceedWithoutAttachModal', [
    '$scope',
    '$modalInstance',
    '$sce',
    'AttachmentsService',
    'RHAUtils',
    function ($scope, $modalInstance, $sce, AttachmentsService, RHAUtils) {
        $scope.AttachmentsService = AttachmentsService;
        $scope.closeModal = function (proceed) {
            AttachmentsService.proceedWithoutAttachments = proceed;
            $modalInstance.close();
        };
        $scope.parseArtifactHtml = function () {
            var parsedHtml = '';
            if (RHAUtils.isNotEmpty(AttachmentsService.suggestedArtifact.description)) {
                var rawHtml = AttachmentsService.suggestedArtifact.description.toString();
                parsedHtml = $sce.trustAsHtml(rawHtml);
            }
            return parsedHtml;
        };
    }
]);

