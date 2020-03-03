import jsonp from '@/common/js/jsonp'
import{params,options} from '../config'
import axios from 'axios'


export function getHotKey(){
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
    const data = Object.assign({},params,{
        notice: 0,
		format: 'json',
		platform: 'h5',
		needNewCode: 1,
		uin: 0
    })
    return jsonp(url,data,options)
}

//后台接口代理，处理跨域问题
export function getSearchResult(query,page,zhida,perpage){
	const url = '/api/QQsearch'
	const data = Object.assign({},params,{
		uin: 0,
		format: 'json',
		notice: 0,
		platform: 'h5',
		needNewCode: 1,
		w: query,
		zhidaqu: 1,
		catZhida: zhida? 1 : 0,
		t: 0,
		flag: 1,
		ie: 'utf-8',
		sem: 1,
		aggr: 0,
		perpage: perpage,
		n: perpage,
		p: page,
		remoteplace: 'txt.mqq.all',
	})
	return axios.get(url,{
		params: data
	}).then((res)=>{
		return Promise.resolve(res.data)
	})
}