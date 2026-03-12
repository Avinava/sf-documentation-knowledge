---
title: "MailmergeTemplate"
domain: sfFieldRef
topic: mailmergetemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.552Z
estimatedTokens: 449
keywords: [MailmergeTemplate, mail, merge, template, Microsoft, Word, document, performing, merges, organization]
---

# MailmergeTemplate

> Represents a mail merge template (a Microsoft Word document) used for
   performing mail merges for your organization.

# MailmergeTemplate

Represents a mail merge template (a Microsoft Word document) used for performing mail merges for your organization.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MailmergeTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mailmergetemplate.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Body | Body | base64 |  |  |  |  |
| BodyLength | Body Length | int | 8 |  |  |  |
| Category | Document Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| Filename | File | string |  | 255 |  |  |
| Id | Mail Merge Template ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastUsedDate | Last Used Date | datetime |  |  |  |  |
| Name | Name | string |  | 80 |  |  |
| SecurityOptionsAttachmentHasFlash | Flash Injection was detected in the attachment | boolean |  |  |  |  |
| SecurityOptionsAttachmentHasXSSThreat | XSS threat was detected in the attachment | boolean |  |  |  |  |
| SecurityOptionsAttachmentScannedForXSS | Attachment has been scanned for XSS | boolean |  |  |  |  |
| SecurityOptionsAttachmentScannedforFlash | Attachment has been scanned for Flash Injection | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
