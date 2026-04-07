---
title: "Guide Template Language Usage with AMPscript and Server-Side JavaScript"
domain: mc-programmatic-content
topic: guide-template-language-usage-with-ampscript-and-server-side-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:27.052Z
estimatedTokens: 258
keywords: [Template, Language, Usage, AMPscript, Server-Side, JavaScript, include, functionality, new, templates, messages, feature, helps, maintain, basic]
---

# Guide Template Language Usage with AMPscript and Server-Side JavaScript

> You can include existing AMPscript and Server-Side JavaScript functionality in new Guide templates as you create and update your existing messages. This feature helps you maintain basic functionality as you update your messages using Guide. For example, you could use an existing AMPscript variable w

# Guide Template Language Usage with AMPscript and Server-Side JavaScript

You can include existing AMPscript and Server-Side JavaScript functionality in new Guide templates as you create and update your existing messages. This feature helps you maintain basic functionality as you update your messages using Guide. For example, you could use an existing AMPscript variable within the Guide tags and continue to return the same information.

Guide uses AMPscript functions via simple tags and the = prefix. Guide will pass any parameters included in the inner text of the template to the specified function. Once completed, Guide replaces the template with the output of the function.

## Basic Structure

## Example

Displays the result of 2.

You must quote string and date literals. You can optionally quote numeric literals. Include an & character or enclose the variable with single curly brackets {} to render the content as un-escaped within the function. Guide treats any string prefixed with an & character as a variable.
