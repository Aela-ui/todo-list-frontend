import * as React from 'react';
import {
  Backdrop, Box, Modal, Fade, Button, styled, Input, Typography, Divider, TextareaAutosize,
} from '@mui/material';
import { useState, useEffect } from 'react';
import ButtonTask from '../ButtonTask';
import Lista from '../List';
import { createTask, findAllTasks } from '../../pages/api/tasks';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid #00afb9',
  boxShadow: 24,
  p: 4,
  borderRadius: '12px',
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [newTask, setNewTask] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;
    setTask(inputTask);
  };

  const handleChangeDescript = (event) => {
    const inputDescription = event.target.value;
    setDescription(inputDescription);
  };

  const handleChangeData = (event) => {
    const inputData = event.target.value;
    setData(inputData);
  };

  useEffect(() => {
    const callApiFindAllTasks = async () => {
      const response = await findAllTasks();
      const { payload } = response.data;
      setItemsList(payload);
      setNewTask(false);
    };
    try {
      callApiFindAllTasks();
    } catch (error) {
      console.log(error);
    }
  }, [newTask]);

  const handleItemsList = (newItemsList) => {
    setItemsList(newItemsList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await createTask(task, description, data);

    if (response.status === 201) {
      alert('Sucesso ao criar tarefa');
    } else {
      alert('Erro ao criar tarefa');
    }
    setNewTask(true);
    setTask('');
    setDescription('');
    setData('');
  };

  return (
    <div>
      <ButtonTask event={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleSubmit}>
            <Box sx={style}>
              <StyledH1>Nova Tarefa</StyledH1>

              <Divider sx={{ my: 0.5 }} />

              <StyledInput
                name="taskName"
                type="text"
                placeholder="Nome da Tarefa"
                value={task}
                onChange={handleChangeInput}
                required
                autocomplete="off"
              />

              <StyledDescript
                name="description"
                value={description}
                aria-label="minimum height"
                minRows={4}
                placeholder="Descrição"
                style={{ width: 245 }}
                id="transition-modal-description"
                onChange={handleChangeDescript}
                required
                autocomplete="off"
              />

              <StyledInput
                name="taskName"
                type="date"
                value={data}
                onChange={handleChangeData}
                required
                autocomplete="off"
              />

              <Divider sx={{ my: 0.5 }} />

              <CancelButton
                onClick={handleClose}
                variant="contained"
                sx={{ mt: 2 }}
              >
                Cancelar
              </CancelButton>
              <CreateButton
                onClick={handleClose}
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Criar
              </CreateButton>
            </Box>
          </form>
        </Fade>
      </Modal>
      <Lista itemsList={itemsList} updateList={handleItemsList} />
    </div>
  );
}

// StyledComponents

const CreateButton = styled(Button)`
    float:right;
    font-family: 'Edu TAS Beginner', cursive;
    background: #00afb9;
    color:#ffff;
    border-radius:12px;
    &:hover{
        color:#ffff;
        background:#005478;
        transform: translateY(-3px);
    } 
`;

const CancelButton = styled(Button)`
    margin-left:6px;
    float:right ;
    font-family: 'Edu TAS Beginner', cursive;
    background: #767b6f;
    color:#ffff;
    border-radius:12px;
    &:hover{
        color:#ffff;
        background:#767b6f;
        transform: translateY(-3px);
    } 
`;

const StyledH1 = styled(Typography)`
  display:flex;
  justify-content: center;
  margin-bottom:15px;
  color:#f07167;
  font-family: 'Edu TAS Beginner', cursive;
  letter-spacing: 0.05em;
  font-size:30px ;
  -webkit-text-stroke-width: 1px; 
  -webkit-text-stroke-color: #f07167;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledInput = styled(Input)`
  font-family: 'Edu TAS Beginner', cursive;
  letter-spacing: 0.05em;
  font-size:18px ;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14);
  padding:12px;
  margin-bottom:15px ;
  border-radius:4px;

  &:hover{
    transform: translateY(-3px);
  }
`;

const StyledDescript = styled(TextareaAutosize)`
  font-family: 'Edu TAS Beginner', cursive;
  letter-spacing: 0.05em;
  font-size:18px ;
  margin-bottom:15px;
  border:none;
  border-radius:4px;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14);
  padding:12px;

  &:hover{
     transform: translateY(-3px);
  }
`;
