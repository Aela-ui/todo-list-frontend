import * as React from 'react';
import {
  styled, Paper, InputBase,
} from '@mui/material';
import PropTypes from 'prop-types';

function Search({ event }) {
  return (
    <StyledContainer
      component="form"
      sx={{
        p: '9px 6px', display: 'flex', alignItems: 'center', width: 345,
      }}
    >
      <InputBase
        onChange={event}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Procurar Tarefas"
        inputProps={{ 'aria-label': 'search tasks' }}
      />

    </StyledContainer>
  );
}

Search.propTypes = {
  event: PropTypes.func.isRequired,
};

export default Search;

const StyledContainer = styled(Paper)`
    background:#fdfcdc;
    display:flex;
    margin:auto;
    transform: translateY(-45px);

    &:hover{
    transform: translateY(-48px);
  }
`;
