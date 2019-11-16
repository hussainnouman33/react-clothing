import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {id: 1, title: "Hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png",linkUrl:'hats'},
                {id: 2, title: "Jackets", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",linkUrl:''},
                {id: 3, title: "Sneakers", imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",linkUrl:''},
                {id: 4, title: "Womens", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",size:'large',linkUrl:''},
                {id: 5, title: "Men", imageUrl: "https://i.ibb.co/R70vBrQ/men.png",size:'large',linkUrl:''}
            ]
        }
    }

    render() {
        return (

            <div className='directory-menu'>{
                this.state.sections.map(({ id,...otherSectionProps}) =>
                    // console.log(...otherSectionProps)
                    <MenuItem key={id} {...otherSectionProps} />
                )
            }
            </div>
        )
    }
}
export default Directory;



