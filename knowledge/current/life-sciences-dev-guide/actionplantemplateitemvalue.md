---
title: "ActionPlanTemplateItemValue"
domain: life-sciences-dev-guide
topic: actionplantemplateitemvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.955Z
estimatedTokens: 582
keywords: [ActionPlanTemplateItemValue, Life, Sciences, Cloud, extend, standard, represent, associated, action, plan, template, item, Calls, Objects]
---

# ActionPlanTemplateItemValue

> Life Sciences Cloud fields extend the standard ActionPlanTemplateItemValue
         object to represent the value associated with an action plan template item.

# ActionPlanTemplateItemValue

Life Sciences Cloud fields extend the standard ActionPlanTemplateItemValue object to represent the value associated with an action plan template item.

The ActionPlanTemplateItemValue object and its fields are used by the Key Account Management and the Provider Engagement Compliance feature areas. This topic only lists the fields used in Key Account Management. To learn about the fields that are used in Provider Engagement Compliance, see the ActionPlanTemplateItemValue object documentation in the Provider Engagement Compliance section.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionPlanTemplateItemValueChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: ActionPlanTemplateItemValue](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateitemvalue.htm)

## Related Topics

- ActionPlanTemplateItemValueChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
