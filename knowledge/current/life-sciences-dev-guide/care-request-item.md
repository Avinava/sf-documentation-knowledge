---
title: "Care Request Item"
domain: life-sciences-dev-guide
topic: care-request-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.695Z
estimatedTokens: 2426
keywords: [Care, Item, service, including, modifiers, effective, date, requests, associated]
---

# Care Request Item

> The details of a care service request, including name, modifiers,
      and the effective date. One or more care service requests can be associated with a care
      request.

# Care Request Item

The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated with a care request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approvedLength​OfStay | Integer | The number of days requested for the admission. Maps to: CareRequestItem.ApprovedLengthOfStay | Big, 52.0 | 52.0 |
| approvedLevel​OfCare | String | Specifies the approved level of care for the patient. Maps to: CareRequestItem.ApprovedLevelOfCare | Big, 52.0 | 52.0 |
| approvedQuantity | Integer | The approved quantity of the care item. Maps to: CareRequestItem.ApprovedQuantity | Big, 46.0 | 46.0 |
| approvedService​EndDate | String | The end date of the approved service that the patient received. Maps to: CareRequestItem.ApprovedServiceEndDate | Big, 52.0 | 52.0 |
| approvedService​StartDate | String | The start date of the approved service that the patient received. Maps to: CareRequestItem.ApprovedServiceStartDate | Big, 52.0 | 52.0 |
| authApproval​Identifier | String | The unique identifier assigned to the item on approval of the prior authorization request. Maps to: CareRequestItem.AuthApprovalIdentifier | Big, 57.0 | 57.0 |
| authorization​RefIdentifier | String | The unique identifier of the prior authorization request associated with this requested item. Maps to: CareRequestItem.AuthorizationRefIdentifier | Big, 57.0 | 57.0 |
| careRequest​Reviewers | Care Request Reviewer Output[] | The care request item associated with the care request reviewer. Maps to: CareRequestItem.CareRequestReviewers | Big, 52.0 | 52.0 |
| clinical​Determination | String | The clinical determination of the care request. Maps to: CareRequestItem.ClinicalDetermintation | Big, 52.0 | 52.0 |
| clinical​DeterminationNotes | String | The notes related to the clinical determination. Maps to: CareRequestItem.ClinicalDetermintationNotes | Big, 52.0 | 52.0 |
| clinical​DeterminationReason | String | The reason for the clinical determination. Maps to: CareRequestItem.ClinicalDetermintationReason | Big, 52.0 | 52.0 |
| clinicalService​RequestId | String | The clinical service request associated with the care request item. Maps to: CareRequestItem.ClinicalServiceRequest | Big, 57.0 | 57.0 |
| codeDescription | String | Description of the denied service code. Maps to: CareRequestItem.CodeDescription | Big, 46.0 | 46.0 |
| codeType | String | Code type for the service. Maps to: CareRequestItem.CodeType | Big, 46.0 | 46.0 |
| codeTypeId | String | ID of the code type for the service. Maps to: CareRequestItem.CodeTypeIdentifier | Big, 46.0 | 46.0 |
| cumulativeLength​OfStay | Integer | The number of days a patient is admitted. Maps to: CareRequestItem.CumulativeLengthOfStay | Big, 52.0 | 52.0 |
| currentLevel​OfCare | String | Specifies the level of care the patient is receiving. Maps to: CareRequestItem.CurrentLevelOfCare | Big, 52.0 | 52.0 |
| decisionDate | String | The date and time when the last decision was made for this care request item. Maps to: CareRequestItem.DecisionDate | Big, 52.0 | 52.0 |
| deniedLevel​OfCare | String | The level of care denied for the patient. Maps to: CareRequestItem.DeniedLevelOfCare | Big, 52.0 | 52.0 |
| deniedQuantity | Integer | The quantity of the denied service. Maps to: CareRequestItem.DeniedQuantity | Big, 46.0 | 46.0 |
| effectiveDate | String | Effective date for the diagnosis Maps to: CareRequestItem.EffectiveDate | Big, 46.0 | 46.0 |
| endDate | String | Termination date for the service. Maps to: CareRequestItem.EndDate | Big, 46.0 | 46.0 |
| freeForm​ProcedureDescription | String | Free-form description of the procedure. Maps to: CareRequestItem.FreeFormProcedureDescription | Big, 46.0 | 46.0 |
| healthcare​ProcedureCode | String | Healthcare Procedure Code. | Big, 46.0 | 46.0 |
| id | String | ID of the CareRequestItem. | Big, 46.0 | 46.0 |
| modifiedCare​EndDate | String | Modified Care End Date. | Big, 46.0 | 46.0 |
| modifiedCode | String | Modified Code. | Big, 46.0 | 46.0 |
| modifiedCode​Description | String | Description of the modified service code. Maps to: CareRequestItem.ModifiedCodeDescription | Big, 46.0 | 46.0 |
| modifiedCode​Type | String | Code type for the modified service. Maps to: CareRequestItem.ModifiedCodeType | Big, 46.0 | 46.0 |
| modifiedCode​TypeId | String | ID of the code type for the modified service. Maps to: CareRequestItem.ModifiedCodeTypeIdentifier | Big, 46.0 | 46.0 |
| modified​EffectiveDate | String | Effective date for the modified service. Maps to: CareRequestItem.ModifiedEffectiveDate | Big, 46.0 | 46.0 |
| modifiedLevel​OfCare | String | Specifies the modified level of care for the patient. Maps to: CareRequestItem.ModifiedLevelOfCare | Big, 52.0 | 52.0 |
| modifiedModifier | String | Modifier for modified service code. Maps to: CareRequestItem.ModifiedModifier | Big, 46.0 | 46.0 |
| modifiedModifier​Description | String | Modifier description for modified service code. Maps to: CareRequestItem.ModifiedModifierDescription | Big, 46.0 | 46.0 |
| modified​ProcedureCodeSet | String | The code set for the modified service, drug, or device associated with the care request item. Maps to: CareRequestItem.ModifiedProcedureCodeSet | Big, 52.0 | 52.0 |
| modifiedQuantity | Integer | The modified quantity of requested care. Maps to: CareRequestItem.ModifiedQuantity | Big, 46.0 | 46.0 |
| modifier1 | String | First modifier for the service code. Maps to: CareRequestItem.Modifier | Big, 46.0 | 46.0 |
| modifier1​Description | String | Description for the first modifier for the service code. Maps to: CareRequestItem.ModifierDescription | Big, 46.0 | 46.0 |
| modifier2 | String | Second modifier for service code. Maps to: CareRequestItem.Modifier2 | Big, 46.0 | 46.0 |
| modifier2​Description | String | Description of the second modifier for the service code. Maps to: CareRequestItem.Modifier2Description | Big, 46.0 | 46.0 |
| modifier3 | String | Third modifier for service code. Maps to: CareRequestItem.Modifier3 | Big, 46.0 | 46.0 |
| modifier3​Description | String | Description of the third modifier for the service code. Maps to: CareRequestItem.Modifier3Description | Big, 46.0 | 46.0 |
| modifier4 | String | Fourth modifier for service code. Maps to: CareRequestItem.Modifier4 | Big, 46.0 | 46.0 |
| modifier4​Description | String | Description of the fourth modifier for the service code. Maps to: CareRequestItem.Modifier4Description | Big, 46.0 | 46.0 |
| modifierCode​Set | String | The modifier code set for the service code associated with the care request item. Maps to CareRequestItem.ModifierCodeSet | Big, 52.0 | 52.0 |
| name | String | Name of the care request item. Maps to CareRequestItem.Name | Big, 46.0 | 46.0 |
| priority | String | The priority representing the urgency of the item's authorization request. Maps to CareRequestItem.Priority | Big, 57.0 | 57.0 |
| procedureCode​Set | String | The code set for the service, drug, or device associated with the care request item. Maps to CareRequestItem.ProcedureCodeSet | Big, 52.0 | 52.0 |
| quantity | Integer | The quantity of the item that is requested. Maps to: CareRequestItem.Quantity | Big, 46.0 | 46.0 |
| quantityType | String | Quantity type for the request such as days, units, or visits. Maps to: CareRequestItem.QualityType | Big, 46.0 | 46.0 |
| serviceCategory | String | Name of the service type such as medical care, diagnostic radiology, pharmacy, or diagnostic laboratory. Maps to: CareRequestItem.ServiceCategory | Big, 46.0 | 46.0 |
| reasonCode | String | The reason justifying the care request of the item. Maps to: CareRequestItem.ReasonCode | Big, 57.0 | 57.0 |
| requestType | String | The type of item request. Maps to: CareRequestItem.RequestType | Big, 57.0 | 57.0 |
| requestedLength​OfStay | Integer | The number of days requested for the admission. Maps to: CareRequestItem.RequestedLengthOfStay | Big, 52.0 | 52.0 |
| requestedLevel​OfCare | String | Specifies the requested level of care for the patient. Maps to: CareRequestItem.RequestedLevelOfCare | Big, 52.0 | 52.0 |
| requested​ServiceEndDate | String | The end date of the requested service. Maps to: CareRequestItem.RequestedServiceEndDate | Big, 52.0 | 52.0 |
| requested​ServiceStartDate | String | The start date of the requested service. Maps to: CareRequestItem.RequestedServiceStartDate | Big, 52.0 | 52.0 |
| serviceCategory​Code | String | Alphanumeric code that uniquely identifies a service type. Maps to: CareRequestItem.ServiceCategoryCode | Big, 46.0 | 46.0 |
| servicingFacility | Servicing Facility Output | The facility where a patient receives service of the requested item. Maps to: CareRequestItem.ServicingFacility | Big, 57.0 | 57.0 |
| servicingProvider | Servicing Practitioner Output | The healthcare provider who provides the service of the requested item. Maps to: CareRequestItem.ServicingProvider | Big, 57.0 | 57.0 |
| sourceSystem | String | System from which the request was sourced. Maps to: CareRequestItem.SourceSystem | Big, 46.0 | 46.0 |
| sourceSystem​Identifier | String | ID of the system from which the request was sourced. Maps to: CareRequestItem.SourceSystemIdentifier | Big, 46.0 | 46.0 |
| sourceSystem​Modified | String | Timestamp of the most recent update from the source system. Maps to: CareRequestItem.SourceSystemModified | Big, 46.0 | 46.0 |
| status | String | The authorization status of this service. Maps to: CareRequestItem.Status | Big, 46.0 | 46.0 |
| statusReason | String | Reason for the authorization status of this service. Maps to: CareRequestItem.StatusReason | Big, 46.0 | 46.0 |

## Related Topics

- Care Request
                  Reviewer Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_request_reviewer_output.htm)
- Servicing Facility Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_servicing_facility_output.htm)
- Servicing Practitioner Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_servicing_practitioner_output.htm)
