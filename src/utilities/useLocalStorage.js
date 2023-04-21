
export const saveLocalStorageWithKey = (key, value) => {
    if (value === null || value == undefined) {
        localStorage.removeItem(key)
    } else {
        localStorage.setItem(key, JSON.stringify(value))
    }

}

export const getLocalStorageFromKey = (key) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : undefined
}