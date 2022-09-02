const FAVORTITE_INSTRUCTOR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`${FAVORTITE_INSTRUCTOR} rocks!`);
    await sleep(5000);
  }
}

main();
