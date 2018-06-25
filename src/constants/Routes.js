import About from '../sections/about/About';
import Home from '../sections/home/Home';
import Speakers from '../sections/speakers/Speakers';
import Sponsors from '../sections/sponsors/Sponsors';
import Participate from '../sections/participate/Participate';
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
}];