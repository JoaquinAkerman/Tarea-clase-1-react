export const dataParaControledCheckbox = {
  name: 'caja controlada',
  isChecked: false,
  onChange: function devolverValorContrario(valor) {
    const prevState = valor;
    return !prevState;
  },
};

export const itemsParaCheckboxListWithState = [
  {
    name: 'uno',
    isChecked: false,
    onChange: function devolverValorContrario(valor) {
      const prevState = valor;
      return !prevState;
    },
  },
  {
    name: 'dos',
    isChecked: true,
    onChange: function devolverValorContrario(valor) {
      const prevState = valor;
      return !prevState;
    },
  },
  {
    name: 'tres',
    isChecked: false,
    onChange: function devolverValorContrario(valor) {
      const prevState = valor;
      return !prevState;
    },
  },
];
