---
title: "CampaignInfluenceModel"
domain: object-reference
topic: campaigninfluencemodel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.036Z
estimatedTokens: 1199
keywords: [CampaignInfluenceModel, read-only, campaign, influence, model, Customizable, models, group, CampaignInfluence, records, created, specific, triggers, workflows, define]
---

# CampaignInfluenceModel

> This read-only object represents a campaign influence model in
			Customizable Campaign Influence. Use campaign influence models to group CampaignInfluence records created by a specific set of
			triggers and workflows that you define. The Primary Campaign Source influence model is
			the default model. This object is available in API version 37.0 and
		later.

# CampaignInfluenceModel

This read-only object represents a campaign influence model in Customizable Campaign Influence. Use campaign influence models to group CampaignInfluence records created by a specific set of triggers and workflows that you define. The Primary Campaign Source influence model is the default model. This object is available in API version 37.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This information applies only to [Customizable Campaign Influence](https://help.salesforce.com/s/articleView?id=sales.campaigns_influence_customizable.htm&type=5&language=en_US "HTML (New Window)") and not to [Campaign Influence 1.0](https://help.salesforce.com/s/articleView?id=sales.campaigns_influence_original.htm&type=5&language=en_US "HTML (New Window)").

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To access this object, Customizable Campaign Influence must be enabled. Customer Portal users can’t access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name of the influence model. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the model is active. Active models can generate campaign influence records. Deactivating a model deletes its campaign influence records. Custom models are always active and this field is ignored. |
| IsDefaultModel | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the model is the default model (true) or not (false). CampaignInfluence records associated with the default model appear in 3 locations.The Campaign Influence related list on opportunitiesThe Influenced Opportunities related list on campaignsThe Campaign Statistics section on campaignsThe value of IsDefaultModel can only be true for 1 model at a time. |
| IsModelLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the model is locked (true) or not (false). Records for locked models can only be added, updated, or deleted via the API. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the influence model. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for the influence model. |
| ModelDescription | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the influence model. |
| ModelType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the model is the Primary Campaign Source influence model, or a custom model. These values are the allowed.1: Primary Campaign Source Model2: Custom Model3: First Touch Model4: Last Touch Model5: Even Distribution Model6: Data-Driven Model |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| RecordPreference | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe value of this field determines when to create campaign influence records.AllRecords: Creates records regardless of the revenue attribution percentage.RecordsWithAttribution: Creates records only when the revenue attribution is greater than 0%. |
