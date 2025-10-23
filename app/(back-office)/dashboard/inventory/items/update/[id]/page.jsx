import React from 'react'
import { getDataByID } from '@/lib/getDataById';
import NewItem from '../../new/page';


// export default async function Update({params:{id}}) {
//     const data = await getDataByID(`items/${id}`)
//     console.log(data);
//   return (
//     <NewItem initialData={data} isUpdate={true}/>
//   )
// }


export default async function Update({ params }) {
  const { id } = await params;
  const data = await getDataByID(`items/${id}`);
  if (!data) return <div>Item not found</div>;

  const normalizedData = {
    ...data,
    categoryId: data.categoryId ?? data?.category?.id ?? data?.category?._id ?? "",
    unitId: data.unitId ?? data?.unit?.id ?? data?.unit?._id ?? "",
    brandId: data.brandId ?? data?.brand?.id ?? data?.brand?._id ?? "",
    supplierId: data.supplierId ?? data?.supplier?.id ?? data?.supplier?._id ?? "",
    warehouseId: data.warehouseId ?? data?.warehouse?.id ?? data?.warehouse?._id ?? "",
  };

  return <NewItem initialData={normalizedData} isUpdate={true} />;
}
