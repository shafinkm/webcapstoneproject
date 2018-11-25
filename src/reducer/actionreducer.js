const ActionReducer = (state, action) => {
    switch(action.type) {
        case "REMOVE_HERO":
            const newHeroList = state.herosList.filter(objHero => objHero.id !== action.payload.id);
            state = {
                ...state,
                herosList : newHeroList
            };
            break;
        case "ADD_HERO":
            console.log("ADDING NEW HERO");
            break;
        default:
            state = {
                ...state
            };
    }
    return state;
}

export default ActionReducer;