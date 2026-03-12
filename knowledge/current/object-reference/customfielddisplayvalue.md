---
title: "CustomFieldDisplayValue"
domain: object-reference
topic: customfielddisplayvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.678Z
estimatedTokens: 787
keywords: [CustomFieldDisplayValue, Stores, variation, product, attribute, item, view, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# CustomFieldDisplayValue

> Stores variation details for the product attribute item view.
      This object is available in API version 63.0 and later.

# CustomFieldDisplayValue

Stores variation details for the product attribute item view. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

CustomFieldDisplayValue is available only if the B2B or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| Color | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe color variation in hexadecimal value format, for example #FF0000. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code allowed by the organization. Possible value is:USD—U.S. DollarThe default value is USD. |
| CustomFieldDisplayId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the custom field display that this variation is associated with.This field is a relationship field.Relationship NameCustomFieldDisplayRefers ToCustomFieldDisplay |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the custom field display value. |
| PickListApiValue | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe API name of the color variation picklist value, for example, red_c. |

## Usage

This object only gets populated when display type in the CustomFieldDisplay object is ColorSwatch.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as CustomFieldDisplayValue.

[CustomFieldDisplayValueChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CustomFieldDisplayValueFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustomFieldDisplayValueHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CustomFieldDisplayValueChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CustomFieldDisplayValueFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CustomFieldDisplayValueHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
