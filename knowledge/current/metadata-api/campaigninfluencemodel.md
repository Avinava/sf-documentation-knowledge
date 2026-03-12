---
title: "CampaignInfluenceModel"
domain: metadata-api
topic: campaigninfluencemodel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.289Z
estimatedTokens: 921
keywords: [CampaignInfluenceModel, campaign, influence, model, Customizable, can’t, configure, via, Metadata, API, add, File, Suffix, Directory, Location]
---

# CampaignInfluenceModel

> Represents a campaign influence model used by
            Customizable Campaign Influence. You can’t configure Customizable Campaign
        Influence via the Metadata API, but you can add a campaign influence model.

# CampaignInfluenceModel

Represents a campaign influence model used by Customizable Campaign Influence. You can’t configure Customizable Campaign Influence via the Metadata API, but you can add a campaign influence model.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This information applies only to Customizable Campaign Influence and not to [Campaign Influence 1.0](https://help.salesforce.com/s/articleView?id=sf.campaigns_influence_original.htm&language=en_US) .

## File Suffix and Directory Location

CampaignInfluenceModel values are stored in the campaignInfluenceModels directory of the corresponding package directory. The file name matches the model name, and the extension is .campaignInfluenceModel.

## Version

CampaignInfluenceModel components are available in API version 38.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| isActive | boolean | Indicates whether the model is active. Active models can generate campaign influence records. Deactivating a model deletes its campaign influence records. Custom models are always active and this field is ignored. This field is available beginning with API version 40.0. |
| isDefaultModel | boolean | Required. Indicates if the model is the default model or not. Only campaign influence records associated with the default model appear on campaigns and opportunities. You can only have one default model at a time. A model must be active to become the default model.Activating or deactivating custom models does not automatically generate or delete campaign influence records. |
| isModelLocked | boolean | Required. Indicates if the model is locked or not. Campaign Influence records for locked models can be manipulated only via the API. |
| modelDescription | string | A description of the influence model. |
| name | string | Required. A unique name for the model. |
| recordPreference | picklist | The value of this field determines when to create campaign influence records.AllRecords: Creates records regardless of the revenue attribution percentage.RecordsWithAttribution: Creates records only when the revenue attribution is greater than 0%.This field is available In API version 41.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a CampaignInfluenceModel component that represents the default Salesforce campaign influence attribution model. The default isDefaultModel value of true can be changed if another model is created and set as the default model. The isModelLocked value of true means that Campaign Influence records for this model can be seen in the UI, but not created, updated, or deleted.

```

```

The following is an example of a CampaignInfluenceModel component that creates an influence model called Last Touch, which will not be the default model.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CampaignInfluenceModel xmlns="http://soap.sforce.com/2006/04/metadata">
    <isActive>true</isActive>
    <isDefaultModel>true</isDefaultModel>
    <isModelLocked>true</isModelLocked>    <recordPreference>AllRecords</recordPreference>   
    <modelDescription>Primary Campaign gets 100% of the revenue share</modelDescription>
    <name>Salesforce Model</name>
</CampaignInfluenceModel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CampaignInfluenceModel xmlns="http://soap.sforce.com/2006/04/metadata">
    <isActive>true</isActive>
    <isDefaultModel>false</isDefaultModel>
    <isModelLocked>true</isModelLocked>
    <modelDescription>This model gives 100% influence attribution to the last campaign that touched the contact.</modelDescription>
    <name>Last Touch</name>
    <recordPreference>RecordsWithAttribution</recordPreference>
</CampaignInfluenceModel>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
