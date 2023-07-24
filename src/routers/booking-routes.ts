import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import bookingController from "@/controllers/booking-controller";

const bookingRouter = Router()

bookingRouter.all('/*', authenticateToken).get('',bookingController.checkBook ).post('',bookingController.postBook ).put('/:id',bookingController.bookUpdate);

export { bookingRouter };