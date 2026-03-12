---
title: "SOQL Injection"
domain: communities-dev
topic: soql-injection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.480Z
estimatedTokens: 494
keywords: [SOQL, Injection, Sanitize, user-controlled, data, passed, dynamic, queries]
---

# SOQL Injection

> Sanitize user-controlled data passed into dynamic SOQL queries.

# SOQL Injection

Sanitize user-controlled data passed into dynamic SOQL queries.

SOQL or SOSL injection occurs when Apex code inserts user-controlled data into dynamic SOQL or SOSL queries without properly sanitizing the input. There are two scenarios to consider:

-   Changing the overall structure of the query
-   Changing the value of a query parameter

Control these scenarios by invoking Apex code that prevents callers from accessing data they’re not entitled to.

Consider this code:

```

```

The user potentially gains control over the query and accesses more information than they’re entitled to.

The return value of the query doesn’t limit the information the user can access. The user can submit a string, such as :

```

```

The return value of the query names all the accounts with an annual revenue in excess of $100,000, which is not what the developer intended to return to the caller.

Fixing SOQL or SOSL injection requires the appropriate contextual encoding. Don’t apply String.escapeSingleQuotes to every user input. Rather, sanitize fields based on where they appear in the SOQL or SOSL query.

-   For variables in WHERE (SOQL), ORDER BY (SOQL), WITH (SOSL), or FIND (SOSL) clauses, use bound variables:

    ```

    ```

-   For field and table names, call isAccessible on the describeResult of the field. Or to enforce declarative policies, use your own procedural logic to limit the field or table names to what your security policy allows.
-   For parameters in quoted strings, use bind variables. Don’t use bind variables or String.escapeSingleQuote to sanitize table names and field names, or any parameters that don’t appear in a quoted context.
-   For other primitive types, cast the user input into a boolean, integer, Id, or other primitive (non-string) type.

Be aware that the WITH SECURITY\_ENFORCED keyword doesn’t sanitize WHERE clauses, only SELECT and FROM clauses, so it isn’t a sanitizer for SOQL or SOSL injection attacks.

## Code Examples

```apex
@AuraEnabled
public static List<Account> getAccountName(string userId) {
  if (FeatureManagement.checkPermission('readAccount')) {
      string query='SELECT Name FROM Account WHERE Id=\''+ userId + '\'';
      return database.query(query);
  }
}
```

```
userId = '0035Y00003pPJiNQAW\' OR AnnualRevenue>100000.00 OR Name=\'a'
// 0035Y00003pPJiNQAW is any id to any object that is not an account
```

```
string query='SELECT Name FROM Account WHERE Id=:userId';
```
