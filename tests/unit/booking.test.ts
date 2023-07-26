import app from "@/app";
import bookingService from "@/services/booking-service";
import bookingRepository from "@/repositories/booking-repository";
import { getBookingTest01 } from "../factories/booking-factory";


beforeEach(()=>{
  jest.clearAllMocks()
})




describe('checkBook', () => {
    it('book result of the given id', async () => {
      const userId = 1;
      const booking = getBookingTest01();
  
      jest.spyOn(bookingRepository, 'checkUserBook').mockResolvedValue(booking);
  
      const result = await bookingService.checkBook(userId);
  
      expect(bookingRepository.checkUserBook).toHaveBeenCalledWith(userId);
      expect(result).toEqual(booking);
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
})









/*describe('postBooking', () => {
    it('should create a booking for the given user and room', async () => {
      const userId = 1;
      const roomId = 1;
      const booking = getBookingTest01();
      jest.spyOn(bookingService, 'checkValidBooking').mockResolvedValue(undefined);
      jest.spyOn(roomRepository, 'findById').mockResolvedValue(findRoomByIdReturn());
      jest.spyOn(bookingRepository, 'findByRoomId').mockResolvedValue(findBookingByRoomIdReturn());
  
      jest.spyOn(bookingRepository, 'create').mockResolvedValue(booking);
  
      const result = await bookingService.bookingRoomById(userId, roomId);
  
      expect(bookingRepository.create).toHaveBeenCalledWith({ userId, roomId });
      expect(result).toEqual(booking);
    })
})*/