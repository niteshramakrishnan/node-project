const express = require('express');
const router = express.Router();

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (request, response) => {
    const artwork = await speakerService.getAllArtwork();
    const topSpeakers = await speakerService.getList();
    response.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers, artwork });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
