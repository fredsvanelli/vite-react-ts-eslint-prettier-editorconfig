import { memo, PropsWithChildren, ReactElement } from 'react'

const BaseComponent: React.FC<PropsWithChildren> = ({ children }) =>
  children as ReactElement

export default memo(BaseComponent)
