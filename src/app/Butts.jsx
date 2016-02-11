import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class FlatButtonExampleSimple  extends React.Component {
  render() {
   return (
      <div>
       <FlatButton label={this.props.label} primary={true}/>
      </div>
       );
    }
  }
export default FlatButtonExampleSimple;
