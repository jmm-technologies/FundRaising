import { AutoComplete, Input } from 'antd';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchInput from '../Common/SearchInput';
// import { useLanguage } from '../../Constants/LanguageContext';
const { Search } = Input;

const Serach = () => {
  const [options, setOptions] = useState([]);
  const [width , setWidth] = useState(window.innerWidth);
  // const { t, getLangtext } = useLanguage();

  const handleSearch = (value) => {
    // axios.post(route('admin.global-search'), { search: value }).then((res) => {
    //   const { data } = res.data
    //   console.log(data)
    //   let res1 = [];
    //   if (!value) {
    //     res1 = [];
    //   } else {
    //     res1 = data.map((el) => ({
    //       value,
    //       label: (
    //         <div
    //           style={{
    //             display: 'flex',
    //             borderBottom: '1px solid #d9d9d9',
    //             paddingBottom: "5px",
    //           }}
    //           key={el.url}
    //         >
    //           <InertiaLink href={el.url} className='text-decoration-none' >
    //             <p className=' f-13 fw-500'>

    //               {getLangtext(el?.en_title, el?.ar_title)}
    //             </p>
    //             <div className='d-flex gap-1  mt-2'>
    //               <p className='f-12'>
    //                 {t('type')}:
    //               </p>
    //               <p className='f-12 fw-600'>
    //                 {t(el?.type)}
    //               </p>

    //             </div>
    //           </InertiaLink>
    //         </div>
    //       ),
    //     }));
    //   }
    //   setOptions(res1);
    //   // setOptions()
    // })

  }
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  return (

    <AutoComplete
      style={{
        width: 200//width > 768 ? 300 : 200,
      }}
      onSearch={handleSearch}
      options={options}
      allowClear={true}

      placeholder={'Search ...'}
      className='primary-input'

    >
      {/* <Input.Search size="large" placeholder={'input search text'} /> */}
      {/* <SearchInput
        //show serch icon in placeholder
        placeholder='Search by CNIC , File Number , Phone Number'
      /> */}
    </AutoComplete>
  )
}

export default React.memo(Serach)