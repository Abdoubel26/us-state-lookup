export type State = {
    fips: string | number,
    name: string,
    postal: string,
    admissionOrder: string,
};

export const states: State[] = [
  { fips: "01", name: "Alabama", postal: "AL", admissionOrder: "22nd" },
  { fips: "02", name: "Alaska", postal: "AK", admissionOrder: "49th" },
  { fips: "04", name: "Arizona", postal: "AZ", admissionOrder: "48th" },
  { fips: "05", name: "Arkansas", postal: "AR", admissionOrder: "25th" },
  { fips: "06", name: "California", postal: "CA", admissionOrder: "31st" },
  { fips: "08", name: "Colorado", postal: "CO", admissionOrder: "38th" },
  { fips: "09", name: "Connecticut", postal: "CT", admissionOrder: "5th" },
  { fips: "10", name: "Delaware", postal: "DE", admissionOrder: "1st" },
  { fips: "12", name: "Florida", postal: "FL", admissionOrder: "27th" },
  { fips: "13", name: "Georgia", postal: "GA", admissionOrder: "4th" },
  { fips: "15", name: "Hawaii", postal: "HI", admissionOrder: "50th" },
  { fips: "16", name: "Idaho", postal: "ID", admissionOrder: "43rd" },
  { fips: "17", name: "Illinois", postal: "IL", admissionOrder: "21st" },
  { fips: "18", name: "Indiana", postal: "IN", admissionOrder: "19th" },
  { fips: "19", name: "Iowa", postal: "IA", admissionOrder: "29th" },
  { fips: "20", name: "Kansas", postal: "KS", admissionOrder: "34th" },
  { fips: "21", name: "Kentucky", postal: "KY", admissionOrder: "15th" },
  { fips: "22", name: "Louisiana", postal: "LA", admissionOrder: "18th" },
  { fips: "23", name: "Maine", postal: "ME", admissionOrder: "23rd" },
  { fips: "24", name: "Maryland", postal: "MD", admissionOrder: "7th" },
  { fips: "25", name: "Massachusetts", postal: "MA", admissionOrder: "6th" },
  { fips: "26", name: "Michigan", postal: "MI", admissionOrder: "26th" },
  { fips: "27", name: "Minnesota", postal: "MN", admissionOrder: "32nd" },
  { fips: "28", name: "Mississippi", postal: "MS", admissionOrder: "20th" },
  { fips: "29", name: "Missouri", postal: "MO", admissionOrder: "24th" },
  { fips: "30", name: "Montana", postal: "MT", admissionOrder: "41st" },
  { fips: "31", name: "Nebraska", postal: "NE", admissionOrder: "37th" },
  { fips: "32", name: "Nevada", postal: "NV", admissionOrder: "36th" },
  { fips: "33", name: "New Hampshire", postal: "NH", admissionOrder: "9th" },
  { fips: "34", name: "New Jersey", postal: "NJ", admissionOrder: "3rd" },
  { fips: "35", name: "New Mexico", postal: "NM", admissionOrder: "47th" },
  { fips: "36", name: "New York", postal: "NY", admissionOrder: "11th" },
  { fips: "37", name: "North Carolina", postal: "NC", admissionOrder: "12th" },
  { fips: "38", name: "North Dakota", postal: "ND", admissionOrder: "39th" },
  { fips: "39", name: "Ohio", postal: "OH", admissionOrder: "17th" },
  { fips: "40", name: "Oklahoma", postal: "OK", admissionOrder: "46th" },
  { fips: "41", name: "Oregon", postal: "OR", admissionOrder: "33rd" },
  { fips: "42", name: "Pennsylvania", postal: "PA", admissionOrder: "2nd" },
  { fips: "44", name: "Rhode Island", postal: "RI", admissionOrder: "13th" },
  { fips: "45", name: "South Carolina", postal: "SC", admissionOrder: "8th" },
  { fips: "46", name: "South Dakota", postal: "SD", admissionOrder: "40th" },
  { fips: "47", name: "Tennessee", postal: "TN", admissionOrder: "16th" },
  { fips: "48", name: "Texas", postal: "TX", admissionOrder: "28th" },
  { fips: "49", name: "Utah", postal: "UT", admissionOrder: "45th" },
  { fips: "50", name: "Vermont", postal: "VT", admissionOrder: "14th" },
  { fips: "51", name: "Virginia", postal: "VA", admissionOrder: "10th" },
  { fips: "53", name: "Washington", postal: "WA", admissionOrder: "42nd" },
  { fips: "54", name: "West Virginia", postal: "WV", admissionOrder: "35th" },
  { fips: "55", name: "Wisconsin", postal: "WI", admissionOrder: "30th" },
  { fips: "56", name: "Wyoming", postal: "WY", admissionOrder: "44th" }
];

type clueType = string | number;

const findState = (clue: clueType) => {
    if (typeof clue === "number" || !Number.isNaN(Number(clue))) {
        return states.find(s => Number(s.fips) === Number(clue)) ?? null;
    }

    const normalized = clue.trim();

    if (normalized.length === 2) {
        return states.find(s => s.postal === normalized.toUpperCase()) ?? null;
    }

    if (!Number.isNaN(Number(normalized[0]))) {
        return states.find(s => s.admissionOrder.toLowerCase() === normalized.toLowerCase()) ?? null;
    }

    return states.find(s => s.name.toLowerCase() === normalized.toLowerCase()) ?? null;
};

export default findState;
