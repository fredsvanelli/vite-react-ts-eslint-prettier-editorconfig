import { memo, useCallback } from 'react'

import { useConfig } from 'config/config'
import { useTranslation } from 'react-i18next'

import Box from 'components/Box'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const { i18n: i18nConfig } = useConfig()

  const handleChangeLanguage = useCallback(
    (lng: string) => i18n.changeLanguage(lng),
    [i18n],
  )

  return (
    <>
      <Box gap={5} direction="row">
        {i18nConfig.supportedLanguages.map((lng) => (
          <button
            key={lng}
            data-testid={`language-switcher-${lng.toLocaleLowerCase()}-button`}
            type="button"
            onClick={() => handleChangeLanguage(lng)}
          >
            {lng}
          </button>
        ))}
      </Box>
      <p>language: {i18n.language}</p>
    </>
  )
}

export default memo(LanguageSwitcher)
