import { randomUUID } from "node:crypto"
import { serialize } from "node:v8"
import { sql } from "./db.js"

export class DatabasePostgres{
    #videos = new Map()

   async list(search){

        let videos

        if(search){
            videos = await sql`select * from videos where title like ${'%' + search + '%'}%"`
        } else {
            videos = await sql `select * from videos`
        }
        return videos
        
    }

    async create(video){
        const videoId = randomUUID()
        const { title, description, duration } = video
        await sql `insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration}) `
    }

    async update(videoId, video){
        const { title, description, duration } = video

        await sql `update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${videoId}`

    }

    async delete(id){

        await sql `delete from videos where id = ${id} `
    }
}