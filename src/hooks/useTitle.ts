import { useCallback, useMemo } from 'react'

import { useConfig } from 'config/config'

type UseTitleType = () => (title?: string | undefined) => void

const useTitle: UseTitleType = () => {
  const { app } = useConfig()

  const setTitle = useCallback(
    (title?: string) => {
      const appName = app.name ?? `My React App v${app.version}`
      document.title = title ? `${title} | ${appName}` : appName
    },
    [app.name, app.version],
  )

  return useMemo(() => setTitle, [setTitle])
}

export default useTitle
