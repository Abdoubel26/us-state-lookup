# 🗺️ us-state-lookup

> A lightweight, zero-dependency JavaScript utility to look up US state information seamlessly using any identifier: FIPS code, postal abbreviation, state name, or admission order.

---

## 👨‍💻 Author & Creator

Created with ❤️ by **Abdou Belounis**

- **Website:** [abdoubelounis.com](https://abdoubelounis.com)

---

## 💡 What is this?

`us-state-lookup` allows you to convert between any US state representation dynamically. Whether you have an integer (`32`), an unpadded string (`"2"`), mixed-case text (`"31sT"` or `"HawaII"`), a postal code (`"MA"`), or a full name (`"North Carolina"`), `findState` automatically handles the input and returns the full state data object.

Each state object contains:

- `name` — Full state name (e.g., `"Alabama"`)
- `postal` — 2-letter USPS abbreviation (e.g., `"AL"`)
- `fips` — 2-digit padded Federal Information Processing Series code (e.g., `"01"`)
- `admissionOrder` — Rank of statehood admission (e.g., `"22nd"`)

---

## 📦 Installation

Install the package via **npm**:

```bash
npm install us-state-lookup
```

Or using **yarn** / **pnpm**:

```bash
yarn add us-state-lookup
# or
pnpm add us-state-lookup
```

## 🚀 Quick Start & Usage

```javascript
import findState, { states } from 'us-state-lookup';

// Basic usage
findState("MA");

// Returns:
// {
//   fips: "25",
//   name: "Massachusetts",
//   postal: "MA",
//   admissionOrder: "6th"
// }
```

## ⚡ Edge Case Handling

`findState` is designed to be extremely flexible and handles all edge cases seamlessly—including unpadded numbers, raw integers, mixed casing, and non-standard strings:

```javascript
import findState from 'us-state-lookup';

// All of these edge cases work seamlessly out of the box:
console.log(findState(32).name);                          // "Nevada"
console.log(findState("31sT").name);                     // "California"
console.log(findState("2").name);                        // "Alaska"
console.log(findState("HawaII").admissionOrder);         // "50th"
console.log(findState("Az").name);                       // "Arizona"
```

## 📊 Accessing Raw Data

Need the entire dataset for dropdown menus, tables, or custom lookups? Import `states` directly:

```javascript
import { states } from 'us-state-lookup';

console.log(states.length); // 50
```

## 📄 License

[MIT](LICENSE) © [Abdou Belounis](https://abdoubelounis.com/)