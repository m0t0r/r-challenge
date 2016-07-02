import template from './r-list-item.html';
import './r-list-item.css';

class rListItemCtrl { }

let rListItemDirective = () => {
  return {
    scope: {},
    transclude: {
      previewSlot: '?rListItemPreview',
      fullSlot: '?rListItemFull'
    },
    controller: rListItemCtrl,
    template
  }
};

export default rListItemDirective;
