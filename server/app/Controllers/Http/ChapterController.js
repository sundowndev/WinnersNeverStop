'use strict'

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

    async create({ response, request }) {
        return response.send({
            data: request.body
        });
    }
}

module.exports = ChapterController
