---
title: "describeCompactLayouts()"
domain: api
topic: describecompactlayouts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.996Z
estimatedTokens: 433
keywords: [describeCompactLayouts, call, retrieve, compact, layout, Usage, Sample, Code—Java, Arguments, Faults]
---

# describeCompactLayouts()

> Use this call to retrieve information about the compact layout for a given object
        type.

# describeCompactLayouts()

Use this call to retrieve information about the compact layout for a given object type.

Retrieves metadata about compact layouts for the specified object type.

## Syntax

```

```

## Usage

Use this call to retrieve information about the compact layout for a given object type. This call returns metadata about a given compact layout, including the record type mappings. For more information about compact layouts, see the Salesforce Help .

## Sample Code—Java

This sample shows how to get the compact layouts of an Account sObject. It calls describeCompactLayouts() with the name of the sObject type to describe. After getting the compact layouts, the sample prints the images, fields, and action buttons found for each compact layout. Next, it prints the system default compact layout for the object, then the mapping information of record types to compact layouts.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectType | string | The specified value must be a valid object for your organization. If the object is a person account, specify Account, or if it is a person contact, specify Contact. |
| recordTypeId | ID[] | Optional parameter that restricts the compact layout data returned to the specified record types. |

## Response

[DescribeCompactLayoutsResult](atlas.en-us.api.meta/api/sforce_api_calls_describecompactlayoutsresult.htm "Returns a DescribeCompactLayoutsResult object containing top-level record type information.")

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

## Code Examples

```
DescribeCompactLayoutsResult compactLayoutResult = connection.describeCompactLayouts(string sObjectType, ID[] recordTypeId);
```

```apex
public void testDescribeCompactLayoutsSample() {
    try {
        String objectToDescribe = "Account";
        DescribeCompactLayoutsResult compactLayoutResult = connection
                .describeCompactLayouts(objectToDescribe, null);
        System.out.println("There are " + compactLayoutResult.getCompactLayouts().length
                + " compact layouts for the " + objectToDescribe + " object.");

        // Get all the compact layouts for the sObject
        for (int i = 0; i < compactLayoutResult.getCompactLayouts().length; i++) {
            DescribeCompactLayout cLayout = compactLayoutResult.getCompactLayouts()[i];
            System.out.println(" There is a compact layout with name: " + cLayout.getName());
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

            System.out.println("This object's default compact layout is: "
                    + compactLayoutResult.getDefaultCompactLayoutId());

            RecordTypeCompactLayoutMapping[] mappings = compactLayoutResult.getRecordTypeCompactLayoutMappings();
            System.out.println("There are " + mappings.length + " record type to compact layout mapping for the "
                    + objectToDescribe + " object.");
            for (int j = 0; j < mappings.length; j++) {
                System.out.println(j + " Record type " + mappings[j].getRecordTypeId()
                        + " is mapped to compact layout " + mappings[j].getCompactLayoutId());
            }
        }

    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }

}
```

## Related Topics

- DescribeCompactLayoutsResult (atlas.en-us.api.meta/api/sforce_api_calls_describecompactlayoutsresult.htm)
- sObjectType (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
