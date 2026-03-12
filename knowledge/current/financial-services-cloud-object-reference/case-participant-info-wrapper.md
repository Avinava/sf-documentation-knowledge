---
title: "Case Participant Info Wrapper"
domain: financial-services-cloud-object-reference
topic: case-participant-info-wrapper
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.287Z
estimatedTokens: 329
keywords: [Case, Participant, Info, Wrapper, Input, representation, associated, complaint]
---

# Case Participant Info Wrapper

> Input representation of a case participant associated with the
      complaint.

# Case Participant Info Wrapper

Input representation of a case participant associated with the complaint.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalInfo | Map<String, Generic Object Wrapper> | Additional information about the case participant. | Optional | 58.0 |
| authorizationProof | String | Proof of authorization for the case participant. Possible values are:Email ConsentVerbal ConsentPower of AttorneyJoint Ownership | Required when the complainant is a customer representative, otherwise optional | 58.0 |
| participantId | String | Case participant’s account ID. | Required | 58.0 |
| preferredCallTimeFrom | String | Preferred time window to call the case participant. | Optional | 58.0 |
| preferredCallTimeTo | String | Preferred time window to call the case participant. | Optional | 58.0 |
| preferredCommunicationMode | String | Preferred mode of communication by the case participant to get updates related to the complaint. | Optional | 58.0 |
| role | String | Role of the case participant. Possible values are:ComplainantComplainant Representative | Optional | 58.0 |
| status | String | Status of the case related to the participant. Possible values are:ActiveIn ReviewPendingSubmitted | Optional | 58.0 |

## Related Topics

- Generic Object Wrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_generic_object_wrappe.htm)
