export type InitStateType = {
    themeId : number
}

const initState: InitStateType = {
    themeId: 1,
}

export type ActionsType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID' : {
            return {
                ...state, themeId : action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
