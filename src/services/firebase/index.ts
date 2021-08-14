import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

import config from './config'

if (!getApps().length) initializeApp(config)

const firestore = getFirestore()
const storage = getStorage()
const auth = getAuth()

auth.languageCode = 'th'

export { firestore, auth, storage }
