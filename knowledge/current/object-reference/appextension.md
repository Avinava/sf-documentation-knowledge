---
title: "AppExtension"
domain: object-reference
topic: appextension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.654Z
estimatedTokens: 762
keywords: [AppExtension, connection, Service, mobile, app, another, typically, passing, record, data, Salesforce, apps, API, version, 41.0]
---

# AppExtension

> Represents a connection between the Field Service mobile app
			and another app, typically for passing record data to the Salesforce mobile app or other
			apps. This object is available in API version 41.0 and later.

# AppExtension

Represents a connection between the Field Service mobile app and another app, typically for passing record data to the Salesforce mobile app or other apps. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AppExtensionLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label in the UI for the app extension. |
| AppExtensionName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the app extension. |
| FieldServiceMobileSettingsId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of a set of field service mobile settings. |
| InstallationUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL that takes the user to the app install location, such as the App Store or Google Play. |
| LaunchValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA value directing the Field Service app to the appropriate app extension. The Launch Value can be a static URL or a dynamic value that you can represent with certain tokens. These tokens pass field information from the record that the user is currently viewing. The basic format for these tokens is based on the field names; for example: {!$Name}. |
| ScopedToObjectTypes | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the types of records from which the app extension can be activated. Scoping an app extension to an object lets users activate the app extension from records of the specified type. For example, to scope to both work orders and service appointments you would use the value WorkOrder,ServiceAppointment. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA picklist of types of app extensions: iOS, Android, Flow, and Lightning Apps |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppExtensionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object. Available in API version 55.0 and later.

## Related Topics

- AppExtensionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
