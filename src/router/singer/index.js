import SingerDetail from '@/components/singerDetail'

export default{
    path : '/singer',
    component : ()=>import('@/views/singer'),
    children : [
        {
            path : ':id',
            component : SingerDetail
        }
    ]
}