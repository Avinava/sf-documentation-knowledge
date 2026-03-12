---
title: "AssessmentQuestion"
domain: metadata-api
topic: assessmentquestion
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:37.040Z
estimatedTokens: 1511
keywords: [AssessmentQuestion, Represents, container, stores, questions, required, assessment., Parent, File, Suffix, Directory, Location, Version, Fields, AssessmentQuestionVersion​​, Declarative, Metadata, Sample, Definition, Wildcard]
---

# AssessmentQuestion

> Represents the container object that stores the questions
			required for an assessment.

# AssessmentQuestion

Represents the container object that stores the questions required for an assessment.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AssessmentQuestion components have the suffix .AssessmentQuestion and are stored in the AssessmentQuestions folder.

## Version

AssessmentQuestion components are available in API version 55.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| assessmentQuestionVersion | Field TypeAssessmentQuestionVersionDescriptionThe object that stores the question versions for the assessment questions. |
| dataType | Field TypestringDescriptionRequired.The data type of the assessment question. |
| developerName | Field TypestringDescriptionRequired.The developer name of the assessment question. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| displayTextCategory | Field TypestringDescriptionSpecifies the category of the display text when the data type is Text Block. |
| formulaResponseDataType | Field TypestringDescriptionSpecifies the data type of the question response calculated by a formula. |
| name | Field TypestringDescriptionRequired.The name of the record. |
| questionCategory | Field TypestringDescriptionRequired.Stores the question category. |
| relatedQuestion | Field TypestringDescriptionSpecifies the related question. Used to define a question hierarchy. |

## AssessmentQuestionVersion​​

Stores the question versions for the assessment questions.

| Field Name | Description |
| --- | --- |
| additionalInformation | Field TypestringDescriptionThe additional details for a UI element, such as the disclosure text. |
| description | Field TypestringDescriptionThe description for the assessment question. This text isn’t rendered on the assessment. |
| guidanceInformation | Field TypestringDescriptionThe guidance for the assessment question. |
| helpText | Field TypestringDescriptionThe text that's added as an info bubble in the UI element related to the assessment question. |
| isActive | Field TypebooleanDescriptionRequired.Indicates whether the current version of the assessment question is set to active (true) or not (false).The default value is false. |
| name | Field TypestringDescriptionRequired.Name of the assessment question version record. |
| optionSourceResponseValue | Field TypebooleanDescriptionIndicates whether the response value source for an assessment question is configured as custom (true) or sObject in the OmniStudio designer (false).The default value is false. |
| questionText | Field TypestringDescriptionRequired.The assessment question text. Contains the label for the assessment question that appears on the assessment. |
| responseValues | Field TypestringDescriptionHolds the values to be defined in the picklist, multiselect picklist, or radio buttons. |
| status | Field TypestringDescriptionRequired.Status of the assessment question version. Possible values are Draft, Active, or Archived. |
| versionNumber | Field TypeintDescriptionRequired.The assessment question version number. |

## Declarative Metadata Sample Definition

The following is an example of an AssessmentQuestion component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Usage

Before you retrieve assessment questions, we recommend that you review these considerations.

-   When you retrieve an assessment question, you also get the related assessment question version with the status Active..

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

    #### Note

    If an active assessment question version doesn’t exist for the assessment question, then the latest assessment question version with Status as Draft is retrieved.

-   The value for the <status> tag in the XML definition must match the status of the related assessment question version.
-   If an assessment question has a related assessment question (parent question), the XML definition must include the developer name of the related assessment question.
-   If the fields of an assessment question contain values, the XML definition must contain tags with those values when retrieving it.

Before you deploy assessment questions, we recommend that you review these considerations.

-   If the Related Question isn’t available in the target org, deploying the assessment question fails.
-   If an assessment question with the same developer name exists in the target org, deploying the assessment question updates the values of the other fields in the target org.
-   If the <versionNumber> tag is present in the XML definition of an assessment question, deploying creates a version for that question in the target org.
-   If the Related Questions aren’t available in target org but available in the package, then deploying the questions inserts the Related Questions in the correct order.
-   If the assessment questions are associated with flows of type Discovery Framework Data Capture Flow, then deploy the assessment questions first. After deploying the assessment questions, deploy the flows.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AssessmentQuestion
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<assessmentQuestionVersion>
		<additionalInformation>ParentQuestionDevName AI</additionalInformation>
		<description>ParentQuestionDevName Desc</description>
		<helpText>ParentQuestionDevName HT</helpText>
		<isActive>true</isActive>
		<name>ParentQuestionDevName</name>
		<optionSourceResponseValue>true</optionSourceResponseValue>
		<questionText>ParentQuestionDevName Text</questionText>
		<status>Active</status>
		<versionNumber>1</versionNumber>
	</assessmentQuestionVersion>
	<dataType>DateTime</dataType>
	<developerName>ParentQuestionDevName</developerName>
	<name>ParentQuestionDevName</name>
	<questionCategory>Demographic</questionCategory>
</AssessmentQuestion>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>*</members>
		<name>AssessmentQuestion</name>
	</types>
	<version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
