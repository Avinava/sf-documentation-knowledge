---
title: "TimelineObjectDefinition"
domain: metadata-api
topic: timelineobjectdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.164Z
estimatedTokens: 580
keywords: [TimelineObjectDefinition, Represents, container, stores, details, timeline, configuration., resource, Salesforce, objects, their, records', related, events, linear, time-sorted, view., Important, Parent, File]
---

# TimelineObjectDefinition

> Represents the container that stores the details of a
			timeline configuration. You can use this resource with Salesforce objects to see
		their records' related events in a linear time-sorted view.

# TimelineObjectDefinition

Represents the container that stores the details of a timeline configuration. You can use this resource with Salesforce objects to see their records' related events in a linear time-sorted view.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

TimelineObjectDefinition components have the suffix .timelineObjectDefinition and are stored in the timelineObjectDefinitions folder.

## Version

TimelineObjectDefinition components are available in API version 55.0 and later.

## Special Access Rules

TimelineObjectDefinition is available in any org that has the Timeline org preference enabled.

## Fields

| Field Name | Description |
| --- | --- |
| baseObject | Field TypestringDescriptionRequired.The object on which a timeline is based. Information displayed in a timeline comes from objects that are related to the base object. The base object can be a Salesforce object or custom object. |
| definition | Field TypestringDescriptionRequired.The timeline definition in JSON format. |
| isActive | Field TypebooleanDescriptionIndicates whether the timeline is active (true) or not (false). |
| masterLabel | Field TypestringDescriptionRequired.The user interface label of the timeline object definition record. |

## Declarative Metadata Sample Definition

The following is an example of a TimelineObjectDefinition component.

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
<TimelineObjectDefinition
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<baseObject>Account</baseObject>
	<definition>{&quot;timeline&quot;:{&quot;anchorObject&quot;:{&quot;object&quot;:{&quot;entity&quot;:&quot;Account&quot;,&quot;label&quot;:&quot;Account&quot;,&quot;source&quot;:&quot;&quot;,&quot;icon&quot;:&quot;&quot;}},&quot;age&quot;:{&quot;field&quot;:&quot;EffectiveDate&quot;,&quot;label&quot;:&quot;Effective Date&quot;,&quot;type&quot;:&quot;DateTime&quot;},&quot;events&quot;:[{&quot;oneToMany&quot;:{&quot;eventObject&quot;:{&quot;name&quot;:&quot;Case&quot;,&quot;label&quot;:&quot;Case&quot;,&quot;recordTypes&quot;:[],&quot;fieldsToDisplay&quot;:[{&quot;field&quot;:&quot;Description&quot;,&quot;label&quot;:&quot;Description&quot;,&quot;type&quot;:&quot;StringPlusClob&quot;},{&quot;field&quot;:&quot;Priority&quot;,&quot;label&quot;:&quot;Priority&quot;,&quot;type&quot;:&quot;DynamicEnum&quot;},{&quot;field&quot;:&quot;Status&quot;,&quot;label&quot;:&quot;Status&quot;,&quot;type&quot;:&quot;DynamicEnum&quot;},{&quot;field&quot;:&quot;Subject&quot;,&quot;label&quot;:&quot;Subject&quot;,&quot;type&quot;:&quot;Text&quot;}],&quot;relatedlistsToDisplay&quot;:[{&quot;entity&quot;:&quot;CaseComments&quot;,&quot;label&quot;:&quot;Case Comments&quot;},{&quot;entity&quot;:&quot;CombinedAttachments&quot;,&quot;label&quot;:&quot;Attachments&quot;},{&quot;entity&quot;:&quot;AttachedContentDocuments&quot;,&quot;label&quot;:&quot;Files&quot;}],&quot;title&quot;:{&quot;field&quot;:&quot;CaseNumber&quot;,&quot;label&quot;:&quot;Case Number&quot;,&quot;type&quot;:&quot;AutoNumber&quot;},&quot;subTitle&quot;:{&quot;field&quot;:&quot;Comments&quot;,&quot;label&quot;:&quot;Internal Comments&quot;,&quot;type&quot;:&quot;MultiLineText&quot;}},&quot;filters&quot;:[{&quot;field&quot;:{&quot;field&quot;:&quot;Status&quot;,&quot;label&quot;:&quot;Status&quot;,&quot;type&quot;:&quot;DynamicEnum&quot;},&quot;operator&quot;:&quot;EQ&quot;,&quot;values&quot;:[&quot;New&quot;],&quot;order&quot;:1}],&quot;sort&quot;:{&quot;field&quot;:&quot;CreatedDate&quot;,&quot;label&quot;:&quot;Created Date&quot;,&quot;type&quot;:&quot;DateTime&quot;},&quot;anchorReferenceField&quot;:{&quot;field&quot;:&quot;AccountId&quot;,&quot;label&quot;:&quot;Account ID&quot;,&quot;type&quot;:&quot;EntityId&quot;}}},{&quot;oneToMany&quot;:{&quot;eventObject&quot;:{&quot;name&quot;:&quot;Event&quot;,&quot;label&quot;:&quot;Event&quot;,&quot;recordTypes&quot;:[],&quot;fieldsToDisplay&quot;:[{&quot;field&quot;:&quot;ActivityDate&quot;,&quot;label&quot;:&quot;Due Date Only&quot;,&quot;type&quot;:&quot;DueDate&quot;},{&quot;field&quot;:&quot;Attendees&quot;,&quot;label&quot;:&quot;Attendees&quot;,&quot;type&quot;:&quot;StringPlusClob&quot;}],&quot;relatedlistsToDisplay&quot;:[],&quot;title&quot;:{&quot;field&quot;:&quot;Description&quot;,&quot;label&quot;:&quot;Description&quot;,&quot;type&quot;:&quot;StringPlusClob&quot;},&quot;subTitle&quot;:{&quot;field&quot;:&quot;Location&quot;,&quot;label&quot;:&quot;Location&quot;,&quot;type&quot;:&quot;Text&quot;}},&quot;filters&quot;:[],&quot;sort&quot;:{&quot;field&quot;:&quot;ActivityDate&quot;,&quot;label&quot;:&quot;Due Date Only&quot;,&quot;type&quot;:&quot;DueDate&quot;},&quot;anchorReferenceField&quot;:{&quot;field&quot;:&quot;WhatId&quot;,&quot;label&quot;:&quot;Related To ID&quot;,&quot;type&quot;:&quot;EntityId&quot;}}},{&quot;oneToMany&quot;:{&quot;eventObject&quot;:{&quot;name&quot;:&quot;Task&quot;,&quot;label&quot;:&quot;Task&quot;,&quot;recordTypes&quot;:[],&quot;fieldsToDisplay&quot;:[{&quot;field&quot;:&quot;CallDisposition&quot;,&quot;label&quot;:&quot;Call Result&quot;,&quot;type&quot;:&quot;Text&quot;},{&quot;field&quot;:&quot;CallObject&quot;,&quot;label&quot;:&quot;Call Object Identifier&quot;,&quot;type&quot;:&quot;Text&quot;},{&quot;field&quot;:&quot;CallType&quot;,&quot;label&quot;:&quot;Call Type&quot;,&quot;type&quot;:&quot;StaticEnum&quot;}],&quot;relatedlistsToDisplay&quot;:[],&quot;title&quot;:{&quot;field&quot;:&quot;Description&quot;,&quot;label&quot;:&quot;Description&quot;,&quot;type&quot;:&quot;StringPlusClob&quot;},&quot;subTitle&quot;:{&quot;field&quot;:&quot;Priority&quot;,&quot;label&quot;:&quot;Priority&quot;,&quot;type&quot;:&quot;DynamicEnum&quot;}},&quot;filters&quot;:[],&quot;sort&quot;:{&quot;field&quot;:&quot;ActivityDate&quot;,&quot;label&quot;:&quot;Due Date Only&quot;,&quot;type&quot;:&quot;DueDate&quot;},&quot;anchorReferenceField&quot;:{&quot;field&quot;:&quot;WhatId&quot;,&quot;label&quot;:&quot;Related To ID&quot;,&quot;type&quot;:&quot;EntityId&quot;}}}]}}</definition>
	<isActive>true</isActive>
	<masterLabel>HealthTimeline</masterLabel>
</TimelineObjectDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>*</members>
		<name>TimelineObjectDefinition</name>
	</types>
	<version>55.0</version>
</Package>
```
