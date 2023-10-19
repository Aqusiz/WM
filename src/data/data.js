// arr[0]: array of column names
// arr[1:]: arrays of rows
// Format of Papaparse(csv parse)
const createDemoData = () => {
	const arr = [];
	const colDef = [];
	for (let i = 0; i < 10; i++) {
		colDef.push(`Column ${i+1}`);
	};
	arr.push(colDef);

	for (let i = 0; i < 1000; i++) {
		const row = [];
		for (let j = 0; j < 10; j++) {
			row.push(`cell ${i}-${j}`);
		}
		arr.push(row);
	}
	return arr;
}

export const demoData = createDemoData();

export const addData = (row) => { demoData.push(row); };

export const editData = (row, idx) => {
	if(idx > 0 && idx < demoData.length) demoData[idx] = row;
};

export const deleteData = (idx) => {
	if(idx > 0 && idx < demoData.length) demoData.splice(idx, 1);
};