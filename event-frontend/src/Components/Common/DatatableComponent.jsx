import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../../features/showevents/showEventSlice";
const customStyles = {
    headCells: {
        style: {
            color: "#686874",
            fontSize: "14px",
        },
    },

    cells: {
        style: {
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
    },
    column: {
        style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
    }
};


const DatatableComponent = ({
    data,
    columns,
    pagination = true,
    ...rest
}) => {
    const dispatch = useDispatch();
    let paginationConfig = {};



    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch, data]);
return (
    <DataTable
        columns={columns}
        persistTableHead={true}
        data={data}
        pagination={pagination}
        customStyles={customStyles}
        keyField="id"
        highlightOnHover
        responsive
        {...paginationConfig}
        {...rest}
        noDataComponent={
            <div className="mt-5">no-records</div>
        }

    />
);
};
export default DatatableComponent;
