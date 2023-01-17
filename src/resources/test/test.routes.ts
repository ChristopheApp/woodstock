import { Router } from 'express';
import { TestService } from './test.service';

const router = Router();
const service = new TestService();



router.route('/').get(service.testRequest);

router.route('/add').get((req, res) => {
    res.send('test/add');
  });

export const TestRoutes = router;