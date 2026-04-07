---
title: "Options"
domain: mc-programmatic-content
topic: options
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.006Z
estimatedTokens: 372
keywords: [Options, Specify, direct, how, wish, process, templates, simple, tags, include, multiple, option, pairs, tag, quote]
---

# Options

> Specify options that direct Guide on how you wish to process information in your templates. Options use simple tags. You can include multiple option name and value pairs in one tag, and you should quote values only when those values include a space or a reserved character. Separate each option in th

# Options

Specify options that direct Guide on how you wish to process information in your templates. Options use simple tags. You can include multiple option name and value pairs in one tag, and you should quote values only when those values include a space or a reserved character. Separate each option in the template with a single space.

Add the global flag to retain the option value after Guide processes the block. Otherwise, the option reverts to the parent values. You can also use the keywords parent and default to reset options back to parent values.

## Permitted Options

-   defaultNumericFormat - provide how you wish to format numbers
-   defaultVariableFormatter - provide a formatter as outlined in the Variable section of the syntax guide (defaults to html)
-   delimiters - provide the left and right tag delimiters (defaults to {{ }} for Guide and %%{ }%% for AMPscript content)
-   caseSensitivity - indicate whether Guide treats data comparisons as case-sensitive (defaults to false) defaultCurrencyFormat - indicate how you wish to format a currency string value
-   errorOnUndefined - indicate whether Guide should geneate an error if an expression contains an undefined or NAN component during evalutation (defaults to true)
-   variableEmptyValue - indicates how Guide handles a variable reference containing an empty value:
    -   empty (default) - provides an empty value
    -   throw - provide an error
    -   markup - provide any markup

## Template
