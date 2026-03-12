---
title: "When to Use the AJAX Toolkit"
domain: ajax
topic: when-to-use-the-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.670Z
estimatedTokens: 536
keywords: [AJAX, Toolkit, best, performance, working, small, amounts, data]
---

# When to Use the AJAX Toolkit

> For best performance, use the AJAX Toolkit when working with small amounts of
  data.

# When to Use the AJAX Toolkit

For best performance, use the AJAX Toolkit when working with small amounts of data.

Because information is delivered via a browser, AJAX works best with relatively small amounts of data (up to 200 records, approximately six fields with 50 characters of data each). The larger the data set returned, the more time it will take to construct and deconstruct a SOAP message, and as the size of an individual record gets larger, the impact on performance becomes greater. Also, as more HTML nodes are created from the data, the potential for poor performance increases. Because browsers are not efficient, careful consideration needs to be given to browser memory management if you intend to display a large amount of data.

The following are examples of appropriate uses:

-   Display or modify a single record.
-   Display two or three fields from many records.
-   Perform one or more simple calculations, then update a record.

The following are examples of scenarios that require case-by-case analysis:

-   Update more than 200 records.
-   Update records that are unusually large. For example, what happens if the user clicks the browser stop button?
-   Recalculate a complex value for more than 200 records.

An example of inappropriate usage is providing a sortable grid of many records. This would require too much processing time, and browser rendering would be too slow.

-   **[AJAX Toolkit Support Policy](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_support_policy.htm)**
    The current release of the AJAX Toolkit is the only version that receives bug fixes and enhancements. When a new version is released, the previous version continues to be available, but is not supported.
-   **[Other Resources](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_other_resources.htm)**

-   **[AJAX Typographical Conventions](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_typographical_conventions.htm)**

-   **[Sample Visualforce Page Using the AJAX Toolkit Using the AJAX Toolkit](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_vf_sample.htm)**
    This example demonstrates using the AJAX Toolkit in a Visualforce page.

## Related Topics

- AJAX Toolkit Support Policy (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_support_policy.htm)
- Other Resources (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_other_resources.htm)
- AJAX Typographical Conventions (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_typographical_conventions.htm)
- Sample Visualforce Page Using the AJAX Toolkit Using the AJAX Toolkit (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_vf_sample.htm)
