import React from 'react'
import { getDataByID } from '@/lib/getDataById';
import NewSupplier from '../../new/page';
import NewCategory from '../../new/page';

export default async function Update({params:{id}}) {
    const data = await getDataByID(`categories/${id}`)
    console.log(data);
  return (
    <NewCategory initialData={data} isUpdate={true}/>
  )
}
