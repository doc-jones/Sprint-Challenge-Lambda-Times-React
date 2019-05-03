import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((t, index)=> 
        <Tab key= {index} tab={t}selectedTab={props.selectedTab} selectTabHandler= {props.selectTabHandler} />)}

      </div>
    </div>
  );
};

/* map over the tabs provided on your props, create a new Tab component for each one. Give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/



// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.function
    
  }


export default Tabs;
