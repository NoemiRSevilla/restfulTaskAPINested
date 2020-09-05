const tasks = require ("../controllers/tasks");

module.exports = (app) => {

    app.get('/new', (req,res) => tasks.index(req,res));

    app.get('/api/task/:id', (req,res) => tasks.show(req,res));

    app.post('/api/create/task', (req,res) => tasks.create(req,res));

    app.put('/api/update/task/:id', (req,res) => tasks.update(req,res));

    app.delete('/api/destroy/task/:id', (req,res) => tasks.destroy(req,res));
}