---
title: "CampaignInfluenceModel"
domain: sfFieldRef
topic: campaigninfluencemodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.175Z
estimatedTokens: 460
namespace: NamespacePrefix
keywords: [CampaignInfluenceModel, read-only, campaign, influence, model, Customizable, models, group, CampaignInfluence, records, created, specific, triggers, workflows, define]
---

# CampaignInfluenceModel

> This read-only object represents a campaign influence model in
			Customizable Campaign Influence. Use campaign influence models to group CampaignInfluence records created by a specific set of
			triggers and workflows that you define. The Primary Campaign Source influence model is
			the default model. This object is available in API version 37.0 and
		later.

**Namespace:** `NamespacePrefix`

# CampaignInfluenceModel

This read-only object represents a campaign influence model in Customizable Campaign Influence. Use campaign influence models to group CampaignInfluence records created by a specific set of triggers and workflows that you define. The Primary Campaign Source influence model is the default model. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CampaignInfluenceModel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_campaigninfluencemodel.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Unique Name | string |  | 80 |  |  |
| Id | Campaign Influence Model ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDefaultModel | Default Model | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsModelLocked | Locked | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Model Name | string |  | 80 |  |  |
| ModelDescription | Model Description | string |  | 255 |  |  |
| ModelType | Model Type | picklist |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| RecordPreference | Record Preference | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
