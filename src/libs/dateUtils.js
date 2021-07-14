function minute2DHM(minutes) {
  const day = ~~(minutes / 24 / 60) ? `${~~(minutes / 24 / 60)}天 ` : ''
  const hour = ~~((minutes / 60) % 24) ? `${~~((minutes / 60) % 24)}小時 ` : ''
  const min = ~~(minutes % 60) ? `${~~(minutes % 60)}分` : ''

  return `${day}${hour}${min}`
}

export { minute2DHM }
