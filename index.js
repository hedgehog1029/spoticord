// Generated by CoffeeScript 1.12.3
(function() {
  var Discordie, SpotifyClient, config, discord, log, spotify;

  Discordie = require("discordie");

  SpotifyClient = require("spotify-control");

  config = require("./tokens.json");

  discord = new Discordie({
    autoReconnect: true
  });

  spotify = new SpotifyClient({
    token: config.spotify
  });

  log = function() {
    return console.log("[spoticord] " + arguments[0]);
  };

  spotify.connect().then(function() {
    log("Connected to Spotify client.");
    return spotify.startListener("play", 0);
  }, function(err) {
    return console.error(err);
  });

  spotify.on("event", function(e) {
    var str;
    str = e.track.track_resource.name + " - " + e.track.artist_resource.name;
    log("Setting game to " + str);
    return discord.User.setGame({
      type: 2,
      name: str
    });
  });

  discord.Dispatcher.on("GATEWAY_READY", function(e) {
    return log("Connected to Discord. Username: " + discord.User.username);
  });

  discord.connect({
    token: config.discord
  });

}).call(this);
