import db from "@/lib/db";
import { NextResponse } from "next/server";
import { ObjectId } from "bson";

export async function GET(request, { params: { id } }) {
  try {
    const item = await db.item.findUnique({
      where: {
        id,
      },
      include: {
        warehouse: true,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch the items",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  const itemData = await request.json();
  try {
    const item = await db.item.update({
      where: {
        id,
      },
      data: {
          title: itemData.title,
          categoryId: new ObjectId(itemData.categoryId),
          sku: itemData.sku,
          barcode: itemData.barcode,
          quantity: parseInt(itemData.quantity),
          unitId: new ObjectId(itemData.unitId),
          brandId: new ObjectId(itemData.brandId),
          supplierId: new ObjectId(itemData.supplierId),
          buyingPrice: parseFloat(itemData.buyingPrice),
          sellingPrice: parseFloat(itemData.sellingPrice),
          reOrderPoint: parseInt(itemData.reOrderPoint),
          warehouseId: new ObjectId(itemData.warehouseId),
          imageUrl: itemData.imageUrl,
          weight: parseFloat(itemData.weight),
          dimensions: itemData.dimensions,
          taxRate: parseFloat(itemData.taxRate),
          description: itemData.description,
          notes: itemData.notes,
      },
    });
    console.log(item);

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to Update the item",
      },
      {
        status: 500,
      }
    );
  }
}
