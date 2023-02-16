// testing different ways of iterating over values referenced by keys.

const obj = {
  a: 10, b: 20, c: 30, d: 40, e: 50, f: 60, g: 70, h: 80, i: 90, j: 100,
  k: 110, l: 120, m: 130, n: 140, o: 150, p: 160, q: 170, r: 180, s: 190,
  t: 200, u: 210, v: 220, x: 230, w: 240, y: 250, z: 260,
}
// for k in Object.
function iterateObject () {
  let s = 0
  for (let k in obj) s += obj[k]
  return s
}
// for k of Object.entries(Object)
function iterateObjectEntries () {
  let s = 0
  for (let k of Object.entries(obj)) s += obj[k]
  return s
}

const map = new Map()
for (const k in obj) map[k] = obj[k] // copying keys and values.
// for k in Map.
function iterateMap () {
  let s = 0
  for (let k in map) s += map[k]
  return s
}

// benchmark strategy.
function bench(fn, label) {
  console.time(label);
  for (let i = 0; i < 10**6; i++) fn()
  console.timeEnd(label);
}


bench(iterateObject, 'obj1')
bench(iterateObjectEntries, 'obj2')
bench(iterateMap, 'map ')
