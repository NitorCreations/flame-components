module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(tsx?)$/,
    loader: 'ts-loader'
  });
  config.module.rules.push({
    test: /\.pcss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
