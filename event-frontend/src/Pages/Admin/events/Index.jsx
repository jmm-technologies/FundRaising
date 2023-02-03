import React, { useEffect } from 'react';
import DatatableComponent from "../../../Components/Common/DatatableComponent";
import DeleteButton from "../../../Components/Common/DeleteButton";
import editicon from "../../../assets/images/Icons/edit-icon.svg";
import TitleAction from "../../../Components/Common/TitleAction";
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../../Layout/Admin/Layout';
import HeaderWithSearchBtn from '../../../Components/Common/HeaderWithSearchBtn';
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../../features/showevents/showEventSlice";

function ProjectList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector((state) => state.eventSlice);
    const data = result.events;
    const columns = [
        {
            name: 'Blog name',
            width: "20%",
            // selector: (row) => row.name,   
            selector: (row) => row.name.length > 20 ? row.name.slice(0, 20) + '...' : row.name
        },
        {
            name: 'Description',
            width: "50%",
            selector: (row) =>
                <Link
                    to={`/event/${row.id}`}                >
                    {
                    row.description.length > 50 ? row.description.slice(0, 50) + '...' : row.description
                    }
                </Link>,

        },
        {
            name: 'Date',
            width: "20%",
            selector: (row) => row.createdAt,
        },
        {
            name: <TitleAction />,
            width: "10%",
            selector: (row) => (
                <div className="my-2 d-flex align-items-center">
                    <Link
                        to={`/event/${row.id}`}
                    >
                        <img
                            className="icon-13 mr-15 action-edit-icon"
                            src={editicon}
                            alt="Edit"
                        />
                    </Link>
                    <DeleteButton
                        name="Items"
                        id={row.id}
                    />
                </div>
            ),
        }
    ]
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch, navigate]);
    return (
        <Layout activePage={'events list'}>
            <div className='card-wrapper p-3 my-4'>
                <HeaderWithSearchBtn
                    title={'List of plots'}
                    desc={`${data?.length}`}
                    btnText={'Create new'}
                    goto={'/createevent'}
                />
            </div>
            <div className={"card-wrapper"}>
                <DatatableComponent data={data} columns={columns} />
            </div>
        </Layout>
    );
}

export default ProjectList;
