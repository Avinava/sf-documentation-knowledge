---
title: "describeQuickActions()"
domain: api
topic: describequickactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.124Z
estimatedTokens: 477
keywords: [describeQuickActions, Retrieves, actions, Usage, Sample—Java, Arguments]
---

# describeQuickActions()

> Retrieves details about specified actions.

# describeQuickActions()

Retrieves details about specified actions.

## Syntax

```

```

## Usage

Use the describeQuickActions() call to retrieve details for specified actions. In API version 28.0, the describeQuickActions() call takes the action name in the form of ParentEntity.ActionName. In API version 29.0 and greater, it takes the action name in the form of ContextEntity.ActionName. Returns an array of DescribeQuickActionResult. For example, you can first call [describeAvailableQuickActions()](atlas.en-us.api.meta/api/sforce_api_calls_describeavailablequickactions.htm "In API version 28.0, describes details about actions available for a specified parent. In API version 29.0 and greater, describes details about actions available for a specified context.") for a list of actions available for a specified context and then use describeQuickActions() to obtain details about specific actions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

In API version 46.0 and later, the apiName for a global quick action can include the prefix Global. in a describeQuickActions() request body. The request body also accepts global quick action API names without the prefix.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The describeQuickActions() call doesn’t return results for actions created in your org if the Apex class was installed as part of a managed package.

## Sample—Java

This sample retrieves and displays publisher action details for a create action on the Account object.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| quickActions | string[] | An array of quick actions to be retrieved. |

## Response

[DescribeQuickActionResult](atlas.en-us.api.meta/api/sforce_api_calls_describequickactionresult.htm "Returns an array of DescribeQuickActionResult objects.")

## Code Examples

```
DescribeQuickActionResult[] = connection.describeQuickActions(string[] quickActionNames);
```

```apex
public void example() throws Exception {
    DescribeQuickActionResult[] result = 
        conn.describeQuickActions(new String[] 
            { "Account.QuickCreateContact", "Account.QuickCreateTask" });
    for(DescribeQuickActionResult r : result) { 
        assert r != null;
    DescribeQuickActionDefaultValue [] describeQuickActionDefaultValues = r.getDefaultValues();
    for(DescribeQuickActionDefaultValue defaultValue : describeQuickActionDefaultValues) {
        System.out.println("Target Object Field:  " + defaultValue.getField() );
        System.out.println("Target Object Field's default Value:  " + defaultValue.getDefaultValue );
}
        System.out.println("Action name: " + r.getName());
        System.out.println("Action label: " + r.getLabel());
        System.out.println("ParentOrContext object: " + r.getSourceSobjectType());
        System.out.println("Target object: " + r.getTargetSobjectType());
        System.out.println("Target object record type: " + r.getTargetRecordTypeId());
        System.out.println("Relationship field: " + r.getTargetParentField());
        System.out.println("Quick action type: " + r.getType());
        System.out.println("VF page name for custom actions: " + 
        r.getVisualforcePageName());
        System.out.println("Icon name: " + r.getIconName());
        System.out.println("Icon URL: " + r.getIconUrl());
        System.out.println("Mini icon URL: " + r.getMiniIconUrl());
        assert r.getLayout() != null;
        System.out.println("Height of VF page for custom actions: " + r.getHeight());
        System.out.println("Width of VF page for custom actions: " + r.getWidth());
    }
}
```

## Related Topics

- DescribeQuickActionResult[] (atlas.en-us.api.meta/api/sforce_api_calls_describequickactionresult.htm)
- describeAvailableQuickActions() (atlas.en-us.api.meta/api/sforce_api_calls_describeavailablequickactions.htm)
- DescribeQuickActionResult (atlas.en-us.api.meta/api/sforce_api_calls_describequickactionresult.htm)
