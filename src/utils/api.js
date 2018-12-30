export const getWorks = () =>
  fetch('works.json')
    .then((res) => res.json())
