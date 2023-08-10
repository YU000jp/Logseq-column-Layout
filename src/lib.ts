import CSSsideLinkedReferences from "./side.css?inline";

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
export const calculateRangeBarForSettingOnce = (min: number, max: number, value: number): number => Math.round((value - min) / (max - min) * 100);

export async function versionCheck(first: number, second: number, third: number): Promise<boolean> {
    const version: string = await logseq.App.getInfo("version");
    const versionArr = version?.split(".") as string[];
    if (Number(versionArr[0]) > first ||
        Number(versionArr[0]) === first &&
        Number(versionArr[1]) > second ||
        (Number(versionArr[1]) === second && Number(versionArr[2]) >= third)) {
        return true; //指定した以上のバージョンの場合
    } else return false; //指定より古いバージョンの場合
}

export function provideStyleSide(versionOver: boolean, newKey: string, newStyle: string, oldKey: string, oldStyle: string,) {
    if (versionOver === true)
        logseq.provideStyle({ key: newKey, style: newStyle });//指定した以上のバージョンの場合
    else
        logseq.provideStyle({ key: oldKey, style: oldStyle });//指定より古いバージョンの場合
}

