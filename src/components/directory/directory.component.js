import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySelectors} from '../../redux/directory/directory.selectors'
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';



function Directory({sections}) {
    
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelectors
})

export default connect(mapStateToProps)(Directory)