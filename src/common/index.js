import angular from 'angular';
import directivesModule from './directives';

const commonModule = angular.module('rApp.common', [directivesModule]);

export default commonModule.name;
