const getProducts = async () => {
    try {
        const response = await fetch('../json/stock.json');
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
};

getProducts().then((data) => {
    console.log(data);
});