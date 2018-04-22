import About from '../sections/about/About';
import Home from '../sections/home/Home';
import Speakers from '../sections/speakers/Speakers';
import Sponsors from '../sections/sponsors/Sponsors';
import Participate from '../sections/participate/Participate';
import Team from '../sections/team/Team';

export const MENU_ROUTES = [{
    text: 'About',
    path: '/about',
}, {
    text: 'Home',
    path: '/'
}, {
    text: 'Speakers',
    path: '/speakers'
}, {
    text: 'Sponsors',
    path: '/sponsors'
}, {
    text: 'Participate',
    path: '/participate'
}, {
    text: 'Team',
    path: '/team'
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