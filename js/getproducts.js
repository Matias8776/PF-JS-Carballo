const getProducts = async () => {
    const response = await fetch ("../json/stock.json")
    const data = await response.json()

    return data
}

getProducts()