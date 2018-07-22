import About from '../sections/about/About';
import Home from '../sections/home/Home';
import Speakers from '../sections/speakers/Speakers';
import Sponsors from '../sections/sponsors/Sponsors';
import Blog from '../sections/blog/Blog';
import BlogAdmin from '../sections/blog/admin/BlogAdmin';
import Login from '../sections/blog/admin/Login';
import DummyProtected from '../sections/blog/admin/DummyProtected';
import Participate from '../sections/participate/Participate';
import Team from '../sections/team/Team';

export const MENU_ROUTES = [{
    text: 'Inicio',
    path: '/'
},{
    text: 'Equipo',
    path: '/equipo'
}, {
    text: 'Auspiciadores',
    path: '/auspiciadores'
}, {
    text: 'Expositores',
    path: '/expositores'
}, {
    text: 'Areas de Trabajo',
    path: '/areas'
}, {
    text: 'Participar',
    path: '/participar'
}, {
    text: 'Blog',
    path: '/blog'
}];

export const COMPONENT_ROUTES = [{
    component: Home,
    path: '/',
    exact: true
}, {
    component: Team,
    path: '/equipo'
}, {
    component: Sponsors,
    path: '/auspiciadores'
}, {
    component: Speakers,
    path: '/expositores'
}, {
    component: About,
    path: '/areas'
}, {
    component: Participate,
    path: '/participar'
}, {
    component: Blog,
    path: '/blog'
}];
