---
title: "ActiveProfileMetric"
domain: sfFieldRef
topic: activeprofilemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.384Z
estimatedTokens: 264
keywords: [ActiveProfileMetric, profile, associated, active, assigned, purchased, user, licenses, API, version, 52.0, later]
---

# ActiveProfileMetric

> Represents the profile associated with the active, assigned, and purchased
         user licenses. This object is available in API version 52.0 and later.

# ActiveProfileMetric

Represents the profile associated with the active, assigned, and purchased user licenses. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActiveProfileMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_activeprofilemetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveUserCount | Active User Count | int | 9 |  |  |  |
| AssignedUserCount | Assigned User Count | int | 9 |  |  |  |
| Id | Active Profile Metric ID | id |  | 18 |  |  |
| MetricsDate | Metrics Date | date |  |  |  |  |
| ProfileId | Profile ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserLicenseId | User License ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
