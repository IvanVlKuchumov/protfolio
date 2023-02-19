export type SkillsType = {
    id: number
    title: string
    description: string
}

const initialState: SkillsType[] = [
    {id: 1, title: 'JavaScript', description: 'Gerwefaqwe'},
    {id: 2, title: 'HTML&CSS', description: 'dsgasdga sadgasgasd asdfasdgha'},
    {id: 3, title: 'React', description: 'asdfasd asdgasdg sadgasd asdgasd sadg asdg'}
]
export const skillReducer = (state = initialState, action: any): SkillsType[] => {
    switch (action.type) {
        default:
            return state
    }
}