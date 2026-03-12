---
title: "FHIR Request"
domain: life-sciences-dev-guide
topic: fhir-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.359Z
estimatedTokens: 271
keywords: [FHIR, Input, representation, supply, medication, along, how, administered]
---

# FHIR Request

> Input representation for the supply of medication, along with
      information about how it should be administered.

# FHIR Request

Input representation for the supply of medication, along with information about how it should be administered.

​The ​Medication​​Request FH​I​R resource maps to the [MedicationRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationRequest.htm "Represents a request or order for the supply of medication, along with information about how it should be administered. This object is available in API version 51.0 and later.") object in​Salesforce​.

Root XML tag

<FhirRequestInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| medicationReference | String | The reference of the medication request. | Optional | 54.0 |
| status | String | The status of the medication request.Possible values are:ActiveCancelledCompletedDraftEntered-in-ErrorOn-HoldStoppedUnknown | Optional | 54.0 |
| type | String | The type of the medication request.Possible values are:Filler OrderInstance OrderOptionOriginal OrderPlanProposalReflex Order | Optional | 54.0 |

## Related Topics

- MedicationRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationRequest.htm)
