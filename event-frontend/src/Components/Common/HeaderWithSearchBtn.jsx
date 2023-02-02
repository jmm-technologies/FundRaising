import React, { useEffect } from 'react'
import SearchInput from './SearchInput'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const Header = ({title, desc,btnText, goto,...rest}) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  const navigate = useNavigate();
  return (
    <div className="row gap-3">
    <div className="col d-flex align-items-center">
        <p className="f-18 fw-500 mx-2">{title}</p>
        <p className="f-16 fw-400 text-primary mx-3">{desc}</p>
    </div>
    <div className="col d-flex justify-content-end">
        <div className='mx-3' style={{height: 40,
        width: width > 768 ? 300 : 200
        }}>
            <SearchInput
            //show serch icon in placeholder
            placeholder='Search'
             />
            </div>
    <Button className='primary--btn' onClick={() => navigate(goto)}>{btnText}</Button>
    </div>
</div>
  )
}

export default Header;