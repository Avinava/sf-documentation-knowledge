---
title: "ContextDefinition"
domain: metadata-api
topic: contextdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.705Z
estimatedTokens: 3230
keywords: [ContextDefinition, context, definition, describe, relationship, node, structures, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# ContextDefinition

> Represents the details of a context definition that
			describe the relationship between the node structures within a context.

# ContextDefinition

Represents the details of a context definition that describe the relationship between the node structures within a context.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ContextDefinition components have the suffix .contextDefinition and are stored in the contextDefinitions folder.

## Version

ContextDefinition components are available in API version 59.0 and later.

## Special Access Rules

Enable the organization preference ContextDefinitionsEnabled to access the ContextDefinition metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| canBeReferenceDefinition | Field TypebooleanDescriptionIndicates whether the context definition can be referred by other context definitions (true) or not (false). Available in API version 63.0 and later.The default value is false. |
| clonedFrom | Field TypestringDescriptionThe name of the context definition that's used to clone the current context definition. |
| contextDefinitionReferences | Field TypeContextDefinitionReference[]DescriptionReferences of the context definition. |
| contextDefinitionVersions | Field TypeContextDefinitionVersion[]DescriptionVersion of the context definition. |
| contextTtl | Field TypeintDescriptionDuration to persist the data, which is loaded in the run-time context instances created by this context definition, in the cache.The default value is 10 minutes. |
| description | Field TypestringDescriptionDescription of the context definition. |
| hasSystemTags | Field TypebooleanDescriptionIndicates whether the context definition has system tags (true) or not (false). Available in API version 63.0 and later.The default value is false. |
| inheritedFrom | Field TypestringDescriptionName of the parent context definition that's used to derive the current context definition. |
| inheritedFromVersion | Field TypestringDescriptionVersion number of the parent definition that's used to derive the current context definition. |
| isProtected | Field TypebooleanDescriptionAuto-generated value that doesn’t impact the behavior of the metadata type. |
| masterLabel | Field TypestringDescriptionRequired.User-friendly name for the context definition, which is defined when the context definition is created. |
| title | Field TypestringDescriptionRequired.Name of the context definition. |

## ContextDefinitionReference

Represents details about the context definition reference.

| Field Name | Description |
| --- | --- |
| inheritedFrom | Field TypestringDescriptionID of the parent context definition reference that's used to derive the current context definition reference. |
| referenceContextDefinition | Field TypestringDescriptionRequired.ID or name of the referred context definition. |

## ContextDefinitionVersion

Represents details about the context definition version. Only one version can be active at a time.

| Field Name | Description |
| --- | --- |
| contextMappings | Field TypeContextMapping[]DescriptionMapping of attributes and nodes to related objects. |
| contextNodes | Field TypeContextNode[]DescriptionDetails of the structure of the nodes within the context. |
| endDate | Field TypestringDescriptionDate and time when the context definition version becomes inactive. |
| isActive | Field TypebooleanDescriptionIndicates whether the context definition version is active (true) or not (false).The default value is false. |
| startDate | Field TypestringDescriptionRequired.Date and time when the context definition version becomes active. |
| versionNumber | Field TypeintDescriptionRequired.Version number of the context definition. |

## ContextMapping

Represents the mapping of attributes and nodes to related objects.

| Field Name | Description |
| --- | --- |
| contextMappingIntents | Field TypeContextMappingIntent[]DescriptionPurpose associated to a context mapping. |
| contextNodeMappings | Field TypeContextNodeMapping[]DescriptionMapping of the node in the context and values in the input schema. |
| default | Field TypebooleanDescriptionIndicates whether the mapping for a context definition version is default (true) or not (false).The default value is false. |
| description | Field TypestringDescriptionDescription of the context mapping. |
| inheritedFrom | Field TypestringDescriptionName of the parent mapping that's used to derive the current mapping. |
| title | Field TypestringDescriptionRequired.Name of the context mapping. |

## ContextMappingIntent

Represents the purpose associated to a context mapping.

| Field Name | Description |
| --- | --- |
| mappingIntent | Field TypeContextMappingIntentType (enumeration of type string)DescriptionRequired.Specifies the purpose that's used to identify the type of context mapping required.Valid values are:hydrationassociationpersistencetranslation |

## ContextNodeMapping

Represents the relationship between the node in the context and values in the input schema.

| Field Name | Description |
| --- | --- |
| contextAttributeMappings | Field TypeContextAttributeMapping[]DescriptionMapping of the attribute defined in the context and the values in the related objects. |
| contextNode | Field TypestringDescriptionContext node record associated with the context node mapping. |
| contextNodeAttrDictionaries | Field TypeContextNodeAttrDictionary[]DescriptionFacilitates relationships between context node mapping and context dictionary. Additionally, it records the relationship between context node and context dictionary. |
| inheritedFrom | Field TypestringDescriptionName of the parent context node mapping that's used to derive the current context node mapping. |
| mappedContextDefinition | Field TypestringDescriptionAPI name of the context definition for existing context-to-context mappings. |
| object | Field TypestringDescriptionName of the object used for the mapping. |

## ContextAttributeMapping

Represents the relationship between the attributes defined in the context and the values in the related objects.

| Field Name | Description |
| --- | --- |
| contextAttrHydrationDetails | Field TypeContextAttrHydrationDetail[]DescriptionDetails of the SOQL (database) queries that fetch data for a chosen attribute from the input schema. |
| contextAttribute | Field TypestringDescriptionContext attribute record associated with the context attribute mapping. |
| contextInputAttributeName | Field TypestringDescriptionRequired.Name of the input attribute. |
| ctxAttrHydrationCtxs | Field TypeCtxAttrHydrationCtx[]DescriptionQuery that fetches data for a chosen attribute from the input schema for context-to-context mapping. |
| inheritedFrom | Field TypestringDescriptionName of the parent context attribute mapping that's used to derive the current context attribute mapping. |

## ContextAttrHydrationDetail

Represents the SOQL (database) queries that fetch data for a chosen attribute from the input schema.

| Field Name | Description |
| --- | --- |
| contextAttrHydrationDetails | Field TypeContextAttrHydrationDetail[]DescriptionDetails of the query that fetches the data for the specific query attribute. |
| inheritedFrom | Field TypestringDescriptionName of the parent context attribute hydration detail that's used to derive the current context attribute hydration detail. |
| objectName | Field TypestringDescriptionRequired.Name of the object used for the attribute hydration detail. |
| queryAttribute | Field TypestringDescriptionRequired.The SOQL query that is the source of the hydration. |

## CtxAttrHydrationCtx

Represents the queries that fetch data for a chosen attribute from the input schema for context-to-context mapping.

| Field Name | Description |
| --- | --- |
| contextQueryAttribute | Field TypestringDescriptionRequired.Attribute in context definition that's the source of context hydration. |
| inheritedFrom | Field TypestringDescriptionName of the parent context attribute hydration detail that's used to derive the current context attribute. |

## ContextNodeAttrDictionary

Represents the relationship between a context node and the context attribute dictionary.

| Field Name | Description |
| --- | --- |
| contextAttrDictIdentifier | Field TypestringDescriptionRequired.Developer name of the context attribute dictionary. |
| contextNodeTagPrefix | Field TypestringDescriptionRequired.Tag prefix of the context node that's used to create the unique identifier of the parent context node. |

## ContextNode

Represents details of the structure of the nodes within the context. Each node can have other nodes related to them and attributes to describe the object. You can also define a hierarchy for the nodes.

| Field Name | Description |
| --- | --- |
| canonicalNode | Field TypestringDescriptionCanonical node that's associated with the context node. |
| contextAttributes | Field TypeContextAttribute[]DescriptionDetails of the attribute used to describe the context node. |
| contextNodeAttrDictionaries | Field TypeContextNodeAttrDictionary[]DescriptionFacilitates relationships between context node and context dictionary. Additionally, it records the relationship between context node and context dictionary. |
| contextTags | Field TypeContextTag[]DescriptionUnique identifier of the attribute or node. |
| displayName | Field TypestringDescriptionDisplay name of the context node. |
| inheritedFrom | Field TypestringDescriptionName of the parent context node that's used to derive the current context node. |
| title | Field TypestringDescriptionRequired.Name of the context node. |
| transposable | Field TypebooleanDescriptionIndicates whether the data in the Context Node record can be converted to field names (true) or not (false).The default value is false. |

## ContextAttribute

Represents details of an attribute used to describe a context node. Each node can have one or many associated attributes.

| Field Name | Description |
| --- | --- |
| contextTags | Field TypeContextTag[]DescriptionShortened name of the attribute or node. |
| dataType | Field TypeContextAttributeDataType (enumeration of type string)DescriptionRequired.Type of data that's stored in the context attribute.Valid values are:booleancurrencydatedatetimenumberpercentpicklistreferencestringselfreference—Available in API version 63.0 and later. |
| description | Field TypestringDescriptionDescription of the context attribute. |
| displayName | Field TypestringDescriptionDisplay name of the context attribute. |
| domainSet | Field TypestringDescriptionList of node references to show the parent-child relationship between the nodes in a definition. |
| fieldType | Field TypeContextAttributeFieldType (enumeration of type string)DescriptionRequired.List of node references to depict the parent-child relation between the nodes in a definition.Valid values are:aggregateinputinputoutputoutput |
| inheritedFrom | Field TypestringDescriptionName of the parent attribute that's used to derive the current attribute. |
| key | Field TypebooleanDescriptionIndicates whether the attribute is a key attribute in the node (true) or not (false).The default value is false. |
| title | Field TypestringDescriptionRequired.Name of the context attribute. |
| transient | Field TypebooleanDescriptionIndicates if an attribute is skipped in context persistence (true) or not (false). Available in API version 63.0 and later.The default value is false. |
| value | Field TypebooleanDescriptionIndicates whether the attribute identifies as a value in a node (true) or not (false).The default value is false. |

## ContextTag

Represents a unique identifier of an attribute or node instead of a fully qualified tag structure name.

| Field Name | Description |
| --- | --- |
| title | Field TypestringDescriptionRequired.Name of the context tag. |
| inheritedFrom | Field TypestringDescriptionName of the parent context tag that's used to derive the current context tag. |

## Declarative Metadata Sample Definition

The following is an example of a ContextDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ContextDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>Test</fullName>
    <contextDefinitionVersions>
        <contextMappings>
            <contextNodeMappings>
                <contextNodeAttrDictionaries>
                    <contextAttrDictIdentifier>Context Attribute Dictionary Name</contextAttrDictIdentifier>
                    <contextNodeTagPrefix>Context Node Tag Prefix</contextNodeTagPrefix>
                </contextNodeAttrDictionaries>
                <contextAttributeMappings>
                    <contextAttrHydrationDetails>
                        <objectName>CustomAccount__c</objectName>
                        <queryAttribute>Name</queryAttribute>
                        <inheritedFrom>StandardDefinition/version/CustomAccountMapping/Praneeth/AccountName/hydrationInfo-1</inheritedFrom>
                    </contextAttrHydrationDetails>
                    <ctxAttrHydrationCtxs>
                        <contextQueryAttribute>StandardDefinition</contextQueryAttribute>
                        <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/AccountName/ctxToCtxhydrationInfo-1</inheritedFrom>
                    </ctxAttrHydrationCtxs>
                    <contextAttribute>AccountName</contextAttribute>
                    <contextInputAttributeName>AccountName</contextInputAttributeName>
                    <inheritedFrom>StandardDefinition/version/CustomAccountMapping/Praneeth/AccountName</inheritedFrom>
                </contextAttributeMappings>
                <contextAttributeMappings>
                    <contextAttrHydrationDetails>
                        <objectName>CustomAccount__c</objectName>
                        <queryAttribute>CustomAccountName__c</queryAttribute>
                        <inheritedFrom>StandardDefinition/version/CustomAccountMapping/Praneeth/CustomAccountName/hydrationInfo-1</inheritedFrom>
                    </contextAttrHydrationDetails>
                    <ctxAttrHydrationCtxs>
                        <contextQueryAttribute>StandardDefinition</contextQueryAttribute>
                        <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/AccountName/ctxToCtxhydrationInfo-1</inheritedFrom>
                    </ctxAttrHydrationCtxs>
                    <contextAttribute>CustomAccountName</contextAttribute>
                    <contextInputAttributeName>CustomAccountName</contextInputAttributeName>
                    <inheritedFrom>StandardDefinition/version/CustomAccountMapping/Praneeth/CustomAccountName</inheritedFrom>
                </contextAttributeMappings>
                <contextNode>Praneeth</contextNode>
                <object>CustomAccount__c</object>
                <inheritedFrom>StandardDefinition/version/CustomAccountMapping/Praneeth</inheritedFrom>
                <mappedContextDefinition>CustomContextDefinition</mappedContextDefinition>
            </contextNodeMappings>
            <contextMappingIntents>
                <mappingIntent>hydration</mappingIntent>
            </contextMappingIntents>
            <default>true</default>
            <title>CustomAccountMapping</title>
            <inheritedFrom>StandardDefinition/version/CustomAccountMapping</inheritedFrom>
        </contextMappings>
        <contextMappings>
            <contextNodeMappings>
                <contextNodeAttrDictionaries>
                    <contextAttrDictIdentifier>Context Attribute Dictionary Name</contextAttrDictIdentifier>
                    <contextNodeTagPrefix>Context Node Tag Prefix</contextNodeTagPrefix>
                </contextNodeAttrDictionaries>
                <contextAttributeMappings>
                    <contextAttrHydrationDetails>
                        <objectName>Account</objectName>
                        <queryAttribute>Name</queryAttribute>
                        <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/CustomAccountName/AccountName/hydrationInfo-1</inheritedFrom>
                    </contextAttrHydrationDetails>
                    <ctxAttrHydrationCtxs>
                        <contextQueryAttribute>StandardDefinition</contextQueryAttribute>
                        <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/AccountName/ctxToCtxhydrationInfo-1</inheritedFrom>
                    </ctxAttrHydrationCtxs>
                    <contextAttribute>AccountName</contextAttribute>
                    <contextInputAttributeName>AccountName</contextInputAttributeName>
                    <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/CustomAccountName/AccountName</inheritedFrom>
                </contextAttributeMappings>
                <contextAttributeMappings>
                    <contextAttrHydrationDetails>
                        <objectName>Account</objectName>
                        <queryAttribute>CustomAccountName__c</queryAttribute>
                        <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/CustomAccountName/hydrationInfo-1</inheritedFrom>
                    </contextAttrHydrationDetails>
                    <ctxAttrHydrationCtxs>
                        <contextQueryAttribute>StandardDefinition</contextQueryAttribute>
                        <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/AccountName/ctxToCtxhydrationInfo-1</inheritedFrom>
                    </ctxAttrHydrationCtxs>
                    <contextAttribute>CustomAccountName</contextAttribute>
                    <contextInputAttributeName>CustomAccountName</contextInputAttributeName>
                    <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth/CustomAccountName</inheritedFrom>
                </contextAttributeMappings>
                <contextNode>Praneeth</contextNode>
                <object>Account</object>
                <inheritedFrom>StandardDefinition/version/AccountMapping/Praneeth</inheritedFrom>
                <mappedContextDefinition>CustomContextDefinition</mappedContextDefinition>
            </contextNodeMappings>
             <contextMappingIntents>
                <mappingIntent>persistence</mappingIntent>
             </contextMappingIntents>
            <description>Account Mapping</description>
            <default>false</default>
            <title>AccountMapping</title>
            <inheritedFrom>StandardDefinition/version/AccountMapping</inheritedFrom>
        </contextMappings>
        <contextNodes>
            <contextNodeAttrDictionaries>
                <contextAttrDictIdentifier>Context Attribute Dictionary Name</contextAttrDictIdentifier>
                <contextNodeTagPrefix>Context Node Tag Prefix</contextNodeTagPrefix>
            </contextNodeAttrDictionaries>
            <contextAttributes>
                <contextTags>
                    <title>AccountName</title>
                    <inheritedFrom>StandardDefinition/version/Praneeth/AccountName/AccountName</inheritedFrom>
                </contextTags>
                <dataType>string</dataType>
                <fieldType>inputoutput</fieldType>
                <key>false</key>
                <title>AccountName</title>
                <displayName>AccountName</displayName>
                <description>Test Description</description>
                <value>false</value>
                <inheritedFrom>StandardDefinition/version/Praneeth/AccountName</inheritedFrom>
            </contextAttributes>
            <contextAttributes>
                <dataType>string</dataType>
                <fieldType>inputoutput</fieldType>
                <key>false</key>
                <title>CustomAccountName</title>
                <value>false</value>
                <displayName>CustomAccountName</displayName>
                <description>Test Description</description>
                <inheritedFrom>StandardDefinition/version/Praneeth/CustomAccountName</inheritedFrom>
            </contextAttributes>
            <contextTags>
                <title>Praneeth</title>
                <inheritedFrom>StandardDefinition/version/Praneeth/Praneeth</inheritedFrom>
            </contextTags>
            <title>Praneeth</title>
            <transposable>false</transposable>
            <inheritedFrom>StandardDefinition/version/Praneeth</inheritedFrom>
            <canonicalNode></canonicalNode>
            <displayName>Praneeth</displayName>
        </contextNodes>
        <endDate>2097-05-10 00:00:00</endDate>
        <startDate>2023-05-10 00:00:00</startDate>
        <versionNumber>1</versionNumber>
        <isActive>true</isActive>
    </contextDefinitionVersions>
    <description>Test Description</description>
    <contextTtl>10</contextTtl>
    <inheritedFrom>StandardDefinition</inheritedFrom>
    <inheritedFromVersion>1.0</inheritedFromVersion>
    <clonedFrom>OriginalDefinition</clonedFrom>
    <isProtected>false</isProtected>
    <masterLabel>Test Label</masterLabel>
    <title>TestTitle</title>
    <displayName>TestTitle</displayName>
</ContextDefinition>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Test</members>
        <name>ContextDefinition</name>
    </types>
    <types>
        <members>Account.CustomAccountName__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>CustomAccount__c</members>
        <name>CustomObject</name>
    </types>
    <version>64.0</version>
</Package>
```
