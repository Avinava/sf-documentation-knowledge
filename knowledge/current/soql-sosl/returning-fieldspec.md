---
title: "RETURNING FieldSpec"
domain: soql-sosl
topic: returning-fieldspec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.897Z
estimatedTokens: 1767
keywords: [RETURNING, FieldSpec, clause, add, SOSL, query, specify, text, search, result, *FieldSpec*, Clauses]
---

# RETURNING FieldSpec

> RETURNING is an optional clause that you can add to
    a SOSL query to specify the information to be returned in the text search result.

# RETURNING *FieldSpec*

RETURNING is an optional clause that you can add to a SOSL query to specify the information to be returned in the text search result.

If you don’t specify this clause, the default behavior is to return the IDs of all searchable objects in advanced search up to the maximum limit. The maximum limit is specified in the [LIMIT*n*](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_limit.htm "LIMIT is an optional clause that can be added to a SOSL query to specify the maximum number of rows that are returned in the text query, which can be up to 2,000 results. If unspecified, the default is the maximum 2,000 results.") clause or 2,000 (API version 28.0 and later), whichever is smaller. The returned IDs include custom objects even if there’s no custom tab. Search results list objects in the order specified in the clause. API version 27.0 and earlier support a maximum of 200 results.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

External objects, articles, documents, feed comments, feed items, files, products, and solutions must be specified explicitly in a RETURNING clause to be returned in search results. For example:

```

```

Use the RETURNING clause to restrict the results data that is returned from the search() call. For information on IDs, see ID Field Type.

## Syntax

In the following syntax statement, square brackets \[\] represent optional elements that can be omitted. A comma indicates that the indicated segment can appear more than one time.

```

```

RETURNING can contain the following elements:

| Name | Description |
| --- | --- |
| ObjectTypeName | Object to return. If specified, then the search() call returns the IDs of all found objects matching the specified object. Must be a valid sObject type. You can specify multiple objects, separated by commas. If you specify more than one ObjectTypeName, each object must be distinct; you can't repeat an ObjectTypeName within a single RETURNING clause. The search() call only returns objects specified in the RETURNING clause. |
| FieldList | Optional list of one or more fields to return for a given object, separated by commas. If you specify one or more fields, the fields are returned for all found objects. If you want to use relationship fields, the format and supported depth is the same as SOQL. |
| USING ListView= | Optional clause used to search within a single given object’s list view. Only one list view can be specified. Only the first 2,000 records of the list view are searched, according to the sort order the user has set for the list view. ListView=Recent searches for the most recently accessed items viewed or referenced by the current user. |
| WHERE | Optional description of how search results for the given object are filtered, based on individual field values. If unspecified, the search retrieves all the rows in the object that are visible to the user.If you want to specify a WHERE clause, you must include a FieldList with at least one specified field. The following example isn’t proper syntax:RETURNING Account (WHERE name like 'test')But this syntax is:RETURNING Account (Name, Industry WHERE Name like 'test')See conditionExpression for more information. |
| ORDER BY Clause | Optional description of how to order the returned result, including ascending and descending order, and how nulls are ordered. You can supply more than one ORDER BY clause.If you want to specify an ORDER BY clause, you must include a FieldList with at least one specified field. The following example isn’t proper syntax:RETURNING Account (ORDER BY id)But this syntax is:RETURNING Account (Name, Industry ORDER BY Name) |
| LIMITn | Optional clause that sets the maximum number of records returned for the given object. If unspecified, all matching records are returned, up to the limit set for the query as a whole.If you want to specify a LIMIT clause, you must include a FieldList with at least one specified field. The following example isn’t proper syntax:RETURNING Account (LIMIT 10)But this syntax is:RETURNING Account (Name, Industry LIMIT 10) |
| OFFSETn | Optional clause used to specify the starting row offset into the result set returned by your query. OFFSET can be used only when querying a single object. OFFSET must be the last clause specified in a query.If you want to specify an OFFSET clause, you must include a FieldList with at least one specified field. The following example isn’t proper syntax:RETURNING Account (OFFSET 25)But this syntax is:RETURNING Account (Name, Industry OFFSET 25) |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

The RETURNING clause affects whether external objects are searched. For other objects, the RETURNING clause affects what data is returned, not what data is searched. The IN clause affects what data is searched.

## Example RETURNING Clauses

| Search Type | Examples |
| --- | --- |
| No Field Spec | FIND {MyProspect} |
| One sObject, no fields | FIND {MyProspect} RETURNING Contact |
| Multiple sObject objects, no fields | FIND {MyProspect} RETURNING Contact, Lead |
| One sObject, one or more fields | FIND {MyProspect} RETURNING Account(Name) |
|  | FIND {MyProspect} RETURNING Contact(FirstName, LastName) |
| Custom sObject | FIND {MyProspect} RETURNING CustomObject_c |
|  | FIND {MyProspect} RETURNING CustomObject_c(CustomField_c) |
| Multiple sObject objects, one or more fields, limits | FIND {MyProspect} RETURNING Contact(FirstName, LastName LIMIT 10), Account(Name, Industry) |
| Multiple sObject objects, mixed number of fields | FIND {MyProspect} RETURNING Contact(FirstName, LastName), Account, Lead(FirstName) |
| Unsearchable sObject objects | FIND {MyProspect} RETURNING RecordType |
|  | FIND {MyProspect} RETURNING Pricebook |
| Invalid sObject objects | FIND {MyProspect} RETURNING FooBar |
| Invalid sObject field | FIND {MyProspect} RETURNING Contact(fooBar) |
| Single object limit | FIND {MyProspect} RETURNING Contact(FirstName, LastName LIMIT 10) |
| Multiple object limits and a query limit | FIND {MyProspect} RETURNING Contact(FirstName, LastName LIMIT 20), Account(Name, Industry LIMIT 10), Opportunity LIMIT 50 |
| Single object offset | FIND {MyProspect} RETURNING Contact(FirstName, LastName OFFSET 10) |
| List view | FIND {MyAcccount} IN ALL FIELDS RETURNING Account(Id, Name USING ListView=ListViewName) |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

Apex requires that you surround SOQL and SOSL statements with square brackets to use them in your statements. You can use Apex script variables and expressions when preceded by a colon (:).

#### See Also

-   [*SOQL and SOSL reference*: Understanding Relationship Fields and Polymorphic Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm "In a polymorphic relationship, the referenced object of the relationship can be one of several different types of object.")

## Code Examples

```
FIND {MyProspect} RETURNING MySampleExternalObject, KnowledgeArticleVersion, Document, FeedComment, FeedItem, ContentVersion, Product2, Solution
```

```
RETURNING ObjectTypeName 
[(FieldList [WHERE] [USING Listview=listview name] [ORDER BY Clause] [LIMIT n] [OFFSETn])] 
        [, ObjectTypeName [(FieldList [WHERE] [ORDER BY Clause] [LIMITn] [OFFSETn])]]
```

## Related Topics

- LIMITn (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_limit.htm)
- WHERE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_where.htm)
- ORDER BY Clause (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_select_order_by_with_limit.htm)
- LIMIT n (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_limit.htm)
- OFFSETn (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_offset.htm)
- USING ListView= (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_using_listview.htm)
- conditionExpression (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_where.htm)
- SOQL and SOSL reference: Understanding Relationship Fields and Polymorphic
       Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm)
