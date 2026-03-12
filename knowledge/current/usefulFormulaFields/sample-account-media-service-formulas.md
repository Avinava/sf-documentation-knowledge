---
title: "Sample Account Media Service Formulas"
domain: usefulFormulaFields
topic: sample-account-media-service-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.249Z
estimatedTokens: 391
keywords: [Sample, Account, Media, Service, Formulas, link, specific, search, sites, accounts, BBC™, News, Bloomberg™, CNN™, MarketWatch™]
---

# Sample Account Media Service Formulas

> Formulas to link to specific search sites and media accounts.

# Sample Account Media Service Formulas

Formulas to link to specific search sites and media accounts.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions by Context](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## BBC™ News Search

This formula creates a link to a BBC news search site based on the Account Name.

```

```

## Bloomberg™ News Search

This formula creates a link to an account's ticker symbol on the Bloomberg website.

```

```

## CNN™ News Search

This formula creates a link to a CNN news search site using the Account Name.

```

```

## MarketWatch™ Search

This formula creates a link to an account's ticker symbol on the Marketwatch.com website.

```

```

## Google™ Search

This formula creates a link to a Google search site using the Account Name.

```

```

## Google News Search

This formula creates a link to a Google news search site using the Account Name.

```

```

## Yahoo!™ Search

This formula creates a link to a Yahoo! search site using the Account Name.

```

```

## Yahoo! News Search

This formula creates a link to a Yahoo! news search site using the Account Name.

```

```

## Code Examples

```
HYPERLINK(
"http://www.bbc.co.uk/search/news/?q="&Name, 
"BBC News")
```

```
HYPERLINK(
"http://www.bloomberg.com/markets/symbolsearch?query="&TickerSymbol, 
"Bloomberg News")
```

```
HYPERLINK(
"http://http://www.cnn.com/search/?query="&Name,
"CNN News")
```

```
HYPERLINK(
"http://www.marketwatch.com/investing/stock/"&TickerSymbol,
"Marketwatch")
```

```
HYPERLINK(
"http://www.google.com/#q="&Name, 
"Google")
```

## Related Topics

- Formula Operators and Functions by Context (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
