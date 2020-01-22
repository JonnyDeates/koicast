import React, {Component} from 'react';
import './YouTube.css'
class YouTube extends Component {
    render() {
        const isHeaderAbove = !!(this.props.isAbove) ? this.props.isAbove : false;
        const description = !!(this.props.description) ? <>{this.props.description.map((desc, i) => <p key={i}>{desc}</p>)}</> : '';
        return(<div className={'youtube-component'}>
            {(isHeaderAbove) ?             <h3 title={'Goto '+ this.props.title + ' or https://www.youtube.com/watch?v=' + this.props.link}
                                               className={'youtube-component-top-header'}
                                               onClick={()=>window.open('https://www.youtube.com/watch?v='+this.props.link)}>{this.props.title}</h3> : ''}
            <iframe width="560" height="315" src={'https://www.youtube.com/embed/'+this.props.link} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={this.props.title}
                    allowFullScreen/>
            {(!isHeaderAbove) ?             <h3 title={'Goto '+ this.props.title + 'or https://www.youtube.com/watch?v=' + this.props.link}
                                               onClick={()=>window.open('https://www.youtube.com/watch?v='+this.props.link)}>{this.props.title}</h3> : ''}
            {description}
        </div>)
    }
}
export default YouTube;