import db from "@/lib/db";
import { NextResponse } from "next/server";
import { ObjectId } from "bson"; // hoặc từ mongodb: import { ObjectId } from "mongodb";

export async function POST(request) {
  try {
    const itemData = await request.json();

    const item = await db.item.create({
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

    return NextResponse.json(item);
  } catch (error) {
    console.error("❌ Lỗi khi tạo Item:", error);
    return NextResponse.json(
      { message: "Không thể tạo Item", error: error.message },
      { status: 500 }
    );
  }
}



export async function GET(request){
  try{
    const items = await db.item.findMany({
      orderBy:{
        createdAt: "desc" //latest items
      }
    })
    return NextResponse.json(items);
  }catch (error) {
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