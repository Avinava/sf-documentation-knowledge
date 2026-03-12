---
title: "Specify Response Sizes"
domain: chatterapi
topic: specify-response-sizes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.659Z
estimatedTokens: 459
keywords: [Specify, Sizes, filter, data, application, needs, size, group, big, medium, small, filterGroup, addition, exclude, include]
---

# Specify Response Sizes

> Use filter parameters to return only the data the application needs.
   To specify the response size by group (big, medium, or small), use filterGroup as a request parameter or in a request body. In addition, to exclude
  or include specific properties, use either exclude or include as a request parameter or in a request body.

# Specify Response Sizes

Use filter parameters to return only the data the application needs. To specify the response size by group (big, medium, or small), use filterGroup as a request parameter or in a request body. In addition, to exclude or include specific properties, use either exclude or include as a request parameter or in a request body.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

To exclude or include properties, use a path to select a node. To find the path, make a request to the resource and ask for an XML response instead of JSON. The XML includes node names and JSON doesn’t. To request an XML response, append **.xml** to the resource, for example /services/data/v44.0/chatter/feeds/record/a07B00000079vKZIAY/feed-elements**.xml**. Copy the XML into a file and open it in a browser or an IDE that generates an XML tree. Identify the path to the node you want to include or exclude and use it in your request: /services/data/v44.0/chatter/feeds/record/a07B00000079vKZIAY/feed-elements.xml?exclude=**/elements/feedElement/actor**.

-   **[filterGroup](atlas.en-us.chatterapi.meta/chatterapi/intro_filter_groups.htm)**
    Use the filterGroup parameter in a request URL or in a request body to specify whether to return a small, medium, or big group of properties. The filterGroup property is available in API version 29.0 and later.
-   **[exclude](atlas.en-us.chatterapi.meta/chatterapi/intro_exclude.htm)**
    To exclude specific properties from a response body, use the exclude request parameter. The exclude parameter is available in API version 27.0 and later.
-   **[include](atlas.en-us.chatterapi.meta/chatterapi/intro_include.htm)**
    To limit the response body to specific properties, use the include query string parameter.

## Related Topics

- filterGroup (atlas.en-us.chatterapi.meta/chatterapi/intro_filter_groups.htm)
- exclude (atlas.en-us.chatterapi.meta/chatterapi/intro_exclude.htm)
- include (atlas.en-us.chatterapi.meta/chatterapi/intro_include.htm)
