---
title: "AcctMgrTargetDstr"
domain: mfg-api-devguide
topic: acctmgrtargetdstr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.073Z
estimatedTokens: 932
keywords: [AcctMgrTargetDstr, account, product, price, book, associated, manager, target, child, AcctMgrTarget, API, version, 49.0, later, Calls]
---

# AcctMgrTargetDstr

> Represents the account, product, and price book associated to an account
      manager target. It is a child object of the AcctMgrTarget object.
    This object is available in API version 49.0 and later.

# AcctMgrTargetDstr

Represents the account, product, and price book associated to an account manager target. It is a child object of the [AcctMgrTarget](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target.htm "Represents a target created by an account manager. It stores the fiscal year, measure, target value, start date, end date, and assignment information of an account manager target. This object is available in API version 49.0 and later.") object. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account selected for an account manager target distribution. |
| AcctMgrTargetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of an account manager target. |
| AssignedTargetPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the parent account manager target value assigned to a team member. |
| ListPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe list price of a product selected for an account manager target distribution. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe user-defined name of an account manager target. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a product in relation to the price book selected for an account manager target distribution. |
| PricebookId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the price book selected for an account manager target distribution by product. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a product selected for an account manager target distribution. |
| TargetCurrencyValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe distribution value of an account manager target that has the measure type as Currency. |
| TargetValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe distribution value of an account manager target that has the measure type as Other. |

## Associated Objects

This object has the following associated objects. Unless noted, it is available in the same API version as this object.

[AcctMgrTargetDstrChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[AcctMgrTargetDstrHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AcctMgrTarget (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/manufacturing_standard_object_account_manager_target.htm)
- AcctMgrTargetDstrChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- AcctMgrTargetDstrHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
