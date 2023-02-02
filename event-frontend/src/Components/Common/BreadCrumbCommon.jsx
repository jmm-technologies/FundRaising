import React from 'react';
import HomeIcon from "../../assets/images/Icons/home";
function BreadCrumbCommon({crumbs=[]}) {
    return (
        <div className={"d-flex breadcrumb-common"}>
            <HomeIcon/>
            {crumbs.map(crumb=>{
                return <p key={crumb} className={"mx-1"}>/ {" "}{crumb}</p>
        })}
        </div>
    );
}

export default BreadCrumbCommon;
