---
title: "DiscoveryStory"
domain: metadata-api
topic: discoverystory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.679Z
estimatedTokens: 833
keywords: [DiscoveryStory, metadata, associated, story, Einstein, Discovery, Declarative, File, Suffix, Directory, Location, Version, DiscoveryStoryOutcome, Sample, Definitions]
---

# DiscoveryStory

> Represents the metadata associated with a story used in Einstein
   Discovery.

# DiscoveryStory

Represents the metadata associated with a story used in Einstein Discovery.

A story defines the data and analytical settings that Einstein Discovery uses to generate insights and build predictive models. Story settings include the outcome variable, whether to maximize or minimize the outcome variable, the data to analyze in a CRM Analytics dataset, and other preferences. Story settings tell Einstein Discovery how to conduct the analysis and communicate its results. In Package Manager, this type is listed as "Discovery Story".

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Write operations for DiscoveryStory objects are generally not supported.

## Declarative Metadata File Suffix and Directory Location

A DiscoveryStory is stored in the discovery folder. DiscoveryStory have two files:

-   file with .story suffix contains the story’s actual data
-   file named *ModelName*.story-meta.xml suffix contains the story’s metadata

Here is a sample package.xml file:

```

```

## Version

DiscoveryStorys are available in API version 54.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The CRM Analytics app the story is associated with. |
| autopilot | DiscoveryStoryAutopilotStatus | Optional. The autopilot status for the story. One of the following strings:EnabledDisabled |
| classificationThreshold | double | Optional. The threshold for classification predictions for the story. |
| label | string | Required. The story label. If you package a story, this label appears in Package Manager. |
| outcome | DiscoveryStoryOutcome | Required. The selected outcome of the story. |
| sourceContainer | string | Required. The source ID for the story. |
| sourceType | DiscoveryStorySourceType | Required. The source type of the story. One of the following strings:AnalyticsDatasetLiveDatasetReport |
| validationContainder | string | Optional. The validation ID for the story. |

## DiscoveryStoryOutcome

Represents the selected outcome of the generated story.

| Field Name | Field Type | Description |
| --- | --- | --- |
| failureValue | string | Optional. The value if the story failed. |
| field | string | Required. The field configuration for the story. |
| goal | DiscoveryStoryOutcomeGoal | Required. The story outcome goal. One of the following strings:MaximizeMinimizeNone |
| label | string | Required. The story outcome label. |
| successValue | string | Optional. The value if the story succeeded. |
| type | DiscoveryStoryOutcomeType | Required. The story outcome type. One of the following strings:CategoricalCountNumberText |

## Declarative Metadata Sample Definitions

Here is a sample DiscoveryStory:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Subscriber_Changes</members>
        <name>DiscoveryStory</name>
    </types>
    <version>55.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<DiscoverStory xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <application>MyStoryApp</application>
    <autopilot>Enabled</autopilot>
    <classificationThreshold>0.7383</classificationThreshold>
    <label>SubscriberChanges</label>
    <outcome>
        <field>Subscriber</field>
        <goal>Minimize</goal>
        <label>SubscriberChangeOutcome</label>
        <successValue>Success</successValue>
        <type>Numerical</type>
    </outcome>
    <sourceContainer>01X00000000xxxx1AB</sourceContainer>
    <sourceType>AnalyticsDataset</sourceType>
</DiscoveryStory>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
