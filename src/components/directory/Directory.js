import React from 'react'
import MenuItem from "../menu-item/MenuItem";
import {connect} from 'react-redux'
import './directory.scss'
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import { createStructuredSelector }from 'reselect'

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps}) => (
                <MenuItem
                    key={id}
                    {...otherSectionProps}
                />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);