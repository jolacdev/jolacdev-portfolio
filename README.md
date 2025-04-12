# Jose L. Portfolio

## Ideas

- https://www.darkmodedesign.com/?2bf851fe_page=7
- https://www.hyresearch.com/

## Resources

### React

- **Guides**: https://www.robinwieruch.de/
- **Components**: https://ariakit.org/
- **HTML5 Tailwind Components**: https://daisyui.com/components/dropdown/
- **Tailwind more readable**: https://tailkits.com/blog/how-to-make-tailwind-more-readable/

### SVG Components

- [Open Source SVG Icons - Material Design Icons](https://opensourcesvgicons.com/mdi)

### Tailwind

- **Color Palette**: https://www.tints.dev/
- https://stackoverflow.com/questions/79540647/in-tailwind-v4-how-to-define-custom-colors-and-use-them-in-dark-light-mode-wit

### Animations

- **React Motion**: https://motion.dev/docs/react-motion-component

## Setup

## Setup Workspace Settings

### Select TypeScript Version

Next.js enforces specific TypeScript rules that require using the workspace's TypeScript version.

- Command Palette (`Cmd + Shift + P` / `Ctrl + Shift + P`) > `TypeScript: Select TypeScript Version...` > `Use Workspace Version`

### Disable Default Auto-Organizing Imports

Perfectionist ESLint rules enforce a consistent import order. To avoid conflicts with the import sorting of VSCode, add the following to your settings:

`.vscode\settings.json`

```json
"editor.codeActionsOnSave": {
    "source.organizeImports": "never"
  },
```

### Setup Debugger

Configure VSCode to debug both the **server** and **client** of a Next.js application.

For more details, refer to the official Next.js debugging documentation: [Next.js Debugging Docs](https://nextjs.org/docs/app/building-your-application/configuring/debugging)

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug client-side (Firefox)",
      "type": "firefox",
      "request": "launch",
      "url": "http://localhost:3000",
      "reAttach": true,
      "pathMappings": [
        {
          "url": "webpack://_N_E",
          "path": "${workspaceFolder}"
        }
      ]
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "runtimeArgs": ["--inspect"],
      "skipFiles": ["<node_internals>/**"],
      "serverReadyAction": {
        "action": "debugWithChrome",
        "killOnServerStop": true,
        "pattern": "- Local:.+(https?://.+)",
        "uriFormat": "%s",
        "webRoot": "${workspaceFolder}"
      }
    }
  ]
}
```
