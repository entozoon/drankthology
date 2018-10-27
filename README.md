# Drankthology

Precursor to energydrunk.com and dramthology.com

https://drankthology.netlify.com/

https://drankthology.netlify.com/admin

## Tech

- React
- GatsbyJS
- GraphQL
- NetlifyCMS

## How does it work?

In `/admin`, if you edit an article, it changes the corresponding .md markdown file by pushing to the repo via magical netlify hooks.

If you're working locally, to receive these changes you will need to pull again and restart npm.

NB: You can also manually edit the `.md` files yourself (and restart npm)

## Develop

    npm i
    npm start

## Troubleshooting

### Published something but not showing up on the site? Try:

1. If you're working locally, do a `git pull`
2. Restart npm
3. Wait a while (2 mins)

### CONVERTING TO NEW SITES

[Edit all the things..]