import Component from '@glimmer/component';

export default class ButtonComponent extends Component {
  checkThemeClass(theme) {
    return theme === 'dark' ? 'button--dark' : 'button';
  }
  checkImageClass(imgOuter) {
    return imgOuter ? 'button__img--outer' : 'button__img';
  }
}
