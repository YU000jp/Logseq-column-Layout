
export const removeProvideStyle = (className: string) => {
    const doc = parent.document.head.querySelector(`style[data-injected-style^="${className}"]`) as HTMLStyleElement | null;
    if (doc) doc.remove();
};

export function removeCSSclass(className: string): void {
    if (parent.document.body.classList?.contains(className)) parent.document.body.classList.remove(className);
}

//for setting UI
export const calculateRangeBarForSettingUI = (min: number, max: number, value: number): number => {
    if (value < 1) value = 1;
    return Math.round((value * (max - min) / 100) + min);
};

//レンジバー導入のため設定数値の互換用
export const calculateRangeBarForSettingUIonce = (min: number, max: number, value: number): number => Math.round((value - min) / (max - min) * 100);