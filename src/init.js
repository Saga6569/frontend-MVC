import onChange from 'on-change';
import * as yup from 'yup';
import axios from 'axios';
import Example from './Example.js';
import render from './render.js';

export default () => {
  const schema = yup.object().shape({
    url: yup.string().url(),
  });
  const state = {
    registrationForm: {
      state: 'invalid',
      url: '',
      SuccessfulAdded: [],
      errors: [],
    },
  };
  const element = document.getElementById('point');
  const obj = new Example(element);
  obj.init();
  const watchedState = onChange(state, async (path, value) => {
    if (state.registrationForm.SuccessfulAdded.includes(value)) {
      state.registrationForm.state = 'Error';
      state.registrationForm.errors = { message: 'such a back has already been performed' };
      render(state);
      return;
    }
    try {
      await schema.validate({ url: value });
      await axios.get(state.registrationForm.url);
      state.registrationForm.state = 'No mistakes';
    } catch (error) {
      state.registrationForm.errors = error;
      state.registrationForm.state = 'Error';
    }
    render(state);
  });
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    watchedState.registrationForm.url = data.url;
  });
};
