// React
import React, { useState, useContext, useEffect } from 'react';

// Rsuite
import {
  Container,
  Button,
} from 'rsuite';

// External components
import marked from 'marked';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

// Types
import { FileItem } from '../../context/types';

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}
type FDProps = RouteComponentProps<RouterProps>;

const FileDetail: React.FC <FDProps> = (props: FDProps): React.ReactElement => {
  const { match } = props;
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

  const handleGoBack = () => {
    history.push(`edit/${currentFileId}`);
  };
  const content = selectedFile?.content as string;

  const styles = {
    body: {
      marginTop: '5rem',
      padding: '1rem',
    },
    textDisplay: {
      width: '100%',
    },
    editButton: {
      marginTop: '3rem',
      backgroundColor: 'black',
      color: 'white',
      width: '10rem',
      marginBottom: '3rem',
    },
  };

  const renderText = (text: string): string => marked(text, { sanitize: true });
  return (
    <Container style={styles.body}>
      <Button style={styles.editButton} onClick={handleGoBack}>Edit</Button>

      <div style={styles.textDisplay}>
        <div dangerouslySetInnerHTML={{ __html: renderText(content || '') }} />
      </div>
    </Container>
  );
};

export default FileDetail;
