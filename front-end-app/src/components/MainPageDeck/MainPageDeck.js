import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Route, Redirect } from 'react-router';
import Dan from '../../../public/img/dan.jpg';
import Wsip from '../../../public/img/wsip.jpg';
import Hobbit from '../../../public/img/hobbit.jpg';

const styles = {
  buttonStyle: {
    color: '#fff',
    backgroundColor: '#20a8d8',
    borderColor: '#20a8d8',
    borderRadius: '5px',
  },
};

const Deck = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={Hobbit} alt="Card image cap" />
        <CardBody>
          <CardTitle>Publikacje</CardTitle>
          <CardText>W bazie znajduje się aktualnie <b>1 000 000</b> publikacji różnego typu!</CardText>
          <CardText>Od książek, przez czasopisma, nawet po pojedyncze artykuły!</CardText>
          <Button style={styles.buttonStyle}>Przeglądaj publikacje ></Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Dan} alt="Card image cap" />
        <CardBody>
          <CardTitle>Autorzy</CardTitle>
          <CardText>W bazie znajduje się aktualnie <b>15 000</b> autorów z całego świata!</CardText>
          <CardText>Tych bardzo dobrze znanych i tych mniej, tych topowych, ale też tych undergroundowych.</CardText>
          <Button style={styles.buttonStyle}>Przeglądaj autorów ></Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Wsip} alt="Card image cap" />
        <CardBody>
          <CardTitle>Wydawnictwa</CardTitle>
          <CardText>W bazie znajduje się aktualnie <b>8000</b> oficjalnych wydawnictw!</CardText>
          <CardText>Wydających bestsellery, poezje, beletrystykę, książki historyczne, popularnonaukowe!</CardText>
          <Button style={styles.buttonStyle}>Przeglądaj wydawnictwa ></Button>
          
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Deck;