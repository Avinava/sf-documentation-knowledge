---
title: "ReplyEmailSettings"
domain: sfFieldRef
topic: replyemailsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.229Z
estimatedTokens: 472
keywords: [ReplyEmailSettings, reply, mail, management, configuration, configure, emails, received, email, sending, domain, API, version, 62.0, later]
---

# ReplyEmailSettings

> Represents a reply mail management configuration, which is used to configure
         emails that are received by an email sending domain. This object is available in API
      version 62.0 and later.

# ReplyEmailSettings

Represents a reply mail management configuration, which is used to configure emails that are received by an email sending domain. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ReplyEmailSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_replyemailsettings.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AutoReplyMessage | Auto Reply Message Value | textarea |  | 131072 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DomainName | Domain Name Value | string |  | 255 |  |  |
| FwdEmailAddress | Fwd Email Address Value | string |  | 254 |  |  |
| Id | Generic Reply Email Setting Result ID | id |  | 18 |  |  |
| IsAutoReplyEnabled | AutoReply Enabled Value | boolean |  |  |  |  |
| IsDeleteAutoRepliesEnabled | Delete AutoReplies Enabled Value | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEmailForwardingEnabled | Email Forwarding Enabled Value | boolean |  |  |  |  |
| IsUnsubscribeManualRequestsEnabled | Unsubscribe Manual Requests Enabled Value | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnsubscribeTerms | Unsubscribe Terms Value | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
