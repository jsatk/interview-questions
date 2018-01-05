const sortByAverage = arrOfNums => {
  const sumOfArr = arr => arr.reduce((sum, n) => sum + n, 0)
  const absoluteDistanceFrom = average => n => Math.abs(n - average)

  const average = sumOfArr(arrOfNums) / arrOfNums.length
  const absoluteDistanceFromAverage = absoluteDistanceFrom(average)
  const sortFunc = (a, b) => absoluteDistanceFromAverage(a) - absoluteDistanceFromAverage(b)

  return arrOfNums.sort(sortFunc)
}
