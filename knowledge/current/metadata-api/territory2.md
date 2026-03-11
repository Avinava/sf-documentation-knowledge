---
title: "Territory2"
domain: metadata-api
topic: territory2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.843Z
keywords: [Territory2, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, FieldValue, Territory2AccessLevel, Territory2RuleAssociation, Declarative, Metadata, Sample, Definition, Usage, Wildcard, Support]
---

# Territory2

# Territory2

Represents the metadata associated with a sales territory. This type extends the Metadata metadata type and inherits its fullName field. Available if Sales Territories has been enabled.

## File Suffix and Directory Location

Territory2 components have the suffix territory2 and are stored in the territories folder under the folder for the corresponding Territory2Model.

## Version

Territory2 components are available in API version 32.0 and later.

## Special Access Rules

The Territory2Model object has a State field in the SOAP API. States include Planning, Active, Archived, and several other states, such as Cloning, that indicate that a process is underway. Users who do not have the Manage Territories permission can access territories that belong to the model in Active state. The Manage Territories permission is required for deploy() calls for all territory management entities. Using retrieve() without the Manage Territories permission returns only entities that belong to a Territory2Model in Active state. We recommend against retrieving without the Manage Territories permission because the call retrieves only partial data.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| accountAccessLevel | string | Specifies whether users in this territory can access accounts that are assigned to this territory and are otherwise inaccessible. Valid values are:ReadEditAllIf your organization’s sharing model for accounts is Public Read/Write, valid values are only Edit and All. If no value is set for this field, this field value uses the default access level that is specified in Territory2Settings as permitted by the organization’s sharing settings. |
| caseAccessLevel | string | Specifies whether users in this territory can access cases that are assigned to this territory and are otherwise inaccessible. Valid values are:NoneReadEditSpecify no value if your organization’s sharing model for cases/opportunities is Public Read/Write. If no value is set for this field, this field value uses the default access level that is specified in Territory2Settings as permitted by the organization’s sharing settings. |
| contactAccessLevel | string | Specifies whether users in this territory can access contacts that are assigned to this territory and are otherwise inaccessible. Valid values are:NoneReadEditSpecify no value if your organization’s sharing model for contacts is Public Read/Write or Controlled By Parent. |
| customFields | FieldValue | Values for custom fields defined on the Territory2 object and used by this territory. Their metadata is captured separately in CustomObject. Note the following:Territory2 and Territory2Model objects do not handle values for Text Area (Long), Text Area (Rich), and text-encrypted custom fields.Fields are referenced using their API names. Compound field types like Location appear as their constituent column fields. For example, nnn_Latitude__s, nnn_Longitude__s where “nnn” is the field name and the suffixes are the geolocation components.Values of required custom fields are enforced during the deploy() operation. |
| description | string | A description of the territory. |
| name | string | Required. The user interface label for the territory. |
| objectAccessLevels | Territory2AccessLevel | Represents the user access levels of an object associated to a territory. Available in API version 57.0 and later. |
| opportunityAccessLevel | string | Specifies whether users in this territory can access opportunities that are assigned to this territory and are otherwise inaccessible. Valid values are:NoneReadEditSpecify no value if your organization’s sharing model for cases/opportunities is Public Read/Write. If no value is set for this field, this field value uses the default access level that is specified in Territory2Settings as permitted by the organization’s sharing settings. |
| parentTerritory | string | The name of the territory’s parent. When you specify the parent territory, use the developer name. Do not use the “fully qualified” name. Custom fields with no values are retrieved with values of type: <value xsi:nil="true"/>. You can also use <value xsi:nil="true"/> syntax to remove existing values in custom fields. |
| ruleAssociations | Territory2RuleAssociation[] | Represents an object assignment rule and its association to a territory. Use the developer name of the rule. |
| territory2Type | string | Required. The territory type that the territory belongs to. |

## FieldValue

Represents the values of custom fields on the Territory2 object. Available in API version 32.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The user interface label for the territory. |
| value | any type | The value of the field, which can also be null. The field type is specified in the XML and depends on the field value. |

## Territory2AccessLevel

Represents the association of an object access level to a territory. Available in API version 57.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessLevel | string | Required. Valid values are:ReadEditTransferAllIf your organization’s sharing model for accounts is Public Read/Write, valid values are only Edit and All. If no value is set for this field, this field value uses the default access level that is specified in Territory2Settings as permitted by the organization’s sharing settings. |
| objectType | string | Required. The type of object associated to the territory. For example, Lead. |

## Territory2RuleAssociation

Represents the association of an object assignment rule to a territory. Available in API version 32.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inherited | boolean | Required. Indicates whether the rule is inherited from a parent territory (true) or local to the current territory (false).Rule inheritance flows from the parent territory where the rule is created to the rule’s descendent territories, if any, in the territory model hierarchy. A local rule is created within a single territory and affects that territory only. |
| ruleName | string | Required. The name of a rule associated with the territory. It isn’t necessary to fully qualify ruleName because Metadata API assumes that the rule belongs to the same model as the territory. |

## Declarative Metadata Sample Definition

The following example shows the definition of a Territory2 component.

```

```

The following is a package.xml sample. FY13 and FY14 represent the names of territory models and demonstrate that rules can have identical developer names within different models. A wildcard character (\*) in place of the model name can be used to retrieve all rules in all models in an organization.

```

```

## Usage

-   Triggers defined on Territory2 do *not* fire during a deploy() operation unless there is a deployment failure. For example, when a child territory references a parent and deploys before the parent territory, the failed components try to deploy again one at a time, allowing triggers to run.
-   Sales Territories components don’t support packaging or change sets and aren’t supported in [CRUD calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects.").
-   For unlocked packaging, Territory2 requires packages without a namespace.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").