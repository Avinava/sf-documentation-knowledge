---
title: "ExpressionSetMessageToken"
domain: metadata-api
topic: expressionsetmessagetoken
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.563Z
estimatedTokens: 535
keywords: [ExpressionSetMessageToken, Represents, retrieve, deploy, create, update, delete, information, Expression, Set, Message, Token., Important, Parent, File, Suffix, Directory, Location, Version, Special]
---

# ExpressionSetMessageToken

> Represents an interface to retrieve, deploy,
			create, update, or delete information on Expression Set Message Token.

# ExpressionSetMessageToken

Represents an interface to retrieve, deploy, create, update, or delete information on Expression Set Message Token.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExpressionSetMessageToken components have the suffix expressionSetMessageToken and are stored in the ExpressionSetMessageToken folder.

## Version

ExpressionSetMessageToken components are available in API version 59.0 and later.

## Special Access Rules

InteractionCalculation.orgHasBREandDESAccess Org permission set license is required for users to access this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionRequired.Description of the expression set message token. |
| developerName | Field TypestringDescriptionRequired.Developer name of the expression set message token. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for ExpressionSetMessageToken, which is defined when the ExpressionSetMessageToken is created. |

## Declarative Metadata Sample Definition

The following is an example of an ExpressionSetMessageToken component.

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
<ExpressionSetMessageToken xmlns="http://soap.sforce.com/2006/04/metadata">
    <developerName>token</developerName>
    <description>Description</description>
    <masterLabel>token</masterLabel>
</ExpressionSetMessageToken>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ExpressionSetMessageToken</name>
    </types>
    <version>59.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
