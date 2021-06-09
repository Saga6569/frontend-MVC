/* eslint-disable no-undef */
import onChange from 'on-change';
import * as yup from 'yup';
import Example from './Example.js';
import working from './isWorking.js';
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
    const valide = await schema.isValid({ url: value });
    if (!valide) {
      await schema.validate({ url: value }).catch((err) => {
        state.registrationForm.errors = err;
      });
      state.registrationForm.state = 'Error';
      render(state);
      return;
    }
    const work = await working(state.registrationForm.url);
    if (work !== 200) {
      state.registrationForm.state = 'Error';
      state.registrationForm.errors = work;
      render(state);
      return;
    }
    state.registrationForm.state = 'No mistakes';
    render(state);
  });

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    watchedState.registrationForm.url = data.url;
  });
};
