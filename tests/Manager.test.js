const Manager= require("../lib/Manager");

test("Can set Manager's office number via constructor", () => {
  const testValue = "100";
  const e = new Manager("Aaron", 2, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Aaron", 2, "test@test.com", "Manager");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNumber", () => {
  const testValue = "100";
  const e = new Manager("Aaron", 2, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
