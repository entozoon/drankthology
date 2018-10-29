# Drankthology

Precursor to energydrunk.com and dramthology.com

## Useful domains

- https://drankthology.netlify.com/
- https://drankthology.netlify.com/admin

Debugging:

- http://localhost:1337/___graphql
- http://localhost:1337/admin with connection to https://drankthology.netlify.com/ (note the https!)

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

### Can't see anything during dev?

Is Chrome being a twat and redirecting your localhost to https:? If so, that's bad mm'kay. Try using Classic Cache Killer or a similar extension.

### CONVERTING TO NEW SITES

[Edit all the things..]
