import Component from '@glimmer/component';

export default class ButtonComponent extends Component {
  checkButtonClass(theme, imgOuter) {
    const checkTheme = theme === 'dark' ? 'button button--dark' : 'button';

    const checkImgIsOuter = imgOuter ? 'button--outer' : '';

    return `${checkImgIsOuter} ${checkTheme}`;
  }

  checkImageClass(imgOuter) {
    return imgOuter ? 'button__img button__img--outer' : 'button__img';
  }
}
