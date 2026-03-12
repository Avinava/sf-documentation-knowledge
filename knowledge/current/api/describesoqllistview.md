---
title: "DescribeSoqlListView"
domain: api
topic: describesoqllistview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.214Z
estimatedTokens: 340
keywords: [DescribeSoqlListView, view, including, columns, sObject, SOQL, query]
---

# DescribeSoqlListView

> Contains information about the specified list view, including the columns, sObject
    type, and SOQL query.

# DescribeSoqlListView

Contains information about the specified list view, including the columns, sObject type, and SOQL query.

The DescribeSoqlListView object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| columns | ListViewColumn[] | The columns that are returned by the list view query. |
| id | ID | The list view’s fully qualified ID. |
| orderBy | ListViewOrderBy[] | A list of fields to sort results by, the sort order, and the position to which null values must be sorted. |
| query | string | The fully composed SOQL query for the list view. |
| relatedEntityId | ID | The ID of the campaign, if a campaign scope was used. |
| scope | string | A filterScope to use for limiting the results. |
| scopeEntityId | ID | The ID of the queue or price book, if a queue or price book scope was used. |
| sobjectType | string | The object associated with the list view. |
| whereCondition | SoqlWhereCondition | Filter conditions on the list view. Filter conditions provide an additional level of control over which records get shown in the list view. |

#### See Also

-   [https://developer.salesforce.com/docs/atlas.en-us.soql\_sosl.meta/soql\_sosl/sforce\_api\_calls\_soql\_select\_using\_scope.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_using_scope.htm)

## Related Topics

- ListViewColumn (atlas.en-us.api.meta/api/sforce_api_calls_listviewcolumn.htm)
- ListViewOrderBy (atlas.en-us.api.meta/api/sforce_api_calls_listvieworderby.htm)
- SoqlWhereCondition (atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistview_soqlwherecondition.htm)
