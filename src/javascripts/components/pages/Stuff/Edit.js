import React from 'react';

import itemsData from '../../../helpers/data/itemData';

class Edit extends React.Component {
  state = {
    item: {
      itemName: '',
      itemImage: '',
      itemDescription: '',
    },
  }

  componentDidMount() {
    itemsData.getItemById(this.props.match.params.itemId)
      .then((res) => {
        const item = res.data;
        this.setState({ item });
      })
      .catch((err) => console.error('cannot get item', err));
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    const { item } = this.state;
    item.itemName = e.target.value;
    this.setState({ item });
  };

  changeImageEvent = (e) => {
    e.preventDefault();
    const { item } = this.state;
    item.itemImage = e.target.value;
    this.setState({ item });
  };

  changeDescEvent = (e) => {
    e.preventDefault();
    const { item } = this.state;
    item.itemDescription = e.target.value;
    this.setState({ item });
  };

  updateItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;

    itemsData
      .updateItem(itemId, this.state.item)
      .then(() => {
        this.props.history.push(`/items/${itemId}`);
      })
      .catch((err) => console.error('edit item broken', err));
  };

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state.item;

    return (
      <div className="EditItem col-12">
      <h1>Edit Item</h1>
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="itemName">Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            placeholder="Enter Item Name"
            value={itemName}
            onChange={this.changeNameEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="itemImage">Image</label>
          <input
            type="text"
            className="form-control"
            id="itemImage"
            placeholder="Enter Item Image"
            value={itemImage}
            onChange={this.changeImageEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="itemDesc">Description</label>
          <input
            type="text"
            className="form-control"
            id="itemDescription"
            placeholder="Enter Item Description"
            value={itemDescription}
            onChange={this.changeDescEvent}
            />
        </div>
        <button className="btn btn-light" onClick={this.updateItem}>Update Item</button>
      </form>
    </div>

    );
  }
}

export default Edit;
