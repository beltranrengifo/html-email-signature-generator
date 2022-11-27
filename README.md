# HTML SIGNATURE GENERATOR FOR EMAIL CLIENTS

## What is this

This is a humble signature generator which allows to copy and paste a proper HTML markup, mostly table based, optimised for the most popular email clients.

## How to use

The generator is really simple...

- Just fill the form fields.
- Upload your images if any.
- Customise template, colors and safe font. I've only used safe fonts to ensure email clients compatibility.
- Preview and copy the markup.
- Or download the signature as an image if you prefer.
- All _non filled_/empty form fields will not be shown in the final signature, so complete the form at your will.

## Light and dark modes are available!

Use the color mode switcher on the top right to change the color schema and customise the signature as you want.

## Issues and requests

Please fill an issue [here](https://github.com/beltranrengifo/html-email-signature-generator/issues) and I'll take care of it ASAP.

## Contribute or extend the development

- Fork or clone
- Install dependencies with `yarn` or `npm`
- Install the [Vercel CLI](https://vercel.com/docs/cli), I use a serverless function as a proxy for generating the signature image (more info [here](https://html2canvas.hertzen.com/proxy))
- You can skip the installation of the Vercel CLI and just run `yarn start`, however the **_signature as image generation_** will not work properly, as the images will not load.
- Start the development server: `vercel dev`

## What's next

- Create more templates
- Make the templating code more scalable
- Maybe some UI revision or feeback is a good point also...

Any help is welcomed!
