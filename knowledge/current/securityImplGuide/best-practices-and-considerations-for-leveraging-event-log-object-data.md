---
title: "Best Practices and Considerations for Leveraging Event Log Object Data"
domain: securityImplGuide
topic: best-practices-and-considerations-for-leveraging-event-log-object-data
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.636Z
estimatedTokens: 749
keywords: [Best, Practices, Considerations, Leveraging, Event, Log, Data, It’s, understand, recommended, limitations, framework, tips, ensure, queries]
---

# Best Practices and Considerations for Leveraging Event Log Object Data

> It’s important to understand the recommended practices and limitations for the Event Log
    Object framework to get the most out of your log data. Here are some tips to ensure your queries
    run smoothly.

# Best Practices and Considerations for Leveraging Event Log Object Data

It’s important to understand the recommended practices and limitations for the Event Log Object framework to get the most out of your log data. Here are some tips to ensure your queries run smoothly.

| Available in: Salesforce Classic (not available in all orgs), and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |

| User Permissions Needed |
| --- |
| To query and view event log object data: | View Event Log Object Data |

## Querying Event Log Object Data Through SOQL

As of Spring 25’, the Event Log Object framework only supports SOQL queries, with the following exceptions:

-   Relationship queries
-   HAVING
-   OFFSET

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Event Log Objects are designed for users with specific permissions to perform interactive analytics and diagnose security and performance incidents via SOQL. This feature is not meant to handle concurrent queries from a large number of users.

## Timestamp Field Considerations

The only supported date function for the Timestamp field in a where clause within the Event Log Object framework is DAY\_ONLY(). See [Date Functions](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_date_functions.htm) for more information on querying data by date periods.

You can query up to 15 days of data at a time using the Timestamp filter present on all event log objects. Consequentially, expect these behaviors when querying using the Timestamp field:

-   When there are 3 or more Timestamp filters in the WHERE clause, we block the execution of the query with an error.
-    != isn’t supported
-   When the Timestamp filter isn’t specified in the query, we append a filter in the backend to query only the last 15 days of data.
-   If you are specifying Timestamp filters as part of an AND condition, the time range must fall within 15 days.
-   No more than 2 Timestamp filters can be used for OR and IN operators.
-   If a full range isn’t specified in the Timestamp filter (for example, if either the upper or lower bound is missing) the filter automatically retrieves 15 days of data in the direction of the missing bound.

## Example

Valid Format:

-   Timestamp >= userSpecifiedTimeLower AND timestamp <= userSpecifiedTimeUpper
-   Timestamp = userSpecifiedTime1 OR Timestamp = userSpecifiedTime2
-   Timestamp IN (userSpecifiedTime1, userSpecifiedTime2)

## Example

Valid Timestamp Filter:

-   Timestamp >= 2024-09-27T17:18:15.553Z AND timestamp <= 2024-10-05T17:18:15.553Z

## Example

Invalid Timestamp Filter:

-   where Timestamp > 2024-09-27T17:18:15.553Z OR Timestamp = 2024-10-27T17:18:15.553Z
-   where Timestamp = 2021-10-26T17:18:15.553Z AND Timestamp < 2024-10-27T17:18:15.553Z
