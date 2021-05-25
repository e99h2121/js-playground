(async () => {
  const buffers = [];
  for await (const chunk of process.stdin) buffers.push(chunk);
  const buffer = Buffer.concat(buffers);
  const text = buffer.toString();
  console.log(text);
})()

const str = "朝だ。ご飯を食べる";
const replaced = str.replace(/だ/g, 'です').replace(/食べる/g, '食べます');
console.log(replaced);

