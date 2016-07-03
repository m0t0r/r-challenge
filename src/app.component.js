import template from './app.component.html';

class AppCtrl {
  
  constructor(NewsService, $scope) {
    this.newsService = NewsService;
    this.$scope = $scope;
  }
  
  loadNews() {
    this.newsService.getNews().then((response) => {
      this.news = response.data;
      console.log('data', response.data);
    })
  }

  setSelectedItem(item){
    this.selectedItem = item;
    this.$scope.$apply();
  }
  
}

let appComponent = {
  controller: AppCtrl,
  template
};

export default appComponent;
