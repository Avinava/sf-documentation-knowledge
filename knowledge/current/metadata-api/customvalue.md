---
title: "CustomValue"
domain: metadata-api
topic: customvalue
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.590Z
keywords: [CustomValue, Note, File, Suffix, Directory, Location, Version, Fields, StandardValue, Declarative, Metadata, Sample, Definition]
---

# CustomValue

# CustomValue

Represents the definition of a value used in a global value set or local custom picklist. Custom picklist fields can be local and unique, or can inherit their values from a global picklist (called a global value set in API version 38.0). This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

To deactivate a global picklist value, you can invoke an update() call on GlobalPicklist (API version 37.0) or GlobalValueSet (API version 38.0 and later) with the value omitted, or with the value’s isActive field set to false. Or, you can invoke an update() call directly on GlobalPicklistValue (API version 37.0) or CustomValue (API version 38.0 and later) with the isActive field set to false.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If picklist values are missing from a component definition, they get deactivated when deployed. Deactivation occurs for picklist values of both standard and custom fields.

CustomValue doesn’t support file-based operations and only supports CRUD-based calls. CustomValue is retrieved or deployed together with a GlobalValueSet or CustomObject component.

## File Suffix and Directory Location

CustomValue components have the suffix .customValue. A CustomValue component is returned with either a GlobalValueSet or CustomObject component.

## Version

CustomValue components are available in API version 38.0 and later. CustomValue replaces GlobalPicklistValue from API version 37.0.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| color | string | The color assigned to the picklist value when it’s used in charts on reports and dashboards. The color is in hexadecimal format; for example, #FF6600. If a color isn’t specified, it’s assigned dynamically upon chart generation. |
| default | boolean | Required. Indicates whether this value is the default selection for the global picklist and the custom picklists that share its picklist value set. This field is set to true by default. |
| description | string | A picklist value’s description. It’s useful to include a description for a picklist value so the reason for creating it can be tracked. Limit: 255 characters. |
| isActive | boolean | Indicates whether this value is active or inactive. The default value is true. Users can select only active values from a picklist. An API retrieve operation for global picklist values returns all active and inactive values in the picklist. But retrieving the values of a non-global, unrestricted picklist returns only the active values. |
| label | string | The value’s display label. If you don’t specify the label when creating a value it defaults to the API name. Available in API version 39.0 and later. |

## StandardValue

This metadata type defines a value in a value set for a standard picklist and specifies whether this value is the default value. This type extends the CustomValue metadata type and inherits all its fields.

When you deploy changes to standard picklist fields, picklist values are added as needed.

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowEmail | boolean | Indicates whether this value lets users email a quote PDF (true), or not (false). This field is only relevant for the Status field in quotes. This field is available in API version 18.0 and later. |
| closed | boolean | Indicates whether this value is associated with a closed status (true), or not (false). This field is only relevant for the standard Status field in cases and tasks. This field is available in API version 16.0 and up to version 36.0. In version 37.0, this field is in GlobalPicklistValue. |
| converted | boolean | Indicates whether this value is associated with a converted status (true), or not (false). This field is relevant for only the standard Lead Status field in leads. Your organization can set its own guidelines for determining when a lead is qualified, but typically, you want to convert a lead as soon as it becomes a real opportunity that you want to forecast. For more information, see Convert Qualified Leads in Salesforce Help. This field is available in API version 16.0 and later. |
| cssExposed | boolean | Indicates whether this value is available in your Self-Service Portal (true), or not (false). This field is only relevant for the standard Case Reason field in cases.Self-Service provides an online support channel for your customers - allowing them to resolve their inquiries without contacting a customer service representative. For more information about Self-Service, see Setting Up Your Self-Service Portal in Salesforce Help.NoteStarting with Spring ’12, the Self-Service portal isn’t available for new Salesforce orgs. Existing orgs continue to have access to the Self-Service portal.This field is available in API version 16.0 and later. |
| forecastCategory | ForecastCategories (enumeration of type string) | Indicates whether this value is associated with a forecast category (true), or not (false). This field is only relevant for the standard Stage field in opportunities.OmittedPipelineBestCaseForecastClosedThis field is available in API version 16.0 and later. |
| highPriority | boolean | Indicates whether this value is a high priority item (true), or not (false). This field is only relevant for the standard Priority field in tasks. For more information about tasks, see Start Using Tasks in Salesforce Help. This field is available in API version 16.0 and later. |
| probability | int | Indicates whether this value is a probability percentage (true), or not (false). This field is only relevant for the standard Stage field in opportunities. This field is available in API version 16.0 and later. |
| reverseRole | string | A picklist value corresponding to a reverse role name for a partner. If the role is subcontractor, then the reverse role might be general contractor. Assigning a partner role to an account in Salesforce creates a reverse partner relationship so that both accounts list the other as a partner. This field is only relevant for partner roles.For more information, see Partner Fields in Salesforce Help.This field is available in API version 18.0 and later. |
| reviewed | boolean | Indicates whether this value is associated with a reviewed status (true), or not (false). This field is only relevant for the standard Status field in solutions. For more information about opportunities, see Creating Solutions in Salesforce Help. This field is available in API version 16.0 and later. |
| won | boolean | Indicates whether this value is associated with a closed or won status (true), or not (false). This field is only relevant for the standard Stage field in opportunities. This field is available in API version 16.0 and later. |

## Declarative Metadata Sample Definition

For an example of CustomValue components within a GlobalValueSet component that’s referenced by a package.xml, see [GlobalValueSet](atlas.en-us.api_meta.meta/api_meta/meta_globalvalueset.htm "Represents the metadata for a global picklist value set, which is the set of shared values that custom picklist fields can use. A global value set isn’t a field itself. In contrast, the custom picklist fields that are based on a global picklist are of type ValueSet. This type extends the Metadata metadata type and inherits its fullName field.").