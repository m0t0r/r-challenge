import template from './app.component.html';

class AppCtrl {
  
  /*constructor(NewsService, $scope) {
    this.newsService = NewsService;
    this.$scope = $scope;
  }
  
  loadNews() {
    this.newsService.getNews().then((response) => {
      this.news = response.data;
    })
  }

  setSelectedItem(item){
    this.selectedItem = item;
    this.$scope.$apply();
  }*/

  constructor($state) {
    this.$state = $state;
  }

  $onInit() {
    // redirect to news page in demo mode
    this.$state.go('root.news');
  }
  
}

let appComponent = {
  controller: AppCtrl,
  template
};

export default appComponent;
