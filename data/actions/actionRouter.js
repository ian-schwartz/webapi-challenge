const actionsdb = require('../../data/helpers/actionModel');
const router = require('express').Router();

router.get('/', (req, res) => {
    actionsdb.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(() => res.status(500).json({ error: "The action's information could not be retrieved." }));
})

module.exports = router;