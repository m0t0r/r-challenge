import template from './r-list.html';
import './r-list.css';

class rListCtrl { }

let rListDirective = () => {
  return {
    scope: {},
    transclude: true,
    controller: rListCtrl,
    template
  }
};

export default rListDirective;
