---
title: "Sections"
domain: mc-programmatic-content
topic: sections
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.414Z
estimatedTokens: 315
keywords: [Sections, Template, block, tags, prefix, render, content, contained, provide]
---

> Sections use block tags and a # prefix. Use sections to render content based on the values contained in the data reference. For example, the Guide template and the data reference provide the output displayed.

# Sections

Sections use block tags and a # prefix. Use sections to render content based on the values contained in the data reference. For example, the Guide template and the data reference provide the output displayed.

## Template

## Data

## Output

```
1: example1 (Good)
2: example2 (Better)
```

You can also use a . character with data from an array to refer to the current item in the list.

## Template

## Data

## Output

```
example1
example2
example3
example4
```

You can include a region attribute to treat the section as an impression region for reporting purposes:

If the template references an empty data source, the template will render no content. If the template references a function, the template passes the inner markup of the block tag to the function for processing. For all other values, the template renders the inner markup once.

Note that Mustache or Handlebars syntax does not support the region attribute or the . character for arrays.

Change the # prefix to ^ to invert the section. Use inverted section to render content when the data reference contains an empty value. For example, the Guide template and the data reference provide the output displayed:

## Template

## Data

## Output

```
No example available.
```
