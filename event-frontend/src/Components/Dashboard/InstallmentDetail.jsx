import React from 'react';
import { Column } from '@ant-design/plots';

const InstallmentDetail = () => {
  const DemoColumn = () => {
  const data = [
    {
      type: 'Total Paid Amount',
      sales: 1252323,
    },
    {
      type: 'Total Unpaid Amount',
      sales: 15652323,
    },
    {
      type: 'Amount to be paid this month',
      sales: 1252323,
    }
  ];
    // const config = {
    //   data,
    //   xField: 'type',
    //   yField: 'sales',
    //   // remove x-axis line and label
    //   xAxis: {},     
    //   minColumnWidth: 15,
    //   maxColumnWidth: 20,
    //  autofit: true
    // };

    const config = {
          data,
          xField: 'type',
          yField: 'sales',
          autoFit: true,
          xAxis: {
            label: {
              autoHide: true,
              autoRotate: false,
            },
          },
          yAxis: {
            // remove y-axis line and label
            line: null,
            label: null,
          },
          minColumnWidth: 25,
          maxColumnWidth: 25,
          meta: {
            type: {
              alias: 'Type',
            },
            sales: {
              alias: 'Sales',
            },
          },
        };

    return <Column {...config} />;
  };
  
  return (
    <div className='container-fluid m-0 p-0 row installment-wrapper my-3 d-flex justify-content-center align-items-center'>
      <div className='col-10' style={{height: 300}}>
      <DemoColumn />
      </div>
    </div>
  )
}

export default InstallmentDetail;


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Column } from '@ant-design/plots';

// const DemoColumn = () => {
//   const data = [
//     {
//       type: '家具家电',
//       sales: 38,
//     },
//     {
//       type: '粮油副食',
//       sales: 52,
//     },
//     {
//       type: '生鲜水果',
//       sales: 61,
//     },
//     {
//       type: '美容洗护',
//       sales: 145,
//     },
//     {
//       type: '母婴用品',
//       sales: 48,
//     },
//     {
//       type: '进口食品',
//       sales: 38,
//     },
//     {
//       type: '食品饮料',
//       sales: 38,
//     },
//     {
//       type: '家庭清洁',
//       sales: 38,
//     },
//   ];
//   const config = {
//     data,
//     xField: 'type',
//     yField: 'sales',
//     xAxis: {
//       label: {
//         autoHide: true,
//         autoRotate: false,
//       },
//     },
//     meta: {
//       type: {
//         alias: '类别',
//       },
//       sales: {
//         alias: '销售额',
//       },
//     },
//     minColumnWidth: 20,
//     maxColumnWidth: 20,
//   };
//   return <Column {...config} />;
// };

// ReactDOM.render(<DemoColumn />, document.getElementById('container'));
