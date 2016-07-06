class NewsService {

  constructor($http, $timeout) {
    this.$http = $http;
    this.$timeout = $timeout;
  }

  getNews() {
    // simulate slight network delay
    return this.$timeout(() => {
      // replace path to mock data with a real API endpoint
      return this.$http.get('src/common/services/news_mock.json');
    }, 1000);
  }

}

export default NewsService;
