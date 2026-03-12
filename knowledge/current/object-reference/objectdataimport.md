---
title: "ObjectDataImport"
domain: object-reference
topic: objectdataimport
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.337Z
estimatedTokens: 800
keywords: [ObjectDataImport, data, import, status, records, API, version, 57.0, later, Calls, Associated, Objects]
---

# ObjectDataImport

> Represents the data import status of one or more object records. This
      object is available in API version 57.0 and later.

# ObjectDataImport

Represents the data import status of one or more object records. This object is available in API version 57.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the data import finished. |
| FileName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionOptional. If the data import was from a comma-delimited file (CSV), the name of the file. The maximum length is 120 characters. |
| ObjectDataImportNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the data import. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns the data import status record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PrimaryObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the primary object being imported. For example, Lead. This value is usually provided programmatically. The maximum length is 120 characters. |
| Result | TypetextareaPropertiesNillableDescriptionThe JSON response of the data object import result, including error messages. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe processing status of the data object import.Possible values are:CompletedIn Progress |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data import, such as from a comma-delimited file or through a connector.Possible values are:CSV AsyncCSV SyncExternal Record Import—A record imported or updated by Partner Connect between a partner and vendor system. To see this field, enable Partner Connect. See Set Up Partner Connect as a Partner in Salesforce Help. Available in API version 62.0 and later.One time Connector |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ObjectDataImportChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Sharing rules are available for the object.

[ObjectDataImportOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ObjectDataImportShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ObjectDataImportOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ObjectDataImportShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
