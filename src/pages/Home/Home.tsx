import { memo, useEffect } from 'react'

import { useConfig } from 'config/config'
import { useTranslation } from 'react-i18next'

import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const { app } = useConfig()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <h1>{t('home.title')}</h1>
      <LanguageSwitcher />
      <p>{`v${app.version}`}</p>
    </>
  )
}

export default memo(Home)
