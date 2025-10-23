import React from 'react'
import { getDataByID } from '@/lib/getDataById';
import NewUnit from '../../new/page';

export default async function Update({params:{id}}) {
    const data = await getDataByID(`units/${id}`)
    console.log(data);
  return (
    <NewUnit initialData={data} isUpdate={true}/>
  )
}
