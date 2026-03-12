---
title: "SOQL Object Limits and Limitations"
domain: soql-sosl
topic: soql-object-limits-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.540Z
estimatedTokens: 2748
keywords: [SOQL, Limits, Limitations, specific, objects, situations, search, results, defined, ContentDocumentLink, ContentHubItem, big, external, NewsFeed, KnowledgeArticleVersion]
---

# SOQL Object Limits and Limitations

> SOQL applies specific limits to objects and situations in search results. SOQL limits
		are defined for the ContentDocumentLink object, ContentHubItem object, big objects, external
		objects, NewsFeed, KnowledgeArticleVersion, RecentlyViewed, TopicAssignment,
		UserRecordAccess, UserProfileFeed, and Vote.

# SOQL Object Limits and Limitations

SOQL applies specific limits to objects and situations in search results. SOQL limits are defined for the ContentDocumentLink object, ContentHubItem object, big objects, external objects, NewsFeed, KnowledgeArticleVersion, RecentlyViewed, TopicAssignment, UserRecordAccess, UserProfileFeed, and Vote.

Some objects or situations have specific limits on SOQL.

| Object | Description |
| --- | --- |
| ContentDocumentLink | A SOQL query must filter on one of Id, ContentDocumentId, or LinkedEntityId. |
| ContentHubItem | A SOQL query must filter on one of Id, ExternalId, or ContentHubRepositoryId. |
| Custom metadata types | Custom metadata types support the following SOQL query syntax.SELECT fieldList [...] FROM objectType     [USING SCOPE filterScope] [WHERE conditionExpression] [ORDER BY field {ASC\|DESC} [NULLS {FIRST\|LAST}] ]You can use metadata relationship fields in the fieldList and conditionExpression.FROM can include only 1 object.You can use the following operators.IN and NOT IN=, >, >=, <, <=, and !=LIKE, including wild cardsANDOR when on the same column with LIKE and = operationsNoteOR can’t be used as a compound filter when child filters are on two different columns.You can use ORDER BY only with non-relationship fields.You can use ORDER BY, ASC, and DESC with multiple (non-relationship) fields.Metadata relationship fields support all standard relationship queries. |
| Big objects | A SOQL query can only filter on the fields defined in the big object’s index, in the order that they are defined, without gaps.The last field in a query can use only the following operators.=, <. >, <=, >=, and INAny prior fields in a query can use only the = operator.Big objects don’t support the following operators.!=, LIKE, NOT IN, EXCLUDES, and INCLUDES |
| Data 360 Objects | To prevent large queries from crashing the app server, Data 360 limits Salesforce Object Query Language (SOQL) results to 12-MB. SOQL returns the results up to the size limit with a query more link to paginate through the rest of the results. If a single query result exceeds the size limit, SOQL rejects the query and you can’t retrieve the results.Queries that contain aggregate functions don’t support currency fields even when the fields are outside the aggregate functions.For currency field query limitations, see Considerations for Querying Currency Data Using SOQL.These aggregate functions are available for querying data model objects (DMOs) and data lake objects (DLOs).AVG(fieldName)SUM(fieldName)COUNT()COUNT(fieldName)MIN(fieldName)MAX(fieldName)You can’t query calculated insight objects (CIOs).Data Cloud objects have these limitations related to the Id field.You can’t use the Id field in the HAVING clause in HAVING Id or HAVING COUNT(Id).You can’t use the Id field in the GROUP BY clause in GROUP BY Id or GROUP BY COUNT(Id).Data Cloud objects have these limitations related to the HAVING clause.You can’t use the HAVING clause with the IN operator. For example, this query isn’t supported: SELECT AVG(Number) FROM Dmo HAVING AVG(Number) IN (0, 10, 20)You can’t use the HAVING clause when comparing to a null value. For example, this query isn’t supported: SELECT AVG(Number) FROM Dmo HAVING AVG(Number) != NULLYou can only use the default strategy for string collation as defined by Unicode Root Collation in the Unicode Technical Standard. String collations include locale-based collations and collation strategies defined in the SOQL query. Custom collations aren’t supported. Comparison operators (>, <, >=, and <=) that are used with string collations aren’t supported for Data Cloud queries. For example, this query isn’t supported: SELECT Text_Field FROM Dmo WHERE Text_Field > 'SomeValue'Child-to-parent object relationships aren’t supported.Semi-join queries between two DMOs have these limitations.You must always use the lookup fields when constructing the semi-join, irrespective of the actual relationship fields. The structure of the query depends on if the parent is in the outer or inner query.Outer query on parent DMO:SELECT …  FROM <parentDMO>  WHERE ID IN  (     SELECT rel_…__c      FROM <childDMO>      … )Inner query on parent DMO:SELECT …  FROM <childDMO>  WHERE rel_…__c IN  (     SELECT Id      FROM <parentDMO>      … )Standard SOQL semi-join limitations apply. See Considerations for Semi-Join and Anti-Join Queries.Semi-joins between an outer child DMO and an inner parent CRM object have these restrictions.Both direct and identity resolution-based relationships are supported.The child DMO must look up the parent sObject’s ID field.Example query:SELECT …  FROM <childDMO> WHERE rel_…__c IN  (     SELECT Id      FROM <parent CRM Object>      … )The inner CRM object query is limited to 2,000 records. If more than 2,000 records are returned, the query returns an error.The DMO outer query can't trigger queryMore(). If it does, the query returns an error.Standard SOQL semi-join limitations apply. See Considerations for Semi-Join and Anti-Join Queries.Semi-joins between an outer parent CRM object and inner child DMO have these restrictions:Only direct DMO relationships between CRM and DMO objects are supported. Identity resolution-based relationships aren't supported.The child DMO must look up the parent sObject's ID field.Example query:SELECT ... FROM <parent CRM object> WHERE Id IN (     SELECT rel_...__c     FROM <child DMO>     ... )The inner CRM object query is limited to 2,000 records. If more than 2,000 records are returned, the query returns an error.The DMO outer query can't trigger queryMore(). If it does, the query returns an error.Standard SOQL semi-join limitations apply. See Considerations for Semi-Join and Anti-Join Queries. |
| External objects | A subquery that involves external objects can fetch up to 1,000 rows of data.Each SOQL query can have up to 4 joins across external objects and other types of objects.Each join requires a separate round trip to the external system when executing the query. Expect longer response times for each join in a query.External objects don’t support the following aggregate functions and clauses.AVG() functionCOUNT(fieldName) function (however, COUNT() is supported)HAVING clauseGROUP BY clauseMAX() functionMIN() functionSUM() functionExternal objects also don’t support the following.EXCLUDES operatorFOR VIEW clauseFOR REFERENCE clauseINCLUDES operatorLIKE operatortoLabel() functionTYPEOF clauseWITH clauseThe following limits apply only to the OData 2.0 and 4.0 adapters for Salesforce Connect.External objects have the following limitations for the ORDER BY clause.NULLS FIRST and NULLS LAST are ignored.External objects don’t support the ORDER BY clause in relationship queries.The COUNT() aggregate function is supported only on external objects whose external data sources have Request Row Counts enabled. Specifically, the response from the external system must include the total row count of the result set.The following limits apply only to custom adapters for Salesforce Connect.Location-based SOQL queries of external objects aren’t supported.If a SOQL query of an external object includes the following, the query fails.convertCurrency() functionUPDATE TRACKING clauseUPDATE VIEWSTAT clauseUSING SCOPE clauseIn an ORDER BY clause, the following are ignored.NULLS FIRST syntaxNULLS LAST syntaxIn Apex tests, use dynamic SOQL to query external objects. Tests that perform static SOQL queries of external objects fail. |
| KnowledgeArticleVersion | Filter on a single value of PublishStatus for best results. To find all versions of each article, omit the PublishStatus filter, but do filter on one or more primary key IDs. To retrieve all archived versions for a given article, specify a SOQL filter where IsLatestVersion is false.In API version 46.0 and earlier, queries without a filter on PublishStatus return published articles by default. In API version 47.0 and later, draft, published, and archived articles are returned when Lightning Knowledge is enabled.To support security, only users with the “View Draft Articles” permission see articles whose PublishStatus value is Draft. Similarly, only users with the “View Archived Articles” permission see articles whose PublishStatus value is ArchivedArchived article versions are stored in the Knowledge__kav object. To query archived article versions, specify the article Id and set IsLatestVersion='0'.You can’t use binding variables in Apex SOQL statements with KnowledgeArticleVersion objects. For example, the following SOQL statement causes a compilation error.final String PUBLISH_STATUS_ONLINE = 'Online'; List<Knowledge__kav> articles = [  SELECT Id FROM Knowledge__kav  WHERE PublishStatus = :PUBLISH_STATUS_ONLINE  ];Instead, use dynamic SOQL as follows. See Dynamic SOQL in Apex Developer Guide.final String PUBLISH_STATUS_ONLINE = 'Online';  final String q = 'SELECT Id, PublishStatus FROM Knowledge__kav  WHERE PublishStatus = :PUBLISH_STATUS_ONLINE'; List<Knowledge__kav> articles = Database.query(q); |
| NewsFeed | No SOQL limit if logged-in user has “View All Data” permission. If not, specify a LIMIT clause of 1,000 records or fewer.SOQL ORDER BY on fields using relationships is not available. Use ORDER BY on fields on the root object in the SOQL query. |
| RecentlyViewed | The RecentlyViewed object is updated every time the logged-in user views or references a record. It is also updated when records are retrieved using the FOR VIEW or FOR REFERENCE clause in a SOQL query. To ensure that the most recent data is available, RecentlyViewed data is periodically truncated down to 200 records per object. RecentlyViewed data is retained for 90 days, after which it is removed on a periodic basis. |
| TopicAssignment | No SOQL limit if logged-in user has “View All Data” permission. If not, do one of the following:Specify a LIMIT clause of 1,100 records or fewer.Filter on Id or Entity when using a WHERE clause with "=". |
| UserRecordAccess | Always use the query formats specified in the SOAP API Developer Guide.May include an ORDER BY clause. You must ORDER BY HasAccess if you SELECT HasAccess, and ORDER BY MaxAccessLevel if you SELECT MaxAccessLevel.Maximum number of records that can be queried is 200. |
| UserProfileFeed | No SOQL limit if logged-in user has “View All Data” permission. If not, specify a LIMIT clause of 1,000 records or fewer.SOQL ORDER BY on fields using relationships is not available. Use ORDER BY on fields on the root object in the SOQL query.Also, a SOQL query must include WITH UserId = {userId]. |
| Vote | ParentId = [single ID]Parent.Type = [single type]Id = [single ID]Id IN = [list of IDs] |

For other SOQL limits, see [SOQL and SOSL Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm "HTML (New Window)") in the Salesforce Developer Limits and Allocations Quick Reference.

## Code Examples

```
SELECT fieldList [...]
FROM objectType
    [USING SCOPE filterScope]
[WHERE conditionExpression]
[ORDER BY field {ASC|DESC} [NULLS {FIRST|LAST}] ]
```

```
SELECT … 
FROM <parentDMO> 
WHERE ID IN 
(
    SELECT rel_…__c 
    FROM <childDMO> 
    …
)
```

```
SELECT … 
FROM <childDMO> 
WHERE rel_…__c IN 
(
    SELECT Id 
    FROM <parentDMO> 
    …
)
```

```
SELECT … 
FROM <childDMO>
WHERE rel_…__c IN 
(
    SELECT Id 
    FROM <parent CRM Object> 
    …
)
```

```
SELECT ...
FROM <parent CRM object>
WHERE Id IN
(
    SELECT rel_...__c
    FROM <child DMO>
    ...
)
```

## Related Topics

- Considerations for Querying Currency Data Using SOQL (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_consider_cur_data.htm)
- Considerations for Semi-Join and Anti-Join Queries (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm)
