import * as spatialController from './spatial-controller';

// import { Post } from '@prisma/client';
const { Router } = require('express');
// const spatialController = require('../spatial-data/spatial-controller');
// const authController = require('../user/auth-controller');
// import { upload } from './spatial-controller';
const router = Router();

// router.get('/get-post/:id', authController.optional, postController.getPost);
router.route('/check-location').post(
  //   authController.authorize,
  spatialController.checkLocation
);
// router
//   .route('/upload-data')
//   .post(checkRequest, upload, spatialController.addData);

router
  .route('/add-city')
  .post(spatialController.checkRequest, spatialController.addCity);
export { router as spatialRouter };
