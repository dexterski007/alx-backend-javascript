process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const message = data.toString();
  process.stdout.write(`Your name is: ${message}`);
  process.stdout.write('This important software is now closing\n');
});
process.on('SIGTERM', function() {
  process.stdout.write('This important software is now closing\n');
  process.exit();
})
