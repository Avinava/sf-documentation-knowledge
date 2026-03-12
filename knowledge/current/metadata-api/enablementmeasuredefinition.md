---
title: "EnablementMeasureDefinition"
domain: metadata-api
topic: enablementmeasuredefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:38.916Z
estimatedTokens: 2176
keywords: [EnablementMeasureDefinition, Enablement, measure, job-related, activity, user, performs, milestone, outcome, program, identifies, source, objects, filters, filter]
---

# EnablementMeasureDefinition

> Represents an Enablement measure, which specifies
			the job-related activity that a user performs to complete a milestone or outcome in an
			Enablement program. A measure identifies a source object and optional related objects,
			with optional field filters and filter logic, for tracking the activity. To avoid
			deployment errors, deploy measures before you deploy programs.

# EnablementMeasureDefinition

Represents an Enablement measure, which specifies the job-related activity that a user performs to complete a milestone or outcome in an Enablement program. A measure identifies a source object and optional related objects, with optional field filters and filter logic, for tracking the activity. To avoid deployment errors, deploy measures before you deploy programs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EnablementMeasureDefinition components have the suffix .enablementMeasureDefinition and are stored in the enablementMeasureDefinitions folder.

## Version

EnablementMeasureDefinition components are available in API version 61.0 and later.

## Special Access Rules

To access Enablement measures, the Design and Deliver Enablement Programs permission is required. This permission is available with the Enablement add-on license.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionAn internal description for the measure to help Enablement admins understand the activity that’s tracked. |
| developerName | Field TypestringDescriptionRequired. The unique programmatic name for the measure record. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for the measure, which is defined when the measure is created. |
| sourceMeasureObject | Field TypeEnablementMeasureSourceObjectDefinitionDescriptionRequired. The source object that tracks the activity you're measuring. |
| status | Field TypeEnblProgramMeasureStatus (enumeration of type string)DescriptionRequired. Indicates whether the measure is published for use in Enablement programs.Values are:Draft—The measure is saved, but not activated for use in programs.Published—The measure is activated for use in programs. In Lightning Experience, this value is Active. |

## EnablementMeasureSourceObjectDefinition

Defines the source object, fields, field values, and calculation method for the job-related activity you’re measuring.

| Field Name | Description |
| --- | --- |
| aggregateFieldApiName | Field TypestringDescriptionThe unique programmatic name for the field that the aggregateFunction uses for calculating.For example, if you’re measuring how much revenue a sales rep has won, the value of aggregateFunction is Sum and the value of aggregateFieldApiName is Amount, which is the programmatic name of the Amount field on the Opportunity object. |
| aggregateFunction | Field TypeEnablementAggregationType (enumeration of type string)DescriptionRequired. The method for calculating progress towards the milestone or outcome from records that qualify for the measure’s criteria.Values are:AverageCountSumFor example, if you’re measuring the number of deals won, the function is Count.If the function is Average or Sum, aggregateFieldApiName is required. |
| dateFieldApiName | Field TypestringDescriptionRequired. The unique programmatic name for the field that defines when users get credit for the activity you’re measuring. For example, if you’re measuring the number of deals won, this value can be ClosedDate, the programmatic name of the Close Date field on the Opportunity object. |
| displayFieldApiName | Field TypestringDescriptionRequired. The unique programmatic name for the field that primarily identifies records that qualify for the activity you’re measuring. For example, if you’re measuring the number of deals won, you’re tracking the Opportunity object, and maybe you want to identify opportunities by their name. In this case, this field can be Name, the programmatic name of the Opportunity Name field on the Opportunity object. |
| filterLogic | Field TypestringDescriptionAn expression that determines how to evaluate the optional field filters for the object. |
| filters | Field TypeEnablementMeasureFilterDefinition[]DescriptionThe fields on the object and corresponding field values that further specify criteria for the activity you’re measuring. |
| objectApiName | Field TypestringDescriptionRequired. The unique programmatic name for the source object that tracks the activity you’re measuring. For example, if you’re measuring the number of deals won, this value is Opportunity, the programmatic name of the Opportunity object. |
| relatedMeasureObjects | Field TypeEnablementMeasureRelatedObjectDefinition[]DescriptionThe optional related objects that further specify criteria for the activity you’re measuring. Related objects can also specify additional filters. |
| userFieldApiName | Field TypestringDescriptionRequired. The unique programmatic name for the field that defines who gets credit for the activity you’re measuring. For example, if you’re measuring the number of deals won by a sales rep, this value can be OwnerId, the developer name of the Opportunity Owner field on the Opportunity object. |

## EnablementMeasureFilterDefinition

Represents the fields on the source object or related objects and the corresponding field values that further specify criteria for the activity you’re measuring.

| Field Name | Description |
| --- | --- |
| fieldApiName | Field TypestringDescriptionRequired. The unique programmatic name for the field that you’re filtering by. For example, if you’re tracking activity on the Opportunity object and want to filter by the Stage field, this value can be StageName. |
| fieldValue | Field TypestringDescriptionRequired. The field value to filter by. For example, if you’re tracking activity on the Opportunity object and want to filter by the Stage field, this value can be Closed Won. |
| operator | Field TypeEnablementFilterOperator (enumeration of type string)DescriptionRequired. The logic for evaluating the specified field and field value.Values are:ContainsDoesNotContainDoesNotEqualEndsWithEqualsGreaterThanGreaterThanOrEqualInIsNullLessThanLessThanOrEqualNotInStartsWith |
| sequenceNumber | Field TypeintDescriptionRequired. A number that specifies the order of the filter, relative to other filters, starting at 1. |

## EnablementMeasureRelatedObjectDefinition

Represents objects related to the source object. Related objects can further specify criteria for the activity you’re measuring. Related objects can also have additional filters. For example, maybe you’re measuring deals won for a specific product line. In this case, the source object is Opportunity, the related object is Opportunity Product, and the related object can have a filter for the specific product name.

| Field Name | Description |
| --- | --- |
| filterLogic | Field TypestringDescriptionAn expression that determines how to evaluate the optional field filters for the object. |
| filters | Field TypeEnablementMeasureFilterDefinition[]DescriptionThe fields on the related object and the corresponding field values that further specify criteria for the activity you’re measuring. |
| idFieldApiName | Field TypestringDescriptionRequired. The programmatic name of the field that links the related object to the primary object. For example, if the primary object is Opportunity and the related object is Opportunity Product, this value is OpportunityId, the developer name of the Opportunity field on the Opportunity Product object. |
| objectApiName | Field TypestringDescriptionRequired. The unique programmatic name for the related object. For example, if the related object is Opportunity Product, this value is OpportunityLineItem. |

## Declarative Metadata Sample Definition

The following is an example of an EnablementMeasureDefinition component.

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
<EnablementMeasureDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Total amount in pipeline measure</description>
    <developerName>TotalAmountInPipeline</developerName>
    <masterLabel>Total Amount in Pipeline</masterLabel>
    <status>Draft</status>
    <sourceMeasureObject>
        <aggregateFieldApiName>Amount</aggregateFieldApiName>
        <aggregateFunction>Sum</aggregateFunction>
        <dateFieldApiName>CreatedDate</dateFieldApiName>
        <displayFieldApiName>Name</displayFieldApiName>
        <objectApiName>Opportunity</objectApiName>
        <userFieldApiName>OwnerId</userFieldApiName>
        <filters>
            <fieldApiName>StageName</fieldApiName>
            <fieldValue>Closed Won</fieldValue>
            <operator>Equals</operator>
            <sequenceNumber>1</sequenceNumber>
        </filters>
        <relatedMeasureObjects>
            <objectApiName>OpportunityLineItem</objectApiName>
            <idFieldApiName>OpportunityId</idFieldApiName>
            <filterLogic>1 OR 2</filterLogic>
            <filters>
                <fieldApiName>UnitPrice</fieldApiName>
                <fieldValue>10000</fieldValue>
                <operator>GreaterThan</operator>
                <sequenceNumber>1</sequenceNumber>
            </filters>
            <filters>
                <fieldApiName>TotalPrice</fieldApiName>
                <fieldValue>10000</fieldValue>
                <operator>GreaterThan</operator>
                <sequenceNumber>2</sequenceNumber>
            </filters>
        </relatedMeasureObjects>
    </sourceMeasureObject>
</EnablementMeasureDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>TotalAmountInPipeline</members>
        <name>EnablementMeasureDefinition</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
