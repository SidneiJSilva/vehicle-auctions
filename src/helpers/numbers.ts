/**
 * Formats a numeric string with thousand separators
 * @param numericString - String containing only digits (e.g., "17000")
 * @returns Formatted string with dots as thousand separators (e.g., "17.000")
 * @throws {Error} If input is not a valid numeric string
 */
export function formatNumberWithSeparators(numericString: string): string {
  if (!/^\d+$/.test(numericString)) {
    throw new Error('Input must contain only numeric characters')
  }

  return numericString.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
