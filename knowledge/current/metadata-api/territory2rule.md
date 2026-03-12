---
title: "Territory2Rule"
domain: metadata-api
topic: territory2rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.481Z
estimatedTokens: 1230
keywords: [Territory2Rule, metadata, associated, territory, assignment, rule, Account, Sales, Territories, enabled, File, Suffix, Directory, Location, Version]
---

# Territory2Rule

> Represents the metadata associated with a territory
      assignment rule associated with an object, such as Account. Available if Sales
    Territories has been enabled.

# Territory2Rule

Represents the metadata associated with a territory assignment rule associated with an object, such as Account. Available if Sales Territories has been enabled.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Territory2Rule components have the suffix territory2Rule and are stored in the rules folder under the folder for the corresponding Territory2Model.

## Version

Territory2Rule components are available in API version 32.0 and later.

## Special Access

The Territory2Model object has a State field in SOAP API. States include Planning, Active, Archived, and several other states, such as Cloning, that indicate that a process is underway. Users who don’t have the Manage Territories permission can access rules that belong to the model in Active state. The Manage Territories permission is required for deploy() calls for all territory management entities, in addition to the permissions required by Metadata API. Using retrieve() without the Manage Territories permission returns only entities that belong to a Territory2Model in Active state. We recommend against retrieving without the Manage Territories permission because the call retrieves only partial data.

The SOAP API and the user interface require that a user attempting to create or edit a rule has field-level security access to the fields referenced in the rule item. This restriction is relaxed for Metadata API deploy() operations, as they require both Manage Territories and either the Modify Metadata Through Metadata API Functions or Modify All Data permissions.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether the rule is active (true) or inactive (false). Via the API, active rules run automatically when object records are created and edited. The exception is when the value of the IsExcludedFromRealign field on an object record is true, which prevents record assignment rules from evaluating that record. |
| booleanFilter | string | An advanced filter condition. For example: (1 AND 2) OR 3. Numbering must start at 1 and must be contiguous. |
| name | string | Required. The user interface label for the rule. |
| objectType | string | Required. The object that the rule is defined for. For API version 32.0, the only available object is Account. |
| ruleItems | Territory2RuleItem | The items that define a rule’s the selection criteria, such as Billing State equals California. |

## Territory2RuleItem

Represents the association of a rule item to a rule. Available in API version 32.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | The standard or custom object field that the rule item operates on. |
| operation | FilterOperation (enumeration of type string) | The criterion to apply for the rule item. For example: equals or starts with. Valid values are:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludeswithin (DISTANCE criteria only) |
| value | string | The field value or values to evaluate. For example: if the field is Billing ZIP/Postal Code, a value could be 94105. |

## Declarative Metadata Sample Definition

The following example shows the definition of a Territory2RuleItem component.

```

```

The following is a package.xml sample. FY13 and FY14 represent names of territory models and demonstrate that rules can have *identical* developer names within *different* models. A wildcard character (\*) in place of the model name can be used to retrieve all rules in all models in an org.

```

```

## Usage

-   A territory rule can have up to 10 rule items.
-   The sort order of rule items is implicitly derived from the position of the rule items in the XML
-   Rules can’t be run via Metadata API.
-   Territory Management 2.0 components don’t support packaging or change sets and aren’t supported in [CRUD calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects.").

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Territory2Rule xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Northern CA</label>
    <description>To capture northern CA based accounts</description>
    <objectType>Account</objectType>
    <active>True</active>
    <ruleItems>
        <field>BillingZip</field>
        <operation>contains</operation>
        <value><94105,94404,94536/value>
    </ruleItems>
    <ruleItems>
        <field>Industry</field>
        <operation>equals</operation>
        <value>IT</value>
    </ruleItems>
    <ruleItems>
        <field>someCustomField__c</field>
        <operation>greater_than</operation>
        <value>50000</value>
    </ruleItems>
    <booleanFilter>(1 OR 2) AND 3</booleanFilter>
</Territory2Rule>
```

```
<?xml version="1.0" encoding="UTF-8"?> 
<Package xmlns="http://soap.sforce.com/2006/04/metadata"> 
        <types> 
            <members>FY13</members>
            <members>FY14</members> 
            <name>Territory2Model</name> 
        </types>
        
        <types>
            <members>FY13.AccRule1</members>
            <members>FY14.AccRule1</members>
            <name>Territory2Rule</name>
        </types>
        
        <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- CRUD calls (atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
