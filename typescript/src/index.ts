import express, { response } from 'express'
import createUser from './services/CreateUser'

const app = express();

app.get ( '/', ( request, response ) => {
  const user = createUser ( {
    email: 'dsmanhaes@gmail.com',
    password: '123',
    techs: [
      'Node.js',
      'ReactJS', 
      {
        title: 'React Native',
        experience: 100
      }
    ]
  } )
  
  return response.json ( { user: user } )
} )

app.listen(3333)
