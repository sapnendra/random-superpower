// index.js

const powers = [
  { name: "Invisibility for 3 seconds", type: "physical" },
  { name: "Teleport but only to the last place you sneezed", type: "weird" },
  { name: "Understand cats, but only sarcastic ones", type: "mental" },
  { name: "Fly at walking speed", type: "physical" },
  { name: "Turn any sandwich into a taco", type: "weird" },
  { name: "Instantly memorize bad jokes", type: "mental" },
  { name: "Become 1% faster every time you yawn", type: "physical" }
];

/**
 * Get a random superpower.
 * @param {Object} options
 * @param {string} options.type - "physical" | "mental" | "weird"
 * @param {number} options.count - number of powers to return
 */
function randomSuperpower(options = {}) {
  const { type, count = 1 } = options;

  let filtered = powers;
  if (type) {
    filtered = powers.filter(p => p.type === type);
    if (filtered.length === 0) {
      throw new Error(`No superpowers of type '${type}'`);
    }
  }

  const result = [];
  for (let i = 0; i < count; i++) {
    const choice = filtered[Math.floor(Math.random() * filtered.length)];
    result.push(choice);
  }

  return count === 1 ? result[0] : result;
}

export default randomSuperpower;
