'use strict';

const angular = require('angular');

import { IMAGE_READER } from '@spinnaker/core';

module.exports = angular
  .module('spinnaker.oraclebmcs.serverGroup.configure.wizard.basicSettings.controller', [
    require('@uirouter/angularjs').default,
    require('angular-ui-bootstrap'),
    IMAGE_READER,
  ])
  .controller('oraclebmcsServerGroupBasicSettingsCtrl', function(
    $scope,
    $state,
    $uibModalStack,
    $controller,
    imageReader,
  ) {
    angular.extend(
      this,
      $controller('BasicSettingsMixin', {
        $scope: $scope,
        imageReader: imageReader,
        $uibModalStack: $uibModalStack,
        $state: $state,
      }),
    );
  });
