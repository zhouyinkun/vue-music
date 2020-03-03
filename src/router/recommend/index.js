export default{
    path : '/recommend',
    component : ()=>import('@/views/recommend'),
    children : [
        {
            path : ':id',
            component : ()=>import('@/components/recommendDetail')
        }
    ]

}