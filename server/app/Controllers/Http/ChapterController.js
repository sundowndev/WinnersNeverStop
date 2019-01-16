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
        const [ chapterId ] = await Database
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
        return response.send({
            success: true,
            data: {}
        });
    }

    async delete({ request, response, params }) {
        return response.send({
            success: true,
            data: {}
        });
    }
}

module.exports = ChapterController
