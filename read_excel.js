const xlsx = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, 'Matriz_Inventario_Ropa_SegundaMano.xlsx');

try {
  const workbook = xlsx.readFile(filePath);
  const result = {};

  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    result[sheetName] = data.slice(0, 5);
  });

  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error("Error reading excel file:", error);
}
