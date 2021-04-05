// React
import React, { useContext, useState, useEffect } from 'react';

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

// External
import { v4 as uuidv4 } from 'uuid';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { addFile, editFile } from '../../context/action';

// Types
import { FileItem } from '../../context/types';

// type for `match.params`
interface RouterProps {
  id: string; // must be type `string` since value comes from the URL
}
type FDProps = RouteComponentProps<RouterProps>;
interface Values {
  title: string;
  id: string;
  content: string;
}

const FileDetail: React.FC <FDProps | null> = (props: FDProps): React.ReactElement => {
  const { match } = props;

  const isMode = !!match.params.id;
  const myuuid = uuidv4();
  const currentFileId = match.params.id;
  const { state: { files } } = useContext(GlobalContext);
  const [selectedFile, setSelectedFile] = useState<FileItem>();
  const history = useHistory();

  useEffect(() => {
    const id = currentFileId;
    const selectedData = files.find((file) => file.id === id) as Pick<FileItem, keyof FileItem>;
    console.log(selectedData);
    setSelectedFile(selectedData);
  }, [currentFileId, files]);

  const initialValues = {
    title: selectedFile ? selectedFile?.title : '',
    id: selectedFile ? selectedFile?.id : myuuid,
    content: selectedFile ? selectedFile?.content : '',
  };

  const { dispatch } = useContext(GlobalContext);

  const onSubmit = (values:Values, { setSubmitting }: FormikHelpers<Values>) => {
    if (!isMode) {
      dispatch((addFile(values)));
      setSubmitting(false);
      history.push(`/display/${myuuid}`);
    } else {
      dispatch(editFile(values));
      setSubmitting(false);
      history.push(`/display/${selectedFile?.id as string}`);
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
      boxShadow: 'inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%)',
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
        enableReinitialize
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
    </Container>
  );
};
export default FileDetail;
