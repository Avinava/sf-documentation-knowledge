---
title: "ActivationPlatform"
domain: metadata-api
topic: activationplatform
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.590Z
estimatedTokens: 1090
keywords: [ActivationPlatform, Represents, configuration, such, platform, name, delivery, schedule, output, format, destination, folder., Important, Parent, File, Suffix, Directory, Location, Version, Special]
---

# ActivationPlatform

> Represents the ActivationPlatform configuration, such as
			platform name, delivery schedule, output format, and destination folder.

# ActivationPlatform

Represents the ActivationPlatform configuration, such as platform name, delivery schedule, output format, and destination folder.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActivationPlatform components have the suffix .activationPlatform and are stored in the activationPlatforms folder.

## Version

ActivationPlatform components are available in API version 54.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| activationPlatformConnectorType | Field TypeActivationPlatformConnectorType (enumeration of type string)DescriptionReserved for future use. |
| activationPlatformAdditionalMetadata | Field TypestringDescriptionProvides additional details about the activation platform, including subscriber override options, partner supported IDs, and file output properties such as maximum file size, compression settings, and the maximum number of records per file. |
| dataConnector | Field TypestringDescriptionReference to the ActvPfrmDataConnectorS3 metadata type, which contains S3 bucket and export directory information into which Data 360 writes data. |
| description | Field TypestringDescriptionRequired.The description for ActivationPlatform. |
| enabled | Field TypebooleanDescriptionRequired.Indicates if ActivationPlatform is enabled (true) or not (false). The default is false. |
| includeSegmentNames | Field TypebooleanDescriptionIndicates whether to include the segment name in metadata (true) or not (false). |
| logoUrl | Field TypestringDescriptionURL of the logo for the activation channel destination. |
| masterLabel | Field TypestringDescriptionRequired.The name for the activation channel destination. |
| notes | Field TypestringDescriptionNotes for this ActivationPlartform. |
| outputFormat | Field TypeActivationPlatformFileOutputFormat (enumeration of type string)DescriptionRequired.The output format of the file.Valid values are:CSVJSONPARQUET |
| outputGrouping | Field TypeActivationPlatformFileOutputGrouping (enumeration of type string)DescriptionRequired.The grouping of the output.Valid values are:PER_ACCOUNTPER_SEGMENT |
| periodicRefreshFrequecy | Field TypeActivationPlatformPeriodicFullRefresh (enumeration of type string)DescriptionThe frequency (in days) for periodic full refreshes when using incremental refresh mode.Valid values are:REFRESH_30REFRESH_60 |
| platformType | Field TypeActivationPlatformType (enumeration of type string)DescriptionRequired.The type of the Activation Platform.Valid values are:AdvertisingAnalyticsMarketingPublishingTechnology |
| refreshFrequency | Field TypeActivationPlatformRefreshFrequency (enumeration of type string)DescriptionRequired.Indicates how often the activation platform accepts data delivery.Valid value is:TWENTY_FOUR |
| refreshMode | Field TypeActivationPlatformRefreshMode (enumeration of type string)DescriptionRequired.Defines how the refresh method handles refreshing files.Valid values are:FULLINCREMENTAL |

## Declarative Metadata Sample Definition

The following is an example of an ActivationPlatform component.

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
<ActivationPlatform xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataConnector>S3Connector</dataConnector>
    <description>Activation Platform Description</description>
    <enabled>false</enabled>
    <includeSegmentNames>false</includeSegmentNames>
    <logoUrl>link to logo</logoUrl>
    <masterLabel>MyExternalPlatform</masterLabel>
    <notes>Notes about this Platform</notes>
    <outputFormat>CSV</outputFormat>
    <outputGrouping>PER_ACCOUNT</outputGrouping>
    <refreshMode>FULL</refreshMode>
    <refreshFrequency>TWENTY_FOUR</refreshFrequency>
    <periodicRefreshFrequecy>NEVER</periodicRefreshFrequecy>
    <platformType>Advertising</platformType>
</ActivationPlatform>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>MyActivationPlatform</fullName>
    <types>
        <members>APlatform</members>
        <name>ActivationPlatform</name>
    </types>
    <types>
        <members>AccountIdField</members>
        <name>ActivationPlatformField</name>
    </types>
    <types>
        <members>S3Connector</members>
        <name>ActvPfrmDataConnectorS3</name>
    </types>
    <types>
        <members>EmailIdentifier</members>
        <name>ActvPlatformAdncIdentifier</name>
    </types>
    <types>
        <members>AccountIdFieldValue</members>
        <name>ActvPlatformFieldValue</name>
    </types>
    <version>54.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
