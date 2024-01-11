import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { beforeEach, vi } from 'vitest'

beforeEach(() => {
  cleanup()
  vi.resetAllMocks()
})
