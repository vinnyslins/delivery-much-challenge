export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'src/index.ts',
    'src/models',
    'src/services/models'
  ],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node'
}
