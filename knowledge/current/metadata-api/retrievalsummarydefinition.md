---
title: "RetrievalSummaryDefinition"
domain: metadata-api
topic: retrievalsummarydefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.488Z
estimatedTokens: 1373
keywords: [RetrievalSummaryDefinition, Represents, metadata, stores, header, information, retrieval, definition., enables, configuration, data, patterns, summarizing, related, records, across, relationships., Parent, File, Suffix]
---

# RetrievalSummaryDefinition

> Represents a metadata type that stores the header information of a retrieval definition.
		It enables the configuration of data retrieval patterns for summarizing related records
		across object relationships.

# RetrievalSummaryDefinition

Represents a metadata type that stores the header information of a retrieval definition. It enables the configuration of data retrieval patterns for summarizing related records across object relationships.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

RetrievalSummaryDefinition components have the suffix .retrievalSummaryDefinition and are stored in the .retrievalSummaryDefinitions folder.

## Version

RetrievalSummaryDefinition components are available in API version 61.0 and later. Individual fields may have specific minimum API version requirements as mentioned in the field descriptions.

## Fields

| Field Name | Description |
| --- | --- |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name when RetrievalSummaryDefinition is created. |
| retrievalSummaryDefFields | Field TypeRetrievalSummaryDefField[]DescriptionCollection of fields to retrieve from the root object of the retrieval definition. Each field definition specifies which field from the target object should be included in the retrieval and the order in which it should be processed. |
| retrievalSummaryDefObjects | Field TypeRetrievalSummaryDefObject[]DescriptionCollection of rollup definitions that aggregate data from related objects. Each object definition specifies a related object, the aggregation logic to apply, and the fields to retrieve from that object. This enables hierarchical data aggregation across object relationships. |
| rootObject | Field TypestringDescriptionRequired.API name of the primary object that serves as the starting point for the retrieval definition. This object serves as the anchor point for all retrieval and rollup operations defined in this metadata. The value must be a valid Salesforce object API name. |

## RetrievalSummaryDefField

Represents a field definition that specifies a single field to retrieve from a target object. Each field definition includes the field API name and a sequence number that determines the processing order.

| Field Name | Description |
| --- | --- |
| field | Field TypestringDescriptionRequired.API name of the field to retrieve from the target object. This must be a valid field API name on the specified object. |
| sequenceNumber | Field TypeintDescriptionRequired.Processing order of the field in the retrieval operation. Fields are processed in ascending sequence number order. This allows you to control the order in which fields are displayed. |

## RetrievalSummaryDefObject

Represents a rollup definition that aggregates data from a related object. Each rollup definition specifies the aggregation logic, the fields to retrieve, and the processing order for summarizing data across object relationships.

| Field Name | Description |
| --- | --- |
| recordAggregationDefinition | Field TypestringDescriptionRequired.Reference to the aggregation definition that specifies how data from the related object must be aggregated. This parameter references a RecordAggregationDefinition. |
| retrievalSummaryDefFields | Field TypeRetrievalSummaryDefField[]DescriptionCollection of fields to retrieve from this related object. Each field definition specifies which field should be included and in what order. This is an optional array that allows you to specify additional fields beyond those defined in the aggregation definition. |
| sequenceNumber | Field TypeintDescriptionRequired.Processing order of the rollup operation. Rollups are processed in ascending sequence number order, allowing you to control the hierarchy of data aggregation when multiple related objects are involved. |

## Usage

RetrievalSummaryDefinition is commonly used in Financial Services Cloud to define patterns for retrieving and summarizing data across related objects. Typical use cases include:

-   Rollup Summarization: Aggregate data from child records to parent records, such as summing transaction amounts or counting related activities.
-   Hierarchical Data Aggregation: Retrieve and summarize data across multiple levels of object relationships, enabling complex reporting and analytics.
-   Data Consolidation: Combine information from multiple related objects into a single summary view for easier analysis and decision-making.
-   Performance Optimization: Pre-define retrieval patterns to improve query performance when accessing related data across multiple objects.

## Declarative Metadata Sample Definition

The following is an example of a RetrievalSummaryDefinition component that retrieves data from an Account object and includes a rollup from related Opportunity records.

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
<RetrievalSummaryDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
   <masterLabel>Account Revenue Summary</masterLabel>
   <rootObject>Account</rootObject>
   <retrievalSummaryDefFields>
      <field>Name</field>
      <sequenceNumber>1</sequenceNumber>
   </retrievalSummaryDefFields>
   <retrievalSummaryDefFields>
      <field>Industry</field>
      <sequenceNumber>2</sequenceNumber>
   </retrievalSummaryDefFields>
   <retrievalSummaryDefObjects>
      <recordAggregationDefinition>OpportunityRevenueRollup</recordAggregationDefinition>
      <sequenceNumber>1</sequenceNumber>
      <retrievalSummaryDefFields>
         <field>Amount</field>
         <sequenceNumber>1</sequenceNumber>
      </retrievalSummaryDefFields>
      <retrievalSummaryDefFields>
         <field>CloseDate</field>
         <sequenceNumber>2</sequenceNumber>
      </retrievalSummaryDefFields>
   </retrievalSummaryDefObjects>
</RetrievalSummaryDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>RetrievalSummaryDefinition</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
