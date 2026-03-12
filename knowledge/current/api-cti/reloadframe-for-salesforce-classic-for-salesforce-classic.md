---
title: "reloadFrame() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: reloadframe-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.907Z
estimatedTokens: 92
keywords: [reloadFrame, Salesforce, Classic, Reloads, frame, making, call, record, feed-based, layout, API, version, 34.0, later, Usage]
---

# reloadFrame() for Salesforce Classic for Salesforce Classic

> Reloads the frame that contains the page making the call.
                    This method is available only if the record is displayed with a feed-based
                    layout. This method is available in API version 34.0 or later.

# reloadFrame() for Salesforce Classic for Salesforce Classic

## Usage

Reloads the frame that contains the page making the call. This method is available only if the record is displayed with a feed-based layout. This method is available in API version 34.0 or later.

## Syntax

```

```

## Arguments

None.

## Sample Code–JavaScript

```

```

## Response

None.

## Code Examples

```
sforce.interaction.entityFeed.reloadFrame()
```

```
<apex:page standardController="Case">
    <apex:includeScript value="/support/api/34.0/interaction.js"/>
    <a href"javascript:void(0); onclick="sforce.interaction.entityFeed.reloadFrame();">
    Reload</a>
</apex:page>
```
