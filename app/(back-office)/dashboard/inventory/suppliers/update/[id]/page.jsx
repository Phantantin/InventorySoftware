import React from 'react'
import { getDataByID } from '@/lib/getDataById';
import NewSupplier from '../../new/page';

export default async function Update({params:{id}}) {
    const data = await getDataByID(`suppliers/${id}`)
    console.log(data);
  return (
    <NewSupplier initialData={data} isUpdate={true}/>
  )
}
