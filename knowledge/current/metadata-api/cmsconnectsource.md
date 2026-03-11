---
title: "CMSConnectSource"
domain: metadata-api
topic: cmsconnectsource
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.151Z
keywords: [CMSConnectSource, Important, Note, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, CMSConnectAsset, CMSConnectLanguage, CMSConnectPersonalization, CMSConnectResourceType, CMSConnectResourceDefinition, Declarative, Metadata, Sample]
---

# CMSConnectSource

# CMSConnectSource

Represents the connection information for external content management systems that feed content to Experience Builder sites. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

For use with Change Sets, CMSConnectSource is a dependent of **Network** and **Community**.

## File Suffix and Directory Location

CMSConnectSource components have the suffix .cmsConnectSource and are stored in the cmsConnectSource folder. In that folder, separate files exist for each network (for example, networkname.sourcedevelopername.cmsConnectSource). Each file represents a CMS connection.

## Version

CMSConnectSource components are available in API version 43.0 and later.

## Special Access Rules

The **CMS Connect org** permission must be enabled.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| cmsConnectAsset | CMSConnectAsset[] | Represents CSS or JavaScript defined for the connection.0–10 for CSS0–10 for JavaScript |
| cmsConnectLanguage | CMSConnectLanguage[] | 0 to more. Represents language mappings defined for the connection. |
| cmsConnectPersonalization | CMSConnectPersonalization[] | 0 or 1. Represents personalization defined for the connection. Only for use when type is AEM. |
| cmsConnectResourceType | CMSConnectResourceType[] | 0–5. Represents JSON definitions defined for the connection. |
| connectionType | CMSSourceConnectionType(enumeration of type string) | Required. Type of authentication being used with outside system. Valid values are:PublicAuthenticated |
| cssScope | string | The class name used to prefix and scope the CSS rules. |
| developerName | string | Required. API name of the CMSConnectSource entity. |
| languageEnabled | string | Required. Valid values are:Y to enable language mapping for connection.N if no language mapping is needed. |
| masterLabel | string | Required. Connection name |
| namedCredential | string | Required when the connectionType is Authenticated. API name of namedCredential. Before deploying namedCredential, it must exist on the destination org. |
| personalizationEnabled | string | Required. Valid values are:Y to enable personalization mapping for connection.Otherwise N. |
| rootPath | string | Required. Root path. |
| sortOrder | int | Required. Defines the load order of the connection when multiple connections defined on page. The load order begins with 1. |
| status | CMSConnectionStatus(enumeration of type string) | Required. Status of connection. Valid values are:ACTIVEINACTIVE |
| type | CMSConnectionSourceType(enumeration of type string) | Required. The identification of the source connection system. Valid values are:AEMDrupalWordPressSDLSitecoreOther |
| websiteUrl | string | Required if connectionType is Public |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Because there can be existing connections when a package comes in, there’s some INSERT or UPDATE logic to consider:

-   If you find developerName in the destination, then update the existing collection with all details form source.
-   namedCredential is handled through developerName. If you don’t find namedCredential with developerName, then an error is generated.
-   If the destination isn’t sortOrder from the source, then insert or update with the source sortOrder.
-   If sortOrder from the source is already in the destination, then increase the source sortOrder by 1 for connections such that the destination sortOrder > sortOrder from the source.

## CMSConnectAsset

CMSConnectAsset defines the location, types, and order of assets necessary to support the incoming content, such as JavaScript and CSS files.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Because there can be existing connections when a package comes in, there’s some INSERT or UPDATE logic to consider:

-   If assetPath exists in the destination, then update the existing record, else the new assetPath is inserted.
-   Always keep the sortOrder from the source and adjust the destination accordingly.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assetPath | string | Relative path of the asset. |
| assetType | string | When used in Apex, this value can be sent as an enum, otherwise, this field has a type of string.Allowed values as stringCSSJavascriptAllowed values as enumCSSJavascript |
| sortOrder | int | Loading sequence on the page. |

## CMSConnectLanguage

CMSConnectLanguage components determine the presented language of the content.

| Field Name | Field Type | Description |
| --- | --- | --- |
| cmsLanguage | string | When a language placeholder is in the URL path, this value is used to replace it. |
| language | string | Salesforce supported language.For information see https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_translations.htm |

## CMSConnectPersonalization

CMSConnectPersonalization is used only with Adobe Experience Manager (AEM).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Because there can be existing connections when a package comes in, there’s some INSERT or UPDATE logic to consider. If personalization isn’t enabled in the source system, but is enabled in the destination, the destination is disabled. The record for the connection is deleted from the table.

| Field Name | Field Type | Description |
| --- | --- | --- |
| connectorPage | string | The path to the JSP file that you created and installed in AEM. |
| connectorPageAsset | string | The path to your Javascript file. Providing this path allows you to run scripts dynamically. |

## CMSConnectResourceType

CMSConnectResourceType is for use only to define JSON connections.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Because there can be existing connections when a package comes in, there’s some INSERT or UPDATE logic to consider. If you find the developer name in the destination, then update the existing record with all details from the source.

| Field Name | Field Type | Description |
| --- | --- | --- |
| cmsConnectResourceDefinition | cmsConnectResourceDefinition[] | 0–10 allowed per CMSConnectResourceType. |
| developerName | string | API name of CMSConnectResourceType. |
| masterLabel | string | Content type name. |
| resourceType | string | The only allowed value is JSON. |

## CMSConnectResourceDefinition

cmsConnectResourceDefinition is used to define JSON connections.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Because there can be existing connections when a package comes in, there’s some INSERT or UPDATE logic to consider:

-   If you find developerName in the destination, then the existing record is updated with all details from the new source, else the new value is inserted.
-   If the current source is DETAIL and the destination has DETAIL with a different name, then the destination is updated to LIST and the source is inserted as DETAIL.

| Field Name | Field Type | Description |
| --- | --- | --- |
| developerName | string | Required. API name of CMSConnectResourceDefinition. |
| masterLabel | string | Required. developerName of Content Item or Content List. |
| options | int | Required. Identifies whether the content from the external source is a single item or a list.0 for Content List1 for Content Item |
| payloadType | string | Required. The only valid value is JSON. |
| resourceIdPath | string | Relative path to ID. Required for Content Item. |
| resourceNamePath | string | Relative path to resource name. Required for Content Item. |
| resourcePath | string | Required. JSON resource path. |
| rootNodePath | string | Only for Content List and collection. Defines the initial starting path for a collection or list. |

## Declarative Metadata Sample Definition

The following is an example of a CMSConnectSource definition.

```

```

The following is an example package.xml.

```

```

To retrieve a specific connection:

```

```

## Usage

The INSERT or UPDATE logic for the incoming information is always UPSERT. If data isn’t in the entity, then it’s inserted, otherwise the current data is updated.

Before doing upsert, the content from the package is validated against the maximum limits for the following:

-   CSS assets <= 10
-   JavaScript assets <= 10
-   Resource types < =5
-   Resource definitions for each type <=10

For example

1.  The validation on a new connection totals only the elements in the incoming package.
2.  Validation of existing connections totals the existing assets and new elements to assess validity. For example, if a connection on the destination org already has six CSS definitions, and the incoming package has defined seven CSS definitions (four new + three existing), the new total is the six current from the database. The total ignores the three repeated in the package and adds four new definitions from the incoming package. This totals 10 definitions, which number is at or below the 10 asset threshold, and it passes validation.

Refer to the following content for more details for how each entity how is handled while saving the details from package to destination org:

| Type | Description |
| --- | --- |
| CMSConnectSource | If you find developerName in the destination, then update the existing collection with all details form source.namedCredential is handled through developerName. If you don’t find namedCredential with developerName, then an error is generated.If the destination isn’t sortOrder from the source, then insert or update with the source sortOrder.If sortOrder from the source is already in the destination, then increase the source sortOrder by 1 for connections such that the destination sortOrder > sortOrder from the source. |
| CMSConnectAsset | If assetPath exists in the destination, then update the existing record, else the new assetPath is inserted.Always keep the sortOrder from the source and adjust the destination accordingly. |
| CMSConnectPersonalization | If personalization isn’t enabled in the source system, but is enabled in the destination, the destination is disabled. The record for the connection is deleted from the table. |
| CMSConnectResourceType | If you find the developer name in the destination, then update the existing record with all details from the source. |
| CMSConnectResourceDefinition | If you find developerName in the destination, then the existing record is updated with all details from the new source, else the new value is inserted.If the current source is DETAIL and the destination has DETAIL with a different name, then the destination is updated to LIST and the source is inserted as DETAIL. |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Select Components for an Outbound Change Set](https://help.salesforce.com/articleView?id=changesets_outbound_components_select.htm&type=5&language=en_US)
    
-   [View and Add Dependent Components to a Change Set](https://help.salesforce.com/articleView?id=changesets_outbound_dependencies.htm&type=5&language=en_US)
    
-   [Developer Guide: Deploying and Retrieving Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm)
    
-   [Salesforce Help: Use Personalized Content in CMS Connect](https://help.salesforce.com/articleView?id=communities_cms_connect_personalization.htm&type=5&language=en_US)
    
-   [Developer Guide: Translations](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_translations.htm)