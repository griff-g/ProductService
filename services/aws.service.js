import AWS from "aws-sdk";
import {responseSend} from "../utils/server.util.js";


const s3Client = new AWS.S3({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
    },
    region: process.env.AWS_REGION,
});

class AwsService {
    constructor(s3Client) {
        this.s3Client = s3Client;
    }

    async uploadToS3(imageToUpload, fileName, publicAccess = 0) {
        try {
            let awsPath = process.env.AWS_PRIVATE_IMAGE_PATH;
            const awsPayload = {
                Bucket: process.env.AWS_BUCKET,
                Body: imageToUpload,
            };
            if (publicAccess) {
                awsPath = process.env.AWS_PUBLIC_IMAGE_PATH;
                awsPayload.ACL = "public-read";
            }
            awsPayload.Key = awsPath + fileName;
            const result = await s3Client.upload(awsPayload).promise();
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
    async signedURL(imageURL) {
        try {
        const params={
            Bucket:process.env.AWS_BUCKET,
            Key:imageURL,
            Expires:60
        }
            return s3Client.getSignedUrl("getObject",params)

        } catch (error) {
            throw new Error(error);
        }
    }
}

export default AwsService;
