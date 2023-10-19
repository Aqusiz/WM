import React from 'react';
import { Box, ButtonGroup, Button } from '@mui/material';

const DataTableHeader = (props) => {
    const { isSelected, onClickAdd, onClickEdit, onClickDelete } = props;

    return (
        <Box sx={{width: '100%', height: '4em'}}>
            <ButtonGroup variant='outlined'>
                <Button onClick={onClickAdd}>Add</Button>
                <Button
                disabled={!isSelected}
                onClick={onClickEdit}>
                    Edit
                </Button>
                <Button
                disabled={!isSelected}
                color="error"
                onClick={onClickDelete}>
                    Delete
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default DataTableHeader;