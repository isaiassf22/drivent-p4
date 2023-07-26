import app from "@/app";
import bookingService from "@/services/booking-service";
import bookingRepository from "@/repositories/booking-repository";
import { getBookingTest01 } from "../factories/booking-factory";
import { notFoundError } from "@/errors";
import { boolean } from "joi";
import httpStatus, { BAD_REQUEST } from "http-status";

beforeEach(()=>{
  jest.clearAllMocks()
})




describe('checkBook', () => {
    it('book result of the given id', async () => {
      const userId = 1
      const booking = getBookingTest01()
  
      jest.spyOn(bookingRepository, 'checkUserBook').mockResolvedValue(booking)
  
      const result = await bookingService.checkBook(userId)
  
      expect(bookingRepository.checkUserBook).toHaveBeenCalledWith(userId)
      expect(result).toEqual(booking)
    });
    it(' throw notFoundError when the given userId is not found', async () => {
      const userId = 1
  
      jest.spyOn(bookingRepository, "checkUserBook").mockResolvedValue(undefined)
  
      expect(bookingService.checkBook(userId)).rejects.toEqual(notFoundError())
    });

})


describe('postBook',()=>{
  it('post result for given userId and roomId ',async()=>{
    const userId=1
    const roomId=1
    const booking= getBookingTest01()
    

    jest.spyOn(bookingRepository,'postBook').mockResolvedValue(booking)
    jest.spyOn(bookingRepository,'checkUserBook').mockResolvedValue(undefined)

    const result = await bookingService.postBook(userId,roomId)
    expect(bookingRepository.postBook).toHaveBeenCalledWith(userId, roomId)
    expect(result).toEqual(booking)

  })

  it('return bad request when the roomId is not given',async ()=>{
    const userId=1
    const roomId:null = null
    const result = await bookingService.postBook(userId,roomId)
    expect(result).toEqual(httpStatus.BAD_REQUEST)
  })

  it('return undefined when the post has already made by the user',async ()=>{
    const userId = 1
    const roomId= 1
    const booking= getBookingTest01()
      jest.spyOn(bookingRepository, "checkUserBook").mockResolvedValue(booking)
      
      const result = await bookingService.postBook(userId,roomId)
      expect(result).toEqual(undefined)

  })
})









