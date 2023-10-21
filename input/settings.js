


export function Label(name, vector = true, baseSvg = false, content = []) {
  return { name, vector, content, baseSvg };
}


window.label = [Label('face', false), Label('body')];
window.mainSvgElement = '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 1300" width="1300" height="1300">';
window.fileNames = [[],[]];
window.displayer = [];
