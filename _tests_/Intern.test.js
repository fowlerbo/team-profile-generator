const Intern = require("../lib/Intern");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "UCF");
  expect(e.github).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "UCF";
  const e = new Engineer("Foo", 1, "test@test.com", "testValue");
  expect(e.github).toBe(testValue);
});