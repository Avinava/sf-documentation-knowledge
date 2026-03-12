---
title: "EmailMessage"
domain: sfFieldRef
topic: emailmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.803Z
estimatedTokens: 719
keywords: [EmailMessage, email, Salesforce]
---

# EmailMessage

> Represents an email in Salesforce.

# EmailMessage

Represents an email in Salesforce.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailMessage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emailmessage.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityId | Activity ID | reference |  | 18 |  |  |
| AttachmentIds | Attachment Ids | string |  | 32768 |  |  |
| AutomationType | Automation Type | picklist |  | 40 |  |  |
| BccAddress | BCC Address | string |  | 4000 |  |  |
| CcAddress | CC Address | string |  | 4000 |  |  |
| ClientThreadIdentifier | Client Thread ID | string |  | 765 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmailRoutingAddressId | EmailRoutingAddress ID | reference |  | 18 |  |  |
| EmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| FirstOpenedDate | First Opened | datetime |  |  |  |  |
| FromAddress | From Address | email |  | 1000 |  |  |
| FromId | From ID | reference |  | 18 |  |  |
| FromName | From Name | string |  | 1000 |  |  |
| HasAttachment | Has Attachment | boolean |  |  |  |  |
| Headers | Headers | textarea |  | 32000 |  |  |
| HtmlBody | HTML Body | textarea |  | 131072 |  |  |
| Id | Email Message ID | id |  | 18 |  |  |
| Incoming | Is Incoming | boolean |  |  |  |  |
| IsBounced | Bounced? | boolean |  |  |  |  |
| IsClientManaged | Is Client Managed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExternallyVisible | Is Externally Visible | boolean |  |  |  |  |
| IsOpened | Opened? | boolean |  |  |  |  |
| IsTracked | Is Tracked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastOpenedDate | Last Opened | datetime |  |  |  |  |
| MessageDate | Message Date | datetime |  |  |  |  |
| MessageIdentifier | Message ID | string |  | 765 |  |  |
| Name | Email Message Name | string |  | 255 |  |  |
| ParentId | Case ID | reference |  | 18 |  |  |
| RelatedToId | Related To ID | reference |  | 18 |  |  |
| ReplyToEmailMessageId | Email Message ID | reference |  | 18 |  |  |
| Source | Email Source | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| Subject | Subject | string |  | 3000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TextBody | Text Body | textarea |  | 131072 |  |  |
| ThreadIdentifier | Thread ID | string |  | 765 |  |  |
| ToAddress | To Address | string |  | 4000 |  |  |
| ValidatedFromAddress | From | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
