import { Router } from 'express';

const router = Router();




router.route('/').get((req, res) => {
   res.send('test');
});

router.route('/add').get((req, res) => {
    res.send('test/add');
  });

export const TestRoutes = router;