---
title: "ScoreCategory"
domain: health-cloud-object-reference
topic: scorecategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.827Z
estimatedTokens: 1118
keywords: [ScoreCategory, category, subcategories, form, unified, health, profile, Scoring, feature, Parent, File, Suffix, Directory, Location, Version, categories, scored, API, version, 55.0]
---

# ScoreCategory

> Represents the category and subcategories that form a unified health
			profile in the Unified Health Scoring feature.

# ScoreCategory

Represents the category and subcategories that form a unified health profile in the Unified Health Scoring feature.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ScoreCategory components have the suffix .scoreCategory and are stored in the scoreCategories folder.

## Version

ScoreCategory components are available in API version 55.0 and later.

## Special Access Rules

## Field

| Field Name | Description |
| --- | --- |
| categoryName | Field TypestringDescriptionRequired.The name of the score category. |
| description | Field TypestringDescriptionRequired.The description of the score category. |
| developerName | Field TypestringDescriptionRequired.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This unique name prevents conflicts with rules from other packages that have the same masterLabel. |
| iconUrl | Field TypestringDescriptionRequired.The URL for the image used as the icon of the score category. |
| masterLabel | Field TypestringDescriptionRequired.The user interface label of the score category record. |
| parentCategoryId | Field TypestringDescriptionThe score category that the category is a part of. Do not use this field for top-level categories that represent unified health profiles. |
| scoreCategoryCalcInsights | Field TypeScoreCategoryCalcInsight[]DescriptionMaps the score category to its calculated insight in Data Cloud. |
| scoreRangeClassifications | Field TypeScoreRangeClassification[]DescriptionSpecifies the different score ranges and their classifications for the score category. |

## ScoreCategoryCalcInsight

Maps the score category to its calculated insight in Data Cloud. Use this subtype type only if you’re using Data Cloud to calculate scores for Unified Health Scoring.

| Field Name | Description |
| --- | --- |
| insightDateFieldName | Field TypestringDescriptionRequired.The API name of the date field in the calculated insight that specifies when the last calculation was processed. |
| insightName | Field TypestringDescriptionRequired.The API name of the calculated insight that derives scores for the category. |
| insightScoreFieldName | Field TypestringDescriptionRequired.The API name of the field in the calculated insight that specifies the derived scores. This field is the field that’s defined as the measure of the calculated insight. |
| insightSubjectFieldName | Field TypestringDescriptionRequired.The API name of the field in the calculated insight that references the subject of the score. The referenced subject is either an account, lead, or contact. This field is the field that’s defined as the dimension of the calculated insight. |

## ScoreRangeClassification

Represents the score ranges of a score category and how scores in those ranges are interpreted.

| Field Name | Description |
| --- | --- |
| classificationName | Field TypestringDescriptionRequired.The interpretation or classification of scores in the specified range.Example: Good, Great, Excellent |
| colorHexadecimalCode | Field TypestringDescriptionRequired.The hexadecimal code for the color that represents the range and its interpretation.TipBe mindful of cultural differences when you choose a color code. Different colors mean different things in different cultures. |
| rangeEndValue | Field TypedoubleDescriptionRequired.The end point of a score range classification. |
| rangeStartValue | Field TypedoubleDescriptionRequired.The start point of a score range classification. |

## Declarative Metadata Sample Definition

The following is an example of a ScoreCategory component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ScoreCategory
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<categoryName>Environmental Score 2</categoryName>
	<description>This is second Environmental score for a person</description>
	<developerName>env_score2</developerName>
	<iconUrl>https://duckduckgo.com/assets/logo_header.dddv108.svg</iconUrl>
	<masterLabel>Env Score 2</masterLabel>
</ScoreCategory>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>*</members>
		<name>ScoreCategory</name>
	</types>
	<version>55.0</version>
</Package>
```
