import angular from 'angular';
import directivesModule from './directives';

import NewsService from './services/news.service';

const commonModule = angular
  .module('rApp.common', [directivesModule])
  .service('NewsService', NewsService);

export default commonModule.name;
