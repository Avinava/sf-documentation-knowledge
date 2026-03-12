---
title: "describeApprovalLayout()"
domain: api
topic: describeapprovallayout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.976Z
estimatedTokens: 406
keywords: [describeApprovalLayout, Retrieves, metadata, approval, layouts, Usage, Sample, Code—Java, Arguments, Faults]
---

# describeApprovalLayout()

> Retrieves metadata about approval layouts for the specified object type.

# describeApprovalLayout()

Retrieves metadata about approval layouts for the specified object type.

## Syntax

```

```

## Usage

Use this call to retrieve information about the approval layout for a given object type. Each approval process has one approval layout.

If you supply a null value for approvalProcessNames, all the approval layouts for the object are returned, instead of the approval layout of each specified approval process.

## Sample Code—Java

This sample shows how to get the approval layouts of an Account sObject. It calls describeApprovalLayout() with the name of the sObject type to describe. After getting the approval layouts, the sample prints the name and fields found for each approval layout.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectType | string | The specified value must be a valid object for your organization. If the object is a person account, specify Account, or if it is a person contact, specify Contact. |
| approvalProcessNames | string[] | Optional array of the approval process API names to return approval layout metadata for. |

## Response

[DescribeApprovalLayoutResult](atlas.en-us.api.meta/api/sforce_api_calls_describeapprovallayoutresult.htm "The describeApprovalLayout() call returns a DescribeApprovalLayoutResult object containing top-level record type information about the passed-in sObjectType.")

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

## Code Examples

```
DescribeApprovalLayoutResult approvalLayoutResult = connection.describeApprovalLayout(string sObjectType, string[] approvalProcessNames);
```

```apex
public void describeApprovalLayoutSample() {
  try {
    String objectToDescribe = "Account";
    DescribeApprovalLayoutResult approvalLayoutResult = 
      connection.describeApprovalLayout(objectToDescribe, null);
    System.out.print("There are " + approvalLayoutResult.getApprovalLayouts().length);
    System.out.println(" approval layouts for the " + objectToDescribe + " object.");

    // Get all the approval layouts for the sObject
    for (int i = 0; i < approvalLayoutResult.getApprovalLayouts().length; i++) {
      DescribeApprovalLayout aLayout = approvalLayoutResult.getApprovalLayouts()[i];
      System.out.println(" There is an approval layout with name: " + aLayout.getName());
      DescribeLayoutItem[] layoutItems = aLayout.getLayoutItems();
      System.out.print(" There are " + layoutItems.length);
      System.out.println(" fields in this approval layout.");
      for (int j = 0; j < layoutItems.length; j++) {
        System.out.print("This approval layout has a field with name: ");
        System.out.println(layoutItems[j].getLabel());  
      }
    }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- DescribeApprovalLayoutResult (atlas.en-us.api.meta/api/sforce_api_calls_describeapprovallayoutresult.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
