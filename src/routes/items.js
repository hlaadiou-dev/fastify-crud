export default async function itemsRoutes(fastify, opts) {
    const { Item } = fastify.models;

    const itemSchema = {
        type: 'object',
        required: ['name', 'price'],
        properties: {
            name: { type: 'string' },
            price: { type: 'number' }
        }
    }

    fastify.get('/', async () => {
        return await Item.findAll();
    });

    fastify.get('/:id', async (req, reply) => {
        const item = await Item.findByPk(req.params.id);
        if (!item)
            return reply.code(404).send({ error: 'Item not found'});
        return item;
    });

    fastify.post('/', { schema: { body: itemSchema }}, async (req, reply) => {
        const created = await Item.create(req.body);
        return reply.code(201).send(created);
    });

    fastify.put('/:id', { schema: { body: itemSchema }}, async (req, reply) => {
        const item = await Item.findByPk(req.params.id);
        if (!item)
            return reply.code(404).send({ error: 'Item not found' });
        await item.update(req.body);
        return item;
    });

    fastify.delete('/:id', async (req, reply) => {
        const item = await Item.findByPk(req.params.id);
        if (!item)
            return reply.code(404).send({ error: 'Item not found' });
        await item.destroy();
        return reply.code(204).send();
    });
};