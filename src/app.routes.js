const AppRoutes = ($stateProvider, $urlRouterProvider, $locationProvider) => {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/news');

  $stateProvider
    .state('root', {
      url: '/',
      template: '<app></app>'
    })
    .state('root.news', {
      url: 'news',
      template: '<r-news-page></r-news-page>',
      reloadOnSearch: false
    })
    .state('root.newItem', {
      url: 'news/:id',
      template: '</r-news-page></r-news-page>',
      reloadOnSearch: false
    });
};

export default AppRoutes;