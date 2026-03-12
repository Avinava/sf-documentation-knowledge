---
title: "describePrimaryCompactLayouts()"
domain: api
topic: describeprimarycompactlayouts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.105Z
estimatedTokens: 263
keywords: [describePrimaryCompactLayouts, Retrieves, metadata, primary, compact, layout, Usage, Sample, Code—Java, Arguments, Faults]
---

# describePrimaryCompactLayouts()

> Retrieves metadata about the primary compact layout for each of the specified object
    types.

# describePrimaryCompactLayouts()

Retrieves metadata about the primary compact layout for each of the specified object types.

Information returned is limited to 100 objects.

## Syntax

```

```

## Usage

Use this call to retrieve information about the primary compact layout for the given object types. This call returns metadata about a given primary compact layout. For more information about compact layouts, see Salesforce Help.

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectTypes | string[] | An array of one or more objects. The specified values must be valid objects for your organization. |

## Response

[DescribeCompactLayout](atlas.en-us.api.meta/api/sforce_api_calls_describecompactlayoutsresult.htm#describecompactlayoutsresult_describeCompactLayout)

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

## Code Examples

```
DescribeCompactLayout[] primaryCompactLayouts = connection.describePrimaryCompactLayouts(string[] sObjectType)
```

```apex
public void testDescribePrimaryCompactLayoutsSample() {
  try {
    String[] objectsToDescribe = new String[] {"Account","Lead"};
      DescribeCompactLayout[] primaryCompactLayouts = connection.describePrimaryCompactLayouts(objectsToDescribe);

      for (int i = 0; i < primaryCompactLayouts.length; i++) {
        DescribeCompactLayout cLayout = primaryCompactLayouts[i];
        System.out.println(" There is a compact layout with name: " + cLayout.getName());

        // Write the objectType
        System.out.println(" This compact layout is the primary compact layout for: " + cLayout.getObjectType());

        DescribeLayoutItem[] fieldItems = cLayout.getFieldItems();
        System.out.println(" There are " + fieldItems.length + " fields in this compact layout.");

        // Write field items
        for (int j = 0; j < fieldItems.length; j++) {
          System.out.println(j + " This compact layout has a field with name: " + fieldItems[j].getLabel());
        }

        DescribeLayoutItem[] imageItems = cLayout.getImageItems();
        System.out.println(" There are " + imageItems.length + " image fields in this compact layout.");

        // Write the image items
        for (int j = 0; j < imageItems.length; j++) {
          System.out.println(j + " This compact layout has an image field with name: " + imageItems[j].getLabel());
        }

        DescribeLayoutButton[] actions = cLayout.getActions();
        System.out.println(" There are " + actions.length + " buttons in this compact layout.");

        // Write the action buttons
        for (int j = 0; j < actions.length; j++) {
          System.out.println(j + " This compact layout has a button with name: " + actions[j].getLabel());
        }
      }

    } catch (ConnectionException ce) {
      ce.printStackTrace();
  }
}
```

## Related Topics

- DescribeCompactLayout (atlas.en-us.api.meta/api/sforce_api_calls_describecompactlayoutsresult.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
