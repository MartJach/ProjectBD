import React from 'react';
import { Button, Badge, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import AutoSelection from '../AutoSelection/AutoSelection';
import Suggestions from '../../extensions/';
import theme from '../../../scss/views/theme.scss';

const styles = {
  inputWidth: {
    width: '60%',
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

const AddCitation = (props) => {
  console.log(Suggestions);
  return (
    <div className="animated fadeIn">
      <br />
      <h1>Cytowanie <Badge color="secondary" style={styles.badgeStyle}>Nowe</Badge></h1>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="ID (id)" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="Orygialny tekst (originalText)" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="Jednostka cytująca (unitCiting.title)" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="Jednostka cytowana (unitCited.title)" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <InputGroup style={styles.inputWidth}>
        <AutoSelection theme={theme} placeholder="Typ (type)" suggestions={Suggestions.languages} />
      </InputGroup>
      <br />
      <Button color="primary" style={styles.addButton}>Dodaj</Button>
      
    </div>
  );
};

export default AddCitation;
