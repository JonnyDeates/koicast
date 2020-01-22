import React, {Component} from 'react';
import './PageSection.css'

class PageSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            header: '',
            description: '',
            youtube: '',
            linkOut: ''
        }
    }

    componentDidMount() {

        const header = !!(this.props.header) ? <h3>{this.props.header}</h3> : '';
        const description = !!(this.props.description) ? (typeof this.props.description === 'string') ? this.props.description : this.props.description.map((paragraph, i) => <p key={i}>{paragraph}</p>) : '';
        const linkOut = !!(this.props.externalLink) ?  <button onClick={() => window.open(this.props.externalLink.link)}>{this.props.externalLink.name}</button> : '';

        this.setState({header, description, linkOut});
    }
    render() {
        return (<main className={'page-section-component'}>
            {this.state.header}
            {this.state.description}
            {this.state.linkOut}
        </main>)
    }
}

export default PageSection;