import angular from 'angular';

import rNewsPanelComponent from './r-news-panel/r-news-panel.component';

const newsModule = angular
  .module('rApp.news', [])
  .component('rNewsPanel', rNewsPanelComponent);

export default newsModule.name;
