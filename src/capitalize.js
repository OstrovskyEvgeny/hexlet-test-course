export default (text) => {
  const [firstSymbol = "", ...rest] = text;
  return `${firstSymbol.toUpperCase()}${rest.join("")}`;
};
