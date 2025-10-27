// "use client"

// import { Pencil, Trash2 } from "lucide-react";
// import { useTranslations } from "next-intl";
// import Link from "next/link";

// export default function DataTable({ data, columns }) {
//    const t = useTranslations();
//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             {columns.map((columnName, i) => (
//               <th key={i} scope="col" className="px-6 py-3">
//                 {columnName}
//               </th>
//             ))}

//             {/* Cột cho hành động */}
//             <th scope="col" className="px-6 py-3">{t("Action")}</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item, rowIndex) => (
//             <tr
//               key={rowIndex}
//               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//             >
//               {columns.map((columnName, i) => (
//                 <td key={i} className="px-6 py-4">
//                   {item[columnName]}
//                 </td>
//               ))}
//               <td className="px-6 py-4 text-right flex items-center space-x-4">
//                 <Link
//                   href="#"
//                   className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1"
//                 >
//                   <Pencil className="w-4- h-4"/>
//                   <span>{t("Edit")}</span>
//                 </Link>
//                 <button className="font-medium text-red-600 dark:text-red-500 flex items-center space-x-1">
//                   <Trash2 className="w-4- h-4"/>
//                    <span>{t("Delete")}</span>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// "use client";

// import { Pencil, Trash2 } from "lucide-react";
// import { useTranslations } from "next-intl";
// import Link from "next/link";

// export default function DataTable({ data = [], columns = [], resourceTitle }) {
//   const t = useTranslations();

//   // Hàm lấy tên cột (hỗ trợ cả string và object)
//   const getColumnLabel = (col) => (typeof col === "string" ? col : col.label);
//   const getColumnKey = (col) => (typeof col === "string" ? col : col.key);

//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             {columns.map((col, i) => (
//               <th key={i} scope="col" className="px-6 py-3">
//                 {getColumnLabel(col)}
//               </th>
//             ))}
//             <th scope="col" className="px-6 py-3">
//               {t("Action")}
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.length > 0 ? (
//             data.map((item, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//               >
//                 {/* {columns.map((col, i) => (
//                   <td key={i} className="px-6 py-4">
//                     {item[getColumnKey(col)] ?? "-"}
//                   </td>
//                 ))} */}

//                 {columns.map((col, i) => {
//                   const key = getColumnKey(col);

//                   return (
//                     <td key={i} className="px-6 py-4">
//                       {key === "imageUrl" ? (
//                         item[key] ? (
//                           <img
//                             src={item[key]}
//                             alt={`Image for ${resourceTitle || "item"}`}
//                             className="w-10 h-10 object-cover rounded-full border"
//                           />
//                         ) : (
//                           <span className="text-gray-400 italic">No image</span>
//                         )
//                       ) : key === "createdAt" || key === "updatedAt" ? (
//                         item[key] ? (
//                           new Date(item[key]).toLocaleDateString()
//                         ) : (
//                           "-"
//                         )
//                       ) : (
//                         item[key] ?? "-"
//                       )}
//                     </td>
//                   );
//                 })}

//                 <td className="px-6 py-4 text-right flex items-center space-x-4">
//                   <Link
//                     href={`/dashboard/inventory/${resourceTitle}/update/${item.id}`}
//                     className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1"
//                   >
//                     <Pencil className="w-4 h-4" />
//                     <span>{t("Edit")}</span>
//                   </Link>

//                   <button className="font-medium text-red-600 dark:text-red-500 flex items-center space-x-1">
//                     <Trash2 className="w-4 h-4" />
//                     <span>{t("Delete")}</span>
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={columns.length + 1}
//                 className="px-6 py-4 text-center text-gray-500"
//               >
//                 {t("No data available")}
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// "use client";

// import { Pencil, Trash2 } from "lucide-react";
// import { useTranslations } from "next-intl";
// import Link from "next/link";
// import DeleteBtn from "./DeleteBtn";

// export default function DataTable({ data = [], columns = [], resourceTitle }) {
//   const t = useTranslations();

//   // Lấy nhãn và key của cột (hỗ trợ object và string)
//   const getColumnLabel = (col) => (typeof col === "string" ? col : col.label);
//   const getColumnKey = (col) => (typeof col === "string" ? col : col.key);

//   // Hàm lấy giá trị lồng nhau (ví dụ "category.title")
//   const getNestedValue = (obj, path) => {
//     return path.split(".").reduce((acc, key) => acc?.[key], obj);
//   };

//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         {/* === Header === */}
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             {columns.map((col, i) => (
//               <th key={i} scope="col" className="px-6 py-3">
//                 {getColumnLabel(col)}
//               </th>
//             ))}
//             <th scope="col" className="px-6 py-3">
//               {t("Action")}
//             </th>
//           </tr>
//         </thead>

//         {/* === Body === */}
//         <tbody>
//           {data.length > 0 ? (
//             data.map((item, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//               >
//                 {columns.map((col, i) => {
//                   const key = getColumnKey(col);
//                   const value = key.includes(".")
//                     ? getNestedValue(item, key)
//                     : item[key];

//                   return (
//                     <td key={i} className="px-6 py-4">
//                       {key === "imageUrl" ? (
//                         value ? (
//                           <img
//                             src={value}
//                             alt={`Image for ${resourceTitle || "item"}`}
//                             className="w-10 h-10 object-cover rounded-full border"
//                           />
//                         ) : (
//                           <span className="text-gray-400 italic">
//                             No image
//                           </span>
//                         )
//                       ) : key === "createdAt" || key === "updatedAt" ? (
//                         value ? (
//                           new Date(value).toLocaleDateString()
//                         ) : (
//                           "-"
//                         )
//                       ) : (
//                         value ?? "-"
//                       )}
//                     </td>
//                   );
//                 })}

//                 {/* === Action Buttons === */}
//                 <td className="px-6 py-4 text-right flex items-center space-x-4">
//                   <Link
//                     href={`/dashboard/inventory/${resourceTitle}/update/${item.id}`}
//                     className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1"
//                   >
//                     <Pencil className="w-4 h-4" />
//                     <span>{t("Edit")}</span>
//                   </Link>

//                   <DeleteBtn id={item.id} endpoint={resourceTitle}/>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={columns.length + 1}
//                 className="px-6 py-4 text-center text-gray-500"
//               >
//                 {t("No data available")}
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";
import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteBtn from "./DeleteBtn";

export default function DataTable({ data = [], columns = [], resourceTitle }) {
  const t = useTranslations();
  const [items, setItems] = useState(data);

  // ✅ Đồng bộ lại khi prop `data` thay đổi
  useEffect(() => {
    setItems(data);
  }, [data]);

  const getColumnLabel = (col) => (typeof col === "string" ? col : col.label);
  const getColumnKey = (col) => (typeof col === "string" ? col : col.key);

  const getNestedValue = (obj, path) =>
    path.split(".").reduce((acc, key) => acc?.[key], obj);

  // ✅ Callback khi xoá thành công
  const handleDeleteSuccess = (deletedId) => {
    setItems((prev) => prev.filter((item) => item.id !== deletedId));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((col, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {getColumnLabel(col)}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              {t("Action")}
            </th>
          </tr>
        </thead>

        <tbody>
          {items && items.length > 0 ? (
            items.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {columns.map((col, i) => {
                  const key = getColumnKey(col);
                  const value = key.includes(".")
                    ? getNestedValue(item, key)
                    : item[key];
                  return (
                    <td key={i} className="px-6 py-4">
                      {key === "imageUrl" ? (
                        value ? (
                          <img
                            src={value}
                            alt={`Image for ${resourceTitle || "item"}`}
                            className="w-10 h-10 object-cover rounded-full border"
                          />
                        ) : (
                          <span className="text-gray-400 italic">No image</span>
                        )
                      ) : key === "createdAt" || key === "updatedAt" ? (
                        value ? (
                          new Date(value).toLocaleDateString()
                        ) : (
                          "-"
                        )
                      ) : (
                        value ?? "-"
                      )}
                    </td>
                  );
                })}

                {/* Action buttons */}
                <td className="px-6 py-4 text-right flex items-center space-x-4">
                  {resourceTitle.includes("adjustments") ? (
                    ""
                  ) : (
                    <Link
                      href={`/dashboard/inventory/${resourceTitle}/update/${item.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1"
                    >
                      <Pencil className="w-4 h-4" />
                      <span>{t("Edit")}</span>
                    </Link>
                  )}

                  <DeleteBtn
                    id={item.id}
                    endpoint={resourceTitle}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-6 py-4 text-center text-gray-500"
              >
                {t("No data available")}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
