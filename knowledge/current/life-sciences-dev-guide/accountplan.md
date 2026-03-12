---
title: "AccountPlan"
domain: life-sciences-dev-guide
topic: accountplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.883Z
estimatedTokens: 1176
keywords: [AccountPlan, Life, Sciences, Cloud, extend, standard, Account, Plan, represent, customers, measurable, objectives, executable, steps, proactively]
---

# AccountPlan

> Life Sciences Cloud fields extend the standard Account Plan object to
         represent information about customers with measurable objectives and executable steps to
         proactively manage and grow customer relationships.

# AccountPlan

Life Sciences Cloud fields extend the standard Account Plan object to represent information about customers with measurable objectives and executable steps to proactively manage and grow customer relationships.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanCompletedPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe completed percentage of action plans associated with the account plan. |
| EconomicalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe evaluation of economic factors that can affect the account, including market trends, economic indicators, and financial health of the customer and their industry. |
| EnvironmentalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe assessment of environmental factors that can impact the account, such as sustainability considerations, climate change-related risks, and regulatory compliance with environmental standards. |
| LegalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed analysis of the legal landscape relevant to the account, including regulations, compliance requirements, and potential legal risks or opportunities. |
| PoliticalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of political factors that can influence the account, such as government policies, regulatory changes, and political stability in the relevant regions. |
| SocialAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe examination of social factors that can impact the account, including demographic trends, cultural considerations, and social responsibility initiatives. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| TechnologicalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe evaluation of technological factors that can affect the account, including emerging technologies, industry-specific innovations, and the customer's technological capabilities and infrastructure. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountPlanHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AccountPlanShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: AccountPlan](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountplan.htm)

## Related Topics

- AccountPlanChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AccountPlanFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AccountPlanHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- AccountPlanShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
