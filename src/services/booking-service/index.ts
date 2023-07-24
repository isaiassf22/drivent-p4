import bookingRepository from "@/repositories/booking-repository";
import { notFoundError } from "@/errors";
import { error } from "console";

async function checkBook(id: number) {
    const booking = await bookingRepository.checkUserBook(id);
  if (!booking) throw notFoundError();

    return booking
}   

async function postBook(id: number,roomId:number) {
    const post=bookingRepository.postBook( roomId, id );
    return post
}


async function bookUpdate(id:number,roomId:number) {
    
    const booking = await bookingRepository.checkUserBook(id)


    if (!booking || booking.userId !== id) throw new Error('user was not found!');

    const upId = booking.id

    const update = bookingRepository.updateBooking(upId,roomId,id)
    return update
}

export default{checkBook,postBook,bookUpdate}