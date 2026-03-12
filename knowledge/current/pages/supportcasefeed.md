---
title: "support:caseFeed"
domain: pages
topic: supportcasefeed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.162Z
estimatedTokens: 225
keywords: [support, caseFeed, Case, Feed, component, includes, elements, standard, including, publishers, Email, Portal, Log, Call, Internal]
---

# support:caseFeed

> The Case Feed component includes all of the elements of the standard Case Feed page, including the publishers (Email , Portal, Log a Call, and Internal Note), case activity feed, feed filters, and highlights panel. This component can only be used in organizations that have Case Feed enabled.

# support:caseFeed

The Case Feed component includes all of the elements of the standard Case Feed page, including the publishers (Email , Portal, Log a Call, and Internal Note), case activity feed, feed filters, and highlights panel. This component can only be used in organizations that have Case Feed enabled.

## This example displays the Case Feed component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| caseId | id | Case ID of the record for which to display the Case Feed. | Yes | 26.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<apex:page standardController="Case" showHeader="true">
                <support:caseFeed id="myCaseFeed" caseId="{!case.id}"/>               
            </apex:page>
```
