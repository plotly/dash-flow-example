import * as React from 'react';

type Props = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id?: string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: string,

    /**
     * The value displayed in the input
     */
    value: string,

}

/**
 * ExampleFlowComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ExampleFlowComponent extends React.Component<Props> {
    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id}>
                ExampleFlowComponent: {label}
                <input
                    value={value}
                    onChange={e => {
                        /*
                         * Send the new value to the parent component.
                         * In a Dash app, this will send the data back to the
                         * Python Dash app server.
                         */
                         if (setProps) {
                             setProps({
                                value: e.target.value
                            });
                         }
                    }}
                />
            </div>
        );
    }
}
