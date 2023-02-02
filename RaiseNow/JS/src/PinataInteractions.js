
// const axios = require('axios');
import axios, {isCancel, AxiosError} from 'axios';
import FormData from 'form-data';
// const FormData = require('form-data');

//const NEXT_PINATA_API_KEY=process.env.NEXT_PUBLIC_PINATA_API_KEY
//const NEXT_PINATA_API_SECRET=process.env.NEXT_PUBLIC_PINATA_API_SECRET

// const NEXT_PINATA_API_KEY=process.env.NEXT_PINATA_API_KEY
// const NEXT_PINATA_API_SECRET=process.env.NEXT_PINATA_API_SECRET


export const UploadDescoIPFS = async(description,key,secret) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios 
        .post(url, { desc: description } , {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret
            }
        })
        .then(function (response) {
           return {
               pinataHASH: response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            throw error.message

    });
};
export const UploadFileToIPFS = async (title, clasName, key, secret) => {

    var customfile = document.getElementsByClassName(clasName)[0].files[0]

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append('file', customfile);

    const metadata = JSON.stringify({
        name: title
    });
    data.append('pinataMetadata', metadata);

    // pinataOptions are optional
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
            regions: [
                {
                    id: 'FRA1',
                    desiredReplicationCount: 1
                },
                {
                    id: 'NYC1',
                    desiredReplicationCount: 2
                }
            ]
        }
    });
    data.append('pinataOptions', pinataOptions);

    return axios 
        .post(url, data, {
            maxBodyLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: key,
                pinata_secret_api_key: secret
            }
        }).then(function (response) {
            console.log("Img post response",response)
            return {
                pinataHASH: response.data.IpfsHash
            };
        })
        .catch(function (error) {
            console.log(error)
            throw error.message

        });
    //     .then(function (response) {
    //         console.log("image uploaded", response.data.IpfsHash)
    //         return {
    //            success: true,
    //            pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
    //        };
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //         return {
    //             success: false,
    //             message: error.message,
    //         }
    // });
};
export const PinataPublicGateway='https://gateway.pinata.cloud/ipfs';
export const aragon ='https://ipfs.eth.aragon.network/ipfs'
export const GetDescriptionFromPinata = async (hash) => {

    const url = `${aragon}/${hash}`;
    let result = await axios.get(url);
    return result.data.desc
}