import {useState} from 'react';
import '../../styles/app.css';
import { v4 as uuid } from 'uuid';
const SidebarItem = (props) => {
    const [open,close] = useState(false);
    const key = uuid();
    const newkey = uuid();
    const handleMenu = () => {
        const ul = document.getElementsByClassName('active');
        if(ul.length > 0)
        {
            ul[0].classList.remove('active');
            close(!open)
        }else{
            close(!open)
        }
    }
    const sidebar = props.item;
    return (
        <li key={newkey}>
            {sidebar.children.length > 0?(
                <>
                    <a href={sidebar.path} onClick={()=>handleMenu()} key={newkey} title="Package Info">
                        <i className={sidebar.icon}></i>
                        <span className="nav-link-text" data-i18n="nav.package_info">{ sidebar.item }</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className={ open?'active':'' }>
                        {sidebar.children?.map((child,index)=>(
                            <li key={index}>
                                <a href={child.path} title="Documentation" data-filter-tags="package info documentation">
                                    <span className="nav-link-text" data-i18n="nav.package_info_documentation">{ child.item }</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            ):(
                <a href={sidebar.path} title="Dashboard" data-filter-tags="Dashboard">
                    <i className="fa fa-info-circle"></i>
                    <span className="nav-link-text" data-i18n="nav.application_intel">{sidebar.item}</span>
                </a>
            )} 
        </li> 
    )
}

export default SidebarItem;