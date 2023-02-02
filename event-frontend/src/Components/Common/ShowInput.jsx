import React from 'react'

const ShowInput = ({title, desc, className = ''}) => {
    return (
        <>
            <h6 className="f-14 text-silver-mauve mt-4">
                {title}
            </h6>
            <p className="f-14 px-3 my-3 py-2 primary-show h-auto">{desc}</p>
        </>
    )
}

export default ShowInput