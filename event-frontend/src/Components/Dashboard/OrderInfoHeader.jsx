import { Divider, Progress } from 'antd'
import React from 'react'
import FileIcon from '../../assets/images/Icons/file';
import BellIcon from '../../assets/images/Icons/bell';
import LayerIcon from '../../assets/images/Icons/layer';
// import { useLanguage } from '../../Constants/LanguageContext'

function OrderInfoHeader() {
    // const { t } = useLanguage();

    const OrderData = [{
        key: 0,
        totalProjects: 1120,
        label: 'Total projects',
        icon: <FileIcon />,
    },
    {
        key: 1,
        totalProjects: 1120,
        label: 'Total Plots',
        icon: <LayerIcon />

    },
    {
        key: 2,
        totalProjects: 155,
        label: 'New Installment request',
        icon: <LayerIcon />//<BellIcon/>

    }];
    return (
        <div className='container-fluid m-0 p-0 row'>
            {
                OrderData?.map((el, i) => {
                    return <div className="col" key={i}>
                        <div className="card-wrapper p-19-17px my-2 my-lg-0 pb-1">
                            <div className="d-flex justify-content-between">
                                <span>{el.icon}</span>
                                <span>
                                    <p className="f-22 fw-500 text-primary text-end" >{el?.totalProjects}</p>
                                    <p className="f-14 fw-400 text-secondary" >{el?.label}</p>
                                </span>
                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between mt-4">
                                <div className='my-0 py-0'>
                                    <p className="text-secondary f-13">Total<span className='mx-2 text-black'>{el?.totalProjects}</span></p>
                                    <Progress percent={50} size="small" showInfo={false} strokeColor="#00B16A" strokeWidth={4} />
                                </div>
                                <div>
                                    <p className="text-secondary f-13">Sold<span className='mx-2 text-black'>{el?.totalProjects}</span></p>
                                    <Progress percent={50} size="small" showInfo={false} strokeColor="#00B16A" strokeWidth={4} />
                                </div>
                            </div>
                            {/* <Progress percent={(el?.totalProjects * 100 / OrderInfoData?.total_order).toFixed(0)} format={(a, b) => ""}
                                status='active' strokeColor={barColors[el?.key]} /> */}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default OrderInfoHeader;
