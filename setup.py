from setuptools import setup

exec (open('dash_flow_example/version.py').read())

setup(
    name='dash_flow_example',
    version=__version__,
    author='plotly',
    packages=['dash_flow_example'],
    include_package_data=True,
    license='MIT',
    description='Example of a Dash library that uses Flow Types',
    install_requires=[]
)
