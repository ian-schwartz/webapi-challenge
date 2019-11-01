const projectsdb = require('../../data/helpers/projectModel');
const router = require('express').Router();

router.get('/', (req, res) => {
    projectsdb.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => res.status(500).json({ error: "The project's information could not be retrieved." }));
})

router.get('/:id', (req,res) => {
    projectsdb.get(req.params.id)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(() => res.status(500).json({ error: "The project's information could not be retrieved." }));
})

router.post('/', (req,res) => {
    projectsdb.insert(req.body)
      .then(project => {
          res.status(201).json(project);
      })
      .catch(() => res.status(500).json({ error: "There was an error adding the project."}));
})

router.delete('/:id'), (req, res) => {
    projectsdb.remove(req.params.id)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(() => res.status(500).json({ error: "There was an error deleting the project."}));
}

router.put('/:id', (req, res) => {
    projectsdb.update(req.params.id, req.body)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(() => res.status(500).json({ error: "There was an error updating the project."}));
})

router.get('/:id/actions', (req, res) => {
    projectsdb.getProjectActions(req.params.id)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(() => res.status(500).json({ error: "The project's information could not be retrieved." }));
})

module.exports = router;
