import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('', () => {
  it('Should return a MissingParamError if validator fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
