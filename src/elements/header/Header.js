import React, { useState } from 'react'
import AccountCard from './AccountCard';

const Header = () => {
    const [isOpen, isClose] = useState(false);
    const dialog = () => {
        isClose(!isOpen);
        return isOpen;
    }
  return (
    <header className='page-header' role="banner">
        <div className="page-logo">
            <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                <img src="../../assets/img/logo.png" alt="HRMS" aria-roledescription="logo" />
                <span className="page-logo-text mr-1">HRMS</span>
                <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
            </a>
        </div>
        <div className="hidden-md-down dropdown-icon-menu position-relative">
            <a href="#" className="header-btn btn js-waves-off" data-action="toggle" data-class="nav-function-hidden" title="Hide Navigation">
                <i className="fa fa-bars"></i>
            </a>
            <ul>
                <li>
                    <a href="#" className="btn js-waves-off" data-action="toggle" data-class="nav-function-minify" title="Minify Navigation">
                        <i className="fa fa-unlock"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="btn js-waves-off" data-action="toggle" data-class="nav-function-fixed" title="Lock Navigation">
                        <i className="fa fa-lock"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div className="hidden-lg-up">
            <a href="#" className="header-btn btn press-scale-down" data-action="toggle" data-class="mobile-nav-on">
                <i className="ni ni-menu"></i>
            </a>
        </div>
        <div className="search">
            <form className="app-forms hidden-xs-down" role="search" action="page_search.html" autoComplete="off">
                <input type="text" id="search-field" placeholder="Search for anything" className="form-control" tabIndex="1" />
                <a href="#" onClick={dialog} className="btn-danger btn-search-close js-waves-off d-none" data-action="toggle" data-class="mobile-search-on">
                    <i className="fal fa-times"></i>
                </a>
            </form>
        </div>
        <div className="ml-auto d-flex">
            <AccountCard/>
        </div>
    </header>
  )
}

export default Header