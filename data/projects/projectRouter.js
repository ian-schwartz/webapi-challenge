const projectsdb = require('../../data/helpers/projectModel');
const router = require('express').Router();

router.get('/', (req, res) => {
    projectsdb.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => res.status(500).json({ error: "The project's information could not be retrieved." }));
})

router.get('/:id', validateProjectsId, (req,res) => {
    projectsdb.get(req.params.id)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(() => res.status(500).json({ error: "The project's information could not be retrieved." }));
})

router.get('/:id/actions', validateProjectsId, (req, res) => {
    projectsdb.getProjectActions(req.params.id)
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

router.delete('/:id', validateProjectsId, (req, res) => {
    projectsdb.remove(req.params.id)
      .then(project => {
        res.status(200).json(project)
      })
      .catch(() => res.status(500).json({ error: "There was an error deleting the project."}));
})

router.put('/:id', validateProjectsId, (req, res) => {
    projectsdb.update(req.params.id, req.body)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(() => res.status(500).json({ error: "There was an error updating the project."}));
})

function validateProjectsId(req, res, next) {
    projectsdb.get(req.params.id)
      .then(project => {
          if (project) {
              next();
          } else {
              res.status(400).json({ error: "ID not found"})
          }
      })
      .catch(() => res.status(500).json({ error: "There was an error"}));
}

module.exports = router;
