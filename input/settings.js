


export function Label(name, vector = true, baseSvg = false, content = []) {
  return { name, vector, content, baseSvg };
}


window.label = [Label('face', false), Label('body')];
