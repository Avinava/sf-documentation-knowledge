---
title: "Understanding Foreign Key and Parent-Child
Relationship SOQL Queries"
domain: apex-guide
topic: understanding-foreign-key-and-parent-child-relationship-soql-queries
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.548Z
estimatedTokens: 174
keywords: [Understanding, Foreign, Key, Parent-Child, Relationship, SOQL, Queries, SELECT, statement, query, any, valid, including, foreign, key, parent-child, record, joins., joins, included]
---

# Understanding Foreign Key and Parent-Child
Relationship SOQL Queries

> The SELECT statement of
a SOQL query can be any valid SOQL statement, including foreign key
and parent-child record joins. If foreign key joins are included,
the resulting sObjects can be referenced using normal field notation.
For example:

# Understanding Foreign Key and Parent-Child Relationship SOQL Queries

The SELECT statement of a SOQL query can be any valid SOQL statement, including foreign key and parent-child record joins. If foreign key joins are included, the resulting sObjects can be referenced using normal field notation. For example:

```

```

Additionally, parent-child relationships in sObjects act as SOQL queries as well. For example:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm "Accessing sObject Fields Through Relationships")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm "Working with SOQL Aggregate Functions")

## Code Examples

```apex
System.debug([SELECT Account.Name FROM Contact
              WHERE FirstName = 'Caroline'].Account.Name);
```

```
for (Account a : [SELECT Id, Name, (SELECT LastName FROM Contacts)
                  FROM Account
                  WHERE Name = 'Acme']) {
     Contact[] cons = a.Contacts;
}

//The following example also works because we limit to only 1 contact
for (Account a : [SELECT Id, Name, (SELECT LastName FROM Contacts LIMIT 1)
                  FROM Account
                  WHERE Name = 'testAgg']) {
     Contact c = a.Contacts;
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm)
