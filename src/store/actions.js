export function displayTotal(payload) {
  return {
    type: "DISPLAY_TOTAL",
    payload,
  };
}

export function equals(payload) {
  return {
    type: "EQUALS",
    payload,
  };
}

export function clickNumber(payload) {
  return {
    type: "CLICK_NUMBER",
    payload,
  };
}

export function clickOperator(payload) {
  return {
    type: "CLICK_OPERATOR",
    payload,
  };
}

export function clear(payload) {
  return {
    type: "CLEAR_CLICKED",
    payload,
  };
}
