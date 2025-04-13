const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

module.exports = createJestConfig({
  testEnvironment: 'jsdom', // Agora o pacote está instalado
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // Ajuste para seus aliases do TypeScript
  },
  // Adicione para suporte a TypeScript
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
})
