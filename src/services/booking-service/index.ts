import bookingRepository from "@/repositories/booking-repository";
import { notFoundError } from "@/errors";
import { error } from "console";
import httpStatus from "http-status";

async function checkBook(userId: number) {
    
    const booking = await bookingRepository.checkUserBook(userId);
  if (!booking) throw notFoundError();

    return booking
}   

async function postBook(userId: number,roomId:number) {

    if(!roomId) return httpStatus.BAD_REQUEST
    const post= await bookingRepository.postBook( userId, roomId );
    return post
}


async function bookUpdate(userId:number,roomId:number) {
    

    if(!roomId) return httpStatus.BAD_REQUEST

    const booking = await bookingRepository.checkUserBook(userId)


    if (!booking || booking.userId !== userId) throw new Error('user was not found!');

    const upId = booking.id

    const update = await bookingRepository.updateBooking(upId,roomId,userId)
    return update
}

export default{checkBook,postBook,bookUpdate}