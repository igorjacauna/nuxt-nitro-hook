# Nuxt + Nitro + hook + preset

This repo is to help reproduce the behaviour about use hooks in `nuxt.config.ts` thats is overwriting Nitro presets hooks.

> This happens with any `preset` that uses the `compiled` hook or another hook that also is configured in `nuxt.config.ts`. In this repo we will use the `azure-function` `preset` and `compiled` hook as example.

## Setup

1. `yarn install`

## Scenarios

### #1 Without hook in `nuxt.config.ts`

1. Run `yarn build`
2. See that in `.output/server` there is a `function.json` file that is created by the `compiled` hook from `azure-function` [preset](https://github.com/unjs/nitro/blob/main/src/presets/azure-functions.ts#L16).

### #2 With hook in `nuxt.config.ts`

1. Uncomment this code in `nuxt.config.ts`:

```ts
    hooks: {
      compiled: () => {
        console.log('\n\n\n ######## My hook in nuxt.config.ts ######## \n\n\n')
      }
    }
```

2. Run `yarn build`
3. See that in `.output/server` there is not a `function.json` file that should be created by the `compiled` hook from `azure-function` [preset](https://github.com/unjs/nitro/blob/main/src/presets/azure-functions.ts#L16).


