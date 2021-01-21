export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node'
}
