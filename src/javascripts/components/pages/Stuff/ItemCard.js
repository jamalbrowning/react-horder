import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

import itemShape from '../../../helpers/props/itemShape';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;

    const singleItemLink = `/single/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="cards">
      <Card>
        <CardImg top width="100%" src={ item.itemImage } alt="Card image cap" />
        <CardBody>
          <CardTitle>{item.itemName}</CardTitle>
          <CardText>{item.itemDescription}</CardText>
          <Link to={singleItemLink} className="btn btn-warning"><i className="fas fa-binoculars"></i></Link>
          <Link to={editLink} className="btn btn-success"><i className="fas fa-pencil-alt"></i></Link>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default ItemCard;
