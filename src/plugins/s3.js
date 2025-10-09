import fp from "fastify-plugin";
import { S3Client } from "@aws-sdk/client-s3";

async function s3Plugin(fastify) {
    const s3 = new S3Client({
        region: process.env.AWS_DEFAULT_REGION,
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });

    fastify.decorate("s3", s3);
}

export default fp(s3Plugin);
