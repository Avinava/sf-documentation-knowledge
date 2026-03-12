---
title: "SearchCustomization"
domain: metadata-api
topic: searchcustomization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.613Z
estimatedTokens: 1176
keywords: [SearchCustomization, Represents, configuration, search, settings, created, Search, Manager., includes, channel, searchable, objects, fields, rules, filter, results., Important, Parent, File, Suffix]
---

# SearchCustomization

> Represents the configuration of search settings created in
      Search Manager. The configuration includes the search channel, searchable objects and fields,
      and rules to filter search results.

# SearchCustomization

Represents the configuration of search settings created in Search Manager. The configuration includes the search channel, searchable objects and fields, and rules to filter search results.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SearchCustomization components have the suffix .searchCustomization and are stored in the searchCustomizations folder.

## Version

SearchCustomization components are available in API version 61.0 and later.

## Special Access Rules

Only users with the View Setup and Configuration permission can access this object, and only users with the Customize Application permission can edit it.

## Fields

| Field Name | Description |
| --- | --- |
| channel | Field TypestringDescriptionRequired.The search channel that the configuration applies to. |
| masterLabel | Field TypestringDescriptionRequired.The name of the configuration. |
| objectOverride | Field TypeSearchCustomizationObjectOverride[]DescriptionA list of object configurations. |
| objectToAlwaysSearch | Field Typestring[]DescriptionA list of the objects that are always searched for the user profile if the search channel is Einstein Global Search Bar. |
| profile | Field TypestringDescriptionSpecifies user profile if the search channel is Einstein Global Search Bar. |
| selectedObject | Field Typestring[]DescriptionA list of the objects that are selected in the configuration if the search channel is LWR Experience Sites. |
| selectedProfile | Field Typestring[]DescriptionSpecifies all user profiles that are associated with a Search configuration if the search channel is Einstein Global Search Bar. This field is available in API version 62.0 and later. |

## SearchCustomizationObjectOverride

Represents the configuration for a specific object.

| Field Name | Description |
| --- | --- |
| fieldOverride | Field TypeSearchCustomizationFieldOverride[]DescriptionA list of field configurations. |
| objectApiName | Field TypestringDescriptionRequired.The API name of the object that the configuration is applied to. |
| rule | Field TypeSearchCustomizationRule[]DescriptionA list of rules applied to filter search results. |
| searchable | Field TypebooleanDescriptionIndicates whether the object is searchable (true) or not (false). |

## SearchCustomizationFieldOverride

Represents the configuration for a specific field within an object.

| Field Name | Description |
| --- | --- |
| fieldApiName | Field TypestringDescriptionRequired.The API name of the field that the configuration is applied to. |
| searchable | Field TypebooleanDescriptionRequired.Indicates whether the field is searchable (true) or not (false). |

## SearchCustomizationRule

Represents the rules defined in an object to filter search results.

| Field Name | Description |
| --- | --- |
| fieldApiName | Field TypestringDescriptionRequired.The field that the rule applies to. |
| operator | Field TypestringDescriptionRequired.The operator for the rule. |
| ruleValue | Field TypeSearchCustomizationRuleValue[]DescriptionA list of rule values. |

## SearchCustomizationRuleValue

Represents the value of a rule used to filter search results.

| Field Name | Description |
| --- | --- |
| targetObjectApiName | Field TypestringDescriptionThe API name of the target object, in case the rule applies to a lookup field. |
| value | Field TypestringDescriptionRequired.The value of the rule. |

## Declarative Metadata Sample Definition

The following is an example of a SearchCustomization component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SearchCustomization xmlns="http://soap.sforce.com/2006/04/metadata">
    <channel>GlobalSearch</channel>
    <masterLabel>My_Standard_User_Configuration</masterLabel>
    <objectOverride>
        <fieldOverride>
            <fieldApiName>Description</fieldApiName>
            <searchable>false</searchable>
        </fieldOverride>
        <fieldOverride>
            <fieldApiName>Rating</fieldApiName>
            <searchable>true</searchable>
        </fieldOverride>
        <objectApiName>Account</objectApiName>
        <rule>
            <fieldApiName>My_Custom_Field__c</fieldApiName>
            <operator>ne</operator>
            <ruleValue>
                <value>Other</value>
            </ruleValue>
        </rule>
        <rule>
            <fieldApiName>Rating</fieldApiName>
            <operator>in</operator>
            <ruleValue>
                <value>Hot</value>
            </ruleValue>
            <ruleValue>
                <value>Warm</value>
            </ruleValue>
        </rule>
    </objectOverride>
    <objectOverride>
        <objectApiName>Asset</objectApiName>
        <searchable>false</searchable>
    </objectOverride>
    <objectOverride>
        <objectApiName>Contact</objectApiName>
        <rule>
            <fieldApiName>AccountId</fieldApiName>
            <operator>ne</operator>
            <ruleValue>
                <targetObjectApiName>Account</targetObjectApiName>
                <value>A Company</value>
            </ruleValue>
        </rule>
        <rule>
            <fieldApiName>DoNotCall</fieldApiName>
            <operator>eq</operator>
            <ruleValue>
                <value>false</value>
            </ruleValue>
        </rule>
    </objectOverride>
    <objectToAlwaysSearch>Account</objectToAlwaysSearch>
    <objectToAlwaysSearch>Contact</objectToAlwaysSearch>
    <objectToAlwaysSearch>My_Custom_Object__c</objectToAlwaysSearch>
    <objectToAlwaysSearch>Product2</objectToAlwaysSearch>
    <profile>standard</profile>
</SearchCustomization>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>SearchCustomization</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the
          Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
