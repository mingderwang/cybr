#!/usr/bin/env node
import { createCommand } from 'commander'
import figlet from 'figlet'
import data from "./package.json" with { type: "json" };

const program = createCommand(data.name)
program
  .option('-p, --pizza-type <TYPE>', 'type of pizza') 
  .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') 
  .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) 

program
  .description(data.description)
  .version(data.version)
  .command('farewell <name>')
  .description('Say farewell to a user')
  .action((name) => {
    console.log(`Goodbye, ${name}!`);
  })

program
  .command('clone <source> [destination]')
  .action((source, destination) => {
    console.log('clone command called')
  })

program
  .addHelpText('beforeAll', 
    '\n' + 
    await figlet.text('cybr',
      {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      },
    )
    + '\n'
  )
  .addHelpText('after', '🥭	🍧🧋🍻💭 ---------------')
  .addHelpText('afterAll', 
  `
Examples:
  cybr clone --help
  cybr help clone
  
`,
  )
  .showSuggestionAfterError(true)

program
  .parse(process.argv)
