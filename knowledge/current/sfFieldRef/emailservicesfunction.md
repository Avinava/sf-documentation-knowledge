---
title: "EmailServicesFunction"
domain: sfFieldRef
topic: emailservicesfunction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.832Z
estimatedTokens: 502
keywords: [EmailServicesFunction, email, service]
---

# EmailServicesFunction

> An email service.

# EmailServicesFunction

An email service.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailServicesFunction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emailservicesfunction.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AddressInactiveAction | Deactivated Email Address Action | picklist |  | 40 |  |  |
| ApexClassId | Class ID | reference |  | 18 |  |  |
| AttachmentOption | Accept Attachments | picklist |  | 40 |  |  |
| AuthenticationFailureAction | Unauthenticated sender action | picklist |  | 40 |  |  |
| AuthorizationFailureAction | Unauthorized sender action | picklist |  | 40 |  |  |
| AuthorizedSenders | Accept Email From | textarea |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorRoutingAddress | Route Error Emails to This Email Address | email |  | 270 |  |  |
| FunctionInactiveAction | Deactivated Email Service Action | picklist |  | 40 |  |  |
| FunctionName | Email Service Name | string |  | 64 |  |  |
| Id | Email Service ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsAuthenticationRequired | Advanced Email Security Settings | boolean |  |  |  |  |
| IsErrorRoutingEnabled | Enable Error Routing | boolean |  |  |  |  |
| IsTextAttachmentsAsBinary | Convert Text Attachments to Binary Attachments | boolean |  |  |  |  |
| IsTlsRequired | TLS Required | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OverLimitAction | Over email rate limit action | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
