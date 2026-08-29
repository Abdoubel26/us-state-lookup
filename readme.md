# 🗺️ us-state-lookup

> A lightweight, zero-dependency TypeScript utility to look up US state information seamlessly using any identifier: FIPS code, postal abbreviation, state name, or admission order.

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

```typescript
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

```typescript
import findState from 'us-state-lookup';

// All of these edge cases work seamlessly out of the box:
console.log(findState(32)?.name);                          // "Nevada"
console.log(findState("31sT")?.name);                     // "California"
console.log(findState("2")?.name);                        // "Alaska"
console.log(findState("MA")?.name);                       // "Massachusetts"
console.log(findState("34th")?.name);                     // "Kansas"
console.log(findState("IDAHO")?.admissionOrder);          // "43rd"
console.log(findState("HawaII")?.admissionOrder);         // "50th"
console.log(findState("35th")?.name);                     // "West Virginia"
console.log(findState("AR")?.admissionOrder);             // "25th"
console.log(findState("North Carolina")?.admissionOrder); // "12th"
console.log(findState("ma")?.name);                       // "Massachusetts"
console.log(findState("Az")?.name);                       // "Arizona"
```

## 📊 Accessing Raw Data

Need the entire dataset for dropdown menus, tables, or custom lookups? Import `states` directly:

```typescript
import { states } from 'us-state-lookup';

console.log(states.length); // 50
```

## 🔎 TypeScript Support

The package is written in TypeScript and exports the `State` type:

```typescript
import findState, { State } from 'us-state-lookup';

const state: State | null = findState("CA");

console.log(state?.name);           // "California"
console.log(state?.postal);         // "CA"
console.log(state?.fips);           // "06"
console.log(state?.admissionOrder); // "31st"
```

The `State` type is defined as:

```typescript
export type State = {
  fips: string | number;
  name: string;
  postal: string;
  admissionOrder: string;
};
```

## 📄 License

[MIT](LICENSE) © [Abdou Belounis](https://abdoubelounis.com/)