const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

const data = localStorage.getItem(KEY);
if (data) {
  formData = JSON.parse(data);
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(KEY);
  form.reset();
  formData = { email: '', message: '' };
});

