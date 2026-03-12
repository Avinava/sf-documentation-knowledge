---
title: "ConvMessageSendRequest"
domain: sfFieldRef
topic: convmessagesendrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:54.550Z
estimatedTokens: 838
keywords: [ConvMessageSendRequest, send, template-based, messaging, component, series, users, enhanced, channel, In-App, API, version, 60.0, later]
---

# ConvMessageSendRequest

> Represents a request to send a template-based messaging component to a series
         of messaging users in an enhanced messaging channel or Messaging for In-App. This
      object is available in API version 60.0 and later.

# ConvMessageSendRequest

Represents a request to send a template-based messaging component to a series of messaging users in an enhanced messaging channel or Messaging for In-App. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ConvMessageSendRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_convmessagesendrequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllowExistingSessionStatus | Send Condition | picklist |  | 255 |  |  |
| CommSubscriptionId | Communication Subscription ID | reference |  | 18 |  |  |
| CompletedDate | Completed Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FailedMessageCount | Failed Message Count | int | 9 |  |  |  |
| FailedMessageErrorReasons | Failed Message Error Reasons | textarea |  | 700 |  |  |
| FailedMessageIdentifiers | Failed Message Identifiers | textarea |  | 4000 |  |  |
| FailedMeuPlatformKeys | Failed Message Platform Keys | textarea |  | 8000 |  |  |
| Id | Conversation Message Send Request ID | id |  | 18 |  |  |
| InProgressMessageCount | In Progress Message Count | int | 9 |  |  |  |
| InProgressMessageIdentifiers | In Progress Message Identifiers | string |  | 255 |  |  |
| InProgressMessagingEndUserIds | In Progress Messaging User Ids | string |  | 255 |  |  |
| InProgressMessagingSessionIds | In Progress Messaging Session Ids | string |  | 255 |  |  |
| InProgressMeuPlatformKeys | In Progress Messaging Session Platform Keys | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MessageDefinition | Message Definition | string |  | 255 |  |  |
| MessageDefinitionParameters | Message Definition Parameters | textarea |  | 8000 |  |  |
| Name | Conversation Message Send Request Name | string |  | 255 |  |  |
| PendingMessageCount | Pending Message Count | int | 9 |  |  |  |
| PendingMessageIdentifiers | Pending Message Identifiers | textarea |  | 4000 |  |  |
| PendingMessagingEndUserIds | Pending Messaging User Ids | textarea |  | 4000 |  |  |
| PendingMeuPlatformKeys | Pending Messaging User Platform Keys | textarea |  | 8000 |  |  |
| RequestConsentType | Consent Type | picklist |  | 255 |  |  |
| RequestStatus | Send Status | picklist |  | 255 |  |  |
| RequestType | Send Message Type | picklist |  | 255 |  |  |
| SessionLongevityPreference | Messaging Session Longevity | picklist |  | 255 |  |  |
| ShouldEnforceChannelConsent | Enforce Channel Consent | boolean |  |  |  |  |
| SuccessMessageCount | Success Message Count | int | 9 |  |  |  |
| SuccessMessageIdentifiers | Success Message Identifiers | textarea |  | 4000 |  |  |
| SuccessMeuPlatformKeys | Success Message Platform Keys | textarea |  | 8000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalMessageCount | Total Message Count | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
