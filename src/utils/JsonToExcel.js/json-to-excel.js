import XLSX from 'xlsx';

export function jsonToExcel(rowsHeader, rowsData, fileName) {
  
  let xlsHeader = rowsHeader.map(
    row => row.label
  );

  let xlsHeaderId = rowsHeader.map(
    row => row.id
  );

  let xlsRows = rowsData;
  
  console.log(xlsRows)

  exportToExcel(xlsHeader, xlsHeaderId, xlsRows, fileName)
}

function exportToExcel(xlsHeader, xlsHeaderName, xlsRows, fileName) {
  let createXLSLFormatObj = [];

  createXLSLFormatObj.push(xlsHeader);

  xlsRows.forEach(
    (value) => {
      let innerRowData = xlsHeaderName.map(
        (item) => value[item]
      )
      createXLSLFormatObj.push(innerRowData);
    }
  );

  /* File Name */
  let filename = fileName + ".xlsx";

  /* Sheet Name */
  let ws_name = fileName;

  if (typeof console !== 'undefined') console.log(new Date());
  let wb = XLSX.utils.book_new(),
    ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

  /* Add worksheet to workbook */
  XLSX.utils.book_append_sheet(wb, ws, ws_name);

  /* Write workbook and Download */
  if (typeof console !== 'undefined') console.log(new Date());
  XLSX.writeFile(wb, filename);
  if (typeof console !== 'undefined') console.log(new Date());

}