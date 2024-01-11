import { CSSProperties, PropsWithChildren, memo, useMemo } from 'react'

interface IBoxProps {
  as?: keyof JSX.IntrinsicElements
  style?: CSSProperties
  className?: string
  display?: CSSProperties['display']
  direction?: CSSProperties['flexDirection']
  alignItems?: CSSProperties['alignItems']
  alignSelf?: CSSProperties['alignSelf']
  justifyContent?: CSSProperties['justifyContent']
  justifySelf?: CSSProperties['justifySelf']
  gap?: CSSProperties['gap']
  margin?: CSSProperties['margin']
  marginTop?: CSSProperties['marginTop']
  marginRight?: CSSProperties['marginRight']
  marginBottom?: CSSProperties['marginBottom']
  marginLeft?: CSSProperties['marginLeft']
  padding?: CSSProperties['padding']
  paddingTop?: CSSProperties['paddingTop']
  paddingRight?: CSSProperties['paddingRight']
  paddingBottom?: CSSProperties['paddingBottom']
  paddingLeft?: CSSProperties['paddingLeft']
  width?: CSSProperties['width']
  minWidth?: CSSProperties['minWidth']
  maxWidth?: CSSProperties['maxWidth']
  height?: CSSProperties['height']
  minHeight?: CSSProperties['minHeight']
  maxHeight?: CSSProperties['maxHeight']
}

const Box: React.FC<PropsWithChildren<IBoxProps>> = ({
  as: Component = 'div',
  children,
  style = {},
  className,
  display = 'flex',
  direction = 'column',
  alignItems = 'flex-start',
  alignSelf,
  justifyContent = 'flex-start',
  justifySelf,
  gap,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}) => (
  <Component
    className={className}
    style={useMemo(
      () => ({
        display,
        flexDirection: direction,
        alignItems,
        alignSelf,
        justifyContent,
        justifySelf,
        gap,
        ...(margin
          ? { margin }
          : { marginTop, marginRight, marginBottom, marginLeft }),
        ...(padding
          ? { padding }
          : { paddingTop, paddingRight, paddingBottom, paddingLeft }),
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        ...style,
      }),
      [
        style,
        display,
        direction,
        alignItems,
        alignSelf,
        justifyContent,
        justifySelf,
        gap,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
      ],
    )}
  >
    {children}
  </Component>
)

export default memo(Box)
