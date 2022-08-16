import React from 'react';
import {
  styled, ButtonGroup, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Task() {
  return (
    <StyledButton>
      <ButtonGroup variant="contained">
        <Button>
          <EditIcon />
        </Button>

        <Button>
          <DeleteIcon />
        </Button>
      </ButtonGroup>
    </StyledButton>
  );
}

export default Task;

const StyledButton = styled(ButtonGroup)`
    Button{
        background: #00afb9;
        color:#ffff;

        &:hover{
            color:#ffff;
            background:#005478;
        }
    } 
`;
