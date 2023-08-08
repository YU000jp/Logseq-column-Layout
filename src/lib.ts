export const removeProvideStyle = (className: string) => {
    const doc = parent.document.head.querySelector(`style[data-injected-style^="${className}"]`) as HTMLStyleElement | null;
    if (doc) doc.remove();
};
function removeCSSclass(className: string): void {
    if (parent.document.body.classList?.contains(className)) parent.document.body.classList.remove(className);
}
