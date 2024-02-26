
export const removeProvideStyle = (className: string) => {
  const doc = parent.document.head.querySelector(`style[data-injected-style^="${className}"]`) as HTMLStyleElement | null
  if (doc) doc.remove()
}

export const removeCSSclass = (className: string) => {
  if (parent.document.body.classList?.contains(className))
    parent.document.body.classList.remove(className)
}
