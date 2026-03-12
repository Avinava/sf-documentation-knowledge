---
title: "HealthCareDiagnosis"
domain: sfFieldRef
topic: healthcarediagnosis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.029Z
estimatedTokens: 625
keywords: [HealthCareDiagnosis, industry-standard, healthcare, diagnosis, codes, Spring, ’21, release, Procedure, objects, stored, specifically, procedures, diagnoses, were]
---

# HealthCareDiagnosis

> Represents information related to industry-standard healthcare
			diagnosis codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare
			Diagnosis objects stored codes specifically related to procedures and diagnoses. These
			codes were used for prior-authorization requests and approval processes. Since the
			Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this
			purpose instead.

# HealthCareDiagnosis

Represents information related to industry-standard healthcare diagnosis codes. Before the Spring ’21 release, the Healthcare Procedure and Healthcare Diagnosis objects stored codes specifically related to procedures and diagnoses. These codes were used for prior-authorization requests and approval processes. Since the Spring’21 release, Health Cloud uses the Code Set and Code Set Bundle objects for this purpose instead.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [HealthCareDiagnosis](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_healthcarediagnosis.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 40 |  |  |
| Code | Code | string |  | 32 |  |  |
| CodeDescription | Description | string |  | 255 |  |  |
| CodeType | Code Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| Gender | Gender | picklist |  | 40 |  |  |
| Id | Healthcare Diagnosis ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsComplicationOrComorbidity | Complication or Comorbidity | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHospitalAcquiredCondition | Hospital Acquired Condition | boolean |  |  |  |  |
| IsMajorComplicationOrComorbidity | Major Complication or Comorbidity | boolean |  |  |  |  |
| IsPresentOnAdmissionExempt | Present on Admission Exemption | boolean |  |  |  |  |
| IsPrimaryDiagnosis | Primary Diagnosis Only | boolean |  |  |  |  |
| IsUnacceptablePrincipalDxIpAdmit | Unacceptable Principal Dx IP Admit | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
