import jsPDF from 'jspdf'
import 'jspdf-autotable'

export const generatePDF = (data, title,columns ) => {
    const doc = new jsPDF()
    doc.text(title, 10, 10)

    const tableData = []
    tableData.push(columns)
    data.forEach(item => {
      tableData.push([item.codigo, item.nombre, item.haber - item.debe])
    })

    doc.autoTable({
      startY: 20,
      head: [tableData[0]],
      body: tableData.slice(1)
    })

    doc.save(`${title}.pdf`)
  }
  