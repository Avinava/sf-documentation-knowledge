---
title: "WITH"
domain: soql-sosl
topic: with
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.815Z
estimatedTokens: 800
keywords: [filter, records, according, category, query, retrieve, changes, tracked, user’s, profile, feed, filteringExpression, clause, added, SELECT]
---

# WITH

> You can filter records based on field values, for example, to filter according to
		category or to query and retrieve changes that are tracked in a user’s profile feed by using
			WITH filteringExpression. This
		optional clause can be added to a SELECT statement of a
		SOQL query.

# WITH

You can filter records based on field values, for example, to filter according to category or to query and retrieve changes that are tracked in a user’s profile feed by using WITH filteringExpression. This optional clause can be added to a SELECT statement of a SOQL query.

Unlike the WHERE clause, which only supports fields from the object specified in the FROM clause, WITH allows you to filter by other related criteria. For example, you can use the WITH clause to filter articles based on their classification in one or more data category groups. The WITH clause can only be used in the following cases:

-   To filter records based on their categorization. See [WITH DATA CATEGORY](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_with_datacategory.htm "You can search for Salesforce Knowledge articles and questions by their data category in a SOQL query. WITH DATA CATEGORY is an optional clause in a SELECT statement that’s used to filter records that are associated with one or more data categories and are visible to users.").
-   To query and retrieve record changes tracked in a user profile feed. See [Custom Object\_\_Feed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.
-   To filter records based on user access permissions on fields or objects being queried within Apex code. See [Filter SOQL Queries Using WITH SECURITY\_ENFORCED](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_with_security_enforced.htm) in the Apex Developer Guide.
-   To specify user mode access for Apex database operations. Apex code runs in system mode by default, which means that it runs with substantially elevated permissions over the user running the code. To enhance the security context of Apex, you can specify user mode access by using WITH USER\_MODE. Field-level security (FLS) and object permissions of the running user are respected in user mode, unlike in system mode. User mode always applies sharing rules, but in system mode they’re controlled by sharing keywords on the class. See [Enforce User Mode for Database Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm) in the Apex Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

Salesforce recommends that you enforce field- and object-level security permissions by using WITH USER\_MODE instead of WITH SECURITY\_ENFORCED because it has fewer limitations.

If WITH is specified, the query returns only records that match the filter and are visible to the user. If unspecified, the query returns only the matching records that are visible to the user.

The filtering expression in this statement is highlighted in bold.

-   SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus='online' **WITH DATA CATEGORY Geography\_\_c ABOVE usa\_\_c**
-   SELECT Id FROM UserProfileFeed **WITH UserId='005D0000001AamR'** ORDER BY CreatedDate DESC, Id DESC LIMIT 20

## Related Topics

- WITH DATA CATEGORY (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_with_datacategory.htm)
