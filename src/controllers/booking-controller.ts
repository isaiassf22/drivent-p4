import { AuthenticatedRequest } from "@/middlewares";
import bookingService from "@/services/booking-service";
import {  Response } from "express";
import httpStatus from "http-status";


async function checkBook(req: AuthenticatedRequest, res: Response) {

    try {
        const { userId } = req
        const check = await bookingService.checkBook(userId)
        return res.status(httpStatus.OK).send({
            id: check.id,
            Room: check.Room,
          });
    } catch (err) {
        throw new Error("something went wrong")
    }
}

async function postBook(req: AuthenticatedRequest, res: Response) {
    const {userId} = req
    const {roomId} = req.body
    try {
        const postNewBooking = await bookingService.postBook(userId, roomId)
        return res.sendStatus(httpStatus.OK)
    } catch (err) {
        throw new Error("something went wrong")


    }
}

async function bookUpdate(req: AuthenticatedRequest, res: Response) {
    const {userId} = req
    const {roomId} = req.body

    
    try {
        await bookingService.bookUpdate(userId, roomId)
        res.sendStatus(httpStatus.OK)
    } catch (err) {
        throw new Error("something went wrong")
    }
}

export default { checkBook, postBook, bookUpdate }