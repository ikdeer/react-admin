import React from 'react'
import './small-card.scss'


function SmallCard(props) {
  return (
    <div className="c-small-card-wrapper">
      <div className="c-small-card">
        <div className="c-small-card-header">
          <div className="c-small-card-header-title"></div>
        </div>
        <div className="c-small-card-content">
          {props.content}
        </div>
        <div className="c-small-card-footer">
          {props.footer}
        </div>
      </div>
    </div>
  )
}

export default SmallCard
