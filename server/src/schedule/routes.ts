import { Router } from 'express';
import * as ctrl from './controller.js';
const r = Router();

r.get("/", ctrl.list);
r.get("/:id", ctrl.getOne);
r.post("/", ctrl.create);
r.put("/:id", ctrl.update);
r.delete("/:id", ctrl.remove);

export default r;