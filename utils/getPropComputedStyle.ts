// renamed from createPropValueGetter

export default function getPropComputedStyle(
    el: HTMLElement
): (propVal: string) => string {
    const computedStyle = window.getComputedStyle(el);

    return (propVal: string): string => {
        return computedStyle.getPropertyValue(propVal);
    };
}