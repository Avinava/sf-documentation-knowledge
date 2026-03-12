---
title: "null Values in Lookup Relationships and Outer
			Joins"
domain: soql-sosl
topic: null-values-in-lookup-relationships-and-outer-joins
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.575Z
estimatedTokens: 378
keywords: [Lookup, Relationships, Outer, Joins, Relationship, SOQL, queries, records, relevant, foreign, key, join]
---

# null Values in Lookup Relationships and Outer
			Joins

> Relationship SOQL queries return records, even if the
			relevant foreign key field has a null value, as with an outer join.

# null Values in Lookup Relationships and Outer Joins

Relationship SOQL queries return records, even if the relevant foreign key field has a null value, as with an outer join.

-   In an ORDER BY clause, the record is returned even if the foreign key value in a record is null. For example:

    ```

    ```

    Any case record for which AccountId is empty is returned.

    The following example uses custom objects:

    ```

    ```

    This query returns the Id and Name values of the Child object and the Id and name of the Parent object referenced in each Child, and orders the results by the parent name. Records are returned even if Parent\_\_r.id or Parent\_\_r.name are null.

-   In a WHERE clause that uses OR, records are returned even if the foreign key value in a record is null. For example, if your organization has one contact with the value of its LastName field equal to Young and the value of its AccountId field equal to null, and another contact with a different last name and a parent account named Quarry, the following query returns both contacts:

    ```

    ```

-   In a WHERE clause that checks for a value in a parent field, the record is returned even if the parent does not exist.. For example:

    ```

    ```

    Case record Id values are returned.

-   In a WHERE clause that uses a Boolean field, the Boolean field never has a null value. Instead, null is treated as false. Boolean fields on outer-joined objects are treated as false when no records match the query.

## Code Examples

```
SELECT Id, CaseNumber, Account.Id, Account.Name
FROM Case
ORDER BY Account.Name
```

```
SELECT ID, Name, Parent__r.id, Parent__r.name
FROM Child__c
ORDER BY Parent__r.name
```

```
SELECT Id FROM Contact WHERE LastName = 'Young' or Account.Name = 'Quarry'
```

```
SELECT Id
FROM Case
WHERE Contact.LastName = null
```
