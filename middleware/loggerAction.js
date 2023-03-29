const loggerAction = (reducer) => {
    return (prevState, action, args) => {
        console.group('action: ' + action)
        console.log('prevState: ', prevState);
        console.log('arguments: ' + args);
        const nextState = reducer(prevState, action, args);
        console.log('newState: ', nextState)
        console.groupEnd()
        return nextState;
    }
}

export default loggerAction;