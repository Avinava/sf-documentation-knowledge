---
title: "Service​Request"
domain: health-cloud-object-reference
topic: servicerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:56.094Z
estimatedTokens: 2683
keywords: [Service​Request, FH​IR, resource, maps, Clinical​Service​Request, Clinical​Service​Request​Detail, objects, Salesforce​, V4​.0, Clinical​, Data, Model, Mapping, Sample, Record]
---

# Service​Request

> The service​Request FH​IR resource maps to the
      Clinical​Service​Request and Clinical​Service​Request​Detail objects in Salesforce​.

# Service​Request

The service​Request FH​IR resource maps to the Clinical​Service​Request and Clinical​Service​Request​Detail objects in Salesforce​.

## FH​IR V4​.0 - Clinical​ Data Model Mapping

Here’s how the fields defined by FH​IR for [service​Request](https://www.hl7.org/fhir/servicerequest.html) map to the fields in Salesforce​.

| Service ​Request Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | ​Identifier | Object | 0​.M | The identifier information for a service request is represented as ​Identifier records that reference the Clinical​Service​Request record using their ​Identifier​.Parent​​Record​Id field​. |
| instantiates​Canonical​ | N/A | N/A | N/A | Not Supported |
| instantiates​Canonical​ | N/A | N/A | N/A | Not Supported |
| basedOn | Clinical​Service​Request​Detail | Object | 0​.M | The information about the service request or medication request that a service request is based on is represented as Clinical​Service​Request​Detail records that reference the Clinical​Service​Request record using their Clinical​Service​Request​Detail​.Clinical​Service​Request​Id field​.The Salesforce implementation of service​Request​.basedOn doesn’t support references to care plans​. |
| Clinical​Service​Request​Detail​.​Detail​Record​Id | Polymorphic Lookup: Clinical​Service​Request, Medication​Request | 0​.1 | For service​Request​.basedOn information, Clinical​Service​Request​Detail​.​Detail​Record​Id must reference a Clinical​Service​Request or Medication​Request record​. |
| Clinical​Service​Request​Detail​.​Detail​Type | PicklistValue: Based On | 0​.1 | For service​Request​.basedOn information, Clinical​Service​Request​Detail​.​DetailType must use the value Based On​. |
| replaces | Clinical​Service​Request​.Original​Request​Id | Lookup: Clinical​Service​Request | 0​.1 | While FH​IR defines service​Request​.replaces as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| requisition | Clinical​Service​Request​.Service​Request​Group​Identifier​Id | Lookup: ​Identifier | 0​.1 | N/A |
| status | Clinical​Service​Request​.Status | Picklist | 1​.1 | While FH​IR defines service​Request​.status as a code set bundle, the Salesforce implementation of Clinical​Service​Request​.Status is picklist​. |
| intent | Clinical​Service​Request​.Type | Picklist | 1​.1 | While FH​IR defines service​Request​.intent as a code set bundle, the Salesforce implementation of Clinical​Service​Request​.Type is picklist​. |
| category | Clinical​Service​Request​.Category​Id | Lookup: CodeSet​Bundle | 0​.1 | N/A |
| priority | Clinical​Service​Request​.Priority | Picklist | 0​.1 | While FH​IR defines service​Request​.priority as a code set bundle, the Salesforce implementation of Clinical​Service​Request​.Priority is picklist​. |
| doNot​Perform | Clinical​Service​Request​.​Is​Ignored | Boolean | 0​.1 | N/A |
| code | Clinical​Service​Request​.​Request​Code​Id | Lookup: CodeSet​Bundle | 0​.1 | N/A |
| order​Detail | N/A | N/A | N/A | Not Supported |
| quantity​.quantity​Quantity | Clinical​Service​Request​.Quantity​Numerator | Double | 0​.1 | Because Salesforce doesn’t support a native quantity data type, the implementation of service​Request​.quantity​.quantity​Quantity is flattened into a set of quantity and unit fields​. |
| Clinical​Service​Request​.Quantity​Numerator​Unit​Id | Lookup: UnitOf​Measure | 0​.1 |
| quantity​.quantity​Ratio | Clinical​Service​Request​.Quantity​Numerator | Double | 0​.1 | Because Salesforce doesn’t support a native ratio data type, the implementation of service​Request​.quantity​.quantity​Ratio is flattened into a set of numerator, denominator and unit fields​. |
| Clinical​Service​Request​.Quantity​Denominator | Double | 0​.1 |
| Clinical​Service​Request​.Quantity​Numerator​Unit​Id | Lookup: UnitOf​Measure | 0​.1 |
| Clinical​Service​Request​.Quantity​Type | PicklistValue: Ratio | 0​.1 | For service​Request​.quantity​.quantity​Ratio information, Clinical​Service​Request​.Quantity​Type must use the value Ratio​. |
| quantity​.quantity​Range | Clinical​Service​Request​.Quantity​Numerator | Double | 0​.1 | Because Salesforce doesn’t support a native range data type, the implementation of service​Request​.quantity​.quantity​Range is flattened into a set of numerator, denominator and unit fields​. |
| Clinical​Service​Request​.Quantity​Denominator | Double | 0​.1 |
| Clinical​Service​Request​.Quantity​Numerator​Unit​Id | Lookup: UnitOf​Measure | 0​.1 |
| Clinical​Service​Request​.Quantity​Type | PicklistValue: Range | 0​.1 | For service​Request​.quantity​.quantity​Range information, Clinical​Service​Request​.Quantity​Type must use the value Range​. |
| subject | Clinical​Service​Request​.Patient​Id | Master-​Detail Reference: Account | 1​.1 | Only references to patients are supported​. |
| encounter | Clinical​Service​Request​.Clinical​Encounter​Id | Lookup: Clinical​Encounter | 0​.1 | N/A |
| occurrence​.occurrence​Date​Time | Clinical​Service​Request​.Start​Date | ​Date​Time | 0​.1 | Clinical​Service​Request​.StartDate is used for both service​Request​.occurrence​.occurrence​Date​Time and service​Request​.occurrence​.occurrence​Period​. For the latter, the field is used to represent the start date of the period​. |
| occurrence​.occurrence​Period | Clinical​Service​Request​.Start​Date | ​Date​Time | 0​.1 | Because Salesforce doesn’t support a native period data type, the service​Request​.occurrence​.occurrence​Period is flattened into a set of start date and end date fields​. |
| Clinical​Service​Request​.End​Date | ​Date​Time | 0​.1 |
| occurrence​.occurrence​Timing | N/A | N/A | N/A | Not supported |
| asNeeded​.asNeeded​Boolean | Clinical​Service​Request​.Has​Prerequisites | Boolean | 0​.1 | N/A |
| asNeeded​.asNeeded​Codeable​Concept | Clinical​Service​Request​.Prerequisite​Code​Id | Lookup: CodeSet​Bundle | 0​.1 | 0​.1 |
| authored​On | Clinical​Service​Request​.Date​Signed | ​Date​Time | 0​.1 | N/A |
| requester | Clinical​Service​Request​.​Requester​Id | Polymorphic Lookup: Account, Asset, Care​Registered​Device, and Healthcare​Provider | 0​.1 | N/A |
| performer​Type | Clinical​Service​Request​.Performer​Type​Id | Lookup: CodeSet​Bundle | 0​.1 | N/A |
| performer | Clinical​Service​Request​.Performer​Id | Polymorphic Lookup: Account, Asset, Care​Registered​Device, and Healthcare​Provider | 0​.1 | References to care teams and healthcare services are not supported​.While FH​IR defines service​Request​.performer as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| location​Code | Clinical​Service​Request​.Facility​CodeId | Lookup: CodeSet​Bundle | 0​.1 | While FH​IR defines service​Request​.location​Code as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| location​Reference | Clinical​Service​Request​.Facility​Id | Lookup: Healthcare​Facility | 0​.1 | While FH​IR defines service​Request​.location​Reference as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| reason​Code | Clinical​Service​Request​.Reason​CodeId | Lookup: CodeSet​Bundle | 0​.1 | While FH​IR defines service​Request​.reason​Code as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| reason​Reference | Clinical​Service​Request​.Diagnostic​ReportId | Lookup: Diagnostic​Summary | 0​.1 | N/A |
| Clinical​Service​Request​.Condition​Id | Lookup: Health​Condition | 0​.1 | To support zero-to-many values, use the child object instead. |
| Clinical​Service​Request​.Observation​Id | Lookup: Care​Observation | 0​.1 | To support zero-to-many values, use the child object instead. |
| Clinical​Service​Request​Detail | Object | 0​.M | The records referencing the reasons for a service request are represented as Clinical​Service​Request​Detail records that reference the Clinical​Service​Request record using their Clinical​Service​Request​Detail​.Clinical​Service​Request​Id field​. |
| Clinical​Service​Request​Detail​.​Detail​Record​Id | Polymorphic Lookup: Health​Condition, Care​Observation, Diagnostic​Summary | 0​.1 | For service​Request​.reason​Reference information, Clinical​Service​Request​Detail​.​Detail​Record​Id must reference a Health​Condition or Care​Observation record​. |
| Clinical​Service​Request​Detail​.​Detail​Type | PicklistValue: Reason Reference | 0​.1 | For service​Request​.reason​Reference information, Clinical​Service​Request​Detail​.​Detail​Type must use the value Reason Reference​. |
| insurance | N/A | N/A | N/A | Not supported |
| supporting​Info | N/A | N/A | N/A | Not supported |
| specimen | N/A | N/A | N/A | Not supported |
| body​Site | Clinical​Service​Request​Detail | Object | 0​.M | The body site information of a service​Request is represented as Clinical​Service​Request​Detail records that reference the Clinical​Service​Request record using their Clinical​Service​Request​Detail​.Clinical​Service​Request​Id field​. |
| Clinical​Service​Request​Detail​.​Detail​CodeId | Polymorphic Lookup: CodeSet, CodeSet​Bundle | 0​.1 | For service​Request​.bodySite information, Clinical​Service​Request​Detail​.​Detail​CodeId must reference a CodeSet or CodeSet​Bundle record​. |
| Clinical​Service​Request​Detail​.​Detail​Type | PicklistValue: Body Site | 0​.1 | For service​Request​.bodySite information, Clinical​Service​Request​Detail​.​Detail​Type must use the value Body Site​. |
| Note | N/A | N/A | N/A | Not supported |
| patient​Instruction | Clinical​Service​Request​.Patient​Instruction | Text | 0​.1 | N/A |
| relevant​History | N/A | N/A | N/A | Not supported |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows how a service request for an x-ray for Charles is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_servicerequest.png&folder=health_cloud_object_reference)

#### See Also

-   [ClinicalServiceRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalServicerequest.htm "Represents requests for a procedure or diagnostic service that needs to be planned, proposed, or performed as part of the patient’s healthcare. This object is available in API version 51.0 and later.")

-   [ClinicalServiceRequestDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalServiceRequestDetail.htm "Associates records from different objects to a clinical service request record to add more information to it. This is a multi-object junction object. This object is available in API version 51.0 and later.")

## Related Topics

- ClinicalServiceRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalServicerequest.htm)
- ClinicalServiceRequestDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_ClinicalServiceRequestDetail.htm)
