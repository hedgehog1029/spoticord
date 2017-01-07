# Spoticord
A small nodejs script that sets your current game on Discord to what you're listening to on Spotify.

## Usage

```
git clone https://github.com/hedgehog1029/spoticord.git
cd spoticord
npm install
```

You then need to create a tokens.json file with the following contents:

```json
{
	"discord": "your discord token here",
	"spotify": "your spotify token here"
}
```

You can get your discord token from `localStorage.token` in the discord client / website, and you can get your Spotify token from https://open.spotify.com/token assuming you're logged in.

After that just run `node index.js` and become like that old Yahoo! messenger plugin
