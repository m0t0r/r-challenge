import template from './r-news-panel.html';
import './r-news-panel.css';

class rNewsPanelCtrl { }

let rNewsPanelComponent = {
  transclude: true,
  controller: rNewsPanelCtrl,
  template,
  bindings: {
    title: '<',
    onLoadData: '&'
  }
};

export default rNewsPanelComponent;
