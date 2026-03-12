---
title: "Chart Data Format"
domain: pages
topic: chart-data-format
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.974Z
estimatedTokens: 375
keywords: [Chart, Data, provided, Visualforce, meet, specific, requirements, Every, element, collection, contain, referenced, <apex, chart>, component]
---

# Chart Data Format

> Data provided to a Visualforce
  chart must meet some specific requirements. Every element in the data collection must contain all
  fields referenced in the <apex:chart> component
  hierarchy that is bound to that data source. If all fields aren’t provided, a client-side
  JavaScript error is thrown, which you can view in a JavaScript console such as
  Firebug.

# Chart Data Format

Data provided to a Visualforce chart must meet some specific requirements. Every element in the data collection must contain all fields referenced in the <apex:chart\> component hierarchy that is bound to that data source. If all fields aren’t provided, a client-side JavaScript error is thrown, which you can view in a JavaScript console such as Firebug.

Chart data provided by an Apex method should be a List of uniform objects. These objects can be simple wrappers, sObjects, or AggregateResult objects. Data fields can be made accessible as public member variables or properties.

Chart data provided by JavaScript methods should be a JavaScript array of arrays. Each inner array represents a record or data point. Data fields are made accessible as name: value pairs. See [Providing Chart Data via a JavaScript Array](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_array.htm "You can use Visualforce charting with non-Salesforce data sources by building a JavaScript array, in your own JavaScript code in your page, and providing the name of that array to <apex:chart>.") for an example.

#### See Also

-   [Providing Chart Data via a JavaScript Array](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_array.htm "You can use Visualforce charting with non-Salesforce data sources by building a JavaScript array, in your own JavaScript code in your page, and providing the name of that array to <apex:chart>.")

## Related Topics

- Providing Chart Data via a JavaScript Array (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_array.htm)
