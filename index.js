// index.js

const powers = [
  { name: "Invisibility for 3 seconds", type: "physical" },
  { name: "Teleport but only to the last place you sneezed", type: "weird" },
  { name: "Understand cats, but only sarcastic ones", type: "mental" },
  { name: "Fly at walking speed", type: "physical" },
  { name: "Turn any sandwich into a taco", type: "weird" },
  { name: "Instantly memorize bad jokes", type: "mental" },
  { name: "Become 1% faster every time you yawn", type: "physical" },
  { name: "Summon a bubble wrap shield", type: "weird" },
  { name: "Remember every WiFi password you've ever seen", type: "mental" },
  { name: "Grow your hair 1 inch at will", type: "physical" },
  { name: "Charge phones by staring at them (1% per hour)", type: "weird" },
  { name: "Speak fluent emoji", type: "mental" },
  { name: "Levitate 2 cm off the ground", type: "physical" },
  { name: "Instantly toast bread with your hands", type: "weird" },
  { name: "Predict the weather... for exactly 7 minutes ahead", type: "mental" },
  { name: "Run as fast as an angry turtle", type: "physical" },
  { name: "Turn any soda into flat water", type: "weird" },
  { name: "Read any menu instantly", type: "mental" },
  { name: "Summon a tiny umbrella in your drink at will", type: "weird" },
  { name: "Glow faintly in the dark when nervous", type: "physical" }
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
    filtered = powers.filter((p) => p.type === type);
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
