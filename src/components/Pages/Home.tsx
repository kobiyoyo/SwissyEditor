import React from 'react';

const Home: React.FC = () => {
  const styles = {
    body: {
      marginTop: '5rem',
      padding: '1rem',
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
    },
  };
  return (
    <div style={styles.body}>
      <h1>Home page here</h1>
    </div>
  );
};

export default Home;
