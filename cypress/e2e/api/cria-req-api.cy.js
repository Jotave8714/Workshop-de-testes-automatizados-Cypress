// API LOGIN
// cy.request({
//     method: "post",
//     url: "https://apis.hmg.unifor.br/sso/kc/auth",
//     body: {
//         "user": matricula,
//         "password": "11111111"
//     },
//     headers: {
//         'authorization': 'Basic bG9naW4tY2xpOlF2QUpIMVQzc21QclA2bE56TTVJbEtxRFpDVVJMVFF4',
//         'content-type': 'apuserplication/json'
//     },
// })
//----------------------------------------------------------------------------------------------\\

//API CRIA REQUERIMENTO
// cy.request({
// 	method: 'POST',
// 	url: `https://uol.hmg.unifor.br/requerimentos-digitais//publicar-versao`,
// 	headers: {
// 		'Cookie':`X-UNIFOR-API-Token=${token}`,
// 		'X-UNIFOR-API-TOKEN': token 
// 	},
// 	body: {
// 		"idRequerimento":codRequerimento,
// 		"idVersao":null,
// 		"dadosGerais":{
// 			"idDadosGerais":null,
// 			"dataDisponibilidade":{
// 				"idDataDisponibilidade":null,
// 				"tpDisponibilidade":"SP"
// 			},
// 			"stRequerimento":"A",
// 			"codigo":codRequerimento,
// 			"nome":nomeReq,
// 			"objetivo":objReq,
// 			"tipoAtendimento":"TT"
// 			,"tipoRequerente":"LS",
// 			"orientacoes":{
// 				"dsTexto": textoOrientacao,
// 				"dsLink":"",
// 				"cdUuid":null,
// 				"id":null
// 			},
// 			"regras":[],
// 			"notificacao":{
// 				"cdUuid":null,"dsTexto":"O processo do seu pedido foi aberto. Acesse o Unifor On-line e acompanhe o andamento.",
// 				"tpNotificacao":"TT",
// 				"tpModeloNotificacao":5,"id":79
// 			}
// 		},
// 		"componentesVariaveis":[],
// 		"finalProcesso":{
// 			"idFinalProcesso":null,
// 			"notificacaoDeferido":{
// 				"cdUuid":null,
// 				"dsTexto":"O processo do seu pedido foi deferido. Acesse o Unifor On-line e verifique o resultado.",
// 				"tpNotificacao":"TT",
// 				"tpModeloNotificacao":45,
// 				"id":2
// 			},
// 			"notificacaoIndeferido":{
// 				"cdUuid":null,
// 				"dsTexto":"O processo do seu pedido foi indeferido. Acesse o Unifor On-line e verifique o motivo.",
// 				"tpNotificacao":"TT",
// 				"tpModeloNotificacao":55,"id":3
// 			},
// 			"notificacaoCancelamento":{
// 				"cdUuid":null,
// 				"dsTexto":"O processo do seu pedido foi cancelado. Acesse o Unifor On-line e verifique o motivo.",
// 				"tpNotificacao":"TT",
// 				"tpModeloNotificacao":65,"id":4
// 			}
// 		}	
// 	}	
// })
//response.body.data
//-------------------------------------------------------------------------------------\\

//DELETAR REQUERIMENTO
// cy.request({
// 	method: 'DELETE',
// 	url: `https://uol.hmg.unifor.br/requerimentos-digitais//${idreq}/remover`,
// 	headers: {
// 		'Cookie':`X-UNIFOR-API-Token=${token}`,
// 		'X-UNIFOR-API-TOKEN': token 
// 	}
// }).then((response) => {
// 	expect(response.status).to.be.eq(204);
// });
