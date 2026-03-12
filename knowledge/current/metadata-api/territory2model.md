---
title: "Territory2Model"
domain: metadata-api
topic: territory2model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.472Z
estimatedTokens: 1214
keywords: [Territory2Model, metadata, associated, territory, model, Sales, Territories, extends, inherits, fullName, enabled, File, Suffix, Directory, Location]
---

# Territory2Model

> Represents the metadata associated with a territory
      model in Sales Territories.
    This type extends the Metadata metadata type and inherits its
                        fullName field. Available if Sales
    Territories has been enabled.

# Territory2Model

Represents the metadata associated with a territory model in Sales Territories. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. Available if Sales Territories has been enabled.

## File Suffix and Directory Location

Territory2Model components have the suffix territory2Model and are stored in the territory2Models folder.

## Version

Territory2Model components are available in API version 32.0 and later.

## Special Access Rules

The Territory2Model object has a State field in the SOAP API. States include Planning, Active, Archived, and several other states, such as Cloning, that indicate that a process is underway. Users who do not have the Manage Territories permission can access models in Active state. The Manage Territories permission is required for deploy() calls for all territory management entities. Using retrieve() without the Manage Territories permission returns only entities that belong to a Territory2Model in Active state. We recommend against retrieving without the Manage Territories permission because the call retrieves only partial data.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| customFields | FieldValue | Custom fields defined on the Territory2Model object and used by this model. Their metadata is captured separately.Territory2 and Territory2Model objects do not handle values for Text Area (Long), Text Area (Rich), and text-encrypted custom fields.Fields are referenced using their API names. Compound field types like Location appear as their constituent column fields. For example, nnn_Latitude__s, nnn_Longitude__s where “nnn” is the field name and the suffixes are the geolocation components.Values of required custom fields are enforced during the deploy() operation. |
| description | string | A description for the territory model. |
| name | string | Required. The user interface label for the territory model. |

## Declarative Metadata Sample Definition

The following example shows the definition of a Territory2Model component.

```

```

## Usage

-   The retrieve() call *does not* return models in these four states: Cloning, Cloning Failed, Deleting, and Deletion Failed.
-   Whenever a model is created, its initial state is Planning. You can only do a deploy() operation for models in Planning or Active state. The same requirement applies to territories and rules associated with those models. For example, sometimes you can have a model in Planning state on a sandbox org, and a model with the same developer name in Archived state on your production org. The deploy() operation on production fails because that model’s state is Archived and that state prevents changes to the model.
-   Because of the state restrictions, if you have territory models in different orgs with identical developer names and you attempt a deploy() operation, Metadata API attempts to create new models. However, that operation fails because of the developer name conflict. For example, sometimes you can have a model in Planning state on a sandbox org, and a model with the same developer name in Archived state on your production org. The deploy() operation on production fails because that model’s state is Archived and that state prevents changes to the model.
-   If you try to delete a model that has territories, then the delete() call changes the model’s state to Deleting and cascade deletes all territories, rules, and user associations in the model. Deleting can take some time depending on the number of territories in the model.
-   Whenever a model is created, its initial state is Planning. If a model with the same developer name already exists, it already has a state, so we do not include the State field in Territory2.
-   Sales Territories components don’t support packaging or change sets and aren’t supported in [CRUD calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects.").
-   Namespaces aren’t supported for unlocked packages.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
    <Territory2Model xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <name>FY13</name>
    <description>Geographic allocation</description>
    <customFields>
        <name>Activation_DateTime__c</name>
        <value xsi:type="xsd:dateTime">2014-07-16T05:05:00.000Z</value>
    </customFields>
    <customFields>
        <name>AutoNumber__c</name>
        <value xsi:type="xsd:string">M# 000001</value>
    </customFields>
    <customFields>
        <name>DeactivationDate__c</name>
        <value xsi:type="xsd:date">2016-07-12</value>
    </customFields>
    <customFields>
        <name>External_Id__c</name>
        <value xsi:nil="true"/>
    </customFields>
</Territory2Model>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- FieldValue (atlas.en-us.api_meta.meta/api_meta/meta_territory2.htm)
- CRUD
            calls (atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
