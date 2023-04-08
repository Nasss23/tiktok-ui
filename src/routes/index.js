//Layout
import { HeaderOnly } from '@/components/Layout';

//Page
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import ProfilePages from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
//publicRoues
const publicRoues = [
    {
        path: '/', component: Home
    },
    {
        path: '/following', component: Following
    },
    {
        path: '/profile', component: ProfilePages
    },
    {
        path: '/upload', component: Upload, layout: HeaderOnly
    },
    {
        path: '/search', component: Search, layout: null
    },
]

const privateRoues = [

]

export { publicRoues, privateRoues }