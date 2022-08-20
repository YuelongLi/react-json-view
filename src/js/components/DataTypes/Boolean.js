import React from 'react';
import DataTypeLabel from './DataTypeLabel';

//theme
import Theme from './../../themes/getStyle';

export default class extends React.PureComponent {
    render() {
        const type_name = 'bool';
        const { props } = this;

        return (
            <div {...Theme(props.theme, 'boolean')}>
                <DataTypeLabel type_name={type_name} {...props} />
                <input type='checkbox' checked={props.value}/>
            </div>
        );
    }
}
