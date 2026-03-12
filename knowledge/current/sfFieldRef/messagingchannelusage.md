---
title: "MessagingChannelUsage"
domain: sfFieldRef
topic: messagingchannelusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.193Z
estimatedTokens: 394
keywords: [MessagingChannelUsage, status, enhanced, Messaging, channel, application, Unified, API, version, 60.0, later]
---

# MessagingChannelUsage

> Represents the status of an enhanced Messaging channel or of an application
         in a Unified Messaging channel. This object is available in API version 60.0 and
      later.

# MessagingChannelUsage

Represents the status of an enhanced Messaging channel or of an application in a Unified Messaging channel. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MessagingChannelUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingchannelusage.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConsentType | Consent Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeploymentStatus | Deployment Status | picklist |  | 255 |  |  |
| DeploymentType | Deployment Type | picklist |  | 255 |  |  |
| DisabledTime | Disabled Time | datetime |  |  |  |  |
| ErrorDetails | Error Details | string |  | 40 |  |  |
| ErrorReason | Error Reason | picklist |  | 255 |  |  |
| Id | Messaging Channel Usage ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Modified On | datetime |  |  |  |  |
| MessagingChannelId | Messaging Channel ID | reference |  | 18 |  |  |
| RoutingOverride | Routing Override | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
