---
title: "apex:milestoneTracker"
domain: pages
topic: apexmilestonetracker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.805Z
estimatedTokens: 163
keywords: [apex, milestoneTracker, Displays, milestone, tracker, Attributes]
---

# apex:milestoneTracker

> Displays the milestone tracker.

# apex:milestoneTracker

Displays the milestone tracker.

## This example displays the milestone tracker.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | String | Entity ID of the record for which to display the milestones. | Yes | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<apex:page standardController="Case" showHeader="true">
        		<apex:milestoneTracker entityId="{!case.id}"/>
        	</apex:page>
```
