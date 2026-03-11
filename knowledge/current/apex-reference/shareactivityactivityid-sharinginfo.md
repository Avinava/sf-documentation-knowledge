---
title: "shareActivity(activityId, sharingInfo)"
domain: apex-reference
topic: shareactivityactivityid-sharinginfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.749Z
keywords: [shareActivity, activityId, sharingInfo, Share, emails, events, certain, groups, users., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# shareActivity(activityId, sharingInfo)

> Share emails or events with certain groups of users.

### shareActivity(activityId, sharingInfo)

Share emails or events with certain groups of users.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivitySharingResult shareActivity(String activityId, ConnectApi.ActivitySharingInput sharingInfo)

#### Parameters

activityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the activity.

sharingInfo

Type: [ConnectApi.ActivitySharingInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activity_sharing.htm#apex_connectapi_input_activity_sharing "Defines who a captured email or event is shared with.")

A ConnectApi.ActivitySharingInput object.

#### Return Value

Type: [ConnectApi.ActivitySharingResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activity_sharing_result.htm#apex_connectapi_output_activity_sharing_result "The results of sharing a captured email or event.")

#### Usage

This method is a feature of both Sales Cloud Einstein and Inbox. It lets users connect their email and calendar to Salesforce. Then, their emails and events are automatically added to related Salesforce records. Users can specify who their individual emails and events are shared with.