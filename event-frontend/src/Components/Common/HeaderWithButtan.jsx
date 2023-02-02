import React, {useEffect} from 'react'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom';

const HeaderWithButtan = ({title, desc,btnText, goto,...rest}) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
        setWidth(window.innerWidth);
      }, [width]);
      const navigate = useNavigate();
    return (
      <div className="custom-card-header row gap-3">
      <div className="col">
          <p className={"text-secondary f-18 fw-500"}>{title}</p>
          <p className={"text-muted f-14 "}>{desc}</p>
      </div>
      <div className="col d-flex justify-content-end">
        <Link to={goto}>
      <Button className='primary--btn'>{btnText}</Button>
      </Link>
      </div>
  </div>
    )
  }

export default HeaderWithButtan;