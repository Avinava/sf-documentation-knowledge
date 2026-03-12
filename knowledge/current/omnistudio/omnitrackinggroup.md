---
title: "OmniTrackingGroup"
domain: omnistudio
topic: omnitrackinggroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:52.584Z
estimatedTokens: 1399
keywords: [OmniTrackingGroup, Represents, group, FlexCard, OmniScript, components, their, user, interactions, tracked, together, OmniAnalytics., Note, Important, Parent, File, Suffix, Directory, Location, Version]
---

# OmniTrackingGroup

> Represents a group of FlexCard and OmniScript components that have
			their user interactions tracked together in OmniAnalytics.

# OmniTrackingGroup

Represents a group of FlexCard and OmniScript components that have their user interactions tracked together in OmniAnalytics.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This metadata type is part of Omnistudio Standard, not Omnistudio for Vlocity.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

OmniTrackingGroup components have the suffix .OmniTrackingGroup and are stored in the OmniTrackingGroups folder.

## Version

OmniTrackingGroup components are available in API version 60.0 and later.

## Special Access Rules

Using OmniAnalytics requires having an Omnistudio license and enabling OmniAnalytics in Setup.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA description of the OmniTrackingGroup. |
| developerName | Field TypestringDescriptionRequired.The unique name of the OmniTrackingGroup in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Limit: 80 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| endDate | Field TypedateDescriptionThe date when the OmniTrackingGroup became inactive. |
| groupType | Field TypeOmniTrackingGroupType (enumeration of type string)DescriptionRequired.Specifies whether this OmniTrackingGroup sends tracking data to a third-party Analytics system such as Google Analytics.Values are:External—A third-party Analytics system is used.Internal—No third-party Analytics system is used. |
| isActive | Field TypebooleanDescriptionRequired.Specifies whether the OmniTrackingGroup is active. |
| masterLabel | Field TypestringDescriptionRequired.The unique master label of the OmniTrackingGroup. This internal label doesn’t get translated. |
| maxAgeInDays | Field TypeintDescriptionThe maximum number of days the group and its analytics data is active beyond which the data is deleted. |
| omniExtTrackingDef | Field TypestringDescriptionThe ID of the related OmniExtTrackingDef object. Required if GroupType is set to External. |
| omniTrackingComponentDefs | Field TypeOmniTrackingComponentDef[]DescriptionThe OmniTrackingComponentDef objects related to this OmniTrackingGroup. |
| omniTrackingGroupKey | Field TypestringDescriptionA UUID generated internally by Salesforce to uniquely identify an OmniTrackingGroup record across all orgs. |
| startDate | Field TypedateDescriptionThe date when the OmniTrackingGroup became active. |

## OmniTrackingComponentDef

Represents a FlexCard or OmniScript that is a member of an OmniTrackingGroup, which tracks user interactions in OmniAnalytics.

| Field Name | Description |
| --- | --- |
| componentType | Field TypeOmniAnalyticsComponentType (enumeration of type string)DescriptionRequired.The type of component for which user interactions are tracked.Values are:FlexcardOmniscript |
| componentVersion | Field TypedoubleDescriptionRequired.The version of the FlexCard or OmniScript. |
| developerName | Field TypestringDescriptionRequired.The unique name of the OmniTrackingComponentDef in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Limit: 80 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| masterLabel | Field TypestringDescriptionRequired.The unique master label of the OmniTrackingComponentDef. This internal label doesn’t get translated. |
| omniTrackingComponentDefKey | Field TypestringDescriptionA UUID generated internally by Salesforce to uniquely identify an OmniTrackingComponentDef record across all orgs. |
| omniTrackingGroup | Field TypestringDescriptionThe ID of the related OmniTrackingGroup object. |

## Declarative Metadata Sample Definition

The following is an example of an OmniTrackingGroup component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<OmniTrackingGroup xmlns="http://soap.sforce.com/2006/04/metadata">
    <developerName>Purchase_Tracking</developerName>
    <groupType>Internal</groupType>
    <isActive>true</isActive>
    <masterLabel>Purchase_Tracking</masterLabel>
    <omniTrackingComponentDefs>
        <componentType>Omniscript</componentType>
        <componentVersion>2</componentVersion>
        <developerName>Purchase_Funnel</developerName>
        <masterLabel>Purchase_Funnel</masterLabel>
    </omniTrackingComponentDefs>
</OmniTrackingGroup>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>OmniTrackingGroup</name>
    </types>
    <version>60.0</version>
</Package>
```
