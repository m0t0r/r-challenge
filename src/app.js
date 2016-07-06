import angular from 'angular';

import coreModule from './core';
import commonModule from './common'
import newsModule from './news';

import appComponent from './app.component';
import 'style!css!animate.css/animate.css';
import './assets/css/styles.css';

import appRoues from './app.routes';

const appModule = angular
  .module('rApp',[coreModule, commonModule, newsModule])
  .config(appRoues)
  .component('app', appComponent);

  angular
    .element(document)
    .ready(() => {
      let body = document.getElementsByTagName('body')[0];
      angular.bootstrap(body, [appModule.name]);
    });
