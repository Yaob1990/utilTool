/**
 * emojiToUnicode test
 */
import { emoji } from '../src/utiltool'

describe('emojiToUnicode test', () => {
  // js 中 \\ ===\ , 避免被转义
  it('😂 => \\ud83d\\ude02', () => {
    expect(emoji.emojiToUnicode('😂')).toBe('\ud83d\ude02')
  })
})

describe('parseUnicode 测试', () => {
  it('\\ud83d\\ude02 => \ud83d\ude02', () => {
    expect(emoji.parseUnicode('\\ud83d\\ude02')).toBe('\ud83d\ude02')
  })
})
