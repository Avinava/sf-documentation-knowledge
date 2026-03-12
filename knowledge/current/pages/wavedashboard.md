---
title: "wave:dashboard"
domain: pages
topic: wavedashboard
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.246Z
estimatedTokens: 1359
keywords: [wave, dashboard, component, add, Salesforce, Analytics, Visualforce, Attributes]
---

# wave:dashboard

> Use this component to add a Salesforce Analytics dashboard to a Visualforce page.

# wave:dashboard

Use this component to add a Salesforce Analytics dashboard to a Visualforce page.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dashboardId | string | The unique ID of the dashboard. You can get a dashboard’s ID, an 18-character code beginning with 0FK, from the dashboard's URL, or you can request it through the API. This attribute can be used instead of the developer name, but it can't be included if the name has been set. One of the two is required. |  | 34.0 |  |
| developerName | string | The unique developer name of the dashboard. You can request the developer name through the API. This attribute can be used instead of the dashboard ID, but it can't be included if the ID has been set. One of the two is required. |  | 34.0 |  |
| filter | string | Adds selections or filters to the dashboard at runtime. You can filter dataset fields by variables or specified values. The filters are configured with JSON strings. For filtering by dimension, use this syntax: {'datasets' : {'dataset1': [ {'fields':['field1'], 'selection': ['!value1', '!value2']}, {'fields':['field2'], 'filter': { 'operator':'operator1', 'values': ['!value3', '!value4']}}]}}For filtering on measures, use this syntax:{'datasets' : {'dataset1': [ {'fields':['field1'], 'selection': ['!value1', '!value2']}, {'fields':['field2'], 'filter': { 'operator':'operator1', 'values':[[!value3]]}}]}}datasets takes the dataset API name which is found on the dataset's edit page. (If your org has namespaces, include the namespace prefix and two underscores before the dataset system name.) fields takes dataset dimensions or measures. To find the names, select Show Details on the widget, and click the View Query Details icon. values can be specific values or fields in a Salesforce object. To find the name of a field, go to Setup, locate the object you want, and select Fields. Use the Field Name (also known as the API name). For custom fields, use the name with "__c" at the end. Note that values must have the format object.field. With the selection option, the dashboard is shown with all its data, and the specified dimension values are highlighted. The selection option can be used alone or with the filter option. Selection takes dimension values only. To use this option, the dashboard must include a list, date, or toggle widget that groups by the specified dimension. With the filter option, the dashboard is shown with only filtered data. The filter option can be used alone or with the selection option. Filter takes dimension or measure values. Use operator with the filter option. Supported operators for dimensions: in; not in; matches. Supported operators for measures: == ; != ; >= ; > ; <= ; >.Note: If a selection specifies a value that doesn't exist, or the dashboard doesn’t include a list, date, or toggle widget that groups by the specified dimension, then the selection input is ignored and the dashboard appears with all its data and no selection.Note: To filter on a field that contains special characters, use Visualforce's JSENCODE function in the filter to replace special characters with encoded values.Note: The above syntax is for Spring ‘17 and later. The previous syntax continues to be supported, and it works the same as the new selection option. For reference, here’s the previous syntax:{ 'datasetSystemName1': {'field1': ['!value1']}, 'datasetSystemName2': {'field1': ['!value1', '!value2'], 'field2': ['!value3']} } |  | 34.0 |  |
| height | string | Specifies the height of the dashboard, in pixels. |  | 34.0 |  |
| hideOnError | Boolean | Controls whether or not users see a dashboard that has an error. When this attribute is set to true, if the dashboard has an error, it won’t appear on the page. When set to false, the dashboard appears but doesn’t show any data. An error can occur when a user doesn't have access to the dashboard or it has been deleted. |  | 34.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| openLinksInNewWindow | Boolean | If false, links to other dashboards will be opened in the same window. |  | 34.0 |  |
| rendered | Boolean | Specifies whether or not the component is rendered on the page. |  | 34.0 |  |
| showHeader | Boolean | If true, the dashboard is displayed with a header bar that includes dashboard information and controls. If false, the dashboard appears without a header bar. Note that the header bar automatically appears when either showSharing or showTitle is true. |  | 41.0 |  |
| showSharing | Boolean | If true, and the dashboard is sharable, then the dashboard shows the Share icon. If false, the dashboard doesn't show the Share icon. To show the Share icon in the dashboard, the smallest supported frame size is 800 x 612 pixels. |  | 37.0 |  |
| showTitle | Boolean | If true, the dashboard’s title is included above the dashboard. If false, the dashboard appears without a title. |  | 34.0 |  |
| width | string | Specifies the width of the dashboard, in pixels or percent. Pixel values are simply the number of pixels, for example, 500. Percentage values specify the width of the containing HTML element and must include the percent sign, for example, 20%. If the specified width is too large for the device, the maximum device width is used. |  | 34.0 |  |
