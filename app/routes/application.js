import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return ['Home', 'About', 'Price', 'Download'];
  }
}
