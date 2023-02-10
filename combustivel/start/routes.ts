/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('index')
})

Route.get('/calculo_detalhado', async ({ view }) => {
  return view.render('calculo_detalhado/index')
}) // rederizando o calculo detalhado

Route.post('/calculo_detalhado','CalculosController.calculo_detalhado') //Rota para cálculo detalhado



Route.get('/calculo_simples', async ({ view }) => {
  return view.render('calculo_simples/index')
}) // rederizando o calculo simples

Route.post('/calculo_simples','CalculosController.calculo_simples') //Rota para cálculo simples

