let shaCommand;
switch (process.platform) {
  case "darwin":
    shaCommand = "shasum -a 256 answer.txt";
    break;
  case "linux":
    shaCommand = "sha256sum answer.txt";
    break;
  case "win32":
    shaCommand = "certutil -hashfile answer.txt SHA256"
    break;
  default:
    console.log(`Oh no, we didn't recognise your operating system, process.platform = ${process.platform}`);
    process.exit(1);
    break;
}

console.log(`Who is never gonna give you up?
Never gonna take you down?
Never gonna run around and desert you?
😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂
Put your answer in the answer.txt file you created. 
echo "ANSWER HERE" > answer.txt
Now move this file to the Answer folder.
How will you achieve this? Stay in the command line. (You can Google.)

When you're done, run:

${shaCommand}

And paste the output into Slack thread 🧵 (create a new thread if there isn't one already).
`)
