---
title: "Care Request Drug"
domain: life-sciences-dev-guide
topic: care-request-drug
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.676Z
estimatedTokens: 1757
keywords: [Care, Drug, Requested, including, strength, frequency, instructions, administration, requests, associated]
---

# Care Request Drug

> Requested drug including name, strength, frequency, and instructions
      for administration. One or more drug requests can be associated with a care
    request.

# Care Request Drug

Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approvedUnits | Integer | Approved quantity of the drug. Maps to: CareRequestDrug.ApprovedUnits | Big, 46.0 | 46.0 |
| authApproval​Identifier | String | The unique identifier assigned to the drug on approval of the authorization request. Maps to: CareRequestDrug.AuthApprovalIdentifier | Big, 57.0 | 57.0 |
| authorization​RefIdentifier | String | The unique identifier of the authorization request associated with this requested drug. Maps to: CareRequestDrug.AuthorizationRefIdentifier | Big, 57.0 | 57.0 |
| careRequest​Reviewers | Care Request Reviewer Output[] | The care request drug associated with the care request reviewer. Maps to: CareRequestDrug.CareRequestReviewers | Big, 52.0 | 52.0 |
| clinical​Determination | String | The clinical determination of the drug request. Maps to: CareRequestDrug.ClinicalDetermination | Big, 52.0 | 52.0 |
| clinical​DeterminationNote | String | The notes related to the clinical determination. Maps to: CareRequestDrug.ClinicalDeterminationNote | Big, 52.0 | 52.0 |
| clinical​DeterminationReason | String | The reason for the clinical determination. Maps to: CareRequestDrug.ClinicalDeterminationReason | Big, 52.0 | 52.0 |
| code | String | Code for the drug. Maps to: CareRequestDrug.Code | Big, 46.0 | 46.0 |
| codeType | String | ID code type for the drug. Maps to: CareRequestDrug.CodeType | Big, 46.0 | 46.0 |
| daysSupply | Integer | Number of days to supply the drug. Maps to: CareRequestDrug.DaysSupply | Big, 46.0 | 46.0 |
| deniedUnits | Integer | Denied quantity of the drug. Maps to: CareRequestDrug.DeniedUnits | Big, 46.0 | 46.0 |
| dispenserAddress | Dispenser Address | Pharmacy address. | Big, 46.0 | 46.0 |
| dispenserFax​Number | String | Pharmacy fax number. Maps to: CareRequestDrug.DispenserFaxNumber | Big, 46.0 | 46.0 |
| dispenserId | String | ID for the pharmacy. Maps to: CareRequestDrug.DispenserIdentifier | Big, 46.0 | 46.0 |
| dispenserName | String | Name of the pharmacy. Maps to: CareRequestDrug.DispenserName | Big, 46.0 | 46.0 |
| dispenserPhone​Number | String | Pharmacy phone number. Maps to: CareRequestDrug.DispenserPhoneNumber | Big, 46.0 | 46.0 |
| dispenserTaxId | String | Pharmacy tax identification number. Maps to: CareRequestDrug.DispenserTaxIdentifier | Big, 46.0 | 46.0 |
| dose | String | Dose of the drug. Maps to: CareRequestDrug.Dose | Big, 46.0 | 46.0 |
| drugAdministration​Setting | String | The setting in which the drug is expected to be administered to the patient. Maps to: CareRequestDrug.DrugAdministrationSetting | Big, 57.0 | 57.0 |
| frequency | String | Frequency of the drug. Maps to: CareRequestDrug.Frequency | Big, 46.0 | 46.0 |
| id | String | Id | Big, 46.0 | 46.0 |
| modifiedCode | String | Code for the modified drug. Maps to: CareRequestDrug.ModifiedCode | Big, 46.0 | 46.0 |
| medicationRef​ObjectId | String | The medication request or statement associated with the care request drug. Maps to: CareRequestDrug.MedicationRefObject | Big, 57.0 | 57.0 |
| modifiedCode​Type | String | ID code type for the modified drug. Maps to: CareRequestDrug.ModifiedCodeType | Big, 46.0 | 46.0 |
| modifiedDays​Supply | Integer | Number of days of supply for the modified drug. Maps to: CareRequestDrug.ModifiedDaysSupply | Big, 46.0 | 46.0 |
| modifiedDose | String | Dose of the modified drug. Maps to: CareRequestDrug.ModifiedDose | Big, 46.0 | 46.0 |
| modifiedFrequency | String | Frequency of the modified drug. Maps to: CareRequestDrug.ModifiedFrequency | Big, 46.0 | 46.0 |
| modifiedName | String | Name of the modified drug. Maps to: CareRequestDrug.ModifiedName | Big, 46.0 | 46.0 |
| modifiedSig | String | Directions for use of the modified drug. Maps to: CareRequestDrug.ModifiedSig | Big, 46.0 | 46.0 |
| modifiedStrength | String | Strength of the modified drug. Maps to: CareRequestDrug.ModifiedStrength | Big, 46.0 | 46.0 |
| modifiedTherapy​Duration | Integer | Duration of therapy for the modified drug. Maps to: CareRequestDrug.ModifiedTherapyDuration | Big, 46.0 | 46.0 |
| modifiedUnits | Integer | Modified quantity of the drug. Maps to: CareRequestDrug.ModifiedUnits | Big, 46.0 | 46.0 |
| name | String | Name of the drug. Maps to: CareRequestDrug.Name | Big, 46.0 | 46.0 |
| prescriptionDate | String | Date for the prescription. Maps to: CareRequestDrug.PrescriptionDate | Big, 46.0 | 46.0 |
| prescription​FillDate | String | Date for the prescription fills. Maps to: CareRequestDrug.PrescriptionFillDate | Big, 57.0 | 57.0 |
| prescriptionFills | Integer | Number of fills for the prescription. Maps to: CareRequestDrug.PrescriptionFills | Big, 46.0 | 46.0 |
| priority | String | The priority representing the urgency of the drug's authorization request. Maps to: CareRequestDrug.Priority | Big, 57.0 | 57.0 |
| requestType | String | The type of drug request. Maps to: CareRequestDrug.RequestType | Big, 57.0 | 57.0 |
| serviceCategory | String | Name of the service type such as medical care, diagnostic radiology, pharmacy, or diagnostic laboratory. Maps to: CareRequestDrug.ServiceCategory | Big, 46.0 | 46.0 |
| serviceCategory​Code | String | Alphanumeric code that uniquely identifies a service type. Maps to: CareRequestDrug.ServiceCategoryCode | Big, 46.0 | 46.0 |
| servicingFacility | Servicing Facility Output | The facility where a patient receives service of the requested drug. Maps to: CareRequestDrug.ServicingFacility | Big, 57.0 | 57.0 |
| servicingProvider | Servicing Practitioner Output | The healthcare provider who provides the service of the requested drug. Maps to: CareRequestDrug.ServicingProvider | Big, 57.0 | 57.0 |
| sig | String | Directions for use of the drug. Maps to: CareRequestDrug.Sig | Big, 46.0 | 46.0 |
| sourceSystem | String | System from which this request was sourced. Maps to: CareRequestDrug.SourceSystem | Big, 46.0 | 46.0 |
| sourceSystem​Identifier | String | ID of the system from which the request was sourced. Maps to: CareRequestDrug.SourceSystemIdentifier | Big, 46.0 | 46.0 |
| sourceSystem​Modified | String | Timestamp of the most recent update from the source system. Maps to: CareRequestDrug.SourceSystemModified | Big, 46.0 | 46.0 |
| status | String | The authorization status of the requested drug. Maps to: CareRequestDrug.Status | Big, 57.0 | 57.0 |
| statusReason | String | The reason for the authorization status of the requested drug. Maps to: CareRequestDrug.StatusReason | Big, 57.0 | 57.0 |
| strength | String | Strength of the drug. Maps to: CareRequestDrug.Strength | Big, 46.0 | 46.0 |
| therapyDuration | Integer | Duration of therapy for the drug. Maps to: CareRequestDrug.TherapyDuration | Big, 46.0 | 46.0 |
| units | Integer | Quantity of the drug. Maps to: CareRequestDrug.Units | Big, 46.0 | 46.0 |

## Related Topics

- Care Request Reviewer Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_care_request_reviewer_output.htm)
- Dispenser
                Address (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_dispenser_address_output.htm)
- Servicing Facility Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_servicing_facility_output.htm)
- Servicing Practitioner Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_servicing_practitioner_output.htm)
