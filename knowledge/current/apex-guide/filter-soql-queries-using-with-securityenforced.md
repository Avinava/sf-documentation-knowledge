---
title: "Filter SOQL Queries Using WITH SECURITY_ENFORCED"
domain: apex-guide
topic: filter-soql-queries-using-with-securityenforced
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.676Z
keywords: [Filter, SOQL, Queries, SECURITY_ENFORCED, SECURITY, _ENFORCED, Important, Note, Example]
---

# Filter SOQL Queries Using WITH SECURITY_ENFORCED

# Filter SOQL Queries Using WITH SECURITY\_ENFORCED

Use the WITH SECURITY\_ENFORCED clause to enable field- and object-level security permissions checking for SOQL SELECT queries in Apex code, including subqueries and cross-object relationships.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Salesforce recommends that you enforce Field Level Security (FLS) by using WITH USER\_MODE instead of WITH SECURITY\_ENFORCED because it has fewer limitations.

If you enforce user mode, remove any redundant WITH SECURITY\_ENFORCED clauses. You can’t combine both forms of access checks in the same query.

See [Enforce User Mode for Database Operations](atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm "You can run database operations in user mode rather than in the default system mode by using SOQL or SOSL queries with special keywords or by using DML method overloads.").

Apex generally runs in system context; that is, the current user's permissions and field-level security aren’t taken into account during code execution. Sharing rules, however, are not always bypassed: the class must be declared with the without sharing keyword in order to ensure that sharing rules are not enforced. Although performing field- and object-level security checks was possible in earlier releases, this clause substantially reduces the verbosity and technical complexity in query operations. This feature is tailored to Apex developers who have minimal development experience with security and to applications where graceful degradation on permissions errors isn’t required.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The WITH SECURITY\_ENFORCED clause is only available in Apex. We don’t recommend using WITH SECURITY\_ENFORCED in Apex classes or triggers with an API version earlier than 45.0.

WITH SECURITY\_ENFORCED applies field- and object-level security checks only to fields and objects referenced in SELECT or FROM SOQL clauses and not clauses like WHERE or ORDER BY. In other words, security is enforced on what the SOQL SELECT query returns, not on all the elements that go into running the query.

Insert the WITH SECURITY\_ENFORCED clause:

-   After the WHERE clause if one exists, else after the FROM clause.
-   Before any ORDER BY, LIMIT, OFFSET, or aggregate function clauses.

For more information on SOQL SELECT queries, see [SOQL SELECT Syntax](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm "HTML (New Window)") in the SOQL and SOSL Reference.

For example, if the user has field access for LastName, this query returns Id and LastName for the Acme account entry.

```

```

There are some restrictions while querying polymorphic lookup fields using WITH SECURITY\_ENFORCED. Polymorphic fields are relationship fields that can point to more than one entity.

-   Traversing a polymorphic field’s relationship is not supported in queries using WITH SECURITY\_ENFORCED. For example, you cannot use WITH SECURITY\_ENFORCED in this query, which returns the Id and Owner names for User and Calendar entities: SELECT Id, What.Name FROM Event WHERE What.Type IN (’User’,’Calendar’).
-   Using TYPEOF expressions with an ELSE clause is not supported in queries using WITH SECURITY\_ENFORCED. TYPEOF is used in a SELECT query to specify the fields to be returned for a given type of a polymorphic relationship. For example, you cannot use WITH SECURITY\_ENFORCED in this query. The query specifies certain fields to be returned for Account and Opportunity objects, and Name and Email fields to be returned for all other objects.
    
    ```
    
    ```
    
-   The Owner, CreatedBy, and LastModifiedBy polymorphic lookup fields are exempt from this restriction, and do allow polymorphic relationship traversal.
-   For AppExchange Security Review, you must use API version 48.0 or later when using WITH SECURITY\_ENFORCED. You cannot use API versions where the feature was in beta or pilot.

If any fields or objects referenced in the SOQL SELECT query using WITH SECURITY\_ENFORCED are inaccessible to the user, a System.QueryException is thrown, and no data is returned.

To enforce object and field permissions on the User object and hide a user’s personal information from other users in orgs with Experience Cloud sites, see [Enforcing Object and Field Permissions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm).

## Example

If field access for either LastName or Description is hidden, this query throws an exception indicating insufficient permissions.

```

```

## Example

If field access for Website is hidden, this query throws an exception indicating insufficient permissions.

```

```

## Example

If field access for Type is hidden, this aggregate function query throws an exception indicating insufficient permissions.

```

```