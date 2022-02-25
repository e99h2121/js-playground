npm install @marp-team/marp-cli

npx marp marp-slide.md

https://github.com/marp-team/marp-cli

```
# Convert slide deck into HTML
npx @marp-team/marp-cli@latest slide-deck.md
npx @marp-team/marp-cli@latest slide-deck.md -o output.html

# Convert slide deck into PDF
npx @marp-team/marp-cli@latest slide-deck.md --pdf
npx @marp-team/marp-cli@latest slide-deck.md -o output.pdf

# Convert slide deck into PowerPoint document (PPTX)
npx @marp-team/marp-cli@latest slide-deck.md --pptx
npx @marp-team/marp-cli@latest slide-deck.md -o output.pptx
```

C:\git\js-playground\nodejs\marp>npx marp templates_pineapple.md -o marp-slide.pdf --allow-local-files
[  INFO ] Converting 1 markdown...
[  WARN ] Insecure local file accessing is enabled for conversion from templates_pineapple.md.
[  INFO ] templates_pineapple.md => marp-slide.pdf
