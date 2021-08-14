import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import config from './config'

if (!getApps().length) initializeApp(config)

const auth = getAuth()

auth.languageCode = 'th'

export { auth }
