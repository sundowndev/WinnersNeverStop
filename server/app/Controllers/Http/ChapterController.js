'use strict'

const Database = use('Database')
const Chapter = use('App/Models/Chapter')

class ChapterController {
    async getAll({ response, params }) {
        const data = await Chapter.all();

        return response.send({
            data: data
        })
    }

    async getOne({ response, params }) {
        const data = await Chapter.find(params.id);

        if (!data) {
            return response.send({
                success: false,
                message: 'Item not found.',
            })
        }

        return response.send({
            data: data,
        })
    }

    async create({ request, response }) {
        request.body.content = JSON.stringify(request.body.content);

        const [chapterId] = await Database
            .insert(request.body)
            .into('chapters')
            .returning('id')

        const chapter = await Chapter.find(chapterId);

        return response.send({
            success: true,
            data: chapter
        });
    }

    async edit({ request, response, params }) {
        if (request.body.content) {
            request.body.content = JSON.stringify(request.body.content);
        }

        const affectedRows = await Database
            .table('chapters')
            .where('id', params.id)
            .update(request.body)

        return response.send({
            success: true,
            data: {}
        });
    }

    async delete({ request, response, params }) {
        const affectedRows = await Database
            .table('chapters')
            .where('id', params.id)
            .delete()

        return response.send({
            success: true,
            data: {}
        });
    }
}

module.exports = ChapterController
