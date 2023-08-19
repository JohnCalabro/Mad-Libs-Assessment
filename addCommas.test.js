const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("#addCommas", () => {
  test("it is a String", () => {
    let formattedNum = addCommas(1234);
    expect(typeof formattedNum).toBe("string");
  });
});

describe("#addCommas", () => {
  test("it contains commas", () => {
    let formattedNum = addCommas(1234);
    expect(formattedNum).toContain(",");
  })
})
