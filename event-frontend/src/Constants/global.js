
export const formatErrors = (errors) => {
    return Object.keys(errors).map((k) => {
        return {
            name: k,
            errors: [errors[k]],
            validateStatus: "error",
        };
    });
};

export const status = {
    1: (
        <p className={"text-success"}>
            Active <span className={"f-18"}>&#8226;</span>
        </p>
    ),
    0: (
        <p className={"text-danger"}>
            Inactive <span className={"f-18"}>&#8226;</span>
        </p>
    ),
};

export const StatusData = ({ data }) => {
    const record = [
        {
            label: (
                <p className={"text-danger"}>
                    {"Inactive"} <span className={"f-18"}>&#8226;</span>
                </p>
            ),
        },
        {
            label: (
                <p className={"text-success"}>
                    {"Active"} <span className={"f-18"}>&#8226;</span>
                </p>
            ),
        },
    ];

    return record[data].label;
};

export const ImageDataFilter = (images) => {
    const ImageArray = [];
    if (images) {
        if (images.fileList) {
            images.fileList?.map((item) =>
                item.originFileObj
                    ? ImageArray.push(item?.originFileObj)
                    : ImageArray.push(item.url)
            );
        } else {
            images.map((item) => ImageArray.push(item.image));
        }
    }
    return ImageArray;
};

export const OrderStatusOptions = [
    { label: "Pending", value: 0 },
    { label: "On the Way", value: 1 },
    { label: "Delivered", value: 2 },
    { label: "Cancelled", value: 3 },
];
export const OrderStatusOptionsFilters = [
    { label: "All", value: 4 },
    { label: "Pending", value: 0 },
    { label: "On the Way", value: 1 },
    { label: "Delivered", value: 2 },
    { label: "Cancelled", value: 3 },
];

// ---------------------------------
// For Image Upload
// ---------------------------------

export const ReturnImagesForDefaultList = (defaultFileList) => {
    return typeof defaultFileList === "string"
        ? [
              {
                  uid: 1,
                  name: defaultFileList.split("/")[2],
                  url: window.location.origin + "" + defaultFileList,
              },
          ]
        : defaultFileList.length > 0 &&
              defaultFileList.map((el) => ({
                  ...el,
                  uid: el.id,
                  url: el.image,
                  name: el.image.split("/")[2],
              }));
};

export const BeforUploadFileCheck = (File, acceptVideo) => {
    return (
        File.type === "image/jpeg" ||
        File.type === "image/png" ||
        File.type.includes("image/svg") ||
        (acceptVideo && File.type === "video/mp4")
    );
};

export const FileSizeCheck = (file, acceptVideo) => {
    let isLt2M = file.size / 1024 / 1024;

    if (acceptVideo && file.type === "video/mp4") {
        isLt2M = isLt2M < 20;
    } else {
        isLt2M = isLt2M < 2;
    }
    return isLt2M;
};

// ---------------------------------
// Check Length of Object
// ---------------------------------
export const CheckLengthOfObject = (data) => {
    return Object.keys(data).length > 0;
};
