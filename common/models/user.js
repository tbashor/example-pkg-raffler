module.exports = function(User) {

  User.disableRemoteMethodByName("create", true);
  User.disableRemoteMethodByName("upsert", true);
  User.disableRemoteMethodByName("updateAll", true);
  User.disableRemoteMethodByName("updateAttributes", false);

  User.disableRemoteMethodByName("find", true);
  User.disableRemoteMethodByName("findById", true);
  User.disableRemoteMethodByName("findOne", true);

  User.disableRemoteMethodByName("deleteById", true);

  User.disableRemoteMethodByName("confirm", true);
  User.disableRemoteMethodByName("count", true);
  User.disableRemoteMethodByName("exists", true);
  User.disableRemoteMethodByName("resetPassword", true);

  User.disableRemoteMethodByName('__count__accessTokens', false);
  User.disableRemoteMethodByName('__create__accessTokens', false);
  User.disableRemoteMethodByName('__delete__accessTokens', false);
  User.disableRemoteMethodByName('__destroyById__accessTokens', false);
  User.disableRemoteMethodByName('__findById__accessTokens', false);
  User.disableRemoteMethodByName('__get__accessTokens', false);
  User.disableRemoteMethodByName('__updateById__accessTokens', false);

};
