---
title: "Escape Rendered Content Tag Syntax"
domain: mc-programmatic-content
topic: escape-rendered-content-tag-syntax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.995Z
estimatedTokens: 135
keywords: [Escape, Rendered, Content, Tag, escapes, any, message, text, html, renders, HTML-escaped, include, character, enclose, variable]
---

# Escape Rendered Content Tag Syntax

> Guide escapes any rendered content based on the content type for your message. For example, within a text/html message, Guide renders that content as HTML-escaped. You can include an & character or enclose the variable with single curly brackets {} to render the content as un-escaped:

# Escape Rendered Content Tag Syntax

Guide escapes any rendered content based on the content type for your message. For example, within a text/html message, Guide renders that content as HTML-escaped. You can include an & character or enclose the variable with single curly brackets {} to render the content as un-escaped:

Use quotes around variables or other text that include any reserved characters or spaces. Use brackets to quote tag names. If the tag name includes a \] character, escape that character with a second \] character.
