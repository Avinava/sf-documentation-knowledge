---
title: "ConnectedApplication"
domain: sfFieldRef
topic: connectedapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.740Z
estimatedTokens: 503
keywords: [ConnectedApplication, connected, app, read-only]
---

# ConnectedApplication

> Represents a connected app and its details; all fields are
			read-only.

# ConnectedApplication

Represents a connected app and its details; all fields are read-only.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ConnectedApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_connectedapplication.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Connected App ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MobileSessionTimeout | Lock App After | picklist |  | 40 |  |  |
| MobileStartUrl | Mobile Start URL | url |  | 2400 |  |  |
| Name | Connected App Name | string |  | 80 |  |  |
| NamedUserUvidTimeout | Named User Uvid Timeout | picklist |  | 40 |  |  |
| OptionsAllowAdminApprovedUsersOnly | AllowAdminApprovedUsersOnly | boolean |  |  |  |  |
| OptionsCodeCredentialGuestEnabled | CodeCredentialGuestEnabled | boolean |  |  |  |  |
| OptionsFullContentPushNotifications | FullContentPushNotifications | boolean |  |  |  |  |
| OptionsHasSessionLevelPolicy | HasSessionLevelPolicy | boolean |  |  |  |  |
| OptionsIsInternal | isInternal | boolean |  |  |  |  |
| OptionsRefreshTokenValidityMetric | RefreshTokenValidityMetric | boolean |  |  |  |  |
| OptionsTokenExchangeManageBitEnabled | TokenExchangeManageBitEnabled | boolean |  |  |  |  |
| PinLength | PIN Length | picklist |  | 40 |  |  |
| RefreshTokenValidityPeriod | Refresh Token Policy: | int | 9 |  |  |  |
| StartUrl | Start URL | url |  | 2400 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UvidTimeout | Uvid Timeout | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
