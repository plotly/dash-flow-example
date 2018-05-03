import * as React from 'react';

type T_OPTION = {
  /** The label of the option */
  label: string | number,
  /** The value of the option*/
  value: string,
};
type T_CONFIG = {
  /** The title option */
  title: string | number,
  /** The value of the option */
  value: string
};

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
    value?: string,

    /** A list of options */
    options?: Array<T_OPTION>,

    /** A config object */
    config?: T_CONFIG,
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
