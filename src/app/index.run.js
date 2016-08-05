(function() {
  'use strict';

  angular
    .module('theWebDuoSite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
