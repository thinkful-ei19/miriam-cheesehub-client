import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class CheeseList extends React.Component {
    constructor() {
        super()
        console.log('inside contrucuctor')

    }
    componentWillMount() {
        console.log('inside componentWillMount');
    }

    componentDidMount() {
        console.log('inside componentDidMount');
        this.props.fetchAllCheeses();
    }

    render() {
        console.log('inside render');
        const cheeses = this.props.cheeses.map((cheese, i) =>
            <li key={i}>{cheese}</li>
        )

        return (
            <div>
                <ul>
                    {cheeses}
                </ul>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    console.log('inside mapStoreToProps', store)
    return {
        cheeses: store.cheeses
    }
}

const mapActionsToProps = (dispatch) => {
    console.log('inside mapActionsToProps')
    return {
        fetchAllCheeses: () => dispatch(fetchCheeses())
    }
}

export default connect(mapStoreToProps, mapActionsToProps)(CheeseList)

//contructor, componentWillMount,
//render, ComponentDidMount