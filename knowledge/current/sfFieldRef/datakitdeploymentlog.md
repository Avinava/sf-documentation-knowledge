---
title: "DataKitDeploymentLog"
domain: sfFieldRef
topic: datakitdeploymentlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.611Z
estimatedTokens: 619
keywords: [DataKitDeploymentLog, log, data, kit, component, deployment, API, version, 61.0, later]
---

# DataKitDeploymentLog

> Represents the log details of a data kit component deployment. This
			object is available in API version 61.0 or later.

# DataKitDeploymentLog

Represents the log details of a data kit component deployment. This object is available in API version 61.0 or later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DataKitDeploymentLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_datakitdeploymentlog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BundleName | Bundle Name | string |  | 100 |  |  |
| ComponentName | Component Name | string |  | 100 |  |  |
| ComponentTemplateId | Component Template ID | reference |  | 18 |  |  |
| ComponentType | Component Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataKitName | Data Kit Name | string |  | 100 |  |  |
| DataPackageKitDefinition | Data Package Kit Definition ID | picklist |  | 255 |  |  |
| DataSpaceName | Data Space Name | string |  | 100 |  |  |
| DeployJob | Deploy Job | string |  | 80 |  |  |
| DeploymentAction | Deployment Action | picklist |  | 255 |  |  |
| DeploymentError | Deployment Error | textarea |  | 128000 |  |  |
| DeploymentStatus | Deployment Status | picklist |  | 255 |  |  |
| FileBasedComponentTemplate | Component Template Name | string |  | 100 |  |  |
| FlowInterviewIdentifier | Flow Interview Identifier | string |  | 80 |  |  |
| Id | Data Kit Deployment Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JobIdentifier | Job Identifier | string |  | 80 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PublisherOrgComponentId | Publisher Org Component ID | reference |  | 18 |  |  |
| SubscriberOrgComponentId | Subscriber Org Component ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateVersion | Template Version | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
