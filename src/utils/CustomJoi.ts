import { Joi } from 'celebrate'

const CustomJoi = Joi.extend(joi => ({
  type: 'stringArray',
  base: joi.array().required(),
  coerce: value => ({
    value: value
      ? value.split(',').map((item: string) => item.trim())
      : []
  })
}))

export default CustomJoi
