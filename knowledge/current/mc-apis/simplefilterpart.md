---
title: "SimpleFilterPart"
domain: mc-apis
topic: simplefilterpart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.078Z
estimatedTokens: 398
keywords: [SimpleFilterPart, condition, SQL, clause, Items]
---

# SimpleFilterPart

> The SimpleFilterPart object represents a single condition of an SQL WHERE clause.

# SimpleFilterPart

The SimpleFilterPart object represents a single condition of an SQL WHERE clause.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| DateValue | DateTime[] | Holds an array of dates used to filter the result of a Retrieve call. The response is in Central No Daylight time, but the DateValue on a filter can specify a timezone offset. For example, 2017-06-01T01:00:00.000-05:00. The DateValue cannot return milliseconds. |
| Property | xsd:string | Property filtered on before SQL operator. |
| SimpleOperator | SimpleOperators | Values to use in simple operator under a simple filter part. Valid values include:equalsnotEqualsgreaterThanlessThanisNotNullisNullgreaterThanOrEquallessThanOrEqualbetweenINlike |
| Value | xsd:ArrayOfString | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. Use DateValue for date filters. |

## Related Items

-   [Retrieve All Lists a Subscriber is On](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_a_subscriber_is_on.htm "Retrieving_All_Lists_a_Subscriber_is_On")
-   [Retrieve All Subscribers on a List](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_subscribers_on_a_list.htm "Retrieving_All_Subscribers_on_a_List")
-   [Retrieve the Results of an Import](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_results_of_an_import.htm "Retrieving_the_Results_of_an_Import")

## Related Topics

- Retrieve All Lists a Subscriber is On (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_lists_a_subscriber_is_on.htm)
- Retrieve All Subscribers on a List (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_subscribers_on_a_list.htm)
- Retrieve the Results of an Import (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_results_of_an_import.htm)
