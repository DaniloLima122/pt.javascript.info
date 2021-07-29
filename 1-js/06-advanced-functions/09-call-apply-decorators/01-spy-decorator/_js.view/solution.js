function spy(func) {

  function wrapper(...args) {
    // usando ...args ao invés de arguments para guardar o "verdadeiro" array dentro de wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
