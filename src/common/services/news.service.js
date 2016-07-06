class NewsService {

  constructor($http) {
    this.$http = $http;
  }

  getNews() {
    // replace path to mock data with a real API endpoint
    return this.$http.get('src/common/services/news_mock.json');
  }

}

export default NewsService;
