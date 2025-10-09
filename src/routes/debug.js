import { ListBucketsCommand } from "@aws-sdk/client-s3";

export default async function debugRoutes(fastify) {
    fastify.get("/debug/buckets", async (req, reply) => {
        try {
            const resp = await fastify.s3.send(new ListBucketsCommand({}));
            return { buckets: resp.Buckets || [] };
        } catch (err) {
            fastify.log.error(err);
            return reply
                .code(500)
                .send({ error: "s3 error", detail: err.message });
        }
    });
}
