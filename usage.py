import dash_flow_example
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dash_flow_example.ExampleReactComponent(
        id='react',
        value='my-value',
        label='react component'
    ),
    dash_flow_example.ExampleFlowComponent(
        id='flow',
        value='my-value',
        label='flow component'
    ),
    html.Hr(),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'),
              [Input('react', 'value'), Input('flow', 'value')])
def display_output(react_value, flow_value):
    return html.Div([
        'You have entered {} and {}'.format(react_value, flow_value),
        html.Hr(),
        html.Label('Flow Component Docstring'),
        html.Pre(dash_flow_example.ExampleFlowComponent.__doc__),
        html.Hr(),
        html.Label('React PropTypes Component Docstring'),
        html.Pre(dash_flow_example.ExampleReactComponent.__doc__)
    ])


if __name__ == '__main__':
    app.run_server(debug=True)
