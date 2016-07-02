import angular from 'angular';

import coreModule from './core';
import commonModule from './common'
import newsModule from './news';


const appModule = angular.module('rApp',[coreModule, commonModule, newsModule]);

  angular
    .element(document)
    .ready(() => {
      let body = document.getElementsByTagName('body')[0];
      angular.bootstrap(body, [appModule.name]);
    });
