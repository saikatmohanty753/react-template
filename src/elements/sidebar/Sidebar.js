import React from 'react'

const Sidebar = () => {
  return (
    <aside className='page-sidebar'>
        <div className='page-logo'>
            <a href='#' className='page-logo-link press-scale-down d-flex align-items-center position-relative' data-toggle="modal" data-target="#modal-shortcut">
                <img src='../../assets/img/logo.png' alt='ADVERTISE' />
                <span className="page-logo-text mr-1">HRMS</span>
                <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
            </a>
        </div>
        <nav id="js-primary-nav" className="primary-nav" role="navigation">
            <div class="info-card">
                <img src="../../assets/img/pro.png" class="profile-image rounded-circle" alt="Hello world" />
                <div className="info-card-text">
                    <a href="#" className="d-flex align-items-center text-white">
                        <span className="text-truncate text-truncate-sm d-inline-block">
                            Hello world
                        </span>
                    </a>
                    <span className="d-inline-block text-truncate text-truncate-sm">Toronto, Canada</span>
                </div>
                <img src="../../assets/img/card-backgrounds/cover-2-lg.png" className="cover" alt="cover"></img>
            </div>
            <ul id="js-nav-menu" className="nav-menu">
                <li>
                    <a href="/dashboard" title="Dashboard" data-filter-tags="Dashboard">
                        <i className="fa fa-info-circle"></i>
                        <span className="nav-link-text" data-i18n="nav.application_intel">Dashboard</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="filter-message js-filter-message bg-success-600"></div>
    </aside>
  )
}

export default Sidebar