const taskController = require('../controllers').task;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'API start here here',
  }));

  app.post('/api/tasks', taskController.create);
};
