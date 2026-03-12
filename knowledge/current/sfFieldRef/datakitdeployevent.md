---
title: "DataKitDeployEvent"
domain: sfFieldRef
topic: datakitdeployevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.600Z
estimatedTokens: 415
keywords: [DataKitDeployEvent, data, kit, deployment, event, notifies, subscribers, status, component, API, version, 61.0, later]
---

# DataKitDeployEvent

> Represents a data kit deployment event that notifies subscribers of the
			status of the data kit component deployment. This object is available in API version
			61.0 or later.

# DataKitDeployEvent

Represents a data kit deployment event that notifies subscribers of the status of the data kit component deployment. This object is available in API version 61.0 or later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DataKitDeployEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_datakitdeployevent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataKitDeployStatus | Data Kit Deployment Status | picklist |  | 255 |  |  |
| DataKitName | Data Kit Name | string |  | 200 |  |  |
| DataspaceName | Dataspace Name | string |  | 80 |  |  |
| DeployStartTime | Data Kit Deployment Start Time | datetime |  |  |  |  |
| ErrorDetails | Error Message | textarea |  | 128000 |  |  |
| EventCreationDate | Event Creation Date | datetime |  |  |  |  |
| EventPublishDate | Event Publish Date | datetime |  |  |  |  |
| EventType | Event Type | picklist |  | 255 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| IsDataKitDeployStatusSuccess | [Deprecated] Data Kit Deployment Status | string |  | 200 |  |  |
| JobIdentifier | Data Kit Deploy Job Identifier | string |  | 200 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| TemplateName | Data Kit Component Template Name | string |  | 400 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
