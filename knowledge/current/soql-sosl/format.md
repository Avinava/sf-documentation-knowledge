---
title: "FORMAT()"
domain: soql-sosl
topic: format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.865Z
estimatedTokens: 184
keywords: [clause, apply, localized, formatting, standard, custom, number, date, time, currency]
---

# FORMAT()

> Use FORMAT with the FIND clause to apply localized formatting to standard and custom number, date, time,
  and currency fields.

# FORMAT()

Use FORMAT with the FIND clause to apply localized formatting to standard and custom number, date, time, and currency fields.

When the FORMAT function is applied these fields reflect the appropriate format for the given user locale. The field format matches what appears in the Salesforce Classic user interface. For example, the date *December 28, 2015* can appear numerically as *2015-12-28*, *28-12-2015*, *28/12/2015*, *12/28/2015*, or *28.12.2015*, depending on the org’s locale setting.

The FORMAT function supports aliasing. In addition, aliasing is required when the query includes the same field multiple times. For example:

```

```

You can also nest it with aggregate or convertCurrency() functions.

```

```

## Code Examples

```
FIND {Acme} RETURNING Account(Id, LastModifiedDate, FORMAT(LastModifiedDate) FormattedDate)
```

```
FIND {Acme} RETURNING Account(AnnualRevenue, FORMAT(convertCurrency(AnnualRevenue)) convertedCurrency)
```
