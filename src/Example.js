export default class Example {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.element.innerHTML = `<div class="container">
    <div class="row">
    принимает https запросы
      <div class="col">
      <form method="post">
      <input name="url" value="https://reqres.in">
      <input type="submit" value="add"></input>
      </div>
    </div>
    <div class="contener Eror">
    </div>
    </form>
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">URL</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>`;
  }
}
