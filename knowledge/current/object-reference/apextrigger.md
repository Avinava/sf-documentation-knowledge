---
title: "ApexTrigger"
domain: object-reference
topic: apextrigger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.580Z
estimatedTokens: 1284
keywords: [ApexTrigger, Apex, trigger, Calls, Usage]
---

# ApexTrigger

> Represents an Apex trigger.

# ApexTrigger

Represents an Apex trigger.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe API version for this trigger. Every trigger has an API version specified at creation. |
| Body | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe Apex trigger definition.Limit: 1 million characters. |
| BodyCrc | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe CRC (cyclic redundancy check) of the class or trigger file. |
| IsValid | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether any dependent metadata has changed since the trigger was last compiled (true) or not (false). |
| LengthWithoutComments | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLength of the trigger without comments |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the trigger.Limit: 255 characters |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe current status of the Apex trigger. The following string values are valid:Active—The trigger is active.Inactive—The trigger is inactive, but not deleted.Deleted—The trigger is marked for deletion. This is useful for managed packages, because it allows a class to be deleted when a managed package is updated.NoteInactive is not valid for ApexClass. For more information, see the Metadata API Developer Guide. |
| TableEnumOrId | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the object associated with the trigger, such as Account or Contact. |
| UsageAfterDelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after delete trigger (true) or not (false). |
| UsageAfterInsert | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after insert trigger (true) or not (false). |
| UsageAfterUndelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after undelete trigger (true) or not (false). |
| UsageAfterUpdate | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is an after update trigger (true) or not (false). |
| UsageBeforeDelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is a before delete trigger (true) or not (false). |
| UsageBeforeInsert | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is a before insert trigger (true) or not (false). |
| UsageBeforeUpdate | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is a before update trigger (true) or not (false). |
| UsageIsBulk | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether the trigger is defined as a bulk trigger (true) or not (false).NoteThis field is not used for Apex triggers saved using Salesforce API version 10.0 or higher: all triggers starting with that version are automatically considered bulk, and this field will always return true. |

## Usage

Although Apex classes and triggers have the Create and Update field properties, a runtime exception occurs if you try to create, update, or delete them using the API. Instead, use the Salesforce Extensions for Visual Studio Code or the Ant Migration Tool to create or update Apex classes or triggers. Apex classes and triggers can’t be created, edited, or deleted in a production org. See [Deploying Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_deploying.htm).

#### See Also

-   [ApexClass](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexclass.htm "Represents an Apex class.")

-   [*Developer Guide*: Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "
    Developer Guide: Apex Developer Guide - html (New Window)")

## Related Topics

- ApexClass (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexclass.htm)
