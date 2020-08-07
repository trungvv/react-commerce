import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.style.scss';

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  // console.log(`${match.url}${linkUrl}`);
  return (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}

      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
}
export default withRouter(MenuItem);