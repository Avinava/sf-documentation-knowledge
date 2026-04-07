---
title: "Queries Queries"
domain: mobile-sdk
topic: queries-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:27.011Z
estimatedTokens: 680
keywords: [Joins, Queries, exert, full, control, over, queries—or, reuse, SQL, queries—you, define, SmartStore, Smart, Restrictions, Sample, Aggregate, Functions]
---

> To exert full control over your queries—or to reuse existing SQL
        queries—you can define custom SmartStore
        queries.

# Queries Queries

To exert full control over your queries—or to reuse existing SQL queries—you can define custom SmartStore queries.

SmartStore supports a Smart SQL query language for free-form SELECT statements. Smart SQL queries combine standard SQL SELECT grammar with additional descriptors for referencing soups and soup fields. This approach gives you maximum control and flexibility, including the ability to use joins. Smart SQL supports all standard SQL SELECT constructs.

As of Mobile SDK 9.1, Smart SQL no longer requires index paths for all fields referenced in SELECT or WHERE clauses, except as noted in the following restrictions.

## Smart SQL Restrictions

-   For soups that use the deprecated external storage feature, Smart SQL still requires index paths for any fields referenced in SELECT or WHERE clauses.

    ![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=mobile_sdk)

    #### Warning

    External storage is deprecated in Mobile SDK 10.0 and will be removed in Mobile SDK 11.0. See [Using External Storage for Large Soup Elements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_external_storage.htm).

-   You can’t write MATCH queries with Smart SQL. For example, the following query doesn’t work: SELECT {soupName:\_soup} FROM {soupName} WHERE {soupName:name} MATCH 'cat'

## Syntax

Syntax is identical to the standard SQL SELECT specification but with the following adaptations:

| Usage | Syntax |
| --- | --- |
| To specify a column | {<soupName>:<path>} |
| To specify a table | {<soupName>} |
| To refer to the entire soup entry JSON string | {<soupName>:_soup} |
| To refer to the internal soup entry ID | {<soupName>:_soupEntryId} |
| To refer to the last modified date | {<soupName>:_soupLastModifiedDate} |

## Sample Queries

Consider two soups: one named Employees, and another named Departments. The Employees soup contains standard fields such as:

-   First name (firstName)
-   Last name (lastName)
-   Department code (deptCode)
-   Employee ID (employeeId)
-   Manager ID (managerId)

The Departments soup contains:

-   Name (name)
-   Department code (deptCode)

Here are some examples of basic Smart SQL queries using these soups:

```

```

## Joins

Smart SQL also allows you to use joins. For example:

```

```

You can even do self-joins:

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Doing a join on a JSON1 index requires a slightly extended syntax. For example, instead of

```

```

use

```

```

## Aggregate Functions

Smart SQL supports the use of aggregate functions such as:

-   COUNT
-   SUM
-   AVG

For example:

```

```

## Code Examples

```
select {employees:firstName}, {employees:lastName}
from {employees} order by {employees:lastName}

select {departments:name}
from {departments}
order by {departments:deptCode}
```

```
select {departments:name}, {employees:firstName} || ' ' || {employees:lastName} 
from {employees}, {departments} 
where {departments:deptCode} = {employees:deptCode} 
order by {departments:name}, {employees:lastName}
```

```
select mgr.{employees:lastName}, e.{employees:lastName} 
from {employees} as mgr, {employees} as e 
where mgr.{employees:employeeId} = e.{employees:managerId}
```

```
select {soup1:path1} from {soup1}, {soup2}
```

```
select {soup1}.{soup1:path1} from {soup1}, {soup2}
```

## Related Topics

- Using External Storage for Large Soup Elements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_external_storage.htm)
