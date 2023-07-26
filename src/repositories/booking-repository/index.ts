import { prisma } from "@/config";

 async function checkUserBook(userId: number) {
    return prisma.booking.findFirst({
        where: {
          userId,
        },
        include: {
          Room: true,
        },
      });

    



 }
 async function postBook(roomId:number,userId:number) {


        return prisma.booking.create({
            data: {
              roomId,
              userId,
            },
          });
    }

    async function updateBooking( id:number, roomId:number, userId:number ) {
        return prisma.booking.upsert({
          where: {
            id,
          },
          create: {
            roomId,
            userId,
          },
          update: {
            roomId,
          },
        });
      }


 export default{checkUserBook,postBook,updateBooking}