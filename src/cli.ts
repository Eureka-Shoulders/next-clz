import { build } from 'gluegun'

async function run(argv) {
  const cli = build()
    .brand('next-clz')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'next-clz-*', hidden: true })
    .help()
    .version()
    .create()
  // .exclude(['meta', 'strings', 'print', 'filesystem', 'semver', 'system', 'prompt', 'http', 'template', 'patching', 'package-manager'])
  const toolbox = await cli.run(argv)

  return toolbox
}

module.exports = { run }
