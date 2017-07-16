const DEFAULT_STATE = {};

export const tabBarReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === 'JUMP_TO_TAB') {
        return {...state, index: 0}
    } else {
        return TabBar.router.getStateForAction(action, state)
    }
};