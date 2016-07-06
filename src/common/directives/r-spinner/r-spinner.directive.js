import template from './r-spinner.html';
import './r-spinner.css';

class rSpinnerCtrl { }

let rSpinnerDirective = () => {
  return {
    controller: rSpinnerCtrl,
    bindToController: true,
    controllerAs: "$ctrl",
    scope: {
      loading: '='
    },
    template
  }
};

export default rSpinnerDirective;
