import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import SettingsIcon from "../../assets/images/nav/settingsicon.svg"
import UserIcon from "../../assets/images/nav/user.svg"
import LogoutIcon from "../../assets/images/nav/log-out.svg"
import { Link } from 'react-router-dom';
// import { useLanguage } from '../../Constants/LanguageContext';

const ShowProfile = ({gotoprofile, gotologin}) => {
  // const changeLanguage = useLanguage();
  // const { t } = changeLanguage;
  // const user = JSON.parse(localStorage.getItem('user'));
  const user = {
    fullname: "Demo User"
  }
  const items = [
    {
      label: <Button  className='d-flex align-items-center gap-2 w-100 profile-btn bg-primary'>
        <span className="rounded-profilePic">
          {/* aaa */}
        </span>
        <p className='text-white f-12'>{user?.fullname}</p>
      </Button >,
      key: '0',
    },
    {
      label:
        <Link
          to={gotoprofile}
        >
          <div className='d-flex align-items-center gap-2 w-100 p-4-15px mt-8'>
            <img
              className=" "
              src={UserIcon}
              alt="Edit"
            />
            <p className='text-secondary f-12'>{'Profile'}</p>

          </div>
        </Link>
      ,
      key: '1',
    },

    {
      label: <Link
        to={gotologin}
      >
        <div className='d-flex align-items-center gap-2 w-100 p-4-15px mt-5px'>
          <img
            className=" "
            src={LogoutIcon}
            alt="Edit"
          />
          <p className='text-secondary f-12'>{'Log out'}</p>

        </div>
      </Link>,
      key: '3',
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
      overlayClassName='nav-ProfileDropDown'
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>

          <img
            className=""
            src={SettingsIcon}
            alt="Edit"
          />
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default ShowProfile;
