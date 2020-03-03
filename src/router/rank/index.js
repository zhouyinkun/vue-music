export default{
    path : '/rank',
    component : ()=>import('@/views/rank'),
    children :[
        {
            path : ':id',
            component : ()=>import('@/components/rankDetail')
        }
    ]
}