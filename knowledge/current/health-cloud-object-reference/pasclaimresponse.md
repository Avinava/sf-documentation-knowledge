---
title: "PASClaimResponse"
domain: health-cloud-object-reference
topic: pasclaimresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.565Z
estimatedTokens: 255
keywords: [PASClaimResponse, FHIR, resource, maps, CareProcessingError, AuthorNote, TrackedCommunication, andTrackedCommunicationDetailobjects, V4.0, Utilization, Management, Data, Model, Mapping]
---

# PASClaimResponse

> The PASClaimResponse FHIR resource maps to the
   CareProcessingError, AuthorNote,
   TrackedCommunication,
  andTrackedCommunicationDetailobjects.

# PASClaimResponse

The PASClaimResponse FHIR resource maps to the CareProcessingError, AuthorNote, TrackedCommunication, andTrackedCommunicationDetailobjects.

## FHIR V4.0 - Utilization Management Data Model Mapping

Here’s how the fields defined by FHIR for [PASClaimResponse](https://build.fhir.org/ig/HL7/davinci-pas/StructureDefinition-profile-claimresponse.html) map to the fields in Salesforce.

| PASCLAIMRESPONSE element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| ProcessNote | AuthorNote | Object | 0.M | N/A |
| processNote.text | AuthorNote.NoteText | Text Area | 0.1 | N/A |
| error | CareProcessingError | Object | 0.M | N/A |
| error.code | CareProcessingError.ErrorCodeId | Lookup: Code Set, Code Set Bundle | 0.1 | N/A |
| error.followUpAction | CareProcessingError.ActionCodeId | Lookup: Code Set, Code Set Bundle | 0.1 | N/A |
| CommunicationRequest | TrackedCommunication | Object | 0.M | N/A |
| TrackedCommunicationDetail | Object | 0.M | N/A |
