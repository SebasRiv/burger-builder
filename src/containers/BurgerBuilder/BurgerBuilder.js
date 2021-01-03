import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxiliar';

export class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger></Burger>
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
