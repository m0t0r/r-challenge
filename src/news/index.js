import angular from 'angular';

import rNewsPanelComponent from './r-news-panel/r-news-panel.component';
import rNewsPageComponent from './r-news-page/r-news-page.component';

const newsModule = angular
  .module('rApp.news', [])
  .component('rNewsPanel', rNewsPanelComponent)
  .component('rNewsPage', rNewsPageComponent);

export default newsModule.name;
