import React from "react";
import DataTable from "react-data-table-component";
// import { useLanguage } from "../../Constants/LanguageContext";
// import SystemNameCheck from '.././Constants/SystemNameCheck';
const customStyles = {
    headCells: {
        style: {
            color: "#686874",
            fontSize: "14px",
            // paddingLeft: "24px",
            // border: "1px solid #EEEEEE",
            // borderBottom: "none !important",
            // borderRight: "none !important",
        },
    },

    cells: {
        style: {
            fontSize: "14px",
            // paddingLeft: "24px",
            // border: "1px solid #EEEEEE",
            // borderTop: "none !important",
            // borderBottom: "none !important",
            // borderRight: "none !important",
        },
    },
};


const DatatableComponent = ({
    data,
    columns,
    pagination = true,
    ...rest
}) => {
    // let { total, currentPage, perPage } = usePage().props;
    let paginationConfig = {};
    // const changeLanguage = useLanguage();
    // const { language, t } = changeLanguage;
    // const fetchData = (page, newPerPage) => {
    //     Inertia.get(
    //         "",
    //         {
    //             page: page ?? currentPage,
    //             perPage: newPerPage ?? perPage,
    //         },
    //         {
    //             preserveState: true,
    //         }
    //     );
    // };
    const handlePageChange = (page) => {
        // fetchData(page);
    };
    const handlePerRowsChange = async (newPerPage, page) => {
        // fetchData(page, newPerPage);
    };
    // if (total && currentPage && perPage) {
    //     paginationConfig = {
    //         paginationServer: true,
    //         paginationTotalRows: total,
    //         onChangeRowsPerPage: handlePerRowsChange,
    //         onChangePage: handlePageChange,
    //         paginationDefaultPage: Number(currentPage),
    //         paginationPerPage: Number(perPage),
    //     };
    // }


    return (
        <DataTable
            columns={columns}
            persistTableHead={true}
            data={data}
            pagination={pagination}
            customStyles={customStyles}
            keyField="id"
            //border
            // striped
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
