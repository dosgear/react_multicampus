import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListItem extends PureComponent {

    render() {
        let itemone = this.props.itemone;
        return (
            <li className="list-group-item list-group-item-success" >
                {itemone.no} : {itemone.item}
            </li>
        )
    }
}

ListItem.propTypes = {
    itemone: PropTypes.object.isRequired
};

export default ListItem;
