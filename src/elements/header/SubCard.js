import React from 'react'

const SubCard = () => {
  return (
    <div className="dropdown-menu dropdown-menu-animated dropdown-lg show">
        <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
            <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                <span className="mr-2">
                    <img src="../../assets/img/pro.png" className="rounded-circle profile-image" alt="Hello World" />
                </span>
                <div className="info-card-text">
                    <div className="fs-lg text-truncate text-truncate-lg">Saikat Mohanty</div>
                    <span className="text-truncate text-truncate-md opacity-80">saikatmohanty@lipl.in</span>
                </div>
            </div>
        </div>
        <div className="dropdown-divider m-0"></div>
        <a className="dropdown-item fw-500 pt-3 pb-3" href="#">
            <span data-i18n="drpdwn.page-logout">Logout</span>
        </a>
    </div>
  )
}

export default SubCard