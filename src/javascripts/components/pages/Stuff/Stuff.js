import React from 'react';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemData';
import ItemCard from './ItemCard';

import './Stuff.scss';

class Stuff extends React.Component {
  state = {
    items: [],
  }

  editItemEvent = (e) => {
    e.preventDefault();
    const itemId = '12345';
    this.props.history.push(`/edit/${itemId}`);
  }

  singleItemEvent = (e) => {
    e.preventDefault();
    const itemId = 'item100000';
    this.props.history.push(`/single/${itemId}`);
  }

  getItems = () => {
    itemsData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('get items broke', err));
  }

  componentDidMount() {
    this.getItems();
  }

  deleteItem = (itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => {
        this.getItems();
      })
      .catch((err) => console.error('delete items failed', err));
  }

  render() {
    const { items } = this.state;

    const itemCards = items.map((item) => <ItemCard key={item.id} item={item} deleteItem={this.deleteItem}/>);

    return (
      <div className="Stuff">
        <h2>My Stuff</h2>
        <div className="Stuff2">{itemCards}</div>
      </div>
    );
  }
}

export default Stuff;
