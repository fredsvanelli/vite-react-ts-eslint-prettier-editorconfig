import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Box from './Box'

describe('Box', () => {
  it('should render a div container with a child', () => {
    const { getByText } = render(<Box>child</Box>)

    expect(getByText('child')).toBeInTheDocument()
  })

  it.each([
    {
      prop: 'style',
      value: { textAlign: 'center' },
      expect: 'text-align: center;',
    },
    { prop: 'display', value: 'flex', expect: 'display: flex;' },
    { prop: 'direction', value: 'column', expect: 'flex-direction: column;' },
    { prop: 'alignItems', value: 'center', expect: 'align-items: center;' },
    { prop: 'alignSelf', value: 'center', expect: 'align-self: center;' },
    {
      prop: 'justifyContent',
      value: 'center',
      expect: 'justify-content: center;',
    },
    { prop: 'justifySelf', value: 'center', expect: 'justify-self: center;' },
    { prop: 'gap', value: '1rem', expect: 'gap: 1rem;' },
    { prop: 'margin', value: '1rem', expect: 'margin: 1rem;' },
    { prop: 'marginTop', value: '1rem', expect: 'margin-top: 1rem;' },
    { prop: 'marginRight', value: '1rem', expect: 'margin-right: 1rem;' },
    { prop: 'marginBottom', value: '1rem', expect: 'margin-bottom: 1rem;' },
    { prop: 'marginLeft', value: '1rem', expect: 'margin-left: 1rem;' },
    { prop: 'padding', value: '1rem', expect: 'padding: 1rem;' },
    { prop: 'paddingTop', value: '1rem', expect: 'padding-top: 1rem;' },
    { prop: 'paddingRight', value: '1rem', expect: 'padding-right: 1rem;' },
    { prop: 'paddingBottom', value: '1rem', expect: 'padding-bottom: 1rem;' },
    { prop: 'paddingLeft', value: '1rem', expect: 'padding-left: 1rem;' },
    { prop: 'width', value: '100%', expect: 'width: 100%;' },
    { prop: 'minWidth', value: '100%', expect: 'min-width: 100%;' },
    { prop: 'maxWidth', value: '100%', expect: 'max-width: 100%;' },
    { prop: 'height', value: '100%', expect: 'height: 100%;' },
    { prop: 'minHeight', value: '100%', expect: 'min-height: 100%;' },
    { prop: 'maxHeight', value: '100%', expect: 'max-height: 100%;' },
  ])('should render with a custom $prop', (testCase) => {
    const { container } = render(
      <Box
        {...{
          [testCase.prop]: testCase.value,
        }}
      />,
    )

    expect(container.firstChild).toHaveStyle(testCase.expect)
  })

  it('should render with a custom tag element', () => {
    const { container } = render(<Box as="section" />)

    expect(container.firstChild).toHaveProperty('tagName', 'SECTION')
  })
})
