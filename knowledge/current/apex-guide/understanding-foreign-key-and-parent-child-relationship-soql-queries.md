---
title: "Understanding Foreign Key and Parent-Child
Relationship SOQL Queries"
domain: apex-guide
topic: understanding-foreign-key-and-parent-child-relationship-soql-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.974Z
keywords: [Understanding, Foreign, Key, Parent-Child, Relationship, SOQL, Queries]
---

# Understanding Foreign Key and Parent-Child
Relationship SOQL Queries

# Understanding Foreign Key and Parent-Child Relationship SOQL Queries

The SELECT statement of a SOQL query can be any valid SOQL statement, including foreign key and parent-child record joins. If foreign key joins are included, the resulting sObjects can be referenced using normal field notation. For example:

```

```

Additionally, parent-child relationships in sObjects act as SOQL queries as well. For example:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm "Accessing sObject Fields Through Relationships")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm "Working with SOQL Aggregate Functions")