import * as React from 'react';
import {
  styled, Button,
} from '@mui/material';
import PropTypes from 'prop-types';

function ButtonTask({ event }) {
  return (
    <StyledButton onClick={event} variant="contained">
      Nova Tarefa
    </StyledButton>
  );
}
ButtonTask.propTypes = {
  event: PropTypes.func.isRequired,
};

export default ButtonTask;

const StyledButton = styled(Button)`
    transform:translateY(-100px);
    display:flex;
    margin:auto;
    font-family: 'Edu TAS Beginner', cursive;
    background: #f07167;
    color:#ffff;
    border-radius:12px;
    &:hover{
        color:#ffff;
        background:#b8403b;
        transform: translateY(-103px);
    } 
`;
