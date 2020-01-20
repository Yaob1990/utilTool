/**
 * @see emoji to Surrogate pairs unicode
 * @see UTF-16 编码转为代理对编码
 * @see 转换为js编码方式  😀=>"\ud83d\ude00"
 * @author 原始地址：https://github.com/channg/umoji/blob/master/src/emojiToUnicode.js
 * @param emoji
 *
 */
export function emojiToUnicode(emoji: string) {
  let backStr = ''
  if (emoji && emoji.length > 0) {
    for (let char of emoji) {
      let index = char.codePointAt(0)
      if (index && index > 65535) {
        let h = '\\u' + (Math.floor((index - 0x10000) / 0x400) + 0xd800).toString(16)
        let c = '\\u' + (((index - 0x10000) % 0x400) + 0xdc00).toString(16)
        backStr = backStr + h + c
      } else {
        backStr = backStr + char
      }
    }
  }
  return backStr
}

