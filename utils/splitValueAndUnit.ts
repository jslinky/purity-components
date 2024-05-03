export default function splitValueAndUnit(str: string) {
    const regex = /^(\d+(\.\d+)?)([a-zA-Z%]+)?$/;
    const match = str.match(regex);
    if (match) {
      return [match[1], match[3] || '']; // Returns the numeric value and unit (or an empty string if no unit is present)
    }
    return null; // Return null if the input doesn't match the expected format
  }