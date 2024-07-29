import {conf} from '../conf/conf';
import { client, ID, Databases, Storage, Query } from 'appwrite'; 

export class DatabaseService{
    client = new client;
    databases;
    bucket;

    constructor(){
        this.client
            set.Endpoint(conf.appwriteUrl);
            set.project(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImagestatus,userId,status}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteDocumentId,
                slug,
                {
                    title,
                    content,
                    featuredImagestatus,
                    userId,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite service :: createPost :: error",error)
        }
    }

    async updatePost(slug, {title, content, featuredImagestatus, status}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                conf.appwriteDocumentId,
                slug,
                {
                    title,
                    content,
                    featuredImagestatus,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite service :: updatePost :: error")
        }
    }
}

const databaseService = new DatabaseService
export default databaseService