import React, {Component} from 'react';
import YouTube from '../YouTube/YouTube';
import './Home.css'
class Home extends  Component {
    render() {
        return (<main className={'home-component'}>
            <h2>{this.props.page.header}</h2>
            <YouTube title={this.props.page.youtube.title} link={this.props.page.youtube.link} description={this.props.page.youtube.description} isAbove={this.props.page.isAbove}/>
        </main>)
    }
}
export default Home;