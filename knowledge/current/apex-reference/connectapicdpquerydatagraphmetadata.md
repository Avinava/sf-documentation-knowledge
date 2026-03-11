---
title: "ConnectApi.CdpQueryDataGraphMetadata"
domain: apex-reference
topic: connectapicdpquerydatagraphmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.255Z
keywords: [ConnectApi.CdpQueryDataGraphMetadata]
---

# ConnectApi.CdpQueryDataGraphMetadata

# ConnectApi.CdpQueryDataGraphMetadata

Represents metadata for a data graph.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| dataspaceName | String | Name of the data space in which the data graph metadata resides. | 59.0 |
| description | String | Description of the data graph metadata. | 59.0 |
| developerName | String | Developer name of the data graph metadata. | 59.0 |
| dgObject | ConnectApi.DataGraphObjectData | Metadata for the data object of the data graph. | 59.0 |
| extendedProperties | Object | Extended properties of the data graph metadata. | 59.0 |
| idDmoName | String | API name of the Data Model Object (DMO) that contains the ID table for the data graph. | 59.0 |
| idsDmo | ConnectApi.DataGraphIdsDmo | Data about the DMO that contains the ID table for the data graph. | 61.0 |
| primaryObjectName | String | Name of the primary object for the data graph. | 59.0 |
| primaryObjectType | DataGraphObjectTypeEnum | Data type of the primary object for the data graph.AdgAdgActivationAudienceAdgExternalBridgeCalculatedCalculatedRealTimeCalculatedStreamingCuratedCustomDerivedMlPredictionObjectTypeUnspecifiedPackageSegmentMembershipStandardSystemTransform | 59.0 |
| status | DataGraphStatusEnum | Status of the data graph.ErrorInprogressPublishedReadyStatusUnspecifiedUnrecognized | 59.0 |
| valuesDmo | ConnectApi.DataGraphValuesDmo | Data about the Data Model Object (DMO) that contains the JSON records for the data graph. | 61.0 |
| valuesDmoName | String | API name of the DMO that contains the JSON records for the data graph. | 59.0 |
| version | String | Version of the data graph metadata. | 59.0 |