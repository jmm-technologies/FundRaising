import React from "react";
import { useDispatch } from "react-redux";
import { Button, message, Modal } from "antd";
import RemoveCircleIcon from "../../assets/images/Icons/remove-circle.svg";
import RemoveCircleIconWhite from "../../assets/images/Icons/Delete_icon_white.svg";
import dangerIcon from "../../assets/images/Icons/danger.png";
import { deleteEvent } from "../../features/showevents/showEventSlice";

function DeleteButton({
    name = "",
    apiEndpoint = "",
    text = "",
    noOfItems = 0,
    showWhiteImg = false,
    id
}) {
    const [isDeleteAble, setIsDeleteAble] = React.useState(noOfItems === 0);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const dispatch = useDispatch();

    const toggleModalState = () => {
        setIsModalVisible(!isModalVisible);
    }
    const handleDelete = () => {
        dispatch(deleteEvent(id))
            .then((res) => {
                if (res.payload) {
                    message.success("Successfully deleted");
                }
            })
            .catch((err) => {
                message.error("Something went wrong");
            });
        toggleModalState();
    };
    return (
        <div>
            <span className="cursor-pointer" onClick={toggleModalState}>

                <img src={showWhiteImg ? RemoveCircleIconWhite : RemoveCircleIcon} alt="delete" />
                {text}
            </span>

            {isDeleteAble ? (
                <Modal
                    title={<p className={"f-18 fw-500"}>Delete Confirmation</p>}
                    open={isModalVisible}
                    footer={null}
                    onCancel={toggleModalState}
                >
                    <div className="d-flex flex-column align-items-center">
                        <p className={"f-14 fw-600 text-center w-100"} style={{
                            background: '#FFE8E8',
                            color: '#940909',
                            padding: '10px 20px',
                            marginTop: 20
                        }}>
                            Are you sure you want to delete this ?
                        </p>
                        <div className="d-flex justify-content-end w-100 mb-3" style={{ marginTop: 50 }}>
                            <Button onClick={toggleModalState} className={"mx-2"}>Cancel</Button>
                            <Button type={"primary"} onClick={handleDelete} danger >Delete</Button>
                        </div>
                    </div>
                </Modal>
            ) : (
                <>
                    <Modal
                        open={isModalVisible}
                        footer={null}
                        onCancel={toggleModalState}

                    >
                        <div className="d-flex flex-column align-items-center">
                            <img src={dangerIcon} alt="danger" />
                            <p className={"f-18 fw-600 text-danger"}>
                                You can not perform this action
                            </p>
                            <p className={"f-14 fw-500 text-muted w-75"} style={{ textAlign: 'center' }}>
                                Because this category contain {noOfItems} 'items, first you have to adjust them then you will be able to delete this
                            </p>

                            <Button className={"mt-2"} type={"primary"} onClick={toggleModalState} danger>OK</Button>
                        </div>
                    </Modal>
                </>
            )}
        </div>
    );
}

export default DeleteButton;
