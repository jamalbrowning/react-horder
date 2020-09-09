import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

import itemShape from '../../../helpers/props/itemShape';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func.isRequired,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
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
          <Link to={singleItemLink} className="btn btn-warning m-3"><i className="fas fa-binoculars"></i></Link>
          <Link to={editLink} className="btn btn-success m-3"><i className="fas fa-pencil-alt"></i></Link>
          <button className="btn btn-secondary m-3" onClick={this.deleteItemEvent}><i className="fas fa-trash-alt"></i></button>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default ItemCard;
