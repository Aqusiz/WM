import React from 'react';
import { Grid } from '@mui/material';

const cellStyle = {
    p: 2,
    flex: 1,
    border: '1px solid grey'
};

const DataTableRow = props => {
    const { row, idx, isSelected, onClick } = props;

    return (
        <Grid
        container
        key={idx}
        wrap="nowrap"
        sx={{ overflowY: "scroll", overflowX: "scroll", background: isSelected ? "orange" : "" }}>
            {
                row.map((v, i) => {
                    return (
                        <Grid
                        item
                        key={i}
                        sx={{...cellStyle}}
                        onClick={(e) => {onClick(row, idx, e)}}>
                            {v}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
};

export default React.memo(DataTableRow);