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
  Panel,
  ButtonGroup,
  ButtonToolbar,
} from 'rsuite';

// EXternal Components
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

// Types
import { FileItem } from '../../context/types';
import { removeFile } from '../../context/action';

const FileList: React.FC = () => {
  const history = useHistory();
  interface LoudProps {
    id: string;
    title: string;
    content: string;
    prevState:null;
  }
  const { state: { files }, dispatch } = useContext(GlobalContext);
  const [filesData, setFilesData] = useState<LoudProps | null >(null);
  const [search, setSearch] = useState<string>('');

  const displayFiles = files.map((file) => (
    search === '' || file.title.toLowerCase().includes(search.toLowerCase())
  ));
  const handleAdd = () => {
    history.push('/add');
  };
  const handleEdit = (id: string) => {
    history.push(`/display/edit/${id}`);
  };
  const handleDelete = (id: string) => {
    dispatch(removeFile(id));
  };

  // Autocomplete
  const searchData = [] as string[];
  files.map((file) => (
    searchData.push(file.title)
  ));

  const styles = {
    file: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-evenly',
    },
    iconSize: {
      fontSize: '18rem',
      marginBottom: '3rem',

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
    noFiles: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Container style={styles.body}>

      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={24} md={20}>
            {' '}
            <InputGroup style={styles.search}>
              <AutoComplete data={searchData} />
            </InputGroup>
          </Col>
          <Col xs={24} sm={24} md={4}>
            {' '}
            <Button onClick={handleAdd}><Icon icon="plus" /></Button>

          </Col>
        </Row>
      </Grid>
      <Row>
        {files.length > 0 ? files.map((file) => (
          <Col md={6} sm={12} style={styles.marginTop}>
            <Panel bordered header={file.title}>
              <Icon icon="file-text" style={styles.iconSize} />
              <ButtonToolbar>
                <ButtonGroup>
                  <Button onClick={() => handleEdit(file.id)}>Edit</Button>
                  <Button onClick={() => handleDelete(file.id)}>Delete</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Panel>
          </Col>
        ))
          : <div style={styles.noFiles}><h1>No Files</h1></div>}
      </Row>
    </Container>
  );
};

export default FileList;
