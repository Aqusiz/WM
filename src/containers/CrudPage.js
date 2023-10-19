import React from 'react';
import { useState, useCallback } from 'react'

import DataTable from '../components/DataTable';
import DataAddEditModal from '../components/DataAddEditModal';
import { demoData as data, addData, editData, deleteData } from '../data/data';

const CrudPage = props => {
    const [selectedIdx, setSelectedIdx] = useState(-1);
    const [selectedRow, setSelectedRow] = useState(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);  // open boolean for DataAddEditModal
    const [values, setValues] = useState([]);               // values in DataAddEditModal

    // handle clicking row in body
    // const onClickRow = (row, idx, e) => {
    //     setSelectedIdx(idx+1);
    //     setSelectedRow(row); 
    // };
    const onClickRow = useCallback((row, idx, e) => {
        setSelectedIdx(idx);
        setSelectedRow(row);
    }, []);
    // handle clicking header buttons
    const onClickAdd = () => {
        const newValues = [];
        for(var i = 0; i < data[0].length; i++)
            newValues.push("");
        setValues(newValues);
        handleOpenAdd();
    };
    const onClickEdit = () => {
        const newValues = [];
        for(var v of selectedRow)
            newValues.push(v);
        setValues(newValues);
        handleOpenEdit();
    };
    const onClickDelete = () => {
        deleteData(selectedIdx+1);
        setSelectedIdx(-1);
        setSelectedRow(undefined);
    };
    // handle Modal
    const handleOpenAdd = useCallback(() => {
        setSelectedIdx(-1);
        setSelectedRow(undefined);
        setIsModalOpen(true);
    }, []);
    const handleOpenEdit = useCallback(() => { setIsModalOpen(true); }, []);
    const handleCloseModal = () => setIsModalOpen(false);
    const onValuesChange = (idx, e) => {
        const updatedValues = values.map((v, i) => {
            if (i === idx) return e.target.value;
            else return v;
        });
        setValues(updatedValues);
    };
    const onClickConfirm = () => {
        if(selectedRow === undefined) addData(values);
        else editData(values, selectedIdx+1);
        handleCloseModal();
    };

    return (
        <div>
            <DataTable
            data={data}
            isSelected={selectedIdx !== -1}
            selectedIdx={selectedIdx}
            onClickRow={onClickRow}
            onClickAdd={onClickAdd}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            />
            <DataAddEditModal
            colDef={data[0]}
            selectedRow={selectedRow}
            open={isModalOpen}
            onClose={handleCloseModal}
            onChange={onValuesChange}
            onClickConfirm={onClickConfirm}
            />
        </div>
    );
};

export default CrudPage;