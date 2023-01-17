import Router from 'express';
import { WoodsServices } from './woods.service';

const router = Router();
const service = new WoodsServices();

router.route('/').get(service.getAllWoods).post(service.addWood);

export const WoodsRoutes = router;