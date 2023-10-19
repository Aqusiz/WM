import React from 'react';
import Grid from '@mui/material/Grid';

import DataTableRow from './DataTableRow';

const DataTableBody = props => {
    const { data, selectedIdx, onClickRow } = props;

    return (
        <div>
            <Grid
            container
            wrap='nowrap'
            sx={{ overflowY: "scroll", overflowX: "scroll" }}>
                {data[0].map((col, idx) => {
                    return (
                    <Grid
                    item
                    key={idx}
                    sx={{p: 2, flex: 1, border: '1px solid grey', background: 'skyblue'}}>
                        {col}
                    </Grid>
                    );
                })}
            </Grid>
            {data.slice(1).map((row, idx) => {
                return (
                    <DataTableRow 
                    key={idx}
                    row={row}
                    idx={idx}
                    isSelected={idx === selectedIdx}
                    onClick={onClickRow}/>
                )
            })}
        </div>
    );
};

export default DataTableBody;