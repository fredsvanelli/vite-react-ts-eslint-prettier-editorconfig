import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import Box from './Box'

describe('Box', () => {
  // Renders a div container with children
  it('should render a div container with children', () => {
    const { container } = render(
      <Box>
        <div>Child</div>
      </Box>,
    )

    expect(container.firstChild).toBeTruthy()
    expect((container.firstChild as HTMLElement)?.tagName).toBe('DIV')
    expect(container.firstChild?.textContent).toBe('Child')
  })
})
