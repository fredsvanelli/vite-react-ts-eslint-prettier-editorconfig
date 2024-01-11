export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  i18n: {
    // it will fallback to the first one in the array when detected language is not available
    supportedLanguages: ['en', 'es', 'pt-BR'],
    debbug: JSON.parse(
      // Converts 'true' to true and 'false' to false
      (import.meta.env.VITE_I18N_DEBBUG ?? 'false').toLocaleLowerCase(),
    ),
  },
}

export const useConfig = (): typeof config => config
