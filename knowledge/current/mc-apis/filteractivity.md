---
title: "FilterActivity"
domain: mc-apis
topic: filteractivity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.881Z
estimatedTokens: 517
keywords: [FilterActivity, logic, data, filter, subscriber, select, group, subscribers, satisfy, criteria, Items]
---

# FilterActivity

> The FilterActivity object applies the logic of a data filter to a subscriber list you select to create a group of subscribers who satisfy the filter criteria.

# FilterActivity

The FilterActivity object applies the logic of a data filter to a subscriber list you select to create a group of subscribers who satisfy the filter criteria.

-   To create a FilterActivity where the SourceTypeID is the SubscriberList and SourceObjectID is the All Subs List Object ID, you need the Email | Subscribers | All Subscribers | View permission.
-   To start a FilterActivity using the perform method, you need the Interactions | Activities | Filter | Start permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| FilterActivityID | xsd:string | Specifies the ID of the filter activity. |
| FilterDefinitionID | xsd:string | Specifies the related filter definition ID for the filter activity. |
| DestinationObjectID | Specifies the ID of the destination object for the filtered data. | xsd:string |
| DestinationTypeID | xsd:int | Specifies the type of destination object for the filtered data using one of the following values.SubscriberList = 1DataExtension = 2GroupWizard = 3BehavioralData = 4 |
| SourceObjectID | xsd:string | Specifies the ID of the source object used to filter on. |
| SourceTypeID | xsd:int | Specifies the type of source object used to filter on using one of the following values.SubscriberList = 1DataExtension = 2GroupWizard = 3BehavioralData = 4 |
| OwnerID | xsd:string | Specifies the user ID that owns the filter activity. |
| StatusID | xsd:string | Determines whether the filter activity is deleted. 1 means the filter activity was not deleted and is still active. 0 indicates it was deleted. |
| CreatedBy | tns:ClientID | Specifies the user ID that created the filter activity. |
| ModifiedBy | tns:ClientID | Specifies the user ID that last modified the filter activity. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Apply Filter to Subscriber List](atlas.en-us.noversion.mc-apis.meta/mc-apis/apply_filteractivity.htm)

## Related Topics

- Apply Filter to Subscriber List (atlas.en-us.noversion.mc-apis.meta/mc-apis/apply_filteractivity.htm)
