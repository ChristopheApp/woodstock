import Router from 'express';
import { UsersService } from './users.service';

const router = Router();
const service = new UsersService();

router.route('/').get(service.getAllUsers).post(service.addUser);

export const UsersRoutes = router;