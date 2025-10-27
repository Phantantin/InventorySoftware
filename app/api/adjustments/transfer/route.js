import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      transferStockQty,
      itemId,
      givingWarehouseId,
      receivingWarehouseId,
      notes,
      referenceNumber,
    } = await request.json();

    // the giving warehouse
    const givingWarehouse = await db.warehouse.findUnique({
      where: {
        id: givingWarehouseId,
      },
    });

    // get current sock
    const currentGivingWarehouseStock = givingWarehouse.stockQty;
   
    if(parseInt(currentGivingWarehouseStock) > parseInt(transferStockQty)){
      const newStockForgivingWarehouse =
      parseInt(currentGivingWarehouseStock) - parseInt(transferStockQty);
    // update stock
    const updatedGivingWarehouse = await db.warehouse.update({
      where: {
        id: givingWarehouseId,
      },
      data: {
        stockQty: newStockForgivingWarehouse
      }
    })

    // get the receiving warehouse
    const receivingWarehouse = await db.warehouse.findUnique({
      where: {
        id: receivingWarehouseId,
      },
    });

    // get current sock
    const currentReceivingWarehouseStock = receivingWarehouse.stockQty;
    const newStockForReceivingWarehouse =
      parseInt(currentReceivingWarehouseStock) + parseInt(transferStockQty);
    // update stock
    const updatedReceivingWarehouse = await db.warehouse.update({
      where: {
        id: receivingWarehouseId,
      },
      data: {
        stockQty: newStockForReceivingWarehouse
      }
    })
    const adjustment = await db.transferStockAdjustment.create({
      data: {
        itemId,
        referenceNumber,
        transferStockQty: parseInt(transferStockQty),
        givingWarehouseId,
        receivingWarehouseId,
        notes,
      },
    });
    console.log(adjustment);
    return NextResponse.json(adjustment);
    }
    else{
       return NextResponse.json({
        data: null,
        message: "Giving Warehouse has No enough stock"
       }, {status: 409});
    }
   
   
    
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

export async function GET(request) {
  try {
    const adjustments = await db.transferStockAdjustment.findMany({
      orderBy: {
        createdAt: "desc", //latest categories
      },
    });
    return NextResponse.json(adjustments);
  } catch (error) {
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

export async function DELETE(request, { searchParams }) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deletedAdjustment = await db.transferStockAdjustment.delete({
      where: {
        id,
      },
    });
    console.log(deletedAdjustment);

    return NextResponse.json(deletedAdjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete the Adjustment",
      },
      {
        status: 500,
      }
    );
  }
}
