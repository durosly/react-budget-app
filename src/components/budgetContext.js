import {createContext} from 'react';

const BudgetContext = createContext();

const {Provider, Consumer} = BudgetContext;
const BudgetProvider = Provider;
const BudgetConsumer = Consumer;

export {BudgetProvider, BudgetConsumer};