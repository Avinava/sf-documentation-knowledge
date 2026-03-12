---
title: "Care Request Drug Input"
domain: life-sciences-dev-guide
topic: care-request-drug-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.154Z
estimatedTokens: 1920
keywords: [Care, Drug, Input, Requested, including, strength, frequency, instructions, administration, requests, associated]
---

# Care Request Drug Input

> Requested drug including name, strength, frequency, and instructions
      for administration. One or more drug requests can be associated with a care
    request.

# Care Request Drug Input

Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.

Root XML tag

<careRequestDrug>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| approvedUnits | Integer | Approved quantity of the drug. Maps to: CareRequestDrug.ApprovedUnits | No | 46.0 |
| AssertionIdentifier | String | The unique identifier of the coverage assertion. This is unavailable for PATCH requests. | No | 63.0 |
| authApproval​Identifier | String | The unique identifier assigned to the drug on approval of the authorization request. Maps to: CareRequestDrug.AuthApprovalIdentifier | No | 57.0 |
| authorization​RefIdentifier | String | The unique identifier of the authorization request associated with this requested drug. Maps to: CareRequestDrug.AuthorizationRefIdentifier | No | 57.0 |
| careRequest​Reviewers | Care Request Reviewer Input | The care request drug associated with the care request reviewer. Maps to: CareRequestDrug.CareRequestReviewers | No | 52.0 |
| clinical​Determination | String | The clinical determination of the drug request. Maps to: CareRequestDrug.ClinicalDetermination | No | 52.0 |
| clinical​DeterminationNote | String | The notes related to the clinical determination. Maps to: CareRequestDrug.ClinicalDeterminationNote | No | 52.0 |
| clinical​DeterminationReason | String | The reason for the clinical determination. Maps to: CareRequestDrug.ClinicalDeterminationReason | No | 52.0 |
| code | String | Code for the drug. Maps to: CareRequestDrug.Code | No | 46.0 |
| codeType | String | ID code type for the drug. Maps to: CareRequestDrug.CodeType | No | 46.0 |
| daysSupply | Integer | Number of days to supply the drug. Maps to: CareRequestDrug.DaysSupply | No | 46.0 |
| decisionDate | String | The date and time when the decision was made for this drug request. Maps to: CareRequestDrug.DecisionDate | No | 52.0 |
| deniedUnits | Integer | Denied quantity of the drug. Maps to: CareRequestDrug.DeniedUnits | No | 46.0 |
| dispenser​Address | Dispenser Address Input | Pharmacy address. | No | 46.0 |
| dispenserFax​Number | String | Pharmacy fax number. Maps to: CareRequestDrug.DispenserFaxNumber | No | 46.0 |
| dispenserId | String | ID for the pharmacy. Maps to: CareRequestDrug.DispenserIdentifier | No | 46.0 |
| dispenserName | String | Name of the pharmacy. Maps to: CareRequestDrug.DispenserName | No | 46.0 |
| dispenserPhone​Number | String | Pharmacy phone number. Maps to: CareRequestDrug.DispenserPhoneNumber | No | 46.0 |
| dispenserTaxId | String | Pharmacy tax identification number. Maps to: CareRequestDrug.DispenserTaxIdentifier | No | 46.0 |
| dispensingPharmacy | String | The pharmacy that dispenses the drug. Maps to: CareRequestDrug.DispensingPharmacy | No | 52.0 |
| dose | String | Dose of the drug. Maps to: CareRequestDrug.Dose | No | 46.0 |
| drugAdministra​tionSetting | String | The setting in which the drug is expected to be administered to the patient. Maps to: CareRequestDrug.DrugAdministrationSetting | No | 57.0 |
| frequency | String | Frequency of the drug. Maps to: CareRequestDrug.Frequency | No | 46.0 |
| medicationCode | String | The code of the care request drug. Maps to: CareRequestDrug.MedicationCode | No | 52.0 |
| id | String | ID of the Care Request Drug. | Required for PATCH. | 46.0 |
| modifiedCode | String | Code for the modified drug. Maps to: CareRequestDrug.ModifiedCode | No | 46.0 |
| modifiedCode​Type | String | ID code type for the modified drug. Maps to: CareRequestDrug.ModifiedCodeType | No | 46.0 |
| medicationRef​ObjectId | String | The medication request or statement associated with the care request drug. | No | 57.0 |
| modifiedDays​Supply | Integer | Number of days of supply for the modified drug. Maps to: CareRequestDrug.ModifiedDaysSupply | No | 46.0 |
| modifiedDose | String | Dose of the modified drug. Maps to: CareRequestDrug.ModifiedDose | No | 46.0 |
| modified​Frequency | String | Frequency of the modified drug. Maps to: CareRequestDrug.ModifiedFrequency | No | 46.0 |
| modifiedName | String | Name of the modified drug. Maps to: CareRequestDrug.ModifiedName | No | 46.0 |
| modifiedSig | String | Directions for use of the modified drug. Maps to: CareRequestDrug.ModifiedSig | No | 46.0 |
| modifiedStrength | String | Strength of the modified drug. Maps to: CareRequestDrug.ModifiedStrength | No | 46.0 |
| modifiedTherapy​Duration | Integer | Duration of therapy for the modified drug. Maps to: CareRequestDrug.ModifiedTherapyDuration | No | 46.0 |
| modifiedUnits | Integer | Modified quantity of the drug. Maps to: CareRequestDrug.ModifiedUnits | No | 46.0 |
| name | String | Name of the drug. Maps to: CareRequestDrug.Name | No | 46.0 |
| prescription​Date | String | Date for the prescription. Maps to: CareRequestDrug.PrescriptionDate | No | 46.0 |
| prescription​FillDate | String | Date of fills for the prescription. Maps to: CareRequestDrug.PrescriptionFillDate | No | 57.0 |
| prescriptionFills | Integer | Number of fills for the prescription. Maps to: CareRequestDrug.PrescriptionFills | No | 46.0 |
| priority | String | The priority representing the urgency of the drug's authorization request. Maps to: CareRequestDrug.Priority | No | 57.0 |
| requestType | String | The type of drug request. Maps to: CareRequestDrug.RequestType | No | 57.0 |
| responseDateTime | String | The date and time when the response was sent for the drug request. This is unavailable for PATCH requests. | No | 63.0 |
| serviceCategory | String | Name of the service type such as medical care, diagnostic radiology, pharmacy, or diagnostic laboratory. Maps to: CareRequestDrug.ServiceCategory | No | 46.0 |
| serviceCategory​Code | String | Alphanumeric code that uniquely identifies a service type. Maps to: CareRequestDrug.ServiceCategoryCode | No | 46.0 |
| servicingFacility | Servicing Facility Input | The facility where a patient receives service of the requested drug. Maps to: CareRequestDrug.ServicingFacility | No | 57.0 |
| servicingProvider | Servicing Practitioner Input | The healthcare provider who provides the service of the requested drug. Maps to: CareRequestDrug.ServicingProvider | No | 57.0 |
| sig | String | Directions for use of the drug. Maps to: CareRequestDrug.Sig | No | 46.0 |
| sourceSystem | String | System from which this request was sourced. Maps to: CareRequestDrug.SourceSystem | No | 46.0 |
| sourceSystem​Identifier | String | ID of the system from which the request was sourced. Maps to: CareRequestDrug.SourceSystemIdentifier | No | 46.0 |
| sourceSystem​Modified | String | Timestamp of the most recent update from the source system. Maps to: CareRequestDrug.SourceSystemModified | No | 46.0 |
| status | String | The authorization status of the requested drug. Maps to: CareRequestDrug.Status | No | 57.0 |
| statusReason | String | The reason for the authorization status of the requested drug. Maps to: CareRequestDrug.StatusReason | No | 57.0 |
| strength | String | Strength of the drug. Maps to: CareRequestDrug.Strength | No | 46.0 |
| submittedDateTime | String | The date and time when the drug request was submitted. This is unavailable for PATCH requests. | No | 63.0 |
| therapyDuration | Integer | Duration of therapy for the drug. Maps to: CareRequestDrug.TherapyDuration | No | 46.0 |
| transactioNumber | Integer | The transaction number assigned to the drug request. This is unavailable with PATCH requests. | No | 63.0 |
| units | Integer | Quantity of the drug. Maps to: CareRequestDrug.Units | No | 46.0 |

## Code Examples

```
{
		"sourceSystem": "source_system_name",
		"daysSupply": "10",
		"frequency": "16",
		"name": "Metoprolol"
		}
```

## Related Topics

- Care
                        Request Reviewer Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_care_request_reviewer_input.htm)
- Dispenser Address Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_dispenser_address_input.htm)
- Servicing Facility Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_servicing_facility_input.htm)
- Servicing Practitioner Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_servicing_practitioner_input.htm)
