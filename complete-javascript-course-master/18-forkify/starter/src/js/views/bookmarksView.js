import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet.  Find a good recipe to bookmark!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(bookmark => previewView.render(bookmark)).join('');
  }
}

export default new BookmarksView();
