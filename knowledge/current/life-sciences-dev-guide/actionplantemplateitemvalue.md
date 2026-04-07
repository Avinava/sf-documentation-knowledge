---
title: "ActionPlanTemplateItemValue"
domain: life-sciences-dev-guide
topic: actionplantemplateitemvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:57.659Z
estimatedTokens: 642
keywords: [ActionPlanTemplateItemValue, Standard, extend, represent, action, plan, template, item, Life, Sciences, Cloud, standard]
---

> Standard and custom fields extend the standard ActionPlanTemplateItemValue
         object to represent the value associated with an action plan template item.

# ActionPlanTemplateItemValue

Standard and custom fields extend the standard ActionPlanTemplateItemValue object to represent the value associated with an action plan template item.

The ActionPlanTemplateItemValue object and its fields are used by the Key Account Management and the Provider Engagement Compliance feature areas. This topic only lists the fields used in Provider Engagement Compliance. To learn about the fields that are used in Key Account Management, see the ActionPlanTemplateItemValue object documentation in the Key Account Management section.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the compliance program cycle.This field is a relationship field.Relationship NameActionPlanTemplateItemRelationship TypeMaster-detailRefers ToActionPlanTemplateItem (the master object) |
| ItemEntityFieldName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the field on the action plan template item that this value is for. Specifies the combination of Item Entity Type and Name field values.Possible values are:PrvdEngmtComplianceCycle.DurationInDays—Duration In Days |
| ItemEntityType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of action plan template item.Possible values are:PrvdEngmtComplianceCycle—Provider Engagement Compliance Cycle |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| ValueLiteral | TypetextareaPropertiesCreate, Filter, Nillable, UpdateDescriptionThe duration of the compliance program cycle in days. |

#### See Also

-   [*Key Account Management*: ActionPlanTemplateItemValue](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplateitemvalue_kam.htm "Life Sciences Cloud fields extend the standard ActionPlanTemplateItemValue object to represent the value associated with an action plan template item.")

## Related Topics

- Key Account Management: ActionPlanTemplateItemValue (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplateitemvalue_kam.htm)
- ActionPlanTemplateItemValueChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
