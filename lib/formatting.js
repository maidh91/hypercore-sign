const t = process.stdout.isTTY

const c = (code) => (t ? (s) => `\x1b[${code}m${s}\x1b[0m` : (s) => s)

const bold = c('1')
const dim = c('2')
const cyan = c('36')
const yellow = c('33')
const green = c('32')
const red = c('31')
const magenta = c('35')
const gray = c('90')

function box(text) {
  const inner = ' ' + text + ' '
  const top = '┌' + '─'.repeat(inner.length) + '┐'
  const btm = '└' + '─'.repeat(inner.length) + '┘'
  return [cyan(top), cyan('│') + bold(inner) + cyan('│'), cyan(btm)].join('\n')
}

function underline(text) {
  const inner = ' ' + text + '  '
  const btm = '└' + '─'.repeat(inner.length)
  return [cyan('│') + bold(inner), cyan(btm)].join('\n')
}

function field(label, value) {
  const str = Buffer.isBuffer(value) ? value.toString('hex') : String(value)
  return '  ' + gray(label.padEnd(10)) + cyan(str)
}

function section(label) {
  return '\n  ' + bold(gray(label))
}

function nestedField(label, value) {
  const str = Buffer.isBuffer(value) ? value.toString('hex') : String(value)
  return '    ' + gray(label.padEnd(10)) + cyan(str)
}

module.exports = {
  bold,
  dim,
  cyan,
  yellow,
  green,
  red,
  magenta,
  gray,
  box,
  underline,
  field,
  section,
  nestedField
}
