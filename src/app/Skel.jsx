import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButtonExampleSimple from  './Butts'
import AppBarExampleIconButton from './Appbar'
import CardExampleWithAvatar from './Card'


const WidthProvider = require('react-grid-layout').WidthProvider;
let ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
const  layout = {lg: {x: 1, y: 1, w: 1, h:1 }, md: {x: 2, y: 2, w: 2, h:2}, sm: { x: 4, y: 4, w: 4, h:8 }, xs: {x: 4, y: 8, w: 8, h:8}, xxs:{x:4, y: 4, w: 4, h:8 }} ;
const breakpt = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} ;
const cols = {lg: 8, md: 4, sm: 4, xs: 2, xxs: 2} ;

class MainGrid  extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.state = {
      open: true,
    };
  }


  handleRequestClose() {
    this.setState({
      open: true,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
  return (
        <div>  
          <div key={"16"} _grid={{x: 0, y: 0, w:8 , h: 1}} >
               <AppBarExampleIconButton>  </AppBarExampleIconButton>
          </div>
        <ResponsiveReactGridLayout className="layout" 
               cols= {cols } >                                     
        <div key={"0"} _grid={{x: 0, y: 1, w: 1, h: 6}} >
           <LeftNav key={"5"} docked={true} width={150}  open={true}> 
            {this.props.buttonkeys.map(function(value) {
                return <MenuItem key={value.key}  >
                          <FlatButtonExampleSimple   label={value.label}> Tester </FlatButtonExampleSimple>
                       </MenuItem>
            })}
           </LeftNav> 
        </div> 
        <div key={"1"}  _grid={{x: 2, y: 3, w: 1, h: 1}} >1</div>
        <div key={"2"}  _grid={{x: 3, y: 3, w: 1, h: 1}}  >2</div>
        <div key={"3"}  _grid={{x: 4, y: 3, w: 1, h: 1}} >3  </div>
        <div key={"20"}  _grid={{x: 2, y: 4, w: 4, h: 3}} > <CardExampleWithAvatar/> </div> 
     </ResponsiveReactGridLayout> </div> );
  }
}

export default MainGrid;
