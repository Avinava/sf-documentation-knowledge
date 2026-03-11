---
title: "MarketSegmentDefinition"
domain: metadata-api
topic: marketsegmentdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.463Z
keywords: [MarketSegmentDefinition, Important, Parent, Type, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# MarketSegmentDefinition

# MarketSegmentDefinition

Represents the field values for MarketSegmentDefinition. MarketSegmentDefinition is used to store the exportable metadata of a segment, such as segment criteria and other attributes. Developers can create segment definition packages, pass segment definition in the form of data build tool (DBT), and publish it on AppExchange for subscriber organizations to install and instantiate these segments.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") type and inherits its fullName field.

## File Suffix and Directory Location

MarketSegmentDefinition components have the suffix .marketSegmentDefinition and are stored in the marketSegmentDefinitions folder.

## Version

MarketSegmentDefinition components are available in API version 55.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| additionalMetadata | Field TypestringDescriptionAn XML clob to hold name value pairs for storing additional metadata. Not applicable for DBT type segment. |
| excludeCriteria | Field TypestringDescriptionHolds the JSON exclude criteria for UI based segments. Not applicable for DBT or Lookalike segments. |
| includeCriteria | Field TypestringDescriptionAn XML wrapped in a CDATA section that captures DBT definition. Only single model DBT is supported. |
| masterLabel | Field TypestringDescriptionRequired. Display name of the field value. |
| segmentOn | Field TypestringDescriptionRequired when segmentType is UI. Points to relevant MktDataModelObject entity instance. Must be a valid developerName for an MktDataModelObject instance of Profile type. |
| segmentType | Field TypeMarketSegmentType (enumeration of type string)DescriptionRequired. Type of the segment to be created. Only DBT is supported via API.Values are:DBTLookalikeUIEinsteinGPTSegmentsUI |

## Declarative Metadata Sample Definition

The following is an example of a MarketSegmentDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).