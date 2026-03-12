---
title: "AssessmentQuestionSet"
domain: metadata-api
topic: assessmentquestionset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.048Z
estimatedTokens: 845
keywords: [AssessmentQuestionSet, Represents, container, Assessment, Questions., Parent, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, Usage]
---

# AssessmentQuestionSet

> Represents the container object for Assessment
			Questions.

# AssessmentQuestionSet

Represents the container object for Assessment Questions.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AssessmentQuestionSet components have the suffix .AssessmentQuestionSet and are stored in the AssessmentQuestionSets folder.

## Version

AssessmentQuestionSet components are available in API version 55.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| assessmentQuestionDeveloperNames | Field Typestring[]DescriptionThe developer names for the assessment question. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| developerName | Field TypestringDescriptionRequired.The developer name for the assessment question set. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| name | Field TypestringDescriptionRequired.The question set name. |

## Declarative Metadata Sample Definition

The following is an example of an AssessmentQuestionSet component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Usage

Before you retrieve assessment question sets, we recommend that you review these considerations.

-   When retrieving an assessment question set, if its fields contain values, then the XML definition must contain tags with those values.
-   When retrieving an assessment question set, if that set is associated with multiple questions, then the XML definition must contain developer names of all the associated questions.

Before you deploy assessment question sets, we recommend that you review these considerations.

-   When deploying an assessment question set, if an assessment question set with the same developer name doesn't exist in the target org, deploying creates one with that name.
-   If an assessment question set with the same developer name exists in the target org, then deploying the question set updates the values of the other fields in the target org.
-   If the questions associated with the assessment question set don't exist in the target org, deploying the assessment question set fails.
-   If the questions associated with the assessment question set don’t exist in the target org but are available in the package, then deploying the assessment question sets inserts the questions in the correct order.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AssessmentQuestionSet
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<developerName>QuestionSetDevName</developerName>
	<name>QuestionSetName</name>
	<assessmentQuestionDeveloperNames>QuestionDevName</assessmentQuestionDeveloperNames>
</AssessmentQuestionSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>*</members>
		<name>AssessmentQuestion</name>
	</types>
	<types>
		<members>*</members>
		<name>AssessmentQuestionSet</name>
	</types>
	<version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
