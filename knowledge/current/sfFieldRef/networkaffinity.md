---
title: "NetworkAffinity"
domain: sfFieldRef
topic: networkaffinity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.809Z
estimatedTokens: 317
keywords: [NetworkAffinity, junction, associates, user, profile, Network, Experience, Cloud, site, assign, API, version, 41.0, later]
---

# NetworkAffinity

> Represents a junction object that
        associates a user profile with a Network object, that is, with an Experience Cloud site. Use
        NetworkAffinity to assign a default Experience Cloud site to a user profile.
      This object is available in API version 41.0 and later.

# NetworkAffinity

Represents a junction object that associates a user profile with a Network object, that is, with an Experience Cloud site. Use NetworkAffinity to assign a default Experience Cloud site to a user profile. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkAffinity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkaffinity.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Default Community ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| ProfileId | Profile ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
