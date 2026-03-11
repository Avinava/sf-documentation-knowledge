---
title: "ConnectApi.ActivationData"
domain: apex-reference
topic: connectapiactivationdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.880Z
keywords: [ConnectApi.ActivationData]
---

# ConnectApi.ActivationData

# ConnectApi.ActivationData

Represents the activation data for an Audience Data Model Object (DMO).

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activatedEntityFqk | String | Fully Qualified Key (FQK) of the activated entity. | 60.0 |
| activatedOnId | String | ActivateOn entity ID, such as the Individual.Id or the Unified Individual.Id. | 60.0 |
| activationRecord | String | Activated attributes payload as JSON BLOB. | 60.0 |
| deltaType | AudienceDMODeltaTypeEnum | Delta type of the activation.A—ADDEDD—DELETEDE—EXISTINGU—UPDATED | 60.0 |
| publishDate | String | Date that the activation was published. | 60.0 |
| segmentId | String | Unique ID for each segment. | 60.0 |
| segmentOnId | String | Key identifier based on the SegmentOn enity. Same as Activated-entity-id when ActivateOn = SegmentOn. | 60.0 |
| segmentedEntityFqk | String | Fully Qualified Key (FQK) of the segmented entity. | 60.0 |