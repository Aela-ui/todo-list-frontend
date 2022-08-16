import * as React from 'react';
import {
  styled, IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from 'prop-types';

function DeleteButton({ event }) {
  return (
    <StyledButton onClick={event} variant="contained" size="small">
      <ClearIcon />
    </StyledButton>
  );
}
DeleteButton.propTypes = {
  event: PropTypes.func.isRequired,
};

export default DeleteButton;

const StyledButton = styled(IconButton)`
    display:flex;
    float: right;
    margin:6px;
    background: #f07167;
    color:#ffff;
    border-radius:12px;
    &:hover{
        color:#ffff;
        background:#b8403b;
        transform: translateY(-3px);
    } 
`;
