export const serializeFormQuery = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const params = new URLSearchParams();

  for (const [key, value] of formData) {
    params.append(key, value.toString());
  }

  return params;
};
