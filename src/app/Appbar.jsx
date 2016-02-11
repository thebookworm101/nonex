import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item'
import AutoCompleteExampleNoFilter from './Searchbar'

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class AppBarExampleIconButton extends React.Component {
  render() {
  return (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={ 
      <DropDownMenu >
      <MenuItem value={"1"}  primaryText="Premises"/>
      <MenuItem value={"2"} primaryText="Rent Forecast" /> 
      <MenuItem value={"3"} primaryText="New Tenant Requests"/> 
      <MenuItem value={"4"} primaryText="Subletting"/> 
      <MenuItem value={"5"} primaryText="Suspended Rent"/> 
      <MenuItem value={"6"} primaryText="Receipts"/>
      </DropDownMenu>
       } >
   <div key={"21"}  _grid={{x: 2, y: 1, w: 6, h: 2}} > <AutoCompleteExampleNoFilter/> </div>
  </AppBar>);
  }
}

export default AppBarExampleIconButton;
