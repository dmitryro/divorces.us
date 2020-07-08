import { useContext } from 'react'

import { RootContext } from './../shared/App/Provider.tsx'

export default function useRootStore() {
    return useContext(RootContext)
}
