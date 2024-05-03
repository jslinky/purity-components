import type { ValueUnitObj } from "@/types"

export default function updateSizeCustomProp(propName: string, propValue: ValueUnitObj, outputEl: HTMLElement = document.documentElement) {
  propValue.unit !== '' ? updateCustomProp(propName, propValue.value.concat(propValue.unit)) : updateCustomProp(propName, propValue.value)
}