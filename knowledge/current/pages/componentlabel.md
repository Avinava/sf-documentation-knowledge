---
title: "$ComponentLabel"
domain: pages
topic: componentlabel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.372Z
estimatedTokens: 68
keywords: [$ComponentLabel, merge, referencing, label, inputField, component, Visualforce, associated, message, Usage]
---

# $ComponentLabel

> A global merge field to use when referencing the label of an inputField component on a Visualforce page that is associated with
   a message.

# $ComponentLabel

A global merge field to use when referencing the label of an inputField component on a Visualforce page that is associated with a message.

## Usage

Return the label of an inputField component that is associated with a message.

## Example

```

```

## Code Examples

```
<apex:datalist var="mess" value="{!messages}">
    <apex:outputText value="{!mess.componentLabel}:" style="color:red"/>
    <apex:outputText value="{!mess.detail}" style="color:black" />
</apex:datalist>
```
