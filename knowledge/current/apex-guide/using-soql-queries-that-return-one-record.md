---
title: "Using SOQL Queries That Return One Record"
domain: apex-guide
topic: using-soql-queries-that-return-one-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.557Z
estimatedTokens: 346
keywords: [SOQL, Queries, Record, queries, used, assign, single, sObject, result, list, contains, only, element.]
---

# Using SOQL Queries That Return One Record

> SOQL queries can be used to assign a single sObject value when the result list contains
  only one element.

# Using SOQL Queries That Return One Record

SOQL queries can be used to assign a single sObject value when the result list contains only one element.

When the L-value of an expression is a single sObject type, Apex automatically assigns the single sObject record in the query result list to the L-value. A runtime exception results if zero sObjects or more than one sObject is found in the list. For example:

```

```

This usage is supported with the following Apex types, methods, or operators:

-   Database.query method.
-   Safe Navigation Operator. See [Safe Navigation Operator](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SafeNavigationOperator.htm).
-   Null Coalescing Operator. See [Null Coalescing Operator](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_NullCoalescingOperator.htm).
-   Map.values.

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

    #### Warning

    Although currently supported, Salesforce recommends against using this feature with Map.values.


-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm "Working with Very Large SOQL Queries")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_filtering_nulls.htm "Improve Performance by Avoiding Null Values")

## Code Examples

```apex
List<Account> accts = [SELECT Id FROM Account];

// These lines of code are only valid if one row is returned from
// the query. Notice that the second line dereferences the field from the
// query without assigning it to an intermediary sObject variable.
Account acct = [SELECT Id FROM Account];
String name = [SELECT Name FROM Account].Name;
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_filtering_nulls.htm)
