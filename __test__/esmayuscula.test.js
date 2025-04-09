test('devuelve true para una palabra completamente en mayúsculas', () => {
    expect(isUpperCase('HOLA')).toBe(true);
  });

  test('devuelve false para una palabra en minúsculas', () => {
    expect(isUpperCase('hola')).toBe(false);
  });

  test('devuelve false para una mezcla de mayúsculas y minúsculas', () => {
    expect(isUpperCase('Hola')).toBe(false);
  });

  test('devuelve true para una frase con mayúsculas y espacios', () => {
    expect(isUpperCase('HOLA MUNDO')).toBe(true);
  });