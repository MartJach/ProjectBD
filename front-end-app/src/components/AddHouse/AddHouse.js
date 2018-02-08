import React from 'react';
import { Button, Badge, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import AutoSelection from '../AutoSelection/AutoSelection';
import Suggestions from '../../extensions/';
import theme from '../../../scss/views/theme.scss';

const styles = {
  inputWidth: {
    width: '40%',
  },
  badgeStyle: {
    color: '#fff',
    backgroundColor: '#33444c',
    borderRadius: '5px',
  },
  addButton: {
    borderRadius: '5px',
  },
};

const AddHouse = (props) => {
  return (
    <div className="animated fadeIn">
      <br />
      <h1>Wydawnictwo <Badge color="secondary" style={styles.badgeStyle}>Nowe</Badge></h1>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="Nazwisko" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="Imię" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="Drugie imię" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="ORCID" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <Button color="primary" style={styles.addButton}>Dodaj</Button>{' '}
    </div>
  );
};

export default AddHouse;