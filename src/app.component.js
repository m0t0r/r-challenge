import template from './app.component.html';

class AppCtrl {

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
