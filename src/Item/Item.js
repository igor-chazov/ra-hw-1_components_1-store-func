export default class Item {
  constructor(data) {
    const fields = ['brand', 'title', 'description', 'descriptionFull', 'price', 'currency'];
    console.log(fields);
    fields.forEach((field) => {
      if (!data.hasOwnProperty(field)) throw Error(`Объект переданный в Item должен содержать поле: ${field}`);
      this[field] = data[field];
    })
  }
}