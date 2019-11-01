const actionsdb = require('../../data/helpers/actionModel');
const router = require('express').Router();

router.get('/', (req, res) => {
    actionsdb.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(() => res.status(500).json({ error: "The action's information could not be retrieved." }));
})

router.get('/:id', (req,res) => {
    actionsdb.get(req.params.id)
      .then(action => {
          res.status(200).json(action);
      })
      .catch(() => res.status(500).json({ error: "The action's information could not be retrieved." }));
})

router.post('/', (req,res) => {
    actionsdb.insert(req.body)
      .then(action => {
          res.status(201).json(action);
      })
      .catch(() => res.status(500).json({ error: "There was an error adding the action."}));
})

router.delete('/:id', (req, res) => {
    actionsdb.remove(req.params.id)
      .then(action => {
          res.status(200).json(action);
      })
      .catch(() => res.status(500).json({ error: "There was an error deleting the action."}));
})

router.put('/:id', (req, res) => {
    actionsdb.update(req.params.id, req.body)
      .then(action => {
          res.status(200).json(action);
      })
      .catch(() => res.status(500).json({ error: "There was an error updating the action."}));
})

module.exports = router;