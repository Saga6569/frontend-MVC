/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
let count = 1;

const render = async (state) => {
  const status = state.registrationForm.state;
  switch (status) {
    case 'Error':
      document.querySelector('.contener').textContent = state.registrationForm.errors.message;
      state.registrationForm.url = '';
      break;
    case 'No mistakes':
      document.querySelector('.contener').textContent = '';
      state.registrationForm.SuccessfulAdded.push(state.registrationForm.url);
      const table = document.createElement('tr');
      table.innerHTML = ` <th scope="row">${count}</th>
      <td table-danger >${state.registrationForm.url}</td>`;
      await document.querySelector('tbody').append(table);
      state.registrationForm.url = '';
      count += 1;
      break;
    default:
      console.log('default');
      break;
  }
};

export default render;
