let express = require('express');
let chirpsStore = require('../../chirpsstore')
let router = express.Router();

router.get('/:id?', (req, res) => {
    console.log('hey');
    let id = req.params.id
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        chirpsStore.GetChirps().then((result) => {
            res.send(result);
        });
    }
});

router.post('/', (req, res) => {
    console.log('hey');
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    console.log('hey');
    let id = req.params.id
    chirpsStore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    console.log('hey');
    let id = req.params.id
    chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
});



module.exports = router;