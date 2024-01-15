//вывести из объекта (тут fetch'ем отправить запрос надо)адресс в формате 'Город: city2 Улица: street2 Дом: house2'.
// из этого же объекта вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'
// Создаем функцию для выполнения запроса и обработки ответа
async function fetchData(url: string): Promise<void> {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Город: ' +  data.address.city + ' Улица: ' +  data.address.street + ' Дом: ' +  data.address.house);
        console.log('фамилия '+ data.person.lastName +' имя '+ data.person.firstName + ' купил '+ data.productsOrder.count+ ' штук товаров ' + data.productsOrder.product.name)
}
const apiUrl = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json';
fetchData(apiUrl);