---
title: "OauthTokenExchHandlerApp"
domain: sfFieldRef
topic: oauthtokenexchhandlerapp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.923Z
estimatedTokens: 387
keywords: [OauthTokenExchHandlerApp, enablement, settings, specific, Salesforce, connected, app, external, client, that’s, enabled, token, exchange, handler, multiple]
---

# OauthTokenExchHandlerApp

> Represents the enablement settings for a specific Salesforce connected app or
         external client app that’s enabled for the token exchange handler. A handler can be enabled
         for multiple apps. This object is available in API version 60.0 and later.

# OauthTokenExchHandlerApp

Represents the enablement settings for a specific Salesforce connected app or external client app that’s enabled for the token exchange handler. A handler can be enabled for multiple apps. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OauthTokenExchHandlerApp](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_oauthtokenexchhandlerapp.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexExecutionUserId | User ID | reference |  | 18 |  |  |
| ConnectedApplicationId | Connected App ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalClientApplicationId | External Client Application ID | reference |  | 18 |  |  |
| Id | Oauth Token Exchange Handler App ID | id |  | 18 |  |  |
| IsDefault | Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OauthTokenExchangeHandlerId | Oauth Token Exchange Handler ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
