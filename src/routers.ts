import { Router } from 'express';
// import userRouter from './apps/user/user-router';
// import { postRouter } from './apps/post/post-router';
import { spatialRouter } from './apps/spatial-data/spatial-rourter';
const router = Router();

// router.use('/user', userRouter);
router.use('/location', spatialRouter);

export default router;
