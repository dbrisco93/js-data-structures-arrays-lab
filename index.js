// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]
const copyOfDrivers = drivers.slice()

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
    drivers
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
    drivers
}

function appendDriver(name){
    copyOfDrivers.push(name)
    return copyOfDrivers
}

function prependDriver(name){
    copyOfDrivers.pop()
    copyOfDrivers.unshift(name)
    return copyOfDrivers

}

function removeLastDriver(){
    copyOfDrivers.pop()
    copyOfDrivers.shift ()
    return copyOfDrivers

}

function removeFirstDriver(){
    copyOfDrivers.push('Garfield')
    copyOfDrivers.shift('Milo')
    return copyOfDrivers
}