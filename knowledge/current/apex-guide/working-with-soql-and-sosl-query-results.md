---
title: "Working with SOQL and SOSL Query Results"
domain: apex-guide
topic: working-with-soql-and-sosl-query-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.567Z
estimatedTokens: 435
keywords: [Working, SOQL, SOSL, Query, Results, queries, only, data, sObject, fields, selected, original, query., try, access, field, query, receive, runtime, error]
---

# Working with SOQL and SOSL Query Results

> SOQL and SOSL queries only return data for sObject fields that
are selected in the original query. If you try to access a field that
was not selected in the SOQL or SOSL query (other than ID), you receive
a runtime error, even if the field contains a value in the database.
The following code example

# Working with SOQL and SOSL Query Results

SOQL and SOSL queries only return data for sObject fields that are selected in the original query. If you try to access a field that was not selected in the SOQL or SOSL query (other than ID), you receive a runtime error, even if the field contains a value in the database. The following code example causes a runtime error:

```

```

The following is the same code example rewritten so it does not produce a runtime error. Note that Name has been added as part of the select statement, after Id.

```

```

Even if only one sObject field is selected, a SOQL or SOSL query always returns data as complete records. Consequently, you must dereference the field in order to access it. For example, this code retrieves an sObject list from the database with a SOQL query, accesses the first account record in the list, and then dereferences the record's AnnualRevenue field:

```

```

The only situation in which it is not necessary to dereference an sObject field in the result of an SOQL query, is when the query returns an Integer as the result of a COUNT operation:

```

```

Fields in records returned by SOSL queries must always be dereferenced.

Also note that sObject fields that contain formulas return the value of the field at the time the SOQL or SOSL query was issued. Any changes to other fields that are used within the formula are not reflected in the formula field value until the record has been saved and re-queried in Apex. Like other read-only sObject fields, the values of the formula fields themselves cannot be changed in Apex.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm "Accessing sObject Fields Through Relationships")

## Code Examples

```
insert new Account(Name = 'Singha');
Account acc = [SELECT Id FROM Account WHERE Name = 'Singha' LIMIT 1];
// Note that name is not selected
String name = [SELECT Id FROM Account WHERE Name = 'Singha' LIMIT 1].Name;
```

```
insert new Account(Name = 'Singha');
Account acc = [SELECT Id FROM Account WHERE Name = 'Singha' LIMIT 1];
// Note that name is now selected
String name = [SELECT Id, Name FROM Account WHERE Name = 'Singha' LIMIT 1].Name;
```

```
Double rev = [SELECT AnnualRevenue FROM Account
              WHERE Name = 'Acme'][0].AnnualRevenue;

// When only one result is returned in a SOQL query, it is not necessary
// to include the list's index.
Double rev2 = [SELECT AnnualRevenue FROM Account
              WHERE Name = 'Acme' LIMIT 1].AnnualRevenue;
```

```
Integer i = [SELECT COUNT() FROM Account];
```

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm)
