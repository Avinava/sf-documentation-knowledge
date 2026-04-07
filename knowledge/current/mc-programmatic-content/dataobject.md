---
title: "Dataobject"
domain: mc-programmatic-content
topic: dataobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.967Z
estimatedTokens: 340
keywords: [Dataobject, tag, add, data, current, context, template, recommended, purchases, email, web, declare, referencing, activity, Message]
---

# Dataobject

> Use the dataobject tag to add data to the current context of the template. For example, use dataobject to add a list of recommended purchases in an email or web page. You must declare all information for the dataobject tag before referencing it within your activity.

# Dataobject

Use the dataobject tag to add data to the current context of the template. For example, use dataobject to add a list of recommended purchases in an email or web page. You must declare all information for the dataobject tag before referencing it within your activity.

## Template

All dataobjects must include this information:

-   A user-supplied name value
-   A type value:
    -   inline - data contained within a simple value, object, or collection, including a JSON object in the data section of the data object
    -   variable - data contained within a declared string variable treated as content, including this template in the data section:
    -   list - data contained within a data extension or list, including a JSON object in the data section of the datasource object that describes the list:
-   A maxRows integer value
    -   Must include a positive integer
    -   Cannot exceed any maxRelatedRows option
    -   Defaults to the value of any defaultRelatedRows option

## Example

This example produces these messages:

### Message 1

Brian Jones, based on your preference of Men’s clothing, we suggest the following products…

SKU: 112233 Product name: Blue Mens Shirt - Medium

SKU: 445566 Product name: White Athletic Socks - 2pk

### Message 2

Karen Smith, we do not have any product recommendations for you at this time.
