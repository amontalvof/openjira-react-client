import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../context/entries/EntriesContext';
import { UIContext } from '../context/ui/UIContext';

const NewEntry = () => {
    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setTouched(true);
    };

    const handleCancel = () => {
        setIsAddingEntry(false);
        setInputValue('');
        setTouched(false);
    };

    const onSave = () => {
        if (inputValue.length <= 0) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    };

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {isAddingEntry ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        // placeholder="New Entry"
                        autoFocus
                        multiline
                        error={inputValue.length <= 0 && touched}
                        label="New Entry"
                        helperText={
                            inputValue.length <= 0 &&
                            touched &&
                            'Please enter a value'
                        }
                        value={inputValue}
                        onChange={onTextFieldChange}
                        onBlur={() => setTouched(true)}
                    />
                    <Box display="flex" justifyContent="space-between">
                        <Button variant="text" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Save
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAddingEntry(true)}
                >
                    Add Task
                </Button>
            )}
        </Box>
    );
};

export default NewEntry;
