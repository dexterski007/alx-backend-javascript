process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const message = data.toString();
  process.stdout.write(`Your name is: ${message}`);
});
process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
