import React from 'react'

const Header = () => {
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
            <form className="app-forms hidden-xs-down" role="search" action="page_search.html" autocomplete="off">
                <input type="text" id="search-field" placeholder="Search for anything" className="form-control" tabindex="1" />
                <a href="#" onclick="return false;" className="btn-danger btn-search-close js-waves-off d-none" data-action="toggle" data-class="mobile-search-on">
                    <i className="fal fa-times"></i>
                </a>
            </form>
        </div>
        <div className="ml-auto d-flex">
            <div className="d-flex">
                <h5 style={{marginTop:'20px'}}>Saikat Mohanty</h5>
                <a href="#" data-toggle="dropdown" title="drlantern@gotbootstrap.com" className="header-icon d-flex align-items-center justify-content-center ml-2">
                    <img src="../../assets/img/pro.png" className="profile-image rounded-circle" alt="Hello World" />
                </a>
                <div className="dropdown-menu dropdown-menu-animated dropdown-lg">
                    <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                        <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                            <span className="mr-2">
                                <img src="../../assets/img/pro.png" className="rounded-circle profile-image" alt="Hello World" />
                            </span>
                            <div className="info-card-text">
                                <div className="fs-lg text-truncate text-truncate-lg">Hello World</div>
                                <span className="text-truncate text-truncate-md opacity-80">saikatmohanty@lipl.in</span>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider m-0"></div>
                    <a class="dropdown-item fw-500 pt-3 pb-3" href="#">
                        <span data-i18n="drpdwn.page-logout">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header