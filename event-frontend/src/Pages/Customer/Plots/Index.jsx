import React, { useEffect } from 'react';
import DatatableComponent from "../../../Components/Common/DatatableComponent";
import { Button } from "antd";
import DeleteButton from "../../../Components/Common/DeleteButton";
import editicon from "../../../assets/images/Icons/edit-icon.svg";
import TitleAction from "../../../Components/Common/TitleAction";
import { Link } from 'react-router-dom';
import Layout from '../../../Layout/Customer/Layout';
import { useNavigate } from "react-router-dom";
import HeaderWithSearchBtn from '../../../Components/Common/HeaderWithSearchBtn';
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../../features/showevents/showEventSlice";
function ProjectList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    // call showEventSlice using Dispatch
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);
    // call showEventSlice using useSelector
    const result = useSelector((state) => state.eventSlice);
    const data = result.events;
    const total = 10;
    console.log('in eventlist')
    console.log(result.events)
    // console.log(
    //     data.map((item) => item.id)
    //     );




    // console.log()
    // const changeLanguage = useLanguage();
    // const { getLangtext, t } = changeLanguage;
    // create a data using loop
    // const data = [];
    // for (let i = 1; i <= 100; i++) {
    //     data.push({
    //         s_no: `${i}`,
    //         plot_id : `PN- ${i}`,
    //         area: `Demo Area - ${i}`,
    //         address: `Demo Address - ${i}`,
    //     });
    // }

    //     }
    // ];
    const columns = [
        {
            name: 'Blog name',
            width: "20%",
            selector: (row) => row.name,
        },
        {
            name: 'Description',
            selector: (row) =>
                <Link to="/user/plotdetail">
                    {row.description}
                </Link>,

        },
        {
            name: 'Date',
            width: "20%",
            selector: (row) =>
                <Link to="/user/plotdetail">
                    {row.createdAt}
                </Link>,
        },
        {
            name: <TitleAction />,
            width: "10%",
            selector: (row) => (
                <div className="my-2 d-flex align-items-center">
                    <Link
                        to={`/admin/customer/${row.id}`}
                    >
                        <img
                            className="icon-13 mr-15 action-edit-icon"
                            src={editicon}
                            alt="Edit"
                        />
                    </Link>
                    <DeleteButton
                        name="Items"
                    />
                </div>
            ),
        }
    ]
    return (
        <Layout activePage={'List of plots'}>
            <div className='card-wrapper p-3 my-4'>
                    <HeaderWithSearchBtn
                title={'List of plots'}
                desc={`${total}`}
                btnText={'Create new'}
                onClick={() => navigate('/user/addplot')}
            />
            </div>
        <div className={"card-wrapper"}>
            <DatatableComponent data={data} columns={columns} />
        </div>
        </Layout>
    );
}

export default ProjectList;
