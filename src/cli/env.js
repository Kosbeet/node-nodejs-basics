const parseEnv = () => {
  const rssKeys = Object.keys(process.env).filter((key) => key.startsWith('RSS_'));
  const rssVarsValues = rssKeys.map((key) => {
    const value = process.env[key];
    return `${key}=${value}`;
  })
  return rssVarsValues.join('; ');
};
console.log(parseEnv())

