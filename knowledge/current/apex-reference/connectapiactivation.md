---
title: "ConnectApi.Activation"
domain: apex-reference
topic: connectapiactivation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.855Z
keywords: [ConnectApi.Activation, See]
---

# ConnectApi.Activation

# ConnectApi.Activation

Represents an activation output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activationDefinitionId | String | ID of the activation definition. | 60.0 |
| activationPlatformCustomerFileSourceEnum | ConnectApi.​ActivationPlatformCustomerFileSourceEnum | Customer file source of the activation platform.First_And_Third_PartyFirst_PartyThird_Party | 60.0 |
| activationRecordSchema | String | JSON schema representing the activation JSON payload in the activationRecord field of the AudienceDMO. | 62.0 |
| activationTarget | ConnectApi.​ActivationTargetRepresentation | Activation target details. | 60.0 |
| activationTargetId | String | Activation target ID for the activation. | 60.0 |
| activationTargetName | String | Activation target name for the activation. | 60.0 |
| activationTargetObjectPath | List<ConnectApi.​QueryPathConfigList> | Object path for the activation target. | 60.0 |
| activationTargetSubject | ConnectApi.​ActivationTargetSubject | Activation target subject for the activation. | 60.0 |
| attributesConfig | ConnectApi.​ActivationAttributeConfig | Attributes for the activation. | 60.0 |
| contactPointsConfig | ConnectApi.​ContactPointsConfig | Contact points for the activation. | 60.0 |
| curatedEntityApiName | String | API name of the entity curated by the activation. | 60.0 |
| curatedEntityId | String | ID of the entity curated by the activation. | 60.0 |
| curatedEntityName | String | Name of the entity curated by the activation. | 60.0 |
| dataSourcesConfig | ConnectApi.​ActivationDataSources | Data sources for the activation. | 60.0 |
| dataSpaceName | String | Data space name for the activation. | 60.0 |
| dataspaceId | String | Data space ID for the activation. | 60.0 |
| description | String | Description of the activation. | 60.0 |
| developerName | String | Developer name for the activation. | 60.0 |
| directDmoFiltersConfig | ConnectApi.​DmoFilterConfig | Direct DMO filters for the activation. | 60.0 |
| enabled | Boolean | Indicates if the activation is enabled (true) or not (false). | 60.0 |
| historyAudienceDmoApiName | String | API name for the history audience DMO. | 60.0 |
| historyAudienceDmoLabel | String | Name of the history audience DMO. | 60.0 |
| lastPublishDate | Datetime | Last publish timestamp of the activation. Use the format yyyy-mm-dd. | 60.0 |
| lastPublishStatus | ConnectApi.​DataExportRunStatusEnum | Last publish status of the activation.ErrorPartner_ErrorPartner_ProcessingPublishingQueuedSegment_ErrorSkippedSuccess | 60.0 |
| lastPublishStatusErrorMsg | String | Error message encountered during last publish. | 60.0 |
| latestAudienceDmoApiName | String | API name for the latest audience DMO. | 62.0 |
| latestAudienceDmoLabel | String | Name for the latest audience DMO. | 62.0 |
| latestAudienceDmoLastRunTimestamp | Datetime | Timestamp of the last run for the latest audience DMO. Use the format yyyy-mm-dd. | 62.0 |
| membershipName | String | Membership name of the activation. | 60.0 |
| refreshType | ConnectApi.​DataExportRefreshModeEnum | Refresh type of the activation.Full_RefreshIncremental | 60.0 |
| relatedDmoFiltersConfig | ConnectApi.​DmoFilterConfig | DMO filters on related attributes for the activation. | 60.0 |
| segmentApiName | String | API name for the activation segment. | 60.0 |
| segmentDefinitionId | String | Definition ID for the activation segment. | 60.0 |
| segmentId | String | ID for the activation segment. | 60.0 |
| shouldExcludeDeletes | Boolean | Indicates whether to exclude records removed since the last refresh (true) or not (false). | 60.0 |
| shouldExcludeUpdates | Boolean | Indicates whether to exclude records modified since the last refresh (true) or not (false). | 60.0 |
| staticDataConfig | ConnectApi.​StaticDataConfig | Static data of the activation. | 60.0 |
| status | ConnectApi.​ActivationStatusEnum | Status of the activation.ActiveProcessingErrorInactive | 60.0 |

#### See Also

-   [createActivation(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_createActivation_1 "Create an activation.")
    
-   [getActivation(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivation_1 "Get an activation by ID.")
    
-   [updateActivation(activationId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_updateActivation_1 "Update an activation by ID.")