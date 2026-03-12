---
title: "ActionPlanItem"
domain: life-sciences-dev-guide
topic: actionplanitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.933Z
estimatedTokens: 552
keywords: [ActionPlanItem, Life, Sciences, Cloud, extend, standard, represent, instance, action, plan, item, Calls, Associated, Objects]
---

# ActionPlanItem

> Life Sciences Cloud fields extend the standard ActionPlanItem object to
         represent the instance of an action plan item.

# ActionPlanItem

Life Sciences Cloud fields extend the standard ActionPlanItem object to represent the instance of an action plan item.

The ActionPlanItem object and its fields are used by the Key Account Management and the Provider Engagement Compliance feature areas. This topic only lists the fields used in Key Account Management. To learn about the fields that are used in Provider Engagement Compliance, see the ActionPlanItem object documentation in the Provider Engagement Compliance section.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionPlanItemChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: ActionPlanItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplanitem.htm)

## Related Topics

- ActionPlanItemChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
