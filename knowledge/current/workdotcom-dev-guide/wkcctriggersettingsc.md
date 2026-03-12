---
title: "wkcc__TriggerSettings__c"
domain: workdotcom-dev-guide
topic: wkcctriggersettingsc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.440Z
estimatedTokens: 707
keywords: [wkcc__TriggerSettings__c, current, state, data, triggers, Employee, Location, Work.com, objects, orgs, installed, wkcc, _TriggerSettings, Calls]
---

# wkcc__TriggerSettings__c

> Represents the current state of data triggers for Employee, Location, and other
      Work.com related objects. This object is available in orgs that have Work.com installed.

# wkcc\_\_TriggerSettings\_\_c

Represents the current state of data triggers for Employee, Location, and other Work.com related objects. This object is available in orgs that have Work.com installed.

Use wkcc\_\_TargetSettings\_\_c records to enable or disable these triggers.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionThe API name of the trigger.Names are formatted as "b2w_<object name>Trigger", for example b2w_EmployeeTrigger. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe setup owner ID. |
| wkcc__IsAfterDeleteDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the after-delete trigger is disabled. The default value is false. |
| wkcc__IsAfterInsertDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the after-insert trigger is disabled. The default value is false. |
| wkcc__IsAfterUndeleteDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the after-undelete trigger is disabled. The default value is false. |
| wkcc__IsAfterUpdateDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the after-update trigger is disabled. The default value is false. |
| wkcc__IsBeforeDeleteDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the before-delete trigger is disabled. The default value is false. |
| wkcc__IsBeforeInsertDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the before-insert trigger is disabled. The default value is false. |
| wkcc__IsBeforeUpdateDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the before-update trigger is disabled. The default value is false. |
| wkcc__IsDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, all Work.com triggers for the object are disabled. The default value is false. |

#### See Also

-   [Command Center Data Triggers](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm "Work.com installs and uses Command Center data triggers on Employee, Individual, User, and Location. Adding or modifying records for these objects can trigger changes in related objects. It’s also possible to disable the triggers for data loads.")

## Related Topics

- Command Center Data Triggers (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm)
