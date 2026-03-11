---
title: "Working with SOQL and SOSL Query Results"
domain: apex-guide
topic: working-with-soql-and-sosl-query-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.987Z
keywords: [Working, SOQL, SOSL, Query, Results]
---

# Working with SOQL and SOSL Query Results

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