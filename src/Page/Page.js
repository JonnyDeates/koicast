import React, {Component} from 'react';
import YouTube from '../YouTube/YouTube';
import PageSection from './PageSection/PageSection';
import './Page.css'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            introduction: '',
            youtube: '',
            conclusion: ''
        }
    }
    componentDidMount() {

        const header = !!(this.props.page.header) ? <h2>{this.props.page.header}</h2> : '';
        const introduction = !!(this.props.page.introduction) ? this.getSection(this.props.page.introduction) : '';
        const youtube = !!(this.props.page.youtube)
            ? this.props.page.youtube.map((video, i) => <YouTube key={i} title={video.title} link={video.link}
                                                                 description={video.description}
                                                                 isAbove={this.props.page.isAbove}/>) : '';
        const conclusion = !!(this.props.page.conclusion) ? this.getSection(this.props.page.conclusion) : '';
        this.setState({header, introduction, youtube, conclusion});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState !== this.state){
            this.forceUpdate()
        }
    }

    getSection(section) {
        const header = !!(section.header) ? section.header : null;
        const description = !!(section.description) ? section.description : null;
        const externalLink = !!(section.externalLink) ? section.externalLink : null;
        if (!!header && !!description && !!externalLink) {
            return <PageSection header={header} description={description} externalLink={externalLink}/>
        } else if (!!header && !!description && !(!!externalLink)) {
            return <PageSection header={header} description={description}/>
        } else if (!!header && !(!!description) && !!externalLink) {
            return <PageSection header={header} externalLink={externalLink}/>
        } else if (!(!!header) && !!description && !!externalLink) {
            return <PageSection description={description} externalLink={externalLink}/>
        } else if (!(!!header) && !(!!description) && !!externalLink) {
            return <PageSection externalLink={externalLink}/>
        } else if (!(!!header) && !!description && !(!!externalLink)) {
            return <PageSection description={description}/>
        } else if (!(!!header) && !(!!description) && !!externalLink) {
            return <PageSection externalLink={externalLink}/>
        } else if (!!header && !(!!description) && !(!!externalLink)) {
            return <PageSection header={header}/>
        } else {
            return ''
        }
    }

    render() {

        return (<main className={'page-component'}>
            {this.state.header}
            {this.state.introduction}
            {this.state.youtube}
            {this.state.conclusion}
        </main>)
    }
}

export default Page;