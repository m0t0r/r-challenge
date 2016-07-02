import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria'
import uiRouter from 'angular-ui-router'


const coreModule = angular.module('rApp.core',[ngAnimate, ngAria, uiRouter]);

export default coreModule.name;
