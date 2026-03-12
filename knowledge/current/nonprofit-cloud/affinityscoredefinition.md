---
title: "AffinityScoreDefinition"
domain: nonprofit-cloud
topic: affinityscoredefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.122Z
estimatedTokens: 902
keywords: [AffinityScoreDefinition, affinity, calculations, analyze, categorize, contacts, marketing, purposes, Parent, File, Suffix, Directory, Location, Version, Special]
---

# AffinityScoreDefinition

> Represents the affinity information used in calculations to analyze and categorize
		contacts for marketing purposes.

# AffinityScoreDefinition

Represents the affinity information used in calculations to analyze and categorize contacts for marketing purposes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AffinityScoreDefinition components have the suffix .affinityScoreDefinition and are stored in the affinityScoreDefinitions folder.

## Version

AffinityScoreDefinition components are available in API version 66.0 and later.

## Special Access Rules

This metadata type is available only if the Fundraising Access license is enabled for the org and the Fundraising admin permission is assigned to users.

## Fields

| Field Name | Description |
| --- | --- |
| affinityScoreDefinitionDesc | Field TypestringDescriptionDescription of the affinity score definition. |
| affinityScoreDefinitionName | Field TypestringDescriptionName of the affinity score definition. |
| affinityScoreType | Field TypeAffinityScoreType (enumeration of type string)DescriptionType of the affinity score that’s defined.Valid values are:CAP—Capacity, Ability, Propensity (CAP)RFM—Recency, Frequency, Monetary (RFM)The default value is RFM. |
| masterLabel | Field TypestringDescriptionLabel for this affinity score definition value. This display value is the internal label that doesn't get translated. |
| numberOfMonths | Field TypeintDescriptionNumber of months to analyze the records for calculating the affinity score. |
| numberOfRanges | Field TypeintDescriptionRequired.Number of ranges to use in the calculation, ranging from 0 to 9. Provide the corresponding range list values in the scoreRangeList field. |
| scoreRangeList | Field TypestringDescriptionRequired.Ranges that are referenced in the affinity score calculation. This field is used with scoreRangeList. For example, to calculate RFM with numberOfRanges value as 3, provide the values for the scoreRangeList field in this format.{     "R ranges":"0-30, 31-100, 100+",     "F ranges":"0-10, 11-100, 100+",     "M ranges":"0-1000, 1001-5000, 5000+" } |
| sourceFieldApiNameList | Field TypestringDescriptionRequired.API names of the source fields that are referenced in the score calculation. |
| sourceObjectApiNameList | Field TypestringDescriptionAPI names of the source objects that are referenced in the score calculation. |
| targetFieldApiNameList | Field TypestringDescriptionRequired.API names of the target fields where the calculated scores are added. |
| targetObjectApiName | Field TypestringAPI name of the target object where the calculated scores are added. |

## Declarative Metadata Sample Definition

This example shows a sample of an AffinityScoreDefinition component.

```

```

This example shows a sample of the package.xml file that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
{
    "R ranges":"0-30, 31-100, 100+",
    "F ranges":"0-10, 11-100, 100+",
    "M ranges":"0-1000, 1001-5000, 5000+"
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<AffinityScoreDefinition
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<affinityScoreDefinitionDesc>RFM Affinity Score</affinityScoreDefinitionDesc>
	<affinityScoreDefinitionName>AffinityScoreDefinition_RFM</affinityScoreDefinitionName>
	<affinityScoreType>RFM</affinityScoreType>
	<masterLabel>MasterLabel</masterLabel>
	<numberOfMonths>12</numberOfMonths>
	<numberOfRanges>3</numberOfRanges>
	<scoreRangeList>
        [
          {
            "name": "R Ranges",
            "direction": "ascending",
            "ranges": [30,90,180]
          },
          {
            "name": "F Ranges",
            "direction": "descending",
            "ranges": [10,15,100]
          },
          {
            "name": "M Ranges",
            "direction": "descending",
            "ranges": [500,1000,5000]
          }
     ]
      </scoreRangeList>
	<sourceFieldApiNameList>
        [
          {
            "name": "R Source",
            "values": 
                [
                  {
                    "fieldName": "DonorGiftSummary.DaysSinceLastGift",
                    "fieldWeight": 1
                  }
                ]
          },
          {
            "name": "F Source",
            "values": 
                [
                  {
                    "fieldName": "DonorGiftSummary.GiftCount",
                    "fieldWeight": 1
                  }
                ]
          },
          {
            "name": "M Source",
            "values": 
                [
                  {
                    "fieldName": "DonorGiftSummary.TotalGiftsCount",
                    "fieldWeight": 1
                  }
                ]
          }
        ]
      </sourceFieldApiNameList>
	<targetFieldApiNameList>
        [
          {
            "name": "R Target",
            "values": 
                [
                  {
                    "fieldName": "DonorGiftSummary.RecencyScore",
                    "fieldWeight": 1
                  }
                ]
          },
          {
            "name": "F Target",
            "values": 
                [
                  {
                    "fieldName": "DonorGiftSummary.FrequencyScore",
                    "fieldWeight": 1
                  }
                ]
          },
          {
            "name": "M Target",
            "values": 
                [
                  {
                    "fieldName": "DonorGiftSummary.MonetaryScore",
                    "fieldWeight": 1
                  }
                ]
          }
        ]
      </targetFieldApiNameList>
</AffinityScoreDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>AffinityScoreDefinition</name>
    </types>
    <version>66.0</version>
</Package>
```
