---
title: "InvocableActionExtension"
domain: metadata-api
topic: invocableactionextension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:40.153Z
estimatedTokens: 956
keywords: [InvocableActionExtension, configuration, how, action's, inputs, presented, user, Parent, File, Suffix, Directory, Location, Version, InvocableActionExtensionTarget, InvocableActionExtensionTargetAttribute]
---

# InvocableActionExtension

> Represents the configuration that defines how an
			action's inputs are presented in a user interface.

# InvocableActionExtension

Represents the configuration that defines how an action's inputs are presented in a user interface.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

InvocableActionExtension components have the suffix .invocableactionextension and are stored in the invocableactionextensions folder.

## Version

InvocableActionExtension components are available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| targets | Field TypeInvocableActionExtensionTarget[]DescriptionThe target of this invocable action extension. |

## InvocableActionExtensionTarget

Represents an extension that can contain attributes for an action's definition, parameters, and types. Use InvocableActionExtensionTarget as the parent element for a given target, such as an ActionParameter. Each assigned attribute is a child of this element.

| Field Name | Description |
| --- | --- |
| attributes | Field TypeInvocableActionExtensionTargetAttribute[]DescriptionThe list of attributes. |
| targetName | Field TypestringDescriptionRequired.The name of the target for the attributes. |
| targetType | Field TypeInvocableActionExtTargetType (enumeration of type string)DescriptionRequired.Specifies the type of component within the invocable action.Values are:ActionDefinition—Targets the action class.ActionParameter—Targets the specific input/output parameters.TypeDefinition—Targets the custom Apex types used by the action.TypeProperty—Targets the individual properties within those custom types. |

## InvocableActionExtensionTargetAttribute

Represents the individual configuration attributes within an extension target. Use InvocableActionExtensionTargetAttribute as the child element of [InvocableActionExtensionTarget](#InvocableActionExtensionTarget) to define specific behaviors, dependencies, and properties. Each attribute consists of a key-value pair with an associated data type. This configuration determines how the target action parameter, type property, or action definition behaves.

| Field Name | Description |
| --- | --- |
| dataType | Field TypeInvocableActionExtAttributeDataType (enumeration of type string)DescriptionRequired.The data type of the value stored in the value field.Values are:BooleanDateDoubleIntegerLongString |
| key | Field TypestringDescriptionRequired.The key field that specifies which standard attribute to provide a value for, or provides a custom key. The available standard keys are:OrderGroupNameControllingFieldFor a custom key, enter any value that contains letters, numbers, or single underscores, starts with a letter, and ends with __c. |
| value | Field TypestringDescriptionRequired.The value of the associated key. An Invocable Action Extension can have multiple attributes, each with its own value. |

## Declarative Metadata Sample Definition

The following example shows an InvocableActionExtension component definition.

```

```

The following example shows a package.xml file that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<InvocableActionExt xmlns="http://soap.sforce.com/2006/04/metadata">
    <targets>
        <targetType>ActionParameter</targetType>
        <targetName>Example.Request.inputOne</targetName>
        <attributes>
            <key>Order</key>
            <dataType>Integer</dataType>
            <value>1</value>
        </attributes>
        <attributes>
            <key>Group</key>
            <dataType>String</dataType>
            <value>Group A</value>
        </attributes>
    </targets>
    <targets>
        <targetType>ActionParameter</targetType>
        <targetName>Example.Request.inputTwo</targetName>
        <attributes>
            <key>Order</key>
            <dataType>Integer</dataType>
            <value>2</value>
        </attributes>
        <attributes>
            <key>Group</key>
            <dataType>String</dataType>
            <value>Group A</value>
        </attributes>
    </targets>
    <targets>
        <targetType>ActionParameter</targetType>
        <targetName>Example.Request.inputThree</targetName>
        <attributes>
            <key>Order</key>
            <dataType>Integer</dataType>
            <value>3</value>
        </attributes>
        <attributes>
            <key>Group</key>
            <dataType>String</dataType>
            <value>Group B</value>
        </attributes>
    </targets>
</InvocableActionExt>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Example</members>
        <name>InvocableActionExtension</name>
    </types>
    <version>65.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
