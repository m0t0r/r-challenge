import template from './r-news-page.html';
import './r-news-page.css';

class rNewsPageCtrl {

  constructor(NewsService, $scope, $state, $location) {
    this.newsService = NewsService;
    this.$scope = $scope;
    this.$state = $state;
    this.$location = $location;
  }

  $onInit() {
    this.loaded = true;
  }

  loadNews() {
    this.newsService.getNews().then((response) => {
      this.news = response.data;
    })
  }

  setSelectedItem(item){
    this.selectedItem = item;
    this.$scope.$apply();

    if (item) {
      this.$state.go('root.newItem', {id: item.id}, {notify: false});
    } else {
      this.$state.go('root.news', {}, {notify: false});
    }
  }
}

let rNewsPageComponent = {
  controller: rNewsPageCtrl,
  template,
  bindings: {
    news: '<'
  }
};

export default rNewsPageComponent;
