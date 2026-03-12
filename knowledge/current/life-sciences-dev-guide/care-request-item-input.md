---
title: "Care Request Item Input"
domain: life-sciences-dev-guide
topic: care-request-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.218Z
estimatedTokens: 2481
keywords: [Care, Item, Input, service, including, modifiers, effective, date, requests, associated]
---

# Care Request Item Input

> The details of a care service request, including name, modifiers,
      and the effective date. One or more care service requests can be associated with a care
      request.

# Care Request Item Input

The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.

Root XML tag

<careRequestItem>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| approvedLength​OfStay | Integer | The number of days requested for the admission. Maps to: CareRequestItem.ApprovedLengthOfStay | No | 52.0 |
| approvedLevel​OfCare | Integer | Specifies the approved level of care for the patient. Maps to: CareRequestItem.ApprovedLevelOfCare | No | 52.0 |
| approvedQuantity | Integer | The approved quantity of the care item. Maps to: CareRequestItem.ApprovedQuantity | No | 46.0 |
| approvedService​EndDate | String | The end date of the approved service that the patient received. Maps to: CareRequestItem.ApprovedServiceEndDate | No | 52.0 |
| approvedService​StartDate | String | The start date of the approved service that the patient received. Maps to: CareRequestItem.ApprovedServiceStartDate | No | 52.0 |
| AssertionIdentifier | String | The unique identifier of the coverage assertion. This is unavailable for PATCH requests. | No | 63.0 |
| authApproval​Identifier | String | The unique identifier assigned to the item on approval of the prior authorization request. Maps to: CareRequestItem.AuthApprovalIdentifier | No | 57.0 |
| authorization​RefIdentifier | String | The unique identifier of the prior authorization request associated with this requested item. Maps to: CareRequestItem.AuthorizationRefIdentifier | No | 57.0 |
| careRequest​Reviewers | Care Request Reviewer Input | The care request item associated with the care request reviewer. Maps to: CareRequestItem.CareRequestReviewers | No | 52.0 |
| clinical​Determination | String | The clinical determination of the care request. Maps to: CareRequestItem.ClinicalDetermintation | No | 52.0 |
| clinical​DeterminationNotes | String | The notes related to the clinical determination. Maps to: CareRequestItem.ClinicalDetermintationNotes | No | 52.0 |
| clinical​DeterminationReason | String | The reason for the clinical determination. Maps to: CareRequestItem.ClinicalDetermintationReason | No | 52.0 |
| clinicalService​RequestId | String | The clinical service request associated with the care request item. Maps to: CareRequestItem.ClinicalServiceRequest | No | 57.0 |
| code | String | ID of the service code. Maps to: CareRequestItem.Name | No | 46.0 |
| codeDescription | String | Description of the denied service code. Maps to: CareRequestItem.CodeDescription | No | 46.0 |
| codeType | String | Code type for the service. Maps to: CareRequestItem.CodeType | No | 46.0 |
| codeTypeId | String | ID of the code type for the service. Maps to: CareRequestItem.CodeTypeIdentifier | No | 46.0 |
| cumulativeLength​OfStay | Integer | The number of days a patient is admitted. Maps to: CareRequestItem.CumulativeLengthOfStay | No | 52.0 |
| currentLevel​OfCare | String | Specifies the level of care the patient is receiving. Maps to: CareRequestItem.CurrentLevelOfCare | No | 52.0 |
| decisionDate | String | The date and time when the last decision was made for this care request item. Maps to: CareRequestItem.DecisionDate | No | 52.0 |
| deniedLevel​OfCare | String | The level of care denied for the patient. Maps to: CareRequestItem.DeniedLevelOfCare | No | 52.0 |
| deniedQuantity | Integer | The quantity of the denied service. Maps to: CareRequestItem.DeniedQuantity | No | 46.0 |
| effectiveDate | String | Effective date for the diagnosis Maps to: CareRequestItem.EffectiveDate | No | 46.0 |
| endDate | String | Termination date for the service. Maps to: CareRequestItem.EndDate | No | 46.0 |
| freeFormProcedure​Description | String | Free-form description of the procedure. Maps to: CareRequestItem.FreeFormProcedureDescription | No | 46.0 |
| healthcare​ProcedureCode | String | Healthcare Procedure Code. | No | 46.0 |
| id | String | ID of the CareRequestItem. | Required for PATCH. | 46.0 |
| modifiedCare​EndDate | String | Modified Care End Date | No | 46.0 |
| modifiedCode | String | Modified Code | No | 46.0 |
| modifiedCode​Description | String | Description of the modified service code. Maps to: CareRequestItem.ModifiedCodeDescription | No | 46.0 |
| modifiedCode​Type | String | Code type for the modified service. Maps to: CareRequestItem.ModifiedCodeType | No | 46.0 |
| modifiedCode​TypeId | String | ID of the code type for the modified service. Maps to: CareRequestItem.ModifiedCodeTypeIdentifier | No | 46.0 |
| modified​EffectiveDate | String | Effective date for the modified service. Maps to: CareRequestItem.ModifiedEffectiveDate | No | 46.0 |
| modifiedLevel​OfCare | String | Specifies the modified level of care for the patient. Maps to: CareRequestItem.ModifiedLevelOfCare | No | 52.0 |
| modifiedModifier | String | Modifier for modified service code. Maps to: CareRequestItem.ModifiedModifier | No | 46.0 |
| modifiedModifier​Description | String | Modifier description for modified service code. Maps to: CareRequestItem.ModifiedModifierDescription | No | 46.0 |
| modifiedProcedure​CodeSet | String | The code set for the modified service, drug, or device associated with the care request item. Maps to: CareRequestItem.ModifiedProcedureCodeSet | No | 52.0 |
| modifiedQuantity | Integer | The modified quantity of requested care. Maps to: CareRequestItem.ModifiedQuantity | No | 46.0 |
| modifier1 | String | First modifier for the service code. Maps to: CareRequestItem.Modifier | No | 46.0 |
| modifier1​Description | String | Description for the first modifier for the service code. Maps to: CareRequestItem.ModifierDescription | No | 46.0 |
| modifier2 | String | Second modifier for service code. Maps to: CareRequestItem.Modifier2 | No | 46.0 |
| modifier2​Description | String | Description of the second modifier for the service code. Maps to: CareRequestItem.Modifier2Description | No | 46.0 |
| modifier3 | String | Third modifier for service code. Maps to: CareRequestItem.Modifier3 | No | 46.0 |
| modifier3​Description | String | Description of the third modifier for the service code. Maps to: CareRequestItem.Modifier3Description | No | 46.0 |
| modifier4 | String | Fourth modifier for service code. Maps to: CareRequestItem.Modifier4 | No | 46.0 |
| modifier4​Description | String | Description of the fourth modifier for the service code. Maps to: CareRequestItem.Modifier4Description | No | 46.0 |
| modifierCodeSet | String | The modifier code set for the service code associated with the care request item. Maps to CareRequestItem.ModifierCodeSet | No | 52.0 |
| name | String | Name of the care request item. Maps to CareRequestItem.Name | No | 46.0 |
| priority | String | The priority representing the urgency of the item's authorization request. Maps to CareRequestItem.Priority | No | 57.0 |
| procedureCodeSet | String | The code set for the service, drug, or device associated with the care request item. Maps to CareRequestItem.ProcedureCodeSet | No | 52.0 |
| quantity | Integer | The quantity of the item that is requested. Maps to: CareRequestItem.Quantity | No | 46.0 |
| quantityType | String | Quantity type for the request such as days, units, or visits. Maps to: CareRequestItem.QualityType | No | 46.0 |
| reasonCode | String | The reason justifying the care request of the item. Maps to: CareRequestItem.ReasonCode | No | 57.0 |
| requestType | String | The type of item request. Maps to: CareRequestItem.RequestType | No | 57.0 |
| requestedLength​OfStay | Integer | The number of days requested for the admission. Maps to: CareRequestItem.RequestedLengthOfStay | No | 52.0 |
| requestedLevel​OfCare | String | Specifies the requested level of care for the patient. Maps to: CareRequestItem.RequestedLevelOfCare | No | 52.0 |
| requestedService​EndDate | String | The end date of the requested service. Maps to: CareRequestItem.RequestedServiceEndDate | No | 52.0 |
| requestedService​StartDate | String | The start date of the requested service. Maps to: CareRequestItem.RequestedServiceStartDate | No | 52.0 |
| responseDateTime | String | The date and time when the response was sent for the drug request. | No | 63.0 |
| serviceCategory | String | Name of the service type such as medical care, diagnostic radiology, pharmacy, or diagnostic laboratory. Maps to: CareRequestItem.ServiceCategory | No | 46.0 |
| serviceCategory​Code | String | Alphanumeric code that uniquely identifies a service type. Maps to: CareRequestItem.ServiceCategoryCode | No | 46.0 |
| servicingFacility | Servicing Facility Input | The facility where a patient receives service of the requested item. Maps to: CareRequestItem.ServicingFacility | No | 57.0 |
| servicingProvider | Servicing Practitioner Input | The healthcare provider who provides the service of the requested item. Maps to: CareRequestItem.ServicingProvider | No | 57.0 |
| sourceSystem | String | System from which the request was sourced. Maps to: CareRequestItem.SourceSystem | No | 46.0 |
| sourceSystem​Identifier | String | ID of the system from which the request was sourced. Maps to: CareRequestItem.SourceSystemIdentifier | No | 46.0 |
| sourceSystem​Modified | String | Timestamp of the most recent update from the source system. Maps to: CareRequestItem.SourceSystemModified | No | 46.0 |
| status | String | The authorization status of this service. Maps to: CareRequestItem.Status | No | 46.0 |
| statusReason | String | Reason for the authorization status of this service. Maps to: CareRequestItem.StatusReason | No | 46.0 |
| submittedDateTime | String | The date and time when the drug request was submitted. This is unavailable for PATCH requests. | Yes | 63.0 |
| transactionNumber | Integer | The transaction number assigned to the drug request. This is unavailable for PATCH requests. | No | 63.0 |

## Code Examples

```
{
	"name": "95810",
	"codeType": "CPT",
	"sourceSystem": "source_system_name",
	"codeDescription": "Dysuria",
	"sourceSystemIdentifier": "0015cmi",
	"quantity": "15"
	}
```

## Related Topics

- Care
                        Request Reviewer Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_care_request_reviewer_input.htm)
- Servicing Facility Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_servicing_facility_input.htm)
- Servicing Practitioner Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_servicing_practitioner_input.htm)
