import React from 'react';
import { Link } from 'react-router-dom';

import itemsData from '../../../helpers/data/itemData';

class Single extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;

    itemsData.getItemById(itemId)
      .then((res) => this.setState({ item: res.data }))
      .catch((err) => console.error('single item broke', err));
  }

  deleteItem = () => {
    const { itemId } = this.props.match.params;
    itemsData.deleteItem(itemId)
      .then(() => {
        this.props.history.push('/stuff');
      })
      .catch((err) => console.error('delete single item sucks', err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    return (
      <div className="Single">
        <div className="SingleStuff">
        <h1>Single Stuff</h1>
        <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p>{item.itemDescription}</p>
          <Link to={`/edit/${itemId}`} className="btn btn-secondary m-3"><i className="fas fa-pencil-alt"></i></Link>
          <button className="btn btn-secondary m-3" onClick={this.deleteItem}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Single;
