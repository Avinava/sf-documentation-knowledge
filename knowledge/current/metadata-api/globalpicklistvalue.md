---
title: "GlobalPicklistValue"
domain: metadata-api
topic: globalpicklistvalue
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.987Z
keywords: [GlobalPicklistValue, Note, Version, Fields, PicklistValue, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, File]
---

# GlobalPicklistValue

# GlobalPicklistValue

Represents the definition of a value used in a global picklist. Custom picklist fields can inherit the picklist value set from a global picklist.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

GlobalPicklistValue components don’t have file suffixes or directories because they’re lists of values and not custom fields. For file-based operations they can be accessed through GlobalPicklist (which is in API v37.0 only).

## Version

GlobalPicklistValue components are available in API version 37.0 only. In API version 38.0 and later, GlobalPicklistValue is replaced by [CustomValue](atlas.en-us.api_meta.meta/api_meta/meta_customvalue.htm "Represents the definition of a value used in a global value set or local custom picklist. Custom picklist fields can be local and unique, or can inherit their values from a global picklist (called a global value set in API version 38.0). This type extends the Metadata metadata type and inherits its fullName field.").

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| color | string | The color assigned to the picklist value when it’s used in charts on reports and dashboards. The color is in hexadecimal format; for example, #FF6600. If a color is not specified, it’s assigned dynamically upon chart generation. |
| default | boolean | Required. Indicates whether this value is the default selection for the global picklist and the custom picklists that share its picklist value set. This field is set to true by default. |
| description | string | The global picklist value’s description. It’s useful to include a description for a global picklist value so the reason for creating it can be tracked. Limit: 255 characters. |
| isActive | boolean | Indicates whether this value is currently active or inactive. The default value is true. Users can select only active values from a picklist. An API retrieve operation for global picklist values returns all active and inactive values in the picklist. (Meanwhile, retrieving the values of a non-global, unrestricted picklist returns only the active values.) |

## PicklistValue

This metadata type defines a value in the picklist and specifies whether this value is the default value. This type extends the GlobalPicklistValue metadata type and inherits all its fields. In API version 36.0 and earlier, PicklistValue extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") type and inherits its fullName field.

Note the following when working with picklist values:

-   When you retrieve a standard object, all picklist values are retrieved, not just the customized picklist values.
-   When you deploy changes to standard picklist fields, picklist values are added as needed.
-   To deactivate a global picklist value, you can invoke an update() call on GlobalPicklist with the value omitted, or with the value’s isActive field set to false. Or, you can invoke an update() call directly on GlobalPicklistValue with the isActive field set to false.
-   If picklist values are missing from a component definition, they get deactivated when deployed. Deactivation occurs for picklist values of both standard and custom fields.

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowEmail | boolean | Indicates whether this value lets users email a quote PDF (true), or not (false). This field is only relevant for the Status field in quotes. This field is available in API version 18.0 and later. |
| closed | boolean | Indicates whether this value is associated with a closed status (true), or not (false). This field is only relevant for the standard Status field in cases and tasks. This field is available in API version 16.0 and up to version 36.0. In version 37.0, this field is in GlobalPicklistValue. |
| controllingFieldValues | string[] | A list of values in the controlling field that are linked to this picklist value. The controlling field can be a checkbox or a picklist. This field is available in API version 14.0 and later. The values in the list depend on the field type:Checkbox: checked or unchecked.Picklist: The fullname of the picklist value in the controlling field. |
| converted | boolean | Indicates whether this value is associated with a converted status (true), or not (false). This field is relevant for only the standard Lead Status field in leads. Your organization can set its own guidelines for determining when a lead is qualified, but typically, you want to convert a lead as soon as it becomes a real opportunity that you want to forecast. For more information, see “Convert Qualified Leads” in the Salesforce online help. This field is available in API version 16.0 and later. |
| cssExposed | boolean | Indicates whether this value is available in your Self-Service Portal (true), or not (false). This field is only relevant for the standard Case Reason field in cases.Self-Service provides an online support channel for your customers - allowing them to resolve their inquiries without contacting a customer service representative. For more information about Self-Service, see “Setting Up Your Self-Service Portal” in the Salesforce online help.NoteStarting with Spring ’12, the Self-Service portal isn’t available for new Salesforce orgs. Existing orgs continue to have access to the Self-Service portal.This field is available in API version 16.0 and later. |
| forecastCategory | ForecastCategories (enumeration of type string) | Indicates whether this value is associated with a forecast category (true), or not (false). This field is only relevant for the standard Stage field in opportunities.OmittedPipelineBestCaseForecastClosedThis field is available in API version 16.0 and later. |
| highPriority | boolean | Indicates whether this value is a high priority item (true), or not (false). This field is only relevant for the standard Priority field in tasks. For more information about tasks, see “Start Using Tasks” in the Salesforce online help. This field is available in API version 16.0 and later. |
| probability | int | Indicates whether this value is a probability percentage (true), or not (false). This field is only relevant for the standard Stage field in opportunities. This field is available in API version 16.0 and later. |
| reverseRole | string | A picklist value corresponding to a reverse role name for a partner. If the role is “subcontractor”, then the reverse role might be “general contractor”. Assigning a partner role to an account in Salesforce creates a reverse partner relationship so that both accounts list the other as a partner. This field is only relevant for partner roles.For more information, see “Partner Fields” in the Salesforce online help.This field is available in API version 18.0 and later. |
| reviewed | boolean | Indicates whether this value is associated with a reviewed status (true), or not (false). This field is only relevant for the standard Status field in solutions. For more information about opportunities, see “Creating Solutions” in the Salesforce online help. This field is available in API version 16.0 and later. |
| won | boolean | Indicates whether this value is associated with a closed or won status (true), or not (false). This field is only relevant for the standard Stage field in opportunities. This field is available in API version 16.0 and later. |

## Declarative Metadata Sample Definition

For an example of GlobalPicklistValue components with a package.xml that references them, see [GlobalPicklist](atlas.en-us.api_meta.meta/api_meta/meta_globalpicklist.htm#meta_globalpicklist "Represents a global picklist, or the set of shared picklist values that custom picklist fields can use. In contrast, the custom picklist fields that are based on a global picklist are of type CustomValue. This type extends the Metadata metadata type and inherits its fullName field.").

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").