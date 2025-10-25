const parseArgs = () => {
  const args = process.argv.slice(2).map((elem) => elem.replace('--', ''));
  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    const str = `${args[i]} is ${args[i + 1]}`
    result.push(str);
  }
  // console.log(result.join(', '))
  return result.join(', ');
};

parseArgs();
