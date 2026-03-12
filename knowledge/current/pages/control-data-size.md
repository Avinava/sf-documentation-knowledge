---
title: "Control Data Size"
domain: pages
topic: control-data-size
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.874Z
estimatedTokens: 587
keywords: [Control, Data, Size, Visualforce, pages, 15-MB, standard, limit, smaller, load, faster, larger, minimize, times, amount]
---

# Control Data Size

> Visualforce pages have a 15-MB standard response limit, and smaller pages load faster
    than larger pages. To minimize load times, limit the amount of data that each page
    displays.

# Control Data Size

Visualforce pages have a 15-MB standard response limit, and smaller pages load faster than larger pages. To minimize load times, limit the amount of data that each page displays.

## Filter Query Results

-   Use filters to limit the data that Salesforce Object Query Language (SOQL) calls in and that Apex controllers return. For example, use AND statements in WHERE clauses. You can also remove null query results.
-   When creating Apex controllers, use the with sharing keyword to retrieve only records that the user can access.
-   Filter in SOQL first, then in Apex, and finally in Visualforce.

## Use Pagination

-   A page with unbounded data can cause longer load times, hit governor limits, and become unusable as the dataset grows. To prevent a list view from displaying unbounded data, implement pagination with a list controller. By default, a list controller returns 20 records per page, but you can configure list views to display up to 100 records at a time. To control the number of records each page displays, use a controller extension to set the pageSize.
-   Use the SOQL OFFSET clause to write logic that paginates to a specific subset of results within SOQL.

#### See Also

-   [*Apex Developer Guide*: Working with Very Large SOQL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm "Apex Developer Guide: Working with Very Large SOQL Queries - HTML (New Window)")

-   [*Apex Developer Guide*: Using the with sharing, without sharing, and inherited sharing Keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Apex Developer Guide: Using the with sharing, without sharing, and inherited
    sharing Keywords - HTML (New Window)")

-   [*SOQL and SOSL Reference*: OFFSET](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_offset.htm "SOQL and SOSL Reference: OFFSET - HTML (New Window)")

-   [Pagination with a List Controller](atlas.en-us.pages.meta/pages/pages_controller_sosc_pagination.htm "To add pagination to a Visualforce page that has a list controller, use the next and previous actions.")

-   [Working with Large Sets of Data](atlas.en-us.pages.meta/pages/pages_controller_readonly_context.htm)

## Related Topics

- Pagination with a List Controller (atlas.en-us.pages.meta/pages/pages_controller_sosc_pagination.htm)
- Working with Large Sets of Data (atlas.en-us.pages.meta/pages/pages_controller_readonly_context.htm)
