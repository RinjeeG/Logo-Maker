const { Circle } = require('./shapes');

test('Circle render method returns correct SVG string', () => {
  const circle = new Circle('red');
  expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});
