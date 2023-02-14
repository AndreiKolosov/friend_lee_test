import './index.scss';

const rangeArr = document.querySelectorAll('.custom-range__input');
rangeArr.forEach((range) =>
  range.addEventListener('input', () => {
    const value = range.value;
    range.style.background = `linear-gradient(to right, #FF9514 0%, #FF9514 ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
  }),
);
