# PropPulse Backend

## Setup

1. Clone the repo or upload the zip to Render.
2. Add the following environment variables:
   - `MONGODB_URI`
   - `ODDS_API_KEY`
3. Set build command: `npm install`
4. Set start command: `node index.js`
5. Deploy and access the API at `/api/props`

MongoDB will store prop data and the server will return dummy values unless connected to an API.
