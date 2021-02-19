import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


class CategoryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      category: this.props.category
    }
  }

  handleChange = (e) => {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleClick = () => {
    const { category } = this.props;
    this.props.fetchCategory(category);
  }

  handleEditClick = () => {
    this.setState({ editing: true })
   
  }

  handleSaveClick = () => {
    const oldCategory = this.props.category;
    const newCategory = this.state.category;
    this.props.editCategory(oldCategory, newCategory);
  }

  handleCancelClick = () => {
    this.setState({ editing: false });
  }

  handleRemoveClick = () => {
    this.props.removeCategory(this.props.category);
  }

  render() {
    const name = this.props.category;
    return (
      <MuiThemeProvider>
        <div className="list-group-item category"
        style={{
          height: '30%',
          width:'80%',
          top: '35%',
          marginLeft:"13%",
          border: '2px solid lightblue',
          borderRadius: '25px',
          padding: '30px',
          marginBottom:"20px"
        }}>
          {this.state.editing ?
            <div>
              <TextField style={{marginBottom:"20px",fontFamily: 'Reggae One',fontSize:"20px"}}
              floatingLabelText="Category Name" name="category"
                value={this.state.category} onChange={this.handleChange}
              /> 
              <button type="button" style={{marginRight:"20px",marginLeft:"20px",fontFamily: 'Reggae One',fontSize:"20px"}} className="btn btn-success"
                onClick={this.handleSaveClick}>
                SAVE
              </button>
              <button type="button" style={{marginRight:"20px",fontFamily: 'Reggae One',fontSize:"20px"}} className="btn btn-danger"
                onClick={this.handleCancelClick}>
                CANCEL
              </button>
            </div>
            :
            <div onClick={this.handleClick}>
              <h3>{name}</h3>
            </div>
          }

          <div className="category-menu">
          <button type="button" className="btn btn-info"
          style={{marginRight:"40px"}}
                onClick={this.handleEditClick}>
                EDIT
              </button>
              <button type="button" className="btn btn-danger"
              style={{marginRight:"20px"}}
                onClick={this.handleRemoveClick}>
                REMOVE
              </button>
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}

export default CategoryItem;
