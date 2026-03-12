---
title: "DataConnector"
domain: metadata-api
topic: dataconnector
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.153Z
estimatedTokens: 1962
keywords: [DataConnector, white-labeled, metadata, configuration, external, connector, Data, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# DataConnector

> Represents the white-labeled metadata configuration for an external
			connector in Data 360.

# DataConnector

Represents the white-labeled metadata configuration for an external connector in Data 360.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataConnector components have the suffix .dataconnector and are stored in the dataconnectors folder.

## Version

DataConnector components are available in API version 64.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| attributes | Field TypeDataConnectorAttribute[]DescriptionA list of configurable attributes for the data connector. |
| description | Field TypestringDescriptionRequired.The description of the data connector. |
| errors | Field TypeDataConnectorError[]DescriptionA list of error messages or codes related to the connector’s behavior or configuration validation. |
| features | Field TypeDataConnectorFeature[] (enumeration of type string)DescriptionA list of features supported by the data connector.Values are:Override |
| icon | Field TypestringDescriptionA static resource in SVG format with dimensions of 100x100 pixels and a file size not exceeding 100 KB. |
| licenseAgreement | Field TypestringDescriptionText of the license agreement associated with the data connector. |
| masterLabel | Field TypestringDescriptionRequired.The display label of the connector used in user interface (UI). |
| ownerLocation | Field TypestringDescriptionA description or URL that specifies where the connector is maintained or hosted. |
| ownerLogo | Field TypestringDescriptionA static resource in SVG format with dimensions of 100x100 pixels and a file size not exceeding 100 KB. |
| ownerName | Field TypestringDescriptionThe name of the organization that owns the connector. |
| parentConnector | Field TypestringDescriptionThe API name of the connector. For example, AwsS3, SNOWFLAKE, ICEBERG, and so on. |
| releaseLevel | Field TypeDataConnectorReleaseLevel (enumeration of type string)DescriptionRequired.Indicates the connector’s lifecycle stage.Values are:BETAGAIN_DEVPILOT |
| supportEmail | Field TypestringDescriptionThe support email address users can contact for help with the connector. |
| supportMessage | Field TypestringDescriptionA support-related message or instruction displayed. |
| supportPhone | Field TypestringDescriptionThe support phone number users can call for help with the connector. |
| translations | Field TypeLocalizedValue[]DescriptionA list of localized labels and descriptions to support multiple languages in the UI. |

## DataConnectorAttribute

| Field Name | Description |
| --- | --- |
| capabilities | Field TypeDataConnectorCapability[] (enumeration of type string)DescriptionA list of supported capabilities for the data connector.Values are:DataInDataInDeleteDataInHeaderDataInIncrementalDataInSelectorDataInStructuredDataInUnstructuredDataOutHiddenUniqueGroupZeroCopyIn |
| command | Field TypestringDescriptionThe command string executed during data operations, such as import or sync. |
| commandAttributes | Field TypestringDescriptionA list of attributes passed with the command. |
| dataType | Field TypeDataConnectorDataType (enumeration of type string)DescriptionRequired.Specifies the type of data input expected.Values are:CHECKBOXCOMBOBOXDATEDATETIMEEMAILIDPNAMED_CREDENTIALNUMBERPASSWORDPASSWORD_FILEPRIVATE_NETWORK_ROUTERADIORADIO_BUTTONSTEXTTEXTAREATIMETOGGLE |
| defaultValue | Field TypestringDescriptionThe default value assigned to the field if no user input is provided. |
| editable | Field TypebooleanDescriptionIndicates whether the field value can be modified by the user. |
| externalName | Field TypestringDescriptionRequired.The unique name used to reference the connector externally, such as in API calls. |
| masterLabel | Field TypestringDescriptionRequired.The label used for display in the UI. |
| max | Field TypestringDescriptionThe maximum allowable value or length for the field. |
| min | Field TypestringDescriptionThe minimum allowable value or length for the field. |
| options | Field TypeDataConnectorAttributeOpt[]DescriptionA list of selectable options available for the field. |
| order | Field TypeintDescriptionRequired.The display order or evaluation order of the field. |
| pattern | Field TypestringDescriptionThe validation pattern used to ensure input follows a defined format. |
| placeholder | Field TypestringDescriptionThe placeholder text displayed in the input field when empty. |
| readonly | Field TypebooleanDescriptionIndicates whether the field is read-only. |
| required | Field TypebooleanDescriptionIndicates whether the field must have a value. |
| secure | Field TypebooleanDescriptionIndicates whether the field contains sensitive data and should be masked. |
| tooltip | Field TypestringDescriptionThe tooltip text shown to users for additional guidance. |
| translations | Field TypeLocalizedValue[]DescriptionA list of localized labels and descriptions for use in different languages. |
| validationMessageError | Field TypestringDescriptionThe error message shown when input validation fails for this field. |

## DataConnectorAttributeOpt

| Field Name | Description |
| --- | --- |
| capabilities | Field TypeDataConnectorCapability[] (enumeration of type string)DescriptionA list of capabilities supported by the data connector.Values are:DataInDataInDeleteDataInHeaderDataInIncrementalDataInSelectorDataInStructuredDataInUnstructuredDataOutHiddenUniqueGroupZeroCopyIn |
| conditionAttributes | Field TypestringDescriptionA list of attributes used to define conditions in the connector configuration. |
| externalName | Field TypestringDescriptionRequired.The unique name used to reference the connector externally, such as in API calls. |
| masterLabel | Field TypestringDescriptionRequired.The display label for the connector used in the UI. |
| order | Field TypeintDescriptionRequired.The order or priority of the connector in processing context. |
| translations | Field TypeLocalizedValue[]DescriptionA list of localized labels and descriptions for use in different languages. |

## DataConnectorError

| Field Name | Description |
| --- | --- |
| externalName | Field TypestringDescriptionRequired.The unique name used to reference the object externally, such as in API calls. Must be unique across the namespace. |
| masterLabel | Field TypestringDescriptionRequired.The label displayed in the UI. |
| translations | Field TypeLocalizedValue[]DescriptionA list of localized labels and descriptions for use in different languages. |

## Declarative Metadata Sample Definition

The following is an example of a DataConnector component.

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
<DataConnector xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Iceberg Override</masterLabel>
    <icon>Salesforce</icon>
    <parentConnector>ICEBERG</parentConnector>
    <releaseLevel>BETA</releaseLevel>
    <description>Connect to Apache Iceberg tables</description>
    <features>Override</features>
    <ownerName>Slack</ownerName>
    <ownerLogo>Salesforce</ownerLogo>
    <ownerLocation>Settle, USA</ownerLocation>
    <supportMessage>Click download logs before reachout</supportMessage>
    <supportPhone>+15788467513</supportPhone>
    <licenseAgreement>https://www.salesforce.com/company/legal</licenseAgreement>
    <attributes>
        <fullName>IcebergOverride_storageSourceType</fullName>
        <externalName>storageSourceType</externalName>
        <masterLabel>Storage Type</masterLabel>
        <dataType>COMBOBOX</dataType>
        <defaultValue>CATALOG_PROVIDED</defaultValue>
        <capabilities>DataIn</capabilities>
        <capabilities>Hidden</capabilities>
        <order>20</order>
        <editable>true</editable>
        <required>true</required>
        <secure>true</secure>
    </attributes>
</DataConnector>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>DataConnector</name>
    </types>
    <types>
        <members>*</members>
        <name>StaticResource</name>
    </types>
    <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
