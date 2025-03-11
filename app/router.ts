import EmberRouter from '@ember/routing/router';
import config from 'ember-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('entry-level-exercises', function () {
    this.route('ex-01', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-02', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-03', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-04', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-05', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-06', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-07', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-08', function () {
      this.route('instructions');
      this.route('solution');
    });
    this.route('ex-09', function () {
      this.route('instructions');
      this.route('solution');
    });
  });
});
