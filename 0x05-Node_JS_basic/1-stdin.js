#!/usr/bin/node

process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', function () {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', function () {
  process.stdout.write('This important software is now closing\n');
});
