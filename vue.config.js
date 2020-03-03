
const path = require('path');


const express = require('express')
const app = express()
const axios = require('axios')
const apiRouter = express.Router()
app.use('/api',apiRouter)

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('common',resolve('src/common'))
    },
    devServer : {
        before(app){
			app.get('/api/QQsearch',function(req,res){
				var url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
				axios.get(url,{
					headers:{
						referer: 'https://c.y.qq.com/',
						host: 'c.y.qq.com'
					},
					params: req.query
				}).then((response)=>{
					res.json(response.data)
				}).catch((e)=>{
					console.log(e)
				})
			})
		}
    }
}
