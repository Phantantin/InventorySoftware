export default function DataTable({ data, columns }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((columnName, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {columnName}
              </th>
            ))}
            {/* Cột cho hành động */}
            <th scope="col" className="px-6 py-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {columns.map((columnName, i) => (
                <td key={i} className="px-6 py-4">
                  {item[columnName]} 
                </td>
              ))}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
