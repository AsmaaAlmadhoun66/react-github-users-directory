import React, {Component} from 'react';
import axios from 'axios';

export class UserItem extends Component{
    render() {
        const { avatar_url, login, id } = this.props.user
        return(
            <div className='card '>
                <div className='card-title'>
                    <img src={avatar_url} alt="img-holder" className='img-round App-logo'/>
                </div>
                <div className="card-body">
                    <a className='btn btn-info' href={id}>
                        {login}
                    </a>
                </div>
            </div>
        )
    }
}
export default UserItem;