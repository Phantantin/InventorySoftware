import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const supplier = await db.supplier.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(supplier);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch the suppliers",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  const {
    title,
    phone,
    email,
    address,
    contactPerson,
    supplierCode,
    paymentTerms,
    taxID,
    notes,
  } = await request.json();
  try {
    const supplier = await db.supplier.update({
      where: {
        id,
      },
      data: {
        title,
        phone,
        email,
        address,
        contactPerson,
        supplierCode,
        paymentTerms,
        taxID,
        notes,
      },
    });
    console.log(supplier);

    return NextResponse.json(supplier);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to Update the supplier",
      },
      {
        status: 500,
      }
    );
  }
}
