---
title: "convertCurrency()"
domain: soql-sosl
topic: convertcurrency
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.547Z
estimatedTokens: 668
keywords: [convertCurrency, SELECT, statement, SOQL, query, convert, currency, user’s, action, requires, org, multiple, currencies, enabled, Considerations, SOSL, organization, multi-currency]
---

# convertCurrency()

> Use convertCurrency() in the SELECT statement of a SOQL query to convert currency fields
		to the user’s currency. This action requires that the org has multiple currencies
		enabled.

# convertCurrency()

Use convertCurrency() in the SELECT statement of a SOQL query to convert currency fields to the user’s currency. This action requires that the org has multiple currencies enabled.

The following syntax is for using convertCurrency() with the SELECT clause:

```

```

For example:

```

```

To format currencies according to the user’s locale, use [FORMAT()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_format.htm#sforce_api_calls_soql_select_format "Use FORMAT with the SELECT clause to apply localized formatting to standard and custom number, date, time, and currency fields.") with SELECT() statements. In this example, convertedCurrency is an alias for the returned amount, which is formatted appropriately in the user interface.

```

```

If an org has enabled advanced currency management, dated exchange rates are used when converting currency fields on opportunities, opportunity line items, and opportunity history. With advanced currency management, convertCurrency uses the conversion rate that corresponds to a given field (for example, CloseDate on opportunities). When advanced currency management isn’t enabled, the most recent conversion date entered is used.

## Considerations and Workarounds

You can’t use the convertCurrency() function in a WHERE clause. If you do, an error is returned. Use the following syntax to convert a numeric value to the user’s currency from any active currency in your org.

```

```

For example:

```

```

In this example, opportunity records are returned if the record’s currency Amount value is greater than the equivalent of USD5000. For example, an opportunity with an amount of USD5001 is returned, but not JPY7000.

Use an ISO code that your org has enabled and made active. If you don’t put in an ISO code, the numeric value is used instead of comparative amounts. Using the previous example, opportunity records with JPY5001, EUR5001, and USD5001 would be returned. If you use IN in a WHERE clause, you can’t mix ISO code and non-ISO code values.

You can’t convert the result of an aggregate function into the user’s currency by calling the convertCurrency() function. If a query includes a GROUP BY or HAVING clause, currency data returned by using an aggregate function, such as SUM() or MAX(), is in the org’s default currency.

For example:

```

```

You can’t use ISO\_CODEvalue to represent a value in a particular currency, such as USD, when you use an aggregate function. For example, the following query doesn’t work.

```

```

You can’t use convertCurrency() with ORDER BY. Ordering is always based on the converted currency value, just like in reports.

## Code Examples

```
convertCurrency(field)
```

```
SELECT Id, convertCurrency(AnnualRevenue)
FROM Account
```

```
SELECT Amount, FORMAT(amount) Amt, convertCurrency(amount) convertedAmount,
FORMAT(convertCurrency(amount)) convertedCurrency FROM Opportunity where id = '006R00000024gDtIAI'
```

```
WHERE Object_name Operator ISO_CODEvalue
```

```
SELECT Id, Name
FROM Opportunity
WHERE Amount > USD5000
```

## Related Topics

- FORMAT() (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_format.htm)
- ORDER BY Clause (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_select_order_by_with_limit.htm)
