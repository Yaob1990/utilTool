/**
 * @see unicode编码之后\变成\\，解码函数
 * @see "\\u00253A" => "\u00253A"
 * @author 原始地址：https://stackoverflow.com/questions/33685680/emoji-surrogate-string-with-javascript-how-to-parse
 * @param str
 */
export function parseUnicode(str:string){
  let r = /\\u([\d\w]{4})/gi;
  str = str.replace(r, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16)); } );
  return str;
}
