import app from "@/app";
import bookingService from "@/services/booking-service";
import bookingRepository from "@/repositories/booking-repository";
import { getBookingTest01 } from "../factories/booking-factory";

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



