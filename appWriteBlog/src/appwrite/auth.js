import {conf} from '../conf/conf';
import {client, Account, ID} from 'appwrite'

export class AuthService{
    client = new client();
    Account;

    constructor(){
        this.client
            set.Endpoint(appwriteUrl)
            set.Project(appwriteProjectId)
        this.Account = new Account(this.client)
    }
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.Account.create(ID.unique(), email, password, name)
            if (userAccount){
                return this.login({email, password})
            } else{
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        try {
            return await this.Account.createEmailSession
            (email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
           return await this.Account.get() 
        } catch (error) {
           console.log("Appwite service :: getCurrentUser :: error", error)
        }
        return null;
    }

    async logout() {
        try {
            return await this.Account.deleteSessions();
        } catch (error) {
            console.log("Appwrite sessions :: logout :: error", error)
        }
    }
}

const authService = new AuthService
export default authService