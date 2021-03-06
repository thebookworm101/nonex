import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import MainGrid from './Skel'; // Our custom react component
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//ReactDOM.render(<Main />, document.getElementById('app'));
let bts = [{key:8,label:"Calendar"}, {key:9,label:"Calendar"},{key:10,label:"Calendar"},{key:11,label:"Calendar"}] ;

ReactDOM.render( <MainGrid buttonkeys={bts} > 
                 </MainGrid>
                 , document.getElementById('butt'));
