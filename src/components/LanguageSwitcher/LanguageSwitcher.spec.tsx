import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, describe, it, vi, afterEach } from 'vitest'

import LanguageSwitcher from './LanguageSwitcher'

const mockedChangeLanguage = vi.fn()

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: mockedChangeLanguage,
    },
  }),
}))

describe('LanguageSwitcher', () => {
  afterEach(cleanup)

  it('should render two buttons with language codes', () => {
    const { getByTestId } = render(<LanguageSwitcher />)

    const buttonEn = getByTestId('language-switcher-en-button')
    const buttonPtBr = getByTestId('language-switcher-pt-br-button')

    expect(buttonEn).toBeTruthy()
    expect(buttonPtBr).toBeTruthy()
  })

  it('should call a function when clicking on each language button', async () => {
    const { getByTestId } = render(<LanguageSwitcher />)

    const buttonEn = getByTestId('language-switcher-en-button')
    const buttonPtBR = getByTestId('language-switcher-pt-br-button')
    await userEvent.click(buttonEn)
    await userEvent.click(buttonPtBR)

    expect(mockedChangeLanguage).toHaveBeenCalledWith('en')
    expect(mockedChangeLanguage).toHaveBeenCalledWith('pt-BR')
  })
})
