import React from 'react'
import NewBrand from '../../new/page'
import { getDataByID } from '@/lib/getDataById';

export default async function Update({params:{id}}) {
    const data = await getDataByID(`brands/${id}`)
    console.log(data);
  return (
    <NewBrand initialData={data} isUpdate={true}/>
  )
}
