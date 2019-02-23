export default (timeout, cb) => {
  return setTimeout(() => cb(), timeout);
};
