import React from 'react'
import './DashboardWidget.css'

const DashboardWidget = ({ title, children, className = '' }) => {
   return (
      <div className={`dashboard-widget ${className}`}>
         <div className="widget-header">
            <h3>{title}</h3>
         </div>
         <div className="widget-content">{children}</div>
      </div>
   )
}

export default DashboardWidget
