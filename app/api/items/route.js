import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      supplierId,
      buyingPrice,
      sellingPrice,
      reOrderPoint,
      warehouseId,
      imageUrl,
      weight,
      dimensions,
      taxRate,
      description,
      notes
    } = await request.json();

    const items = { 
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      supplierId,
      buyingPrice,
      sellingPrice,
      reOrderPoint,
      warehouseId,
      imageUrl,
      weight,
      dimensions,
      taxRate,
      description,
      notes
     };
    console.log(items);
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to create a item",
      },
      {
        status: 500,
      }
    );
  }
}
