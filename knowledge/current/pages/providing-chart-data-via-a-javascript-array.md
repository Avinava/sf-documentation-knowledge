---
title: "Providing Chart Data via a JavaScript Array"
domain: pages
topic: providing-chart-data-via-a-javascript-array
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.978Z
estimatedTokens: 230
keywords: [Providing, Chart, Data, via, JavaScript, Array, Visualforce, charting, non-Salesforce, sources, building, own, code, <apex, chart>]
---

# Providing Chart Data via a JavaScript Array

> You can use Visualforce
        charting with non-Salesforce data
        sources by building a JavaScript array, in your own JavaScript code in your page, and
        providing the name of that array to <apex:chart>.

# Providing Chart Data via a JavaScript Array

You can use Visualforce charting with non-Salesforce data sources by building a JavaScript array, in your own JavaScript code in your page, and providing the name of that array to <apex:chart\>.

The following trivial code illustrates this technique:

```

```

When using this technique, if your data is coming from a non-Salesforce source, you might not need any server-side Apex code at all.

#### See Also

-   [Chart Data Format](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm "Data provided to a Visualforce chart must meet some specific requirements. Every element in the data collection must contain all fields referenced in the <apex:chart> component hierarchy that is bound to that data source. If all fields aren’t provided, a client-side JavaScript error is thrown, which you can view in a JavaScript console such as Firebug.")

## Code Examples

```
<apex:page>
    <script>
    // Build the chart data array in JavaScript
    var dataArray = new Array();
    dataArray.push({'data1':33,'data2':66,'data3':80,'name':'Jan'});
    dataArray.push({'data1':33,'data2':66,'data3':80,'name':'Feb'});
    // ...
    </script>

    <apex:chart data="dataArray" ...></apex:chart>
</apex:page>
```

## Related Topics

- Chart Data Format (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm)
