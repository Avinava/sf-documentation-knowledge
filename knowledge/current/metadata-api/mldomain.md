---
title: "MlDomain"
domain: metadata-api
topic: mldomain
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.208Z
estimatedTokens: 1345
keywords: [MlDomain, Represents, Einstein, Intent, Set., File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, MlIntent, MlIntentUtterance, MlRelatedIntent, MlSlotClass, MlSlotClassValue, SynonymGroup]
---

# MlDomain

> Represents an Einstein Intent Set.

# MlDomain

Represents an Einstein Intent Set.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MlDomain components have the suffix .mlDomain and are stored in the mlDomains folder.

## Version

MlDomain components are available in API version 43.0 and later.

## Special Access Rules

This object is available only if Chat and Einstein Bots are enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Einstein Intent Set description. |
| label | string | Einstein Intent Set name. |
| mlIntents | MlIntent[] | List of intents under this Einstein Intent Set. |
| mlSlotClasses | MlSlotClass[] | List of entities under this Einstein Intent Set. |

## MlIntent

An intent in an Einstein Intent Set.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Einstein Intent Set description. |
| developerName | string | Required. This unique name prevents conflicts with other Einstein Intent Sets associated with the same bot version. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| label | string | Einstein Intent Set name. |
| mlIntentUtterances | MlIntentUtterance[] | List of customer inputs for this intent. |
| relatedMlIntents | MlRelatedIntent[] | List of intents within an Einstein Intent Set used to expand customer inputs for this intent. Only intents within local Einstein Intent Sets have related intents. |

## MlIntentUtterance

A customer input for this intent.

| Field Name | Field Type | Description |
| --- | --- | --- |
| utterance | string | A customer input or natural language query that triggers the parent intent. |

## MlRelatedIntent

An intent in an Einstein Intent Set used to expand customer inputs for this intent. Only intents within local Einstein Intent Sets have related intents.

| Field Name | Field Type | Description |
| --- | --- | --- |
| relatedMlIntent | string | Name of the intent that is used to extend the customer inputs of the current parent intent. |

## MlSlotClass

An entity in this Einstein Intent Set.

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataType | MlSlotClassDataType (enumeration of type string) | A list of the data types available for the MISlotClass. Valid values are:TextNumberBooleanDateDateTimeCurrency |
| description | string | A description of an Einstein Bot entity. |
| developerName | string | Required. This unique name prevents conflicts with other entities in an Einstein Intent Set. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| extractionRegex | string | Regular expression used to extract an entity when the type is set to Pattern. |
| extractionType | MlSlotClassExtractionType (enumeration of type string) | Required. Valid values are:PatternValue |
| label | string | Label that identifies an entity throughout the Salesforce user interface. |
| mlSlotClassValues | MlSlotClassValue[] | List of entity values associated with an entity of type Value. |

## MlSlotClassValue

An entity value associated with an entity of type Value.

| Field Name | Field Type | Description |
| --- | --- | --- |
| synonymGroup | SynonymGroup | Represents a list of terms or synonyms for the current entity value. |
| value | string | Single value used to extract an entity of type Value. |

## SynonymGroup

Represents a group of synonymous words or phrases.

| Field Name | Field Type | Description |
| --- | --- | --- |
| languages | Language (enumeration of type string) | Required. Specifies the languages the value list applies to. If value list items are specific to a single language, specify only that language. If the value list items apply to multiple languages, specify multiple languages for one value list. |
| terms | string | Required. A word or phrase synonymous with other terms in the value list. |

## Declarative Metadata Sample Definition

The following is an example of an MlDomain.

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
<MlDomain xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>TestDomainMetadata</label>
    <description>This is domain 2 for metadata testing</description>
    <mlIntents>
        <developerName>Test_Intent_New</developerName>
        <label>Test Intent New</label>
        <mlIntentUtterances>
            <utterance>Utterance Hello</utterance>
        </mlIntentUtterances>
        <mlIntentUtterances>
            <utterance>Utterance Hi</utterance>
        </mlIntentUtterances>
        <mlIntentUtterances>
            <utterance>Utterance What</utterance>
        </mlIntentUtterances>
    </mlIntents>
    <mlIntents>
        <developerName>Test_Intent_New2</developerName>
        <label>Test Intent New 2</label>
    </mlIntents>
    <mlSlotClasses>
        <developerName>Test_Entity1</developerName>
        <label>Test Entity 1</label>
        <extractionType>Value</extractionType>
        <mlSlotClassValues>
                <value>Choice value 1</value>
            </mlSlotClassValues>
            <mlSlotClassValues>
                <value>Choice value 2</value>
            </mlSlotClassValues>
    </mlSlotClasses>
    <mlSlotClasses>
        <developerName>Test_Entity2</developerName>
        <label>Test Entity 2</label>
        <extractionType>Pattern</extractionType>
    </mlSlotClasses>
    <mlSlotClasses>
            <dataType>Text</dataType>
            <description>Valid Email Address</description>
            <developerName>Email</developerName>
            <extractionRegex>\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b</extractionRegex>
            <extractionType>Pattern</extractionType>
            <label>Email</label>
    </mlSlotClasses>
    <mlSlotClasses>
        <developerName>airport</developerName>
        <extractionType>Value</extractionType>
        <label>airport</label>
        <mlSlotClassValues>
            <synonymGroup>
                <languages>en_US</languages>
                <terms>San Francisco</terms>
                <terms>The City</terms>
            </synonymGroup>
            <value>SFO</value>
        </mlSlotClassValues>
        <mlSlotClassValues>
            <synonymGroup>
                <languages>en_US</languages>
                <terms>Oakland</terms>
                <terms>The Town</terms>
            </synonymGroup>
            <value>OAK</value>
        </mlSlotClassValues>
    </mlSlotClasses>
</MlDomain>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>TestDomainMetadata</members>
        <name>MlDomain</name>
    </types>
    <version>43.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
