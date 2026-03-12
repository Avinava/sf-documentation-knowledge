---
title: "Condition"
domain: health-cloud-object-reference
topic: condition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.233Z
estimatedTokens: 1274
keywords: [Condition, FHIR, resource, maps, Health​Condition, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Condition

> The Condition FHIR resource maps to the Health​Condition object in Salesforce.

# Condition

The Condition FHIR resource maps to the Health​Condition object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Condition](https://www.hl7.org/fhir/condition.html) map to the fields in Salesforce.

| Condition Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0.M | The identifier information for a health condition is represented as Identifier records that reference the health condition record using their Identifier​.Parent​RecordId field. |
| clinical​Status | Health​Condition​.Condition​Status | Picklist | 0.1 | While FHIR defines Condition​.clinical​Status as a code set bundle, the Salesforce implementation of Health​Condition​.Condition​Status is picklist. |
| verification​Status | Health​Condition​.Diagnostic​Status | Picklist | 0.1 | While FHIR defines condition​.verification​Status as a code set bundle, the Salesforce implementation of Health​Condition​.Diagnostic​Status is picklist. |
| category | Health​Condition​.Type | Picklist | 0.1 | While FHIR defines Condition​.category as a zero-to-many code set bundle, the Salesforce implementation of Health​Condition​.Categories is a zero-to-one picklist. |
| severity | Health​Condition​.Severity | Picklist | 0.1 | While FHIR defines condition​.severity as a code set bundle, the Salesforce implementation of Health​Condition​.Severity is picklist. |
| code | Health​Condition​.Condition​CodeId | Lookup: CodeSet​Bundle | 1.1 | While FHIR defines condition​.code as a zero-to-one resource, the Salesforce implementation is a one-to-one field. |
| body​Site | Health​Condition​.SiteId | Lookup: CodeSet​Bundle | 0.1 | Use this field if only one bodySite value is required for the condition. |
| Health​Condition​Detail | Object | 0.M | Use the child object to specify BodySite values for a condition if multiple bodySite values are reuqired. |
| subject | Health​Condition​.PatientId | Master-Detail Reference: Account | 1.1 | The Salesforce implementation of Condition​.subject doesn’t support groups. |
| encounter | Health​Condition​.Clinical​EncounterId | Lookup: Encounter | 0.1 | N/A |
| onset​.onset​Date​Time | Health​Condition​.Onset​Start​Date​Time | Date​Time | 0.1 | Health​Condition​.Onset​Start​Date​Time is used as both the equivalent of condition​.onset​.onset​Date​Time and the start date of condition​.onset​.onset​Period |
| onset​.onset​Age | N/A | N/A | N/A | Not supported |
| onset​.onset​Period | Health​Condition​.Onset​Start​Date​Time | Date​Time | 0.1 | Since Salesforce doesn’t natively support the period data type, condition​.onset​.onset​Period is flattened into a set of start date and end date fields. The start date field is also used as the equivalent of condition​.onset​.onset​Date​Time |
| Health​Condition​.Onset​End​Date​Time | Date​Time | 0.1 |
| onset​.onset​Range | N/A | N/A | N/A | Not supported |
| onset​.onset​String | N/A | N/A | N/A | Not supported |
| abatement​.abatement​Date​Time | Health​Condition​.Abatement​Start​Date​Time | Date​Time | 0.1 | Health​Condition​.Abatement​Start​Date​Time is used as both the equivalent of condition​.abatement​.abatement​Date​Time and the start date of condition​.abatement​.abatement​Period |
| abatement​.abatement​Age | N/A | N/A | N/A | Not supported |
| abatement​.abatement​Period | Health​Condition​.Abatement​Start​Date​Time | Date​Time | 0.1 | Since Salesforce doesn’t natively support the period data type, condition​.abatement​.abatement​Period is flattened into a set of start date and end date fields. The start date field is also used as the equivalent of condition​.abatement​.abatement​Date​Time |
| Health​Condition​.Abatement​End​Date​Time | Date​Time | 0.1 |
| abatement​.abatement​Range | N/A | N/A | N/A | Not supported |
| abatement​.abatement​String | N/A | N/A | N/A | Not supported |
| recorded​Date | Health​Condition​.Record​Creation​Date​Time | Date​Time | 0.1 | N/A |
| recorder | Health​Condition​.Record​CreatorId | Polymorphic Lookup: Account, Healthcare Provider | 0.1 | N/A |
| asserter | Health​Condition​.Assertion​SourceId | Polymorphic Lookup: Account, Healthcare Provider | 0.1 | N/A |
| stage | Health​Condition​.StageId | Lookup: CodeSet​Bundle | 0.1 | The child resources of condition​.stage is combined into a single code set bundle reference field. While FHIR defines condition​.stage as a zero-to-many resource, the Salesforce implementation is a zero-to-one field. |
| evidence | N/A | N/A | N/A | Not supported |
| note | Author​Note | Object | 0.M | The notes for a health condition is represented as Author​Note records that reference the health condition record using their Author​Note​.Parent​RecordId field. |

#### See Also

-   [HealthCondition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_HealthCondition.htm "Represents a clinical condition, problem, or any clinically relevant occurrence that is a matter of concern. This object is available in API version 51.0 and later.")

## Related Topics

- HealthCondition (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_HealthCondition.htm)
