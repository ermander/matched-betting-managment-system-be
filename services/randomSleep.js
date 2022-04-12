const randomSleep = (ms, range) => {
    return new Promise((resolve) => setTimeout(resolve, ms + Math.random(range) * 1000))
}

module.exports = randomSleep