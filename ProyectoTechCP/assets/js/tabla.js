async function Iniciar(filePath, tableId){
    const csvText = await CargarArchivoCSV(filePath);
    const table = CargarTabla(tableId);
    if (csvText != null && table != null){
    const {uniqueEntities, uniqueYears} = InsertarFilas(csvText, table);
    InsertarOpcionesSelect(uniqueEntities, 'entitySelect');
    InsertarOpcionesSelect(uniqueYears, 'yearSelect')

    // Agregar eventos change a los selects
    document.getElementById('entitySelect').addEventListener('change', () => { FiltrarTabla(csvText, table, 'entitySelect', 'yearSelect'); }); 
    document.getElementById('yearSelect').addEventListener('change', () => { FiltrarTabla(csvText, table, 'entitySelect', 'yearSelect'); });
    }else{
        console.log("Se generó un error");
    }
}

async function CargarArchivoCSV(filePath) {
    try {
        // Leer el archivo CSV
        const response = await fetch(filePath);
        if (!response.ok) throw new Error("No se pudo leer el archivo CSV");
        
        const csvText = await response.text();
        return csvText;
    } catch(error){
        console.error("Error al procesar el archivo CSV:", error.message);
        return null;
    }
}

function CargarTabla(tableId){
    try{
        const table = document.getElementById(tableId);
        if (!table) throw new Error("No se encontró la tabla en el DOM");
        return table;
    }catch(error){
        console.error("Error al identificar la tabla:", error.message);
        return null;
    }
    
}

function InsertarFilas(csvText, table){
    const rows = csvText.split("\n").filter(row => row.trim() !== ""); // Dividir por líneas
    const uniqueEntities = new Set();
    const uniqueYears = new Set();
    
        rows.forEach((row, index) => {
            const cells = row.split(","); // Dividir los datos por comas
            
            // Crear una nueva fila en la tabla
            const tableRow = table.insertRow();

            // Insertar cada celda en la fila
            if(index != 0){
            cells.forEach((cell, cellIndex) => {
                const tableCell = tableRow.insertCell();
                tableCell.textContent = cell.trim();

                if(cellIndex === 0) uniqueEntities.add(cell.trim());
                if(cellIndex === 2) uniqueYears.add(cell.trim());
            });}
        });

        return { uniqueEntities: Array.from(uniqueEntities), uniqueYears: Array.from(uniqueYears) };
}

function InsertarOpcionesSelect(optionsArray, selectId){
    const selectElement = document.getElementById(selectId);
    if (!selectElement) {
        console.error('No se encontró el elemento select con id: ${selectId}');
        return;
    }
    const array = ordenarFechas(optionsArray);
    array.forEach(optionValue => { const optionElement = document.createElement("option");
        optionElement.value = optionValue;
        optionElement.textContent = optionValue;
        selectElement.appendChild(optionElement); });
}

function FiltrarTabla(csvText, table, entitySelectId, yearSelectId) {
    const entitySelect = document.getElementById(entitySelectId);
    const yearSelect = document.getElementById(yearSelectId);
    if (!entitySelect || !yearSelect) {
        console.error('No se encontraron los elementos select');
        return;
    }
    const selectedEntity = entitySelect.value.trim();
    const selectedYear = yearSelect.value.trim(); // Limpiar la tabla antes de insertar filas filtradas
    while (table.rows.length > 1) { table.deleteRow(1); }
    const rows = csvText.split("\n").filter(row => row.trim() !== ""); // Dividir por líneas
    rows.forEach((row, index) => { const cells = row.split(","); // Dividir los datos por comas // Filtrar filas según los valores seleccionados 
        if (index !== 0) { 
            const entity = cells[0].trim();
            year = cells[2].trim(); 
            if ((selectedEntity === '' || entity === selectedEntity) && (selectedYear === '' || year === selectedYear)) {
                const tableRow = table.insertRow(); 
                    cells.forEach(cell => { 
                    const tableCell = tableRow.insertCell(); 
                    tableCell.textContent = cell.trim();
                }); 
            } 
        }
     
    }); 
}

function ordenarFechas(arreglo) {
    arreglo.sort(function(a, b) { return a - b; });
    return arreglo;
}

Iniciar("08 wind-generation.csv", "Dashboard");