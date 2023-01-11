module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  roots: ['src'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
}
