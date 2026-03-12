---
title: "ActivePermSetLicenseMetric"
domain: sfFieldRef
topic: activepermsetlicensemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.380Z
estimatedTokens: 320
keywords: [ActivePermSetLicenseMetric, number, active, assigned, purchased, permission, licenses, org, API, version, 52.0, later]
---

# ActivePermSetLicenseMetric

> Represents the number of active, assigned, and purchased permission set
         licenses in the org. This object is available in API version 52.0 and later.

# ActivePermSetLicenseMetric

Represents the number of active, assigned, and purchased permission set licenses in the org. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActivePermSetLicenseMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_activepermsetlicensemetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveUserCount | Active User Count | int | 9 |  |  |  |
| AssignedUserCount | Assigned User Count | int | 9 |  |  |  |
| DeveloperName | Permission Set License Developer Name | string |  | 255 |  |  |
| Id | Active Permission Set License Metric ID | id |  | 18 |  |  |
| MasterLabel | Permission Set License Master Label | string |  | 255 |  |  |
| MetricsDate | Metrics Date | date |  |  |  |  |
| PermissionSetLicenseId | Permission Set License ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalLicenses | Total License Count | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
