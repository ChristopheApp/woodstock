import Router from 'express';
import { WoodsServices } from './woods.service';

const router = Router();
const service = new WoodsServices();

router.route('/').get(service.getAllWoods).post(service.addWood);
router.route('/:name').delete(service.deleteWood)

export const WoodsRoutes = router;