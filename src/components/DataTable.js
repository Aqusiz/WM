import React from 'react';
import { Grid } from '@mui/material';

import DataTableHeader from './DataTableHeader.js';
import DataTableBody from './DataTableBody.js';

const DataTable = (props) => {
    const { data, isSelected, selectedIdx, onClickRow, onClickAdd, onClickEdit, onClickDelete } = props;

    return (
        <div>
            <DataTableHeader
                isSelected={isSelected}
                onClickAdd={onClickAdd}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />
            <div
            style={{width: 800, height: 500, border: '1px solid black', overflow: 'scroll'}}>
            <Grid container>
                <DataTableBody
                data={data}
                selectedIdx={selectedIdx}
                onClickRow={onClickRow}/>
            </Grid>
            </div>
        </div>
    );
};

export default React.memo(DataTable);