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
    path: '/about',
}, {
    text: 'Expositores',
    path: '/speakers'
}, {
    text: 'Auspiciadores',
    path: '/sponsors'
}, {
    text: 'Equipo',
    path: '/team'
}, {
    text: 'Participar',
    path: '/participate'
}];

export const COMPONENT_ROUTES = [{
    component: About,
    path: '/about',
}, {
    component: Home,
    path: '/',
    exact: true
}, {
    component: Speakers,
    path: '/speakers'
}, {
    component: Sponsors,
    path: '/sponsors'
}, {
    component: Participate,
    path: '/participate'
}, {
    component: Team,
    path: '/team'
}];