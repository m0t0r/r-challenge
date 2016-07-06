import template from './r-list-item.html';
import './r-list-item.css';

function rListItemLinkFn(scope, elm, attrs, rListCtrl) {
  'use strict';

  elm.find('r-list-item-preview').on('click', () => {
    rListCtrl.selectItem(elm, scope.itemData);
  });
  
}

let rListItemDirective = () => {
  return {
    require: '^rList',
    scope: {
      itemData: '<'
    },
    transclude: {
      previewSlot: '?rListItemPreview',
      fullSlot: '?rListItemFull'
    },
    link: rListItemLinkFn,
    template
  }
};

export default rListItemDirective;
