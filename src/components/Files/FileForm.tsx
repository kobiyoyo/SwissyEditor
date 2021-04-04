// React
import React, { useContext, useState } from 'react';

// Formik
import {
  Formik, Field, Form, FormikHelpers,
} from 'formik';

// Rsuite
import {
  ButtonGroup,
  IconButton,
  ButtonToolbar,
  Icon,
  Container,
  Button,
} from 'rsuite';

// Context

import { v4 as uuidv4 } from 'uuid';
import { RouteComponentProps } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { addFile, editFile } from '../../context/action';

// Types
import { FileItem } from '../../context/types';

// Router
// uuid

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}
interface FDProps extends RouteComponentProps<RouterProps> {
  data: FileItem[];
}

interface Values {
  title: string;
  id: string;
  content: string;
}

const FileDetail: React.FC <FDProps | null> = (props: FDProps): React.ReactElement => {
  const { data, match, history } = props;
  console.log(match.params.id);
  const isMode = data !== null;
  const myuuid = uuidv4();
  const initialValues = {
    title: '',
    id: myuuid,
    content: '',
  };

  const { dispatch } = useContext(GlobalContext);

  const onSubmit = (values:Values, { setSubmitting }: FormikHelpers<Values>) => {
    if (isMode) {
      dispatch((addFile(values)));
      setSubmitting(false);
      history.push(`/display/${myuuid}`);
    } else {
      dispatch(editFile(values));
      setSubmitting(false);
    }
  };
  const styles = {
    body: {
      marginTop: '5rem',
      padding: '1rem',
    },
    inputArea: {
      fontSize: '2rem',
      width: '100%',
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3rem',
    },
    marginTop: {
      marginTop: '3rem',
    },
    marginBottom: {
      marginBottom: '3rem',
    },
    formBody: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      flexDirection: 'column' as const,
    },
    fieldBody: {
      marginTop: '3rem',
      borderRadius: '1rem',
      border: '0.5px solid grey',
      padding: '1.5rem',
      outlineWidth: '0',
    },
    submitButton: {
      marginTop: '3rem',
      backgroundColor: 'black',
      color: 'white',
    },
  };
  return (
    <Container style={styles.body}>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form style={styles.formBody}>
          <Field id="title" name="title" placeholder="Title" style={styles.fieldBody} />
          <div style={styles.toolBar}>
            <ButtonToolbar>
              <IconButton icon={<Icon icon="file-text" />} />
              <IconButton icon={<Icon icon="save" />} />
              <ButtonGroup>
                <IconButton icon={<Icon icon="bold" />} />
                <IconButton icon={<Icon icon="italic" />} />
                <IconButton icon={<Icon icon="underline" />} />
                <IconButton icon={<Icon icon="strikethrough" />} />
              </ButtonGroup>
              <ButtonGroup>
                <IconButton icon={<Icon icon="align-left" />} />
                <IconButton icon={<Icon icon="align-center" />} />
                <IconButton icon={<Icon icon="align-right" />} />
                <IconButton icon={<Icon icon="align-justify" />} />
              </ButtonGroup>
              <IconButton icon={<Icon icon="link" />} />
            </ButtonToolbar>
          </div>
          <Field rows={14} cols={160} id="content" as="textarea" name="content" placeholder="Content" style={styles.fieldBody} />
          <Button style={styles.submitButton} type="submit">View</Button>
        </Form>
      </Formik>
      {/* <Input style={styles.inputArea}
       componentClass="textarea" rows={14} placeholder="Input text here" /> */}
    </Container>
  );
};
export default FileDetail;
