module.exports = (api) => {
  // plugins: ['babel-plugin-root-import'],
  return {
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: 'src',
              rootPathPrefix: '@/',
            },
          ],
        },
      ],
    ],

    presets: [
      [
        '@quasar/babel-preset-app',
        api.caller((caller) => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {},
      ],
    ],
  }
}
