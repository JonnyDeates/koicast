import React, {Component} from 'react';
import MeetTheDeveloper from "./MeetTheDeveloper/MeetTheDeveloper";
import Page from "../Page/Page";
import ImageCoursel from "./ImageCarousel/ImageCoursel";
import yinyang1 from "../assets/brand/yinyangbg.png";
import yinyang2 from "../assets/brand/yinyangbg2.png";
class About extends Component {

    render() {
        const imageCoursel = [{img: yinyang1, alt: 'Add Page'}, {img: yinyang2, alt: 'Add Page'}];
        return (<>
            <Page page={this.props.page}/>
            <ImageCoursel imageUrls={imageCoursel}/>
            <MeetTheDeveloper/>
        </>)
    }
}

export default About;