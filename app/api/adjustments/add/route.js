import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { addStockQty, receivingWarehouseId, notes, referenceNumber, itemId } = await request.json();
    

    const adjustment = await db.addStockAdjustment.create({
      data: {
        itemId,
        referenceNumber,
        addStockQty: parseInt(addStockQty),
        receivingWarehouseId,
        notes,
      },
    });
    console.log(adjustment);
    return NextResponse.json(adjustment)
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to create a adjustment",
      },
      {
        status: 500,
      }
    );
  }
}



export async function GET(request){
  try{
    const adjustments = await db.addStockAdjustment.findMany({
      orderBy:{
        createdAt: "desc" //latest categories
      }
    })
    return NextResponse.json(adjustments);
  }catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch the adjustments",
      },
      {
        status: 500,
      }
    );
  } 
}