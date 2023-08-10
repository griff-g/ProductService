import AWS from "aws-sdk";

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

    async uploadToS3(imageToUpload,fileName) {
        const imagePath = process.env.AWS_PUBLIC_IMAGE_PATH + fileName;
        const result = await s3Client
            .upload({Bucket: process.env.AWS_BUCKET, Key: imagePath, Body: imageToUpload})
            .promise();
        return result
    }
}

export default AwsService;
