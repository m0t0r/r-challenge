import angular from 'angular';

import rListDirective from './r-list/r-list.directive';
import rListItemDirective from './r-list-item/r-list-item.directive';

const directivesModule = angular
  .module('rApp.common.directives', [])
  .directive('rList', rListDirective)
  .directive('rListItem', rListItemDirective);

export default directivesModule.name;