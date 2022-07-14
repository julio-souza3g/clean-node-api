export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Missin param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
