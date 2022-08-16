import * as React from 'react';
import {
  styled, Box,
} from '@mui/material';
import Image from 'next/image';
import SimpleModal from '../SimpleModal';

function Hero() {
  return (
    <div>
      <StyledContainer>
        <Image src="/images/TasksHelper.svg" alt="Logo da empresa" width={300} height={300} />
      </StyledContainer>
      <SimpleModal />
    </div>
  );
}

export default Hero;

const StyledContainer = styled(Box)`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  background:#00afb9;
  height:300px;
  width:100%;
`;
