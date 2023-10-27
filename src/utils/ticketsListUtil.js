export const filtering = (num, data, index) => {
  return data
    .filter((item) => {
      const element0 = item.segments[0].stops.length
      const element1 = item.segments[1].stops.length
      return element0 === num && element1 === num
    })
    .slice(0, index + 5)
}

export const filteringOut = (num, data, index) => {
  return data
    .filter((item) => {
      const element0 = item.segments[0].stops.length
      const element1 = item.segments[1].stops.length
      return element0 !== num && element1 !== num
    })
    .slice(0, index + 5)
}

export const filteringSeveral = (num1, num2, data, index) => {
  return data
    .filter((item) => {
      const element0 = item.segments[0].stops.length
      const element1 = item.segments[1].stops.length
      return (element0 === num1 || element0 === num2) && (element1 === num1 || element1 === num2)
    })
    .slice(0, index + 5)
}

export const showAll = (dataBefore, index) => {
  return dataBefore.slice(0, index + 5)
}

export const sortCheapest = (dataBefore, index) => {
  return dataBefore.sort((a, b) => a.price - b.price).slice(0, index + 5)
}

export const sortFastest = (dataBefore, index) => {
  return dataBefore.sort((a, b) => a.segments[0].duration - b.segments[0].duration).slice(0, index + 5)
}
