const Intern= require("../lib/Intern");

test("Can set Intern's school via constructor", () => {
  const testValue = "GWU";
  const e = new Intern("Aaron", 2, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Aaron", 2, "test@test.com", "Intern");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school name via getSchool", () => {
  const testValue = "GWU";
  const e = new Intern("Aaron", 2, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
