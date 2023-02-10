import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class CalculosController {
  public async index({}: HttpContextContract) {}

  public async calculo_detalhado({request}: HttpContextContract) {
    const post = request.only(['gasolina_preco','alcool_preco','Gkm_l','Akm_l','distancia_viagem'])
    var mensagem

    /* Calculando a Gasolina*/
    const resultGasolina = ( post.distancia_viagem / post.Gkm_l ) * post.gasolina_preco

    /* Calculando o Álcool*/
    const resultAlcool = ( post.distancia_viagem / post.Akm_l ) * post.alcool_preco

    //console.log("Preço Gasto com a Gasolina: R$" + resultGasolina)
    //console.log()
    //console.log("Preço Gasto com a Álcool: R$" + resultAlcool)
    //console.log()
    if(resultGasolina > resultAlcool){
     // console.log("Melhor opção seria o Álcool")
      mensagem = "Preço Gasto com a Gasolina: R$" + resultGasolina + "\\n" + "Preço Gasto com a Álcool: R$"+ resultAlcool + "\\n" +"Melhor opção seria o Álcool"
    }else{
     // console.log("Melhor opção seria a Gasolina")
      mensagem = "Preço Gasto com a Gasolina: R$" + resultGasolina + "\\n" + "Preço Gasto com a Álcool: R$"+ resultAlcool + "\\n" +"Melhor opção seria a Gasolina"

    }
    

    return View.render("calculo_detalhado/resultado", {resultado: mensagem })

    
  }
  public async calculo_simples({request}: HttpContextContract) {
    const post = request.only(['gasolina_preco','alcool_preco'])
    var mensagem

 /* Calculando o Álcool*/
    const result = ( post.alcool_preco / post.gasolina_preco ) 
   
    if(result < 0.7){

      mensagem = "Melhor opção seria o Álcool"

    }else{

      mensagem = "Melhor opção seria a Gasolina"

    }
    

    return View.render("calculo_simples/resultado", {resultado: mensagem })

    
  }


}
