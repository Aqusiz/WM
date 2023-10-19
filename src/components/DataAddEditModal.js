import React from 'react';
import { Box, Button, ButtonGroup, Modal, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const DataAddEditModal = props => {
    const { colDef, selectedRow, open, onClose, onChange, onClickConfirm } = props;

    return (
        <Modal
        open={open}
        onClose={onClose}
        >
            <Box sx={style}>
                {colDef.map((col, idx) => {
                    return (
                        <TextField
                        key={idx}
                        helperText={col}
                        variant='outlined'
                        defaultValue={(selectedRow === undefined) ? "" : selectedRow[idx]}
                        onChange={(e) => {onChange(idx, e)}}
                        />
                    )
                })}
                <ButtonGroup variant="outlined">
                    <Button
                    onClick={onClickConfirm}
                    color="success">Confirm</Button>
                    <Button 
                    color="error"
                    onClick={onClose}>Cancel</Button>
                </ButtonGroup>
            </Box>
        </Modal>
    )
};

export default DataAddEditModal;