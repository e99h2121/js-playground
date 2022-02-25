---
theme: uncover
marp: true
paginate: false
header: sample 
footer: Pineapple / Strictly Confidential
---

<style>
@import url('https://fonts.googleapis.com/css?family=Noto Sans JP&display=swap');
section {
    font-family: 'Noto Sans JP', serif;
}

header {
    width: 100%;
    color: orange;
    background-image: url(./images/pineapple.png);
    background-repeat: no-repeat;
    background-position: 85%;
    top: 10px;
    text-align: left;
    padding: 33px;
}

footer {
    width: 100%;
    color: white;
    background: linear-gradient(to right, orange, white);
    text-align: left;
    padding: 10px;
}

</style>

<!--
_paginate: false
_color: black;
-->


## MarpとMarkdownでスライドを簡単に作ろう Readme.md 

お名前・所属 [@e99h2121 as YAMADA](https://twitter.com/e99h2121)

---

### テンプレートをまるごとDownload


```
marp
  ├ templates_pineapple.md
  └ images
       ├ pineapple.jpg
       └ frog.png
```

こんなかんじに。

---

### npm install します

```
npm install @marp-team/marp-cli

npx marp templates_pineapple.md

```
https://github.com/marp-team/marp-cli

---

### いろんなオプションがあります

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

---

### こんな感じで、サンプルが出力できます

```
npx marp templates_pineapple.md -o marp-slide.pdf --allow-local-files
[  INFO ] Converting 1 markdown...
[  WARN ] Insecure local file accessing is enabled for conversion from templates_pineapple.md.
[  INFO ] templates_pineapple.md => marp-slide.pdf
```
