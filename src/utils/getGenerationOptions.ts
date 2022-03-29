import { ResourceGenPrompt } from '../types/prompt'
import { getNamesByResource } from './getNamesByResource'

export function getGenerationOptions({ resource, ...rest }: ResourceGenPrompt) {
  const resourceNames = getNamesByResource(resource)
  const props = {
    ...resourceNames,
    ...rest,
  }

  return [
    {
      template: `UpdateForm.ejs`,
      target: `src/modules/${resource}/components/Update${resourceNames.resourceEntityNameCapitalized}Form.tsx`,
      props,
    },
    {
      template: `CreateForm.ejs`,
      target: `src/modules/${resource}/components/Create${resourceNames.resourceEntityNameCapitalized}Form.tsx`,
      props,
    },
    {
      template: `columns.ejs`,
      target: `src/modules/${resource}/columns.tsx`,
      props,
    },
    {
      template: `filters.ejs`,
      target: `src/modules/${resource}/filters.tsx`,
      props,
    },
    {
      template: `initialValues.ejs`,
      target: `src/modules/${resource}/initialValues.tsx`,
      props,
    },
    {
      template: `schema.ejs`,
      target: `src/modules/${resource}/${resourceNames.resourceEntityName}.schema.tsx`,
      props,
    },
    {
      template: `repository.ejs`,
      target: `src/modules/${resource}/repository.tsx`,
      props,
    },
  ]
}
