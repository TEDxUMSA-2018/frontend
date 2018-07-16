import About from '../sections/about/About';
import Home from '../sections/home/Home';
import Speakers from '../sections/speakers/Speakers';
import Sponsors from '../sections/sponsors/Sponsors';
import Blog from '../sections/blog/Blog';
import BlogAdmin from '../sections/blog/admin/BlogAdmin';
import Login from '../sections/blog/admin/Login';
import DummyProtected from '../sections/blog/admin/DummyProtected';
import Team from '../sections/team/Team';

export const MENU_ROUTES = [{
    text: 'Inicio',
    path: '/'
}, {
    text: 'Acerca de',
    path: '/acerca-de',
}, {
    text: 'Expositores',
    path: '/expositores'
}, {
    text: 'Auspiciadores',
    path: '/auspiciadores'
}, {
    text: 'Equipo',
    path: '/equipo'
}, {
    text: 'Blog',
    path: '/blog'
}];

export const COMPONENT_ROUTES = [{
    component: About,
    path: '/acerca-de',
}, {
    component: Home,
    path: '/',
    exact: true
}, {
    component: Speakers,
    path: '/expositores'
}, {
    component: Sponsors,
    path: '/auspiciadores'
}, {
    component: Team,
    path: '/equipo'
}, {
    component: Blog,
    path: '/blog'
}, {
    component: BlogAdmin,
    path: '/gestor-blog'
}, {
    component: DummyProtected,
    path: '/secret',
}, {
    component: Login,
    path: '/signin'
}];
