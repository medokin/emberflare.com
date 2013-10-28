EmberFlare.ApplicationController = Ember.Controller.extend({
  // used to show, or not show, the log out button
  isLoggedIn: false,

  userName: "",

  // when a user enters the app unauthenticated, the transition
  // to where they are going is saved off so it can be retried
  // when they have logged in.
  savedTransition: null,

  login: function() {
    this.setProperties({ savedTransition: null, isLoggedIn: true, userName: this.get("userName") });
  },

  actions: {
    logout: function() {
      // delete localStorage.authToken;
      $.removeCookie('auth_token');

      this.set('isLoggedIn', false);
      this.transitionToRoute('login');
    }
  }
});