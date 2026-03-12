---
title: "Optimize Lists and Tables"
domain: pages
topic: optimize-lists-and-tables
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.901Z
estimatedTokens: 609
keywords: [Optimize, Tables, improve, performance, Visualforce, pages, limit, amount, data, per, reduce, number, editable, implement, pagination]
---

# Optimize Lists and Tables

> To improve the performance of Visualforce pages with lists and tables, limit the amount
    of data displayed per page and reduce the number of editable fields per table. You can also
    implement pagination or replace an <apex:pageBlockTable> component with a static HTML table.

# Optimize Lists and Tables

To improve the performance of Visualforce pages with lists and tables, limit the amount of data displayed per page and reduce the number of editable fields per table. You can also implement pagination or replace an <apex:pageBlockTable> component with a static HTML table.

## Avoid Data Grids if Possible

Data grids are tables that display records with editable fields. Data grids frequently expand to thousands of input components on a page and exceed the maximum view state size. Large data grids result in a Visualforce component tree that processes slowly.

If your Visualforce page has a data grid:

-   Use pagination and filters.
-   To reduce the view state size, make data read-only where possible.
-   Only display essential data for a given record. Provide a link to an Ajax-based details box or to a separate details page.

## Consider Static HTML Tables

A Visualforce page with an iteration component such as <apex:pageBlockTable> can contain up to 1,000 items, or 10,000 items when the page is executed in read-only mode. However, page performance can sometimes decrease before this limit if <apex:pageBlockTable> contains an <apex:column> component with the rendered attribute explicitly specified.

If your Visualforce page has a large table, we recommend that you implement pagination. Alternatively, you can use a static HTML table instead of an <apex:pageBlockTable> component. Within the HTML table, use the <apex:repeat> component to iterate over an HTML row element. For an example HTML table that uses <apex:repeat>, see the [apex:repeat](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_compref_repeat.htm "HTML (New Window)") component reference page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Unlike <apex:pageBlockTable> tables, static HTML tables don’t have standard Salesforce styling.

#### See Also

-   [Control Data Size](atlas.en-us.pages.meta/pages/pages_best_practices_perf_data_size.htm "Visualforce pages have a 15-MB standard response limit, and smaller pages load faster than larger pages. To minimize load times, limit the amount of data that each page displays.")

-   [Pagination with a List Controller](atlas.en-us.pages.meta/pages/pages_controller_sosc_pagination.htm "To add pagination to a Visualforce page that has a list controller, use the next and previous actions.")

## Related Topics

- Control Data Size (atlas.en-us.pages.meta/pages/pages_best_practices_perf_data_size.htm)
- Pagination with a List Controller (atlas.en-us.pages.meta/pages/pages_controller_sosc_pagination.htm)
