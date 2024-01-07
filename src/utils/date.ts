export function formatHourOrMinute(input: number): string {
  return input < 10 ? `0${input}` : `${input}`
}
