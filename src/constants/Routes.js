import Home from '../sections/home/Home';
import Speakers from '../sections/speakers/Speakers';
import Sponsors from '../sections/sponsors/Sponsors';
import Blog from '../sections/blog/Blog';
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
    text: 'Blog',
    path: '/blog'
}, {
    text: 'Participar',
    path: '/participar'
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
    component: Blog,
    path: '/blog'
}, {
    component: Participate,
    path: '/participar'
}];
