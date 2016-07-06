import template from './r-list.html';
import './r-list.css';

class rListCtrl { 

  constructor() {
    this.collapsed = true;
  }

  selectItem(selectedItem, itemData) {
    this.collapsed = !this.collapsed;
    this.rListItemFullElm = selectedItem.find('r-list-item-full')[0];
    var newHeight = this.collapsed ? 0 : this._getElementAutoHeight();

    this.rListItemFullElm.style.height = newHeight + 'px';

    this.collapsed ? this.onSelectedItem({item: null}) : this.onSelectedItem({item: itemData});
  }

  _getElementAutoHeight() {
    var currentHeight = this._getElementCurrentHeight();
    this.rListItemFullElm.style.height = 'auto';
    var autoHeight = this._getElementCurrentHeight();

    this.rListItemFullElm.style.height = currentHeight;
    this._getElementCurrentHeight(); // Force the browser to recalc height after moving it back to normal
  
    return autoHeight;
  }

  _getElementCurrentHeight() { return this.rListItemFullElm.offsetHeight; }
}

let rListDirective = () => {
  return {
    scope: {
      onSelectedItem: '&'
    },
    bindToController: true,
    controllerAs: "$ctrl",
    transclude: true,
    controller: rListCtrl,
    template
  }
};

export default rListDirective;
