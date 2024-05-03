export default function updateCustomProp(propName: string, propValue: string, outputEl: HTMLElement = document.documentElement): void {
  outputEl.style.setProperty(`${propName}`, propValue)
}
