---
title: "topics:widget"
domain: pages
topic: topicswidget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.230Z
estimatedTokens: 332
keywords: [topics, widget, component, displays, assigned, record, users, add, remove, enabled, objects, accounts, assets, campaigns, cases]
---

# topics:widget

> UI component that displays topics assigned to a record and allows users to add and remove topics. The UI component is available only if topics are enabled for these supported objects: accounts, assets, campaigns, cases, contacts, contracts, leads, opportunities, and custom objects.

# topics:widget

UI component that displays topics assigned to a record and allows users to add and remove topics. The UI component is available only if topics are enabled for these supported objects: accounts, assets, campaigns, cases, contacts, contracts, leads, opportunities, and custom objects.

## This example displays the topic editor widget for an entity.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| customUrl | string | The custom URL to a topic page. Salesforce adds the topicId to the end of the URL provided. |  | 29.0 |  |
| entity | string | Entity ID of the record for which to display the feed; for example, Contact.Id | Yes | 29.0 |  |
| hideSuccessMessage | Boolean | Hide the success message that appears when done assigning topics. Defaults to false. |  | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| renderStyle | string | The style in which the topics widget is rendered. Acceptable values are "simple" and "enhanced". |  | 29.0 |  |

## Code Examples

```
<apex:page>
	<topics:widget entity="0D5x00000009Fhc" customUrl="http://mywebsite/TopicViewTestPage?topicId="/>
</apex:page>
```
