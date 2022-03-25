import { ResourceGenPrompt } from '../types/prompt'
import { getNamesByResource } from './getNamesByResource'
export function getGenerationOptions({ resource, ...rest }: ResourceGenPrompt) {
  const { resourceName, ...resourceNames } = getNamesByResource(resource)

  const props = {
    resourceName,
    ...resourceNames,
    ...rest,
  }

  return [
    {
      template: `UpdateForm.ejs`,
      target: `src/modules/components/${resourceName}Field.tsx`,
      props,
    },
    {
      template: `CreateForm.ejs`,
      target: `src/modules/components/${resourceName}Form.tsx`,
      props,
    },
    {
      template: `columns.ejs`,
      target: `src/modules/columns.tsx`,
      props,
    },
    {
      template: `filters.ejs`,
      target: `src/modules/filters.tsx`,
      props,
    },
    {
      template: `initialValues.ejs`,
      target: `src/modules/initialValues.tsx`,
      props,
    },
    {
      template: `schema.ejs`,
      target: `src/modules/${resource}.schema.tsx`,
      props,
    },
    {
      template: `repository.ejs`,
      target: `src/modules/repository.tsx`,
      props,
    },
    {
      template: `types.ejs`,
      target: `src/modules/types.tsx`,
      props,
    },
  ]
}
