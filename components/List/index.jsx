import React, { useState, useEffect } from 'react';
import {
  List, styled, Card, Container,
} from '@mui/material';
import PropTypes from 'prop-types';
import Search from '../Search';
import DeleteButton from '../DeleteButton';
import { deleteTask } from '../../pages/api/tasks';

function Lista({ itemsList, updateList }) {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(itemsList);
  }, [itemsList]);

  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedList = [...itemsList];

    updatedList = updatedList.filter((item) => item.name.toLowerCase().indexOf(query.toLowerCase())
    !== -1);
    setFilteredList(updatedList);
  };

  const handleDelete = async (id) => {
    const response = await deleteTask(id);
    updateList(itemsList.filter((item) => item.taskId !== id));
    if (response.status === 200) {
      alert('Sucesso ao deletar tarefa');
    } else {
      alert('Erro ao deletar tarefa');
    }
  };

  return (
    <ContainerWrapper>
      <Search event={filterBySearch} />
      <ul>
        {filteredList.map((item) => (
          <CardWrapper>
            <DeleteButton event={() => handleDelete(item.taskId)} />
            <ListWrapper>
              <li>
                <h2>
                  {item.name}
                </h2>
              </li>

              <li>
                <p>
                  {item.description}
                </p>
              </li>
              <li>
                <footer>
                  {item.formatedDate}
                </footer>
              </li>
            </ListWrapper>
          </CardWrapper>
        ))}
      </ul>
    </ContainerWrapper>
  );
}

Lista.propTypes = {
  itemsList: PropTypes.arrayOf.isRequired,
  updateList: PropTypes.func.isRequired,
};

export default Lista;

const ContainerWrapper = styled(Container)`
  ul{
    display: grid;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 300px);
    width: 100%;
  }
`;

const CardWrapper = styled(Card)`
  background-color: #00afb9;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12);
  &:hover{
    transform: translateY(-3px);
  }
`;

const ListWrapper = styled(List)`
  h2{
    margin-top:-15px;
    display:flex;
    justify-content: center;
    text-align: center;
    background:#f07167;
    width:70%;
    border-radius:4px ;
    color:white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12);
  }

  p{
    margin-top:-15px;
    color: white;
    font-size: 21px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  footer{
    color:white;
    padding:15px;
    background-color: #007f89;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12);
  }
`;
