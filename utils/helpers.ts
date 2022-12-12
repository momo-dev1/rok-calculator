export function formatTime(resourceTime: number = 0) {
    const time = new Date(resourceTime * 1000).getTime()
    let oneYear = 31556952000
    let oneDay = 24 * 60 * 60 * 1000
    let oneHour = 60 * 60 * 1000
    let oneMinute = 60 * 1000
    let years = Math.floor(time / oneYear)
    let days = Math.floor(time / oneDay)
    let hours = Math.floor((time % oneDay) / oneHour)
    let minutes = Math.floor((time % oneHour) / oneMinute)
    let seconds = Math.floor((time % oneMinute) / 1000)

    function formatValues(value: number) {
        if (value < 10) {
            return `0${value}`
        }
        return value
    }
    if (days >= 365) {
        return `${years}y ${Math.floor((time % oneYear) / oneDay)}d ${formatValues(hours)}:${formatValues(minutes)}:${formatValues(seconds)}`
    } else if (days >= 1) {
        return `${days}d ${formatValues(hours)}:${formatValues(minutes)}:${formatValues(seconds)}`
    } else {
        return `${formatValues(hours)}:${formatValues(minutes)}:${formatValues(seconds)}`
    }
}

export function formatResources(resource: number) {
    if (resource >= 1000000000000) {
        return `${(resource / 1000 / 1000 / 1000 / 1000).toFixed(1)}t`.replace(/\.?0t+$/, 't')
    } else if (resource >= 1000000000) {
        return `${(resource / 1000 / 1000 / 1000).toFixed(1)}b`.replace(/\.?0b+$/, 'b')
    } else if (resource >= 1000000) {
        return `${(resource / 1000 / 1000).toFixed(1)}m`.replace(/\.?0m+$/, 'm')
    } else if (resource >= 10000) {
        return `${(resource / 1000).toFixed(1)}k`.replace(/\.?0k+$/, 'k')
    } else {
        return resource
    }
}