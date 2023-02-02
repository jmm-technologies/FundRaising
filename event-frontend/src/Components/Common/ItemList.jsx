import React from 'react'

const ItemList = ({ heading, items, className, textalign }) => {
    return (
        <div className={className}>
            <h3 className="f-18 mb-3">{heading}</h3>
            {items.map((item, index) => {
                return (
                    <div key={index} className="d-flex justify-content-between gap-2 mt-10">
                        <p className="w-auto text-secondary f-14 fw-500">{item.name}</p>
                        <p className={`w-75 f-14 fw-500 ${textalign}`}>{item.value}</p>
                    </div>
                )
            })
            }
        </div>
    )
}
export default ItemList