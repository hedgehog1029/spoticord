Discordie = require "discordie"
SpotifyClient = require "spotify-control"

config = require "./tokens.json"
discord = new Discordie autoReconnect: true
spotify = new SpotifyClient token: config.spotify

log = ->
	console.log "[spoticord] #{arguments[0]}"

spotify.connect().then ->
	log "Connected to Spotify client."
	spotify.startListener "play", 0
, (err) ->
	console.error err

spotify.on "event", (e) ->
	str = "#{e.track.track_resource.name} - #{e.track.artist_resource.name}"

	log "Setting game to #{str}"
	discord.User.setGame str

discord.Dispatcher.on "GATEWAY_READY", (e) ->
	log "Connected to Discord. Username: #{discord.User.username}"

discord.connect token: config.discord
