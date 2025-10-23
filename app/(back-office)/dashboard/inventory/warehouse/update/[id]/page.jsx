import React from 'react'
import { getDataByID } from '@/lib/getDataById';
import NewWarehouse from '../../new/page';

export default async function Update({params:{id}}) {
    const data = await getDataByID(`warehouse/${id}`)
    console.log(data);
  return (
    <NewWarehouse initialData={data} isUpdate={true}/>
  )
}
