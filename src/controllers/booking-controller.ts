import bookingService from "@/services/booking-service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";


async function checkBook(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id)
    try {
        const check = await bookingService.checkBook(id)
        return res.sendStatus(httpStatus.OK)
    } catch (err) {
        next(err)
    }
}

async function postBook(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id)
    const  roomId  = Number(req.body)
    try {
        const postNewBooking = await bookingService.postBook(id,roomId)
        return res.sendStatus(httpStatus.OK)
    } catch (err) {

        next(err)
    }
}

async function bookUpdate(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id)
    const roomId =parseInt(req.body)
    try {
        await bookingService.bookUpdate(id,roomId)
        res.sendStatus(httpStatus.OK)
    } catch (err) {
        next(err)
    }
}

export default { checkBook, postBook, bookUpdate }