import React, {Component} from "react";
import koiIcon from '../assets/icons/yinyangyěxīn.png'
import './Header.css'
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            spin: false
        }
    }
    render(){
        const {spin} = this.state;
        return (<header className='header'>
            <h1>{this.props.header[0]}<img src={koiIcon} alt={'Yin Yang Yěxīn'}
                                           onClick={() => this.setState({ spin: true })}
                                           onAnimationEnd={() => this.setState({ spin: false })}
                                           className={spin ? 'spin' : ''}
            />{this.props.header[1]}</h1>

        </header>)
    }
}
export default Header;