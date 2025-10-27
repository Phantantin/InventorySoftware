import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      addStockQty,
      receivingWarehouseId,
      notes,
      referenceNumber,
      itemId,
      supplierId
    } = await request.json();


    // get the Item
    const itemToUpdate = await db.item.findUnique({
      where: {
        id: itemId,
      },
    });

    console.log(itemToUpdate);
    
    //Current Item Quantity
    const currentItemQty = itemToUpdate.quantity;
    const newQty = parseInt(currentItemQty) + parseInt(addStockQty)
    

    // Modify the Item the new Qty
    const updateItem = await db.item.update({
      where: {
        id: itemId,
      },
      data: {
        quantity: newQty,
      },
    });

    //get the warehouse
    const warehouse = await db.warehouse.findUnique({
      where: {
        // id: itemData.warehouseId
        id: receivingWarehouseId
      }
    })

    // current Stock of the warehouse
    const currentWarehouseStock = warehouse.stockQty;
    const newStockQty = parseInt(currentWarehouseStock) + parseInt(addStockQty)
    // update the stock om the warehouse
    const updateWarehouse = await db.warehouse.update({
        where: {
        id: receivingWarehouseId
        // id: new ObjectId(itemData.warehouseId)
      },
      data: {
        stockQty: newStockQty
      }
    })

    // console.log(updateItem);
    
    const adjustment = await db.addStockAdjustment.create({
      data: {
        itemId,
        referenceNumber,
        addStockQty: parseInt(addStockQty),
        receivingWarehouseId,
        notes,
        supplierId
      },
    });

    // Affect the warehouse
    console.log(adjustment);
    return NextResponse.json(adjustment);
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
    const adjustments = await db.addStockAdjustment.findMany({
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
    const deletedAdjustment = await db.addStockAdjustment.delete({
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
