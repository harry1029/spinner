let count = 0
let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let t = 100; t <= 1700; t += 200) {
  setTimeout(() => {
    process.stdout.write(spinner[count]);
    count++;
  }, t);
}