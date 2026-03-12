---
title: "CommunicationRequest"
domain: health-cloud-object-reference
topic: communicationrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.424Z
estimatedTokens: 830
keywords: [CommunicationRequest, FHIR, resource, maps, TrackedCommunication, TrackedCommunicationDetail, objects, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# CommunicationRequest

> The CommunicationRequest FHIR resource maps to the
   TrackedCommunication and TrackedCommunicationDetail objects
  in Salesforce.

# CommunicationRequest

The CommunicationRequest FHIR resource maps to the TrackedCommunication and TrackedCommunicationDetail objects in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [CommunicationRequest](https://build.fhir.org/communicationrequest-definitions.html) map to the fields in Salesforce.

| communicationrequest Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0.M | The identifier information for a communication request is represented as Identifier records that reference the TrackedCommunication record using their Identifier​.Parent​RecordId field. |
| basedOn | N/A | N/A | N/A | Not supported |
| status | TrackedCommunication.Status | Picklist | 1.1 | While FHIR defines CommunicationRequest.status as a code set, the Salesforce implementation of TrackedCommunication.Status is a picklist. |
| statusReason | TrackedCommunication.StatusReason | Picklist | 0.1 | While FHIR defines CommunicationRequest​.statusReason as a code set bundle, the Salesforce implementation of TrackedCommunication.StatusReason is a picklist. |
| groupIdentifier | N/A | N/A | N/A | Not supported |
| intent | N/A | N/A | N/A | Not supported |
| priority | TrackedCommunication.Priority | Picklist | 0.1 | While FHIR defines CommunicationRequest​.priority as a code set, the Salesforce implementation of TrackedCommunication.Priority is a picklist. |
| subject | TrackedCommunication​.Subject | Look​up: Account, Contact, User | 0.1 | N/A |
| occurrence | TrackedCommunication.​OccurrenceStartDateTime | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, CommunicationRequest.​occurrence is flattened into a set of occurrence start date time and occurrence end date time fields. |
| TrackedCommunication.​OccurrenceEndDateTime | Date​/Time | 0.1 |
| authoredOn | TrackedCommunication​.CreatedDate | Date/Time | 0.1 | N/A |
| doNotPerform | N/A | N/A | N/A | Not supported |
| encounter | N/A | N/A | N/A | Not supported |
| requester | TrackedCommunication​.RequesterReferenceId | Lookup: Account, Contact, User | 0.1 | N/A |
| informationProvider | TrackedCommunication​.CommunicatorReferenceId | Lookup: Account, Contact, User | 0.M | N/A |
| replaces | TrackedCommunication​Detail.DetailType | Picklist | 0.M | Select Replaced Item as the picklist value in DetailType. |
| category | TrackedCommunication​Detail.DetailType | Picklist | 0.M | Select Category as the picklist value in DetailType. |
| medium | TrackedCommunication​Detail.DetailType | Picklist | 0.M | Select Medium as the picklist value in DetailType. |
| about | TrackedCommunication​Detail.DetailType | Picklist | 0.M | Select About as the picklist value in DetailType. |
| recipient | TrackedCommunication​Detail.DetailType | Picklist | 0.M | Select Recipient as the picklist value in DetailType. |
| reason | TrackedCommunication​Detail.DetailType | Picklist | 0.M | Select Reason Code as the picklist value in DetailType. |
| note | TrackedCommunication​Detail.DetailType | Picklist | 0.M | Select Note as the picklist value in DetailType. |
| payload.content | TrackedCommunication​Detail.DetailType | Picklist | 1.1 | Select Payload as the picklist value in DetailType. |
