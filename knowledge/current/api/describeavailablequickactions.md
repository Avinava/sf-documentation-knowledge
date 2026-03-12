---
title: "describeAvailableQuickActions()"
domain: api
topic: describeavailablequickactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.987Z
estimatedTokens: 325
keywords: [describeAvailableQuickActions, API, version, 28.0, actions, parent, 29.0, greater, context, Usage, Sample—Java, Arguments, Faults]
---

# describeAvailableQuickActions()

> In API version 28.0, describes details about actions available for a specified
        parent. In API version 29.0 and greater, describes details about actions available for a
        specified context.

# describeAvailableQuickActions()

In API version 28.0, describes details about actions available for a specified parent. In API version 29.0 and greater, describes details about actions available for a specified context.

## Syntax

```

```

## Usage

Use describeAvailableQuickActions() to get the list of actions whose parent (API version 28.0) or context (API version 29.0 and greater) entity name is supplied as well as standard and global actions. The describeAvailableQuickActions() call uses the parent entity name, such as “Account”, or “null” for global actions, or in API version 29.0 and greater, the context, to return an array of DescribeAvailableQuickActionResult.

## Sample—Java

This sample retrieves and displays the available action information for the Account object.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| parentOrContextType | string | Either a standard or custom object.The parentType applies only to API version 28.0.The contextType applies to API version 29.0 and greater. |

## Response

An array of [DescribeAvailableQuickActionResult](atlas.en-us.api.meta/api/sforce_api_calls_describeavailablequickactionresult.htm "Returns an array of DescribeAvailableQuickActionResult objects.") objects.

## Faults

connection.exception errors

## Code Examples

```
DescribeAvailableQuickActionResult [] = connection.describeAvailableQuickActions(string parentOrContextType );
```

```apex
public void example() throws Exception {
    DescribeAvailableQuickActionResult[] aResult = 
        conn.describeAvailableQuickActions("Account");
    for(DescribeAvailableQuickActionResult ar : aResult) { 
        System.out.println("Action label: " + ar.getLabel());
        System.out.println("Action name: " + ar.getName());
        System.out.println("Action type: " + ar.getType());
    }
}
```

## Related Topics

- DescribeAvailableQuickActionResult (atlas.en-us.api.meta/api/sforce_api_calls_describeavailablequickactionresult.htm)
