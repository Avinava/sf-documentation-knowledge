---
title: "$Label"
domain: pages
topic: label
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.380Z
estimatedTokens: 130
keywords: [$Label, merge, referencing, custom, label, Usage]
---

# $Label

> A global merge field type to use when referencing a custom label.

# $Label

A global merge field type to use when referencing a custom label.

## Usage

Use this expression in a Visualforce page to access a custom label. The returned value depends on the language setting of the contextual user.​ The value returned is one of the following, in order of precedence:

## Example

```

```

#### See Also

-   [*Salesforce Help*: Custom Labels](https://help.salesforce.com/s/articleView?id=platform.cl_about.htm&type=5&language=en_US "Salesforce Help: Custom Labels - HTML (New Window)")

## Code Examples

```
<apex:page>
   <apex:pageMessage severity="info" 
   strength="1" 
   summary="{!$Label.firstrun_helptext}" 
   />
</apex:page>
```
