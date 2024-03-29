/**
 *
 * @param {string} key accepts one of these parameters -> movie|serial
 * @returns JSON Object
 */
export function getFromStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key) || "[]")
    } catch(e) {
        console.error(e)
    }
}

export function addToStorage(key, object) {
    try {
        let curItems = getFromStorage(key)
        curItems.push(object)
        window.localStorage.setItem(key, JSON.stringify(curItems))
    } catch(e) {
        console.error(e)
    }
}

export function removeFromStorage(key, id) {
    try {
        let curItems = getFromStorage(key)
        curItems.map((item) => {
            if (item.id === id) {
                curItems.splice(curItems.indexOf(item), 1)
            }
        })
        window.localStorage.setItem(key, JSON.stringify(curItems))
    } catch(e) {
        console.error(e)
    }
}

export function getFromStorageById(key, id) {
    try {
        let curItems = getFromStorage(key)
        curItems.map((item) => {
            if (item.id == id) {
                return item
            }
        })
        return null
    } catch(e) {
        console.error(e)
    }
}

export function updateItemStorage(key, object) {
    try {
        let curItems = getFromStorage(key)
        let newItems = curItems.map((item) => {
            if (item.id === object.id) {
                item = object
            }
            return item
        })
        window.localStorage.setItem(key, JSON.stringify(newItems))
    } catch(e) {
        console.error(e)
    }
}

