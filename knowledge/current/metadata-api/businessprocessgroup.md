---
title: "BusinessProcessGroup"
domain: metadata-api
topic: businessprocessgroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.246Z
estimatedTokens: 853
keywords: [BusinessProcessGroup, surveys, track, customers’, experiences, across, different, stages, their, lifecycle, extends, Metadata, inherits, fullName, File]
---

# BusinessProcessGroup

> Represents the surveys used to track customers’ experiences
    across different stages in their lifecycle. This type extends the Metadata metadata type and inherits its 
    fullName field.

# BusinessProcessGroup

Represents the surveys used to track customers’ experiences across different stages in their lifecycle. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

BusinessProcessGroup components have the suffix .businessProcessGroup and are stored in the businessProcessGroups folder.

## Version

BusinessProcessGroup components are available in API version 49.0 and later.

## Special Access Rules

This metadata type is available in orgs with Surveys enabled with the Customer Lifecycle Designer license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| businessProcessDefinitions | BusinessProcessDefinition[] | A list that defines stages in a customer lifecycle map. |
| customerSatisfactionMetric | SurveyQuestionType(enumeration of type string) | Required. Types of questions that can be associated with stages in a customer lifecycle map.Valid values are:AttachmentBooleanCSATCurrencyDateDateTimeFreeTextImageNPSMatrixMultiChoiceMultiSelectPicklistNPSNumberPicklistRatingShortTextSliderStackRankToggle |
| description | string | A description of the customer lifecycle map. |
| masterLabel | string | Required. The name of the customer lifecycle map. |

## BusinessProcessDefinition

| Field Name | Field Type | Description |
| --- | --- | --- |
| businessProcessFeedbacks | BusinessProcessFeedback[] | A list of stages in a customer lifecycle map. |
| description | string | A description of a stage in the customer lifecycle map. |
| developerName | string | Required. The API name of a stage in the customer lifecycle map.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| masterLabel | string | Required. The name of a stage in the customer lifecycle map. |
| sequenceNumber | int | Required. The position of a stage in the customer lifecycle map. |

## BusinessProcessFeedback

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | Required. The name of the survey used to collect feedback |
| actionParam | string | Required. The name of the survey question used to collect feedback. |
| actionType | ExpFeedbackCollType(enumeration of type string) | Required. The mode of feedback collection. Valid values are:PHONE_CALLSURVEY |

## Declarative Metadata Sample Definition

The following is an example of a BusinessProcessGroup component.

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
<BusinessProcessGroup xmlns="http://soap.sforce.com/2006/04/metadata">
    <businessProcessDefinitions>
        <developerName>Customer_Onboarding</developerName>
        <masterLabel>Customer Onboarding</masterLabel>
        <description>A stage in a customer's lifecycle.</description>
        <sequenceNumber>0</sequenceNumber>
        <businessProcessFeedbacks>
            <actionType>Survey</actionType>
            <actionName>New Customer CSAT</actionName>
            <actionParam>How would you rate our service?</actionParam>
        </businessProcessFeedbacks>
    </businessProcessDefinitions>
    <customerSatisfactionMetric>NPS</customerSatisfactionMetric>
    <masterLabel>Customer Lifecycle</masterLabel>
    <description>This map tracks the feedback provided by customers' at different stages during their lifecycle.</description>
</BusinessProcessGroup>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>policyholder</members>
        <name>BusinessProcessGroup</name>
    </types>
    <version>49.0</version>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
