---
title: "ApexTrigger"
domain: tooling-api
topic: apextrigger
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.261Z
keywords: [ApexTrigger, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields, Usage]
---

# ApexTrigger

# ApexTrigger

Represents the saved copy of an Apex trigger. ApexTrigger uses the cached version of the class unless one is unavailable. Available from API version 28.0 or later.

To edit, save, or compile Apex triggers, use [ApexTriggerMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm "Represents the working copy of an Apex trigger for editing, saving, or compiling in a MetadataContainer.").

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe API version for this trigger. Every trigger has an API version specified at creation. |
| Body | TypestringPropertiesCreate, Nillable, UpdateDescriptionThe Apex trigger definition. Limit: 1 million characters. |
| BodyCrc | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe CRC (cyclic redundancy check) of the class or trigger file. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Id of the EntityDefinition object associated with this object. |
| IsValid | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether any dependent metadata has changed since the trigger was last compiled (true) or not (false). |
| LengthWithoutComments | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLength of the trigger without comments. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypeApexTriggerMetadataPropertiesNoneDescriptionAn object that describes the version, status, and packaged versions of the corresponding Apex trigger.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the Apex trigger. The following string values are valid:Active—The trigger is active.Inactive—The trigger is inactive, but not deleted.Deleted—The trigger is marked for deletion. This status is useful for managed packages, because it allows a class to be deleted when a managed package is updated.NoteApex triggers cannot be deactivated using Tooling API. You can deactivate Apex triggers using Metadata API. Consider using custom metadata records and include logic in your trigger to bypass trigger configuration logic. For more information, see the Metadata API Developer Guide. |
| UsageAfterDelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after delete trigger (true) or not (false). |
| UsageAfterInsert | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after insert trigger (true) or not (false). |
| UsageAfterUndelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after undelete trigger (true) or not (false). |
| UsageAfterUpdate | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after update trigger (true) or not (false). |
| UsageBeforeDelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is a before delete trigger (true) or not (false). |
| UsageBeforeInsert | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an before insert trigger (true) or not (false). |
| UsageBeforeUpdate | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an before update trigger (true) or not (false). |
| UsageIsBulk | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is defined as a bulk trigger (true) or not (false). |

## Usage

To retrieve information about an Apex trigger, create an ApexTrigger object that references it. For example code, see [SOAP Calls](atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm).

To edit, save, or compile Apex triggers, use [ApexTriggerMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm "Represents the working copy of an Apex trigger for editing, saving, or compiling in a MetadataContainer.").

Although Apex classes and triggers have the Create and Update field properties, a runtime exception occurs if you try to create, update, or delete them using the API. Instead, use the Salesforce Extensions for Visual Studio Code or the Ant Migration Tool to create or update Apex classes or triggers. Apex classes and triggers can’t be created, edited, or deleted in a production org. See [Deploying Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_deploying.htm).