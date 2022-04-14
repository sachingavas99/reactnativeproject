export const apiKeys = JSON.stringify({
  PROTOCOL: "http:",
  DNS_NAME: "103.93.97.204:3000",
  PORT: "3000",
});

export const dispatchAction = ({ type, payload }) => {
  return { type, payload };
};

export const setLocalStorageItemValue = ({
  itemName,
  itemValue,
  isPrimitive = true,
}) => {
  if (isPrimitive) localStorage.setItem(itemName, String(itemValue));
  else localStorage.setItem(itemName, JSON.stringify(itemValue));
};

export const getLocalStorageItemValue = ({ itemName, isPrimitive = true }) => {
  return isPrimitive
    ? localStorage.getItem(itemName)
    : JSON.parse(localStorage.getItem(itemName));
};
