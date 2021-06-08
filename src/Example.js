export default class Example {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.element.innerHTML = `<form method="post">
    <input name="url" value="http://reqres.in">
    <input type="submit" value="add">
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
