// React
import React, { useState, useContext, useEffect } from 'react';

// Rsuite
import {
  Container,
} from 'rsuite';

// External components
import marked from 'marked';
import { RouteComponentProps } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

// Types
import { FileItem } from '../../context/types';

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}
type FDProps = RouteComponentProps<RouterProps>;
interface LoudProps {
  id: number;
  title: string;
  content: string;
  prevState:null;
}
const FileDetail: React.FC <FDProps> = (props: FDProps): React.ReactElement => {
  const { match } = props;
  const currentFileId = match.params.id;
  const { state: { files } } = useContext(GlobalContext);
  const [selectedFile, setSelectedFile] = useState<LoudProps | null>(null);

  console.log(currentFileId);

  useEffect(() => {
    const selectedFileData = files.find((file) => file.id === currentFileId);
    console.log(selectedFileData);
  }, [currentFileId, files]);

  const styles = {
    body: {
      marginTop: '5rem',
      padding: '1rem',
    },
    textDisplay: {
      width: '100%',
    },

  };
  const sampleText = '# Title\n## Sub-Title \n### Deeper title \n \n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.\n\n Attributs: *italic*, **bold**, \n`monospace`, ~~striped~~.\n\n List:\n\n * apples\n * oranges\n * pears\n\n Numbered list:\n\n 1. tofu\n 2. mushrooms\n 3. bread\n\n Link with placeholder text: *[Medium](https://www.medium.com)* \n\n Simple link: https://www.medium.com/ \n\n Code: ```\n console.log("Hello folks! I hoped you enjoyed this quick tutorial. Thanks for reading."); \n``` ';

  const renderText = (text: string): string => marked(text, { sanitize: true });
  return (
    <Container style={styles.body}>
      <div style={styles.textDisplay}>
        <div dangerouslySetInnerHTML={{ __html: renderText(sampleText) }} />
      </div>
    </Container>
  );
};

export default FileDetail;
