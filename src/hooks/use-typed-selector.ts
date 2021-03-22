import {useSelector, TypedUseSelectorHook} from 'react-redux'
import {RootState} '../state'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector