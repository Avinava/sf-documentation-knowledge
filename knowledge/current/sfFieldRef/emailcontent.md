---
title: "EmailContent"
domain: sfFieldRef
topic: emailcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.770Z
estimatedTokens: 621
keywords: [EmailContent, marketing, email, asset, Account, Engagement]
---

# EmailContent

> Represents a marketing email asset for use with Account
			Engagement.

# EmailContent

Represents a marketing email asset for use with Account Engagement.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailContent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emailcontent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClickThroughRate | Total Click Through Rate | percent |  |  | 5 | 2 |
| ClickToOpenRatio | Click to Open Ratio | percent |  |  | 5 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeliveryRate | Delivery Rate | percent |  |  | 5 | 2 |
| Description | Description | textarea |  | 4000 |  |  |
| HtmlBody | HTML Body | textarea |  | 384000 |  |  |
| Id | Email Content ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ManagedContentId | Managed Content ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OpenRate | Open Rate | percent |  |  | 5 | 2 |
| OptOutRate | Opt Out Rate | percent |  |  | 5 | 2 |
| SpamComplaintRate | Spam Complaint Rate | percent |  |  | 5 | 2 |
| Subject | Subject | textarea |  | 3000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateId | Email Template ID | reference |  | 18 |  |  |
| TextBody | Text Body | textarea |  | 384000 |  |  |
| TotalDelivered | Total Delivered | int | 9 |  |  |  |
| TotalHardBounced | Total Hard Bounces | int | 9 |  |  |  |
| TotalOpens | Total Opens | int | 9 |  |  |  |
| TotalSent | Total Sent | int | 9 |  |  |  |
| TotalSoftBounced | Total Soft Bounces | int | 9 |  |  |  |
| TotalSpamComplaints | Total Spam Complaints | int | 9 |  |  |  |
| TotalTrackedLinkClicks | Total Clicks | int | 9 |  |  |  |
| UniqueClickThroughRate | Unique Click Through Rate | percent |  |  | 5 | 2 |
| UniqueOpens | Unique Opens | int | 9 |  |  |  |
| UniqueOptOuts | Unique Opt Outs | int | 9 |  |  |  |
| UniqueTrackedLinkClicks | Unique Clicks | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
