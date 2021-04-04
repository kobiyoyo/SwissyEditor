// React
import React, { useContext, useState } from 'react';

// Rsuite
import {
  Icon,
  InputGroup,
  AutoComplete,
  Container,
  Table,
  Grid,
  Row,
  Col,
  Button,
} from 'rsuite';

// Context
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

// Types
import { FileItem } from '../../context/types';

// Route

const FileList: React.FC = () => {
  const history = useHistory();
  interface LoudProps {
    id: number;
    title: string;
    content: string;
    prevState:null;
  }
  const { state: { files } } = useContext(GlobalContext);
  const [filesData, setFilesData] = useState<LoudProps | null >(null);
  const {
    Column, HeaderCell, Cell, Pagination,
  } = Table;

  const handleAdd = () => {
    history.push('/add');
  };
  const styles = {
    file: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-evenly',
    },
    iconSize: {
      fontSize: '10rem',
    },
    marginTop: {
      marginTop: '3rem',
    },
    marginBottom: {
      marginBottom: '3rem',
    },
    body: {
      marginTop: '5rem',
      padding: '1rem',
    },
    search: {

      marginBottom: '4rem',
    },
  };

  const loud = (data:FileItem[]) => {
    //
    console.log(data);
    alert(filesData?.title);
  };
  const searchData = [
    'HYPER Advertiser',
    'HYPER Web Analytics',
    'HYPER Video Analytics',
    'HYPER DMP',
    'HYPER Ad Serving',
    'HYPER Data Discovery',
  ];
  return (
    <Container style={styles.body}>

      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={20}>
            {' '}
            <InputGroup style={styles.search}>
              <AutoComplete data={searchData} />
              <InputGroup.Button>
                <Icon icon="search" />
              </InputGroup.Button>

            </InputGroup>
          </Col>
          <Col xs={24} sm={24} md={4}>
            {' '}
            <Button onClick={handleAdd}><Icon icon="plus" /></Button>

          </Col>
        </Row>
      </Grid>
      <Table
        virtualized
        height={400}
        data={files}
        onRowClick={
        (data) => {
          setFilesData(data);
          loud(data);
        }
      }
      >
        <Column width={200} align="center">
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={730} align="center">
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title" />
        </Column>
        <Column width={130} fixed="right">
          <HeaderCell>Action</HeaderCell>
          <Cell dataKey="id">
            <span>
              <a href="/">View</a>
            </span>
          </Cell>
        </Column>
      </Table>

    </Container>
  );
};

export default FileList;
