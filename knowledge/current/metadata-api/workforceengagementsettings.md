---
title: "WorkforceEngagementSettings"
domain: metadata-api
topic: workforceengagementsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.400Z
keywords: [WorkforceEngagementSettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Usage]
---

# WorkforceEngagementSettings

# WorkforceEngagementSettings

Represents settings for Workforce Engagement Management.

## File Suffix and Directory Location

WorkforceEngagementSettings components are stored in the WorkforceEngagement.settings folder.

## Version

WorkforceEngagementSettings is available in API version 52.0 and later.

## Special Access Rules

To use Workforce Engagement settings, the org requires a Workforce Engagement license.

## Fields

Field Type

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableMachineLearningForecasting | boolean | Indicates whether machine learning-based forecasting is used (true) or not used (false). |
| enableWorkforceEngagement | boolean | Indicates whether Workforce Engagement is enabled (true) or not enabled (false). |
| enableWorkforceEngagementConfiguration | boolean | Indicates whether the Workforce Engagement Configuration App is installed or enabled (true) or not (false). If true, it grants access to the Lightning App as well as the app's Job Profile Mapping tab. It also defaults the standard and custom profile tab settings to On. If false, it removes access to the app and tab but doesn’t delete the app metadata. This field is available in API version 53.0 and later. |
| enableHistoricalAdherence | boolean | Indicates whether historical adherence is enabled (true) or not enabled (false). This field is available in API version 54.0 and later. |
| enableIndividualAdherence | boolean | Indicates whether individual adherence is enabled (true) or not enabled (false). This field is available in API version 54.0 and later. |
| enableIntradayManagement | boolean | Indicates whether the intraday management dashboard is enabled (true) or not enabled (false). This field is available in API version 55.0 and later. |
| enableRealTimeAdherence | boolean | Indicates whether real-time adherence is enabled (true) or not enabled (false). To use real-time adherence, you must also enable Omni-Channel. This field is available in API version 55.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a WorkforceEngagement.settings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

When enableMachineLearningForecasting is set to false, we clean up data from our Ofek forecasting platform. The original copy of the same set of data is stored in the Core app, so no data is lost.