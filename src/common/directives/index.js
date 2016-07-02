import angular from 'angular';

import rList from './r-list/r-list.directive';

const directivesModule = angular
  .module('rApp.common.directives', [])
  .directive('rList', rList);

export default directivesModule.name;