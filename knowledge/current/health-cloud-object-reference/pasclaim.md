---
title: "PASClaim"
domain: health-cloud-object-reference
topic: pasclaim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.561Z
estimatedTokens: 1167
keywords: [PASClaim, FHIR, resource, maps, CareDiagnosis, CareRequest, CareRequestDrug, CareRequestItem, CareRequestReviewer, Identifier, obejcts, V4.0, Utilization, Management, Data]
---

# PASClaim

> The PASClaim FHIR resource maps to the
      CareDiagnosis, CareRequest,
      CareRequestDrug, CareRequestItem,
      CareRequestReviewer, and Identifier obejcts.

# PASClaim

The PASClaim FHIR resource maps to the CareDiagnosis, CareRequest, CareRequestDrug, CareRequestItem, CareRequestReviewer, and Identifier obejcts.

## FHIR V4.0 - Utilization Management Data Model Mapping

Here’s how the fields defined by FHIR for [PASClaim](https://build.fhir.org/ig/HL7/davinci-pas/StructureDefinition-profile-claim.html) map to the fields in Salesforce.

| PASCLAIM element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0.M | The identifier information for a PAS claim is represented as Identifier records that reference the CareRequestItem and CareRequestDrug record using their Identifier​.Parent​RecordId field. |
| related | CareRequest. ReferenceCareRequestCase | Lookup: Case | 0.1 | N/A |
| diagnosis | CareDiagnosis | Object | 0.M | N/A |
| item.requestType | CareRequestItem.RequestType | Picklist | 0.1 | N/A |
| item.productOrService | CareRequestItem.ProcedureCodeSetId | Lookup: Code Set | N/A | N/A |
| item.modifier | CareRequestItem.Modifier | String | 0.1 | N/A |
| item.servicedPeriod | CareRequestItem.RequestedServiceStartDate | Date | 0.1 | Since Salesforce doesn’t natively support the period data type, item.servicedPeriod is flattened into a set of rquested service start date and requested service end date fields. |
| CareRequestItem.RequestedServiceEndDate | Date​ | 0.1 |
| item.extension-itemPreAuthIssueDate | CareRequestItem.DecisionDate | Date | 0.1 | N/A |
| item.location[x]:locationCodeableConcept | CareRequestItem.ServicingFacility | Look​up: Servicing Facility | 0.1 | While FHIR defines item.location[x]:locationCodeableConcept as a codeable concept, the Salesforce implementation is a lookup to the Servicing Facility object. |
| Item.extension-requestedService.ServiceRequest.performer | CareRequestItem.ServicingProvider | Lookup: Healthcare Provider | 0.1 | Since Salesforce doesn’t natively support the period data type, CommunicationRequest.​occurrence is flattened into a set of occurrence start date time and occurrence end date time fields. |
| item.extension-requestedService.ServiceRequest.identifier | CareRequestItem.Identifier | Object | 0.M | N/A |
| item.extension-requestedService.ServiceRequest.category | CareRequestItem.ServiceCategoryCode | String | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.status | CareRequestItem.Status | Picklist | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.priority | CareRequestItem.Priority | Picklist | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.code | CareRequestItem.ProcedureCodesetId | Lookup: Code Set | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.quantity[x] | CareRequestItem.Quantity | Number | 0.1 | N/A |
| CareRequestItem.UnitOfMeasure | Lookup: Unit of Measure | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.occurrence[x] | CareRequestItem.RequestedServiceStartDate | Date | 0.1 | N/A |
| CareRequestItem.RequestedServiceEndDate | Date | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.authoredOn | CareRequestItem.DecisionDate | Date | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.reasonCode | CareRequestItem.ReasonCode | Lookup: Code Set | 0.1 | N/A |
| item.extension-requestedService.ServiceRequest.note | CareRequestReviewer | Object | 0.M | N/A |
| item.extension-authorizationNumber | CareRequestDrug.AuthApprovalIdentifier | String | 0.1 | N/A |
| item.extension-administrationReferenceNumber | CareRequestDrug.AuthorizationReIdentifier | String | 0.1 | N/A |
| item.location[x]:locationCodeableConcept | CareRequestDrug.ServicingFacility | Lookup: Servicing Facility | 0.1 | N/A |
| Item.extension-requestedService.ServiceRequest.performer | CareRequestDrug.ServicingProvider | Lookup: Healthcare Provider | 0.1 | N/A |
| MedicationRequest.Identifier | Identifier | Object | 0.M | N/A |
| MedicationRequest.status | CareRequestDrug.Status | Picklist | 0.1 | N/A |
| MedicationRequest.statusReason | CareRequestDrug.StatusReason | Picklist | 0.1 | N/A |
| MedicationRequest.intent | CareRequestDrug.RequestType | Picklist | 0.1 | N/A |
| MedicationRequest.category | CareRequestDrug.DrugAdministrationSetting | String | 0.1 | N/A |
| MedicationRequest.priority | CareRequestDrug.Priority | Picklist | 0.1 | N/A |
| MedicationRequest.medication[x] | CareRequestDrug.MedicationRefObjectId | Lookup: Medication Request | 0.1 | N/A |
| MedicationRequest.authoredOn | CareRequestDrug.PrescriptionDate | Date | 0.1 | N/A |
| MedicationRequest.reasonCode | CareRequestDrug.CinicalDeterminationReasonId | Lookup: Code est | 0.1 | N/A |
