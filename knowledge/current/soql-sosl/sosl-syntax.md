---
title: "SOSL Syntax"
domain: soql-sosl
topic: sosl-syntax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.911Z
estimatedTokens: 1609
keywords: [SOSL, query, begins, clause, add, clauses, filter, data, categories, determine, what’s, specify, order, results, how]
---

# SOSL Syntax

> A SOSL query begins with the required FIND clause.
		You can then add optional clauses to filter the query by object type, fields, data
		categories, and more. You can also determine what’s returned. For example, you can
		specify the order of the results and how many rows to return.

# SOSL Syntax

A SOSL query begins with the required FIND clause. You can then add optional clauses to filter the query by object type, fields, data categories, and more. You can also determine what’s returned. For example, you can specify the order of the results and how many rows to return.

After the required FIND clause, you can add one or more optional clauses in the following order.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

[OFFSET n](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_offset.htm#sforce_api_calls_sosl_offset "When expecting many records in a query’s results, you can display the results in multiple pages by using the OFFSET clause in a SOSL query. For example, you can use OFFSET to display records 51 to 75 and then jump to displaying records 301 to 350. Using OFFSET is an efficient way to handle large results sets.") and [WHERE](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_where.htm#sforce_api_calls_sosl_where "By default, a SOSL query on an object retrieves all rows that are visible to the user, including archived rows. To limit the search, you can filter the search result by specific field values.") are included within RETURNING FieldSpec.

| Syntax | Description |
| --- | --- |
| convertCurrency() | Optional. If an org has multicurrency enabled, converts currency fields to the user’s currency. |
| FIND {SearchQuery} | Required. Specifies the text (words or phrases) to search for. Enclose the search query with curly braces.If the SearchQuery string is longer than 10,000 characters, no result rows are returned. If SearchQuery is longer than 4,000 characters, any logical operators are removed. For example, the AND operator in a statement with a SearchQuery that’s 4,001 characters will default to the OR operator, which could return more results than expected. |
| FORMAT() | Optional. Use FORMAT with the FIND clause to apply localized formatting to standard and custom number, date, time, and currency fields. The FORMAT function supports aliasing. In addition, aliasing is required when the query includes the same field multiple times. |
| IN SearchGroup | Optional. Scope of fields to search. One of the following values:ALL FIELDSNAME FIELDSEMAIL FIELDSPHONE FIELDSSIDEBAR FIELDSIf unspecified, the default is ALL FIELDS. You can specify the list of objects to search in the RETURNING FieldSpec clause.NoteThis clause doesn’t apply to articles, documents, feed comments, feed items, files, products, and solutions. If these objects are specified in the RETURNING clause, the search is not limited to specific fields, and all fields are searched. |
| LIMIT n | Optional. Specifies the maximum number of rows to return in the text query, up to 2,000. If unspecified, the default is 2,000, the largest number of rows that can be returned. These limits apply to API version 28.0 and later. Previous versions support a maximum of 200 rows. |
| OFFSET n | Optional. When expecting many records in a query’s results, you can display the results in multiple pages by using the OFFSET clause in a SOSL query. For example, you can use OFFSET to display records 51–75 and then jump to displaying records 301–350. Using OFFSET is an efficient way to handle large results sets. |
| ORDER BY | Optional. Specifies the order in which search results are returned using the ORDER BY clause. You can also use this clause to display empty records at the beginning or end of the results. |
| RETURNING FieldSpec | Optional. Information to return in the search result. List of one or more objects and, within each object, list of one or more fields, with optional values to filter against. If unspecified, the search results contain the IDs of all objects found.NoteThe RETURNING clause is required (not optional) for SOSL executed in Apex. |
| toLabel(fields) | Optional. Results from a query are returned translated into the user’s language. |
| USING ListView= | Optional clause used to search within a single given object’s list view. Only one list view can be specified. Only the first 2,000 records of the list view are searched, according to the sort order the user has set for the list view. |
| [ UPDATE [TRACKING \| VIEWSTAT][,...] ] ] | Optional. If an org uses Salesforce Knowledge:UPDATE TRACKING tracks keywords used in Salesforce Knowledge article search.Update an Article’s Viewstat with SOSL updates an article’s view statistics.UPDATE TRACKING, VIEWSTAT does both. |
| WHERE | Optional. By default, a SOSL query on an object retrieves all rows that are visible to the user. To limit the search, filter the search result by specific field values. |
| WITH DATA CATEGORY DataCategorySpec | Optional. If an org uses Salesforce Knowledge articles or answers, filters all search results based on one or more data categories. |
| WITH DivisionFilter | Optional. If an org uses divisions, filters all search results based on values for the Division field. |
| WITH HIGHLIGHT | Optional. In search results for certain objects, highlights the terms matching the search query. |
| WITH METADATA = MetadataSpec | Optional. Specifies if metadata is returned in the response. The default setting is no, meaning no metadata is returned. |
| WITH NETWORK NetworkIdSpec | Optional. Filters search results by community ID. |
| WITH PricebookId | Optional. Filters product search results by a single price book ID. |
| WITH SNIPPET [(target_length=n)] | Optional. If an org uses Salesforce Knowledge articles, displays contextual snippets and highlights the search term for each article in the search results. By default, each snippet displays up to about 300 characters. Add the optional target_length parameter to specify an alternate target length, which can be from 100 and 500 characters. |
| WITH SPELL_CORRECTION | Optional. When set to true, spell correction is enabled for searches that support spell correction. When set to false, spell correction isn’t enabled. The default value is true. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

The SOSL statement character limit is tied to the SOQL statement character limit defined for your org. By default, SOQL and SOSL queries can’t exceed 100,000 characters. For SOSL statements that exceed this maximum length, the API returns a MALFORMED\_SEARCH exception code, and no result rows are returned.

## Code Examples

```
FIND {SearchQuery} 
[ IN SearchGroup ]
[ RETURNING FieldSpec [[ toLabel(fields)] [convertCurrency(Amount)] [FORMAT()]] ]
[ WITH DivisionFilter ]
[ WITH DATA CATEGORY DataCategorySpec ]
[ WITH SNIPPET[(target_length=n)] ]
[ WITH NETWORK NetworkIdSpec ]
[ WITH PricebookId ]
[ WITH METADATA ]
[ LIMIT n ]

[ UPDATE [TRACKING], [VIEWSTAT] ]
```

## Related Topics

- FIND {SearchQuery} (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_find.htm)
- IN SearchGroup (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_in.htm)
- RETURNING FieldSpec (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_returning.htm)
- toLabel(fields) (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_tolabel.htm)
- convertCurrency(Amount) (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_querying_currency_fields.htm)
- FORMAT() (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_format.htm)
- WITH DivisionFilter (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_with.htm)
- WITH DATA CATEGORY DataCategorySpec (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_with_data_category.htm)
- WITH SNIPPET (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_with_snippet.htm)
- WITH NETWORK NetworkIdSpec (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_with_network_id.htm)
