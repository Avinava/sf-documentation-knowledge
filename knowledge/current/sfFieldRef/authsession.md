---
title: "AuthSession"
domain: sfFieldRef
topic: authsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.225Z
estimatedTokens: 378
keywords: [AuthSession, individual, user, session, organization, versions, 29.0, later]
---

# AuthSession

> The AuthSession object represents an individual user session in your
   organization. This object is available in versions 29.0 and later.

# AuthSession

The AuthSession object represents an individual user session in your organization. This object is available in versions 29.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AuthSession](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authsession.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created | datetime |  |  |  |  |
| Id | Auth Session ID | id |  | 18 |  |  |
| IsAssociatedWithJwtAccessToken | Associated With Jwt | boolean |  |  |  |  |
| IsCurrent | Current Session | boolean |  |  |  |  |
| LastModifiedDate | Updated | datetime |  |  |  |  |
| LoginGeoId | Login Geo Data ID | reference |  | 18 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginType | Login | picklist |  | 40 |  |  |
| LogoutUrl | Logout URL | string |  | 1500 |  |  |
| NumSecondsValid | Valid For | int | 9 |  |  |  |
| ParentId | Auth Session ID | reference |  | 18 |  |  |
| SessionSecurityLevel | Session Security Level | picklist |  | 40 |  |  |
| SessionType | Session Type | picklist |  | 40 |  |  |
| SourceIp | Source IP | string |  | 39 |  |  |
| UserType | User Type | picklist |  | 40 |  |  |
| UsersId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
