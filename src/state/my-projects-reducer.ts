export type MyProjectsType = {
    id: number
    title: string
    description: string
}

const initialState: MyProjectsType[] = [
    {id: 1, title: 'Todolist', description: 'Gerwefaqwe'},
    {id: 2, title: 'Social Network', description: 'dsgasdga sadgasgasd asdfasdgha'}
]
export const myProjectReducer = (state = initialState, action: any): MyProjectsType[] => {
    switch (action.type) {
        default:
            return state
    }
}