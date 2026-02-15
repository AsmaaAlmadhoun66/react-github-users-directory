import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component{
    static  defaultProps = {
        title: 'Github title',
        icon: 'fa fa-star'
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
    render() {
        return(
            <nav className='bg-primary text-white'>
                <i className={this.props.icon}></i>
                {this.props.title}
            </nav>
        )
    }
}
export default Navbar;