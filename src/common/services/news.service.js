class NewsService {

  constructor($http) {
    this.$http = $http;
  }

  getNews() {
    return this.$http.get('src/common/services/news_mock.json');
  }

}

export default NewsService;
