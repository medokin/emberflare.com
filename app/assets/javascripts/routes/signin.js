EmberFlare.SigninRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.get("session.isAuthenticated")) {
      this.transitionTo("entries");
    }
  },

  deactivate: function() {
    this.controller.set("signinFailed", false);
  },

  actions: {
    sessionAuthenticationFailed: function() {
      this.controller.set("signinFailed", true);
    }
  }
});
