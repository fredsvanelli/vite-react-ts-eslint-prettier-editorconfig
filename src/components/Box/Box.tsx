import React, { CSSProperties, memo, useMemo } from 'react'

interface IBoxProps {
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
  children: React.ReactNode
}

const Box: React.FC<IBoxProps> = ({
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
}) => {
  const containerStyle: CSSProperties = useMemo(
    () => ({
      display,
      flexDirection: direction,
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
  )

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  )
}

export default memo(Box)
