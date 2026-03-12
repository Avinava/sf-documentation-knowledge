---
title: "Considerations for Querying Currency Data Using SOQL"
domain: soql-sosl
topic: considerations-for-querying-currency-data-using-soql
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.508Z
estimatedTokens: 428
keywords: [Considerations, Querying, Currency, Data, SOQL, apply, query, Cloud, objects, lake, DLOs, model, DMOs]
---

# Considerations for Querying Currency Data Using SOQL

> These considerations apply when using SOQL to query Data Cloud objects, such as data
    lake objects (DLOs) and data model objects (DMOs).

# Considerations for Querying Currency Data Using SOQL

These considerations apply when using SOQL to query Data Cloud objects, such as data lake objects (DLOs) and data model objects (DMOs).

-   Use the cdp\_sys\_record\_currency\_\_c system field to query the ISO code value of a Data Cloud record.
-   If an SOQL query on Data Cloud objects returns null values for all currency fields, the ISO code is unsupported or invalid. Check the cdp\_sys\_record\_currency\_\_c system field to make sure the ISO codes are supported by your org, or verify that it matches the default corporate currency if you're using a single currency. If all records are stored with valid ISO codes, make sure the org setup page has these ISO codes configured as supported currencies. To set up the supported currencies, see [Manage Multiple Currencies](https://help.salesforce.com/s/articleView?id=sales.admin_currency.htm&type=5&language=en_US).
-   When querying currency data from Data Cloud objects using a SELECT clause, use an alias on the [toLabel()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_tolabel.htm "Translate SOQL query results into the language of the user who submits the query using the toLabel function.") function for the CurrencyIsoCode field. However, aliasing isn't required when using currency fields in a WHERE or ORDER BY clause.
    -   Valid: SELECT toLabel(CurrencyIsoCode) CurrencyCodeAlias, Currency\_\_c FROM <DMO/DLO>
    -   Invalid: SELECT toLabel(CurrencyIsoCode), Currency\_\_c FROM <DMO/DLO>
-   The convertCurrency() function doesn't round the result to configured decimal places for the currency in your org when it's used on ‌currency fields from Data Cloud objects.

## Related Topics

- toLabel() (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_tolabel.htm)
