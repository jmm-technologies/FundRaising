import React, { useEffect } from 'react';
import HomeIcon from '../../assets/images/Icons/home.jsx';
import { Link, useNavigate } from "react-router-dom";
import SidebarIcon from '../../assets/images/Icons/sidebaricon.jsx';
import { Button, ConfigProvider } from "antd";
import { useSidebar } from '../../Constants/SidebarContext.js';
import sidebarLogo from '../../assets/images/reisnow2.png';
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../../features/auth/adminAuthSlice";
import signOutIcon from '../../assets/images/Icons/sign-out.svg';


function Layout({ activePage, children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sidebarFun = useSidebar();
    const { width, sidebar, content, updateSidebar } = sidebarFun;
    const pages = [
        {
            name: 'events list',
            url: '/event',
            icon: <HomeIcon />
        }
    ];
    const logOut = () => {
        dispatch(adminLogout());
        navigate('/login');
      };
    useEffect(() => {
        document.title = activePage;
    }, [activePage]);
 
    useEffect(() => {
        if (width < 1025) {
            updateSidebar('toggled-sidebar', 'toggled-content');
        } else {
            updateSidebar('sidebar', 'content');
        }
    }, [updateSidebar, width]);
    const changeSidebarStatus = () => {
        if (sidebar === 'sidebar') {
            updateSidebar('toggled-sidebar', 'toggled-content');
        } else {
            updateSidebar('sidebar', 'content');
        }
    };

    const data = useSelector((state) => state.adminAuthSlice);
   useEffect(() => {
    if (data.isLoggedIn === false){
        navigate('/login');
    }
    }, [data.isLoggedIn, navigate]);
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#03B664",
                },
                button: {
                    colorPrimary: "#03B664",
                },
            }}
        >
            <div className={"layout"}
            >
                <div className={sidebar}>
                    <div className={"f-18 fw-700 d-flex justify-content-end text-white sidebar-style"} style={{
                        paddingBottom: '34px',
                        marginLeft: '17px',
                    }}>
                        {sidebar === 'sidebar' ? <img src={sidebarLogo} alt="sidebarlogo" className='mx-5' width={76} height={65} /> : ''}
                        <Button type="link" onClick={changeSidebarStatus}><SidebarIcon /></Button>
                    </div>
                    <p className={"text-secondary"}>Navigation</p>
                    <ul>
                        {
                            pages.map((page, index) => {
                                return (
                                    <li key={index} className={`${activePage === page.name ? 'active' : ''}`}>
                                        {sidebar === 'sidebar' ? <Link to={page.url}>{page.icon}<span className='px-3'>{page.name}</span></Link> : <Link to={page.url}>{page.icon}</Link>}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        sidebar === 'sidebar' ? 
                    <Button
                        htmlType="submit"
                        className="btn-height custom-lg-btn btn-cancel logout-btn"
                        onClick={logOut}
                    >
                        <img src={signOutIcon} alt="logout" className='mr-2 mx-2' width={15} height={15} />
                        {"Logout"}
                    </Button>
                    : ''
                    }
                </div>
                <div className={content}>
                    <div className={"layout__header"}>
                        <div style={{ textAlign: "initial" }}>
                            <p>Welcome back, <span className='text-primary fw-600'>John Doe</span></p>
                            <p className='f-12 text-secondary'>Glad to see you here again</p>
                        </div>
                        <div className={"layout__header__menu"}>
                            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='user' className='rounded-circle' width={34} height={34} />
                        </div>
                    </div>
                    <div style={{ padding: '3%' }}>
                        {children}
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default Layout;
