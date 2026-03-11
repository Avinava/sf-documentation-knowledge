---
title: "WorkDotComSettings"
domain: metadata-api
topic: workdotcomsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.229Z
keywords: [WorkDotComSettings, Version, Fields, Declarative, Metadata, Sample, Definition]
---

# WorkDotComSettings

# WorkDotComSettings

Represents WorkDotCom settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Version

WorkDotComSettings components are available in API version 31.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCoachingManagerGroupAccess | boolean | Indicates whether Coaching Manager Group Access is available to users (true)or not (false). Default value is true.Deprecated. |
| enableGoalManagerGroupAccess | boolean | Indicates whether Goal Manager Group Access is available to users (true)or not (false). Default value is true.Deprecated. |
| enableProfileSkills | boolean | Indicates whether Profile Skills is available to users (true)or not (false). Default value is true. |
| enableProfileSkillsAddFeedPost | boolean | Indicates whether Add Skills as Feed Posts is available to users (true)or not (false). Default value is true. |
| enableProfileSkillsAutoSuggest | boolean | Indicates whether Profile Skills Auto Suggest is available to users (true)or not (false). Default value is true. |
| enableProfileSkillsUsePlatform | boolean | Indicates whether Profile Skills Use Platform is available to users (true)or not (false). Default value is true. |
| enableWorkBadgeDefRestrictPref | boolean | Indicates whether Badge Definition Restriction is available to users (true)or not (false). Default value is true.Deprecated. |
| enableWorkCalibration | boolean | Indicates whether Calibration is available to users (true)or not (false). Default value is false.Deprecated. |
| enableWorkCanvasPref | boolean | Indicates whether Canvas is available to users (true)or not (false). Default value is true.Deprecated. |
| enableWorkCertification | boolean | Indicates whether Certification is available to users (true)or not (false). Default value is true.Deprecated. |
| enableWorkCertificationNotification | boolean | Indicates whether Certification Notification is available to users (true)or not (false). Default value is false.Deprecated. |
| enableWorkRewardsPref | boolean | Indicates whether Rewards is available to users (true)or not (false). Default value is true.Deprecated. |
| enableWorkThanksPref | boolean | Indicates whether Thanks is available to users (true) or not (false). Default value is true. |

## Declarative Metadata Sample Definition

The following is an example of a WorkDotComSettings component.

```

```