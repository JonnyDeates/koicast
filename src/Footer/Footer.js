import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className={'footer-wrapper'}>
                <div className='footer'>
                    <a title={'Goto https://github.com/JonnyDeates/koicast'} href={'https://github.com/JonnyDeates/koicast'}>Github</a>
                    <a  title={'Goto https://jonnydeates.com'} href={'https://jonnydeates.com'}>Jonny Deates</a>
                    <a title={'Goto https://www.linkedin.com/in/jonnydeates/'} href={'https://www.linkedin.com/in/jonnydeates/'}>Linked-in</a>
                </div>
                <p>© 2019 Jonny Deates. All rights reserved.</p>

            </footer>
        );
    }
}

export default Footer;
