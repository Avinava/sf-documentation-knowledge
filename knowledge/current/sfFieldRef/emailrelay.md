---
title: "EmailRelay"
domain: sfFieldRef
topic: emailrelay
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.814Z
estimatedTokens: 358
keywords: [EmailRelay, configuration, sending, email, relay, routes, sent, Salesforce, company’s, servers, API, version, 43.0, later]
---

# EmailRelay

> Represents the configuration for sending an email relay. An email
			relay routes email sent from Salesforce through your company’s email servers. This
		object is available in API version 43.0 and later.

# EmailRelay

Represents the configuration for sending an email relay. An email relay routes email sent from Salesforce through your company’s email servers. This object is available in API version 43.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailRelay](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emailrelay.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthType | Auth Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Host | Host | string |  | 255 |  |  |
| Id | Email Relay ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequireAuth | Enable SMTP Auth | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Password | Password | encryptedstring |  | 100 |  |  |
| Port | Port | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TlsSetting | TLS Setting | picklist |  | 255 |  |  |
| Username | Username | string |  | 100 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
