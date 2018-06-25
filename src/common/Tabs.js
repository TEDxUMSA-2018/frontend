import React from 'react';

class Tabs extends React.Component {
    state = {
        activeIndex : 0
    };

    renderNavItem(key) {
        let tab = this.props.children[key];
        const tabClass = this.state.activeIndex == key ? 'is-active' : '';
        return (
            <li key={ key } className={ `desktop-tab ${ tabClass }` }>
                <a onClick={ this.handleOnClick.bind(this, key) }>{ tab.props.title }</a>
            </li>
        );
    }

    render() {
        let index = 0;
        const { activeIndex } = this.state;
        const { tabsTitle } = this.props;

        let tabs = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                active: child.props.active === true ? true : (activeIndex == index++)
            });
        });

        return (
            <div className="custom-tabs container">
                <div className="section-header columns is-hidden-tablet">
                    <div className="column is-6">
                        <h3 className="title">{ tabsTitle }</h3>
                    </div>
                </div>
                <div className="columns">
                    <div className="AppFeatureMenu column is-3 is-hidden-mobile">
                        <aside className="menu tab-menu">
                            <h3 className="title">{ tabsTitle }</h3>
                            { this._get_package_tabs() }
                        </aside>
                    </div>
                    <div className="column">
                        <div className="tabs is-hidden-tablet">
                            { this._get_package_tabs() }
                        </div>
                        { tabs }
                    </div>
                </div>
            </div>
        )
    }

    _get_package_tabs = () =>
        <ul className="menu-list">
            { Object.keys(this.props.children).map(this.renderNavItem.bind(this)) }
        </ul>

    handleOnClick(key, event) {
        event.preventDefault();
        this.setState({
            activeIndex : key
        });
    }
}

const Tab = props => {
    const activeClass = props.active ? 'is-active' : '';
    return (
        <div className={ `tab-content ${activeClass}` }>
            { props.children }
        </div>
    );
}
Tab.defaultProps = { 
    active : false 
};

export { Tabs, Tab }