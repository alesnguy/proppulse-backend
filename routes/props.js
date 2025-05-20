const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            player: "LeBron James",
            line: 28.5,
            stat: "points",
            projected: 30.2,
            confidence: 0.76
        },
        {
            player: "Stephen Curry",
            line: 4.5,
            stat: "3pt made",
            projected: 4.9,
            confidence: 0.63
        }
    ]);
});

module.exports = router;
