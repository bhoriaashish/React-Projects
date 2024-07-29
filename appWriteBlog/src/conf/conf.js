//Environmentel Veriable
const config = {
    appwriteUrl:string(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:string(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId:string(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId:string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:string(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default config