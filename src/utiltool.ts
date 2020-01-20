// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { parseUnicode } from './emoji/parseUnicode'
import { emojiToUnicode } from './emoji/emojiToUnicode'

export const emoji = {
  parseUnicode: parseUnicode,
  emojiToUnicode: emojiToUnicode
}

export default {
  emoji
}
