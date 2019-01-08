module.exports = function(Entrant) {

  // Entrant.disableRemoteMethodByName("create", true);
  Entrant.disableRemoteMethodByName("upsert", true);
  Entrant.disableRemoteMethodByName("updateAll", true);
  //Entrant.disableRemoteMethodByName("updateAttributes", false);

  // Entrant.disableRemoteMethodByName("find", true);
  // Entrant.disableRemoteMethodByName("findById", true);
  Entrant.disableRemoteMethodByName("findOne", true);

  Entrant.disableRemoteMethodByName("deleteById", true);

  Entrant.disableRemoteMethodByName("confirm", true);
  Entrant.disableRemoteMethodByName("count", true);
  Entrant.disableRemoteMethodByName("exists", true);
  // Entrant.disableRemoteMethodByName("resetPassword", true);

  Entrant.disableRemoteMethodByName('__count__accessTokens', false);
  Entrant.disableRemoteMethodByName('__create__accessTokens', false);
  Entrant.disableRemoteMethodByName('__delete__accessTokens', false);
  Entrant.disableRemoteMethodByName('__destroyById__accessTokens', false);
  Entrant.disableRemoteMethodByName('__findById__accessTokens', false);
  Entrant.disableRemoteMethodByName('__get__accessTokens', false);
  Entrant.disableRemoteMethodByName('__updateById__accessTokens', false);

};
