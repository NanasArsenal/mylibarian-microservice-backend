import { Client,Storage,Account } from "node-appwrite";
import dotenv from 'dotenv';
import { getEnvVar } from "../utility/getEnvar";
dotenv.config();

const appwriteClient = new Client();
appwriteClient
        .setEndpoint(getEnvVar('APPWRITE_ENDPOINT'))
        .setProject('APPWRITE_PROJECTID')
        .setKey('APPWRITE_PROJECTAPIKEY')

const storage = new Storage(appwriteClient);

