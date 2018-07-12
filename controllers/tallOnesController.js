const express = require('express');
const router = express.Router();

// require our model
const TallOnes = require('../models/8000mPeaks.js');

// Index Route
router.get('/', (req, res) => {
	res.render('index.ejs', {
		tallOnes: TallOnes
	});
});

// Show Route
router.get('/:index', (req, res) => {
	res.render('show.ejs', {
		tallOnes: TallOnes[req.params.index],
		index: req.params.index,
	});
});

// Delete Route
router.delete('/:index', (req, res) => {
	TallOnes.splice(req.params.index, 1);
	res.redirect('/TallOnes');
});

// Edit Route
router.get('/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		tallOnes: TallOnes[req.params.index],
		index: req.params.index,
	});
});

// PUT Request
router.put('/:index', (req, res) => {
	TallOnes[req.params.index] = req.body;
	res.redirect('/TallOnes');
});

module.exports = router;