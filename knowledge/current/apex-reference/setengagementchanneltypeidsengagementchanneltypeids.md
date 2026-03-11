---
title: "setEngagementChannelTypeIds(engagementChannelTypeIds)"
domain: apex-reference
topic: setengagementchanneltypeidsengagementchanneltypeids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.553Z
keywords: [setEngagementChannelTypeIds, engagementChannelTypeIds, Sets, engagement, channel, type., Signature, Parameters, Note, Return, Value, Usage]
---

# setEngagementChannelTypeIds(engagementChannelTypeIds)

> Sets an engagement channel type.

### setEngagementChannelTypeIds(engagementChannelTypeIds)

Sets an engagement channel type.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setEngagementChannelTypeIds(List<String\> engagementChannelTypeIds)

#### Parameters

engagementChannelTypeIds

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The ID of the engagement channel type record. The availability of time slots is filtered based on the engagement channel type selected. This field is available in API version 56.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This field supports only one engagement channel type ID.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

#### Usage

You can use engagement channel types only in these cases:

-   The **Schedule Appointments Using Engagement Channels** setting is enabled in Salesforce Scheduler Settings in your Salesforce org.
-   Shifts are defined in the scheduling policy. For more information on setting up shifts in scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)
    
    #### Note
    
    Engagement channel types are not supported with operating-hours rules in the scheduling policy.