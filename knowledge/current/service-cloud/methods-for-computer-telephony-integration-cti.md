---
title: "Methods for Computer-Telephony Integration
(CTI)"
domain: service-cloud
topic: methods-for-computer-telephony-integration-cti
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.104Z
estimatedTokens: 1182
keywords: [Computer-Telephony, Integration, CTI, Salesforce, Call, Center, seamlessly, integrates, systems., Developers, create, system, console, users, access, telephony, features, through, softphone, which]
---

# Methods for Computer-Telephony Integration
(CTI)

> Salesforce Call Center seamlessly integrates Salesforce with Computer-Telephony Integration
   systems. Developers create a CTI system with  and console users access telephony features through
   a softphone, which is a call-control tool that appears in the footer of a console.

# Methods for Computer-Telephony Integration (CTI)

Salesforce Call Center seamlessly integrates Salesforce with Computer-Telephony Integration systems. Developers create a CTI system with and console users access telephony features through a softphone, which is a call-control tool that appears in the footer of a console.

-   **[fireOnCallBegin()](atlas.en-us.api_console.meta/api_console/sforce_api_console_fireoncallbegin.htm)**
    Fires an event that notifies a call has begun. Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later.
-   **[fireOnCallEnd()](atlas.en-us.api_console.meta/api_console/sforce_api_console_fireoncallend.htm)**
    Fires an event that notifies a call has ended. Use to get information or send information between an interaction log and a custom console component. This method executes when fireOnCallBegin() is called first. This method is only available in API version 31.0 or later.
-   **[fireOnCallLogSaved()](atlas.en-us.api_console.meta/api_console/sforce_api_console_fireoncalllogsaved.htm)**
    Calls the eventHandler function registered with [onCallLogSaved()](atlas.en-us.api_console.meta/api_console/sforce_api_console_oncalllogsaved.htm "Registers a function that is fired when an interaction log saves a call log. Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later."). Use to get information or send information between an interaction log and a custom console component.. This method is only available in API version 31.0 or later.
-   **[getCallAttachedData()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getcallattacheddata.htm)**
    Returns the attached data of a call represented by the call object ID or null if there isn’t an active call. The data is returned in JSON format. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.
-   **[getCallObjectIds()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getcallobjectids.htm)**
    Returns any active call object IDs in the order in which they arrived or null if there aren’t any active calls. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.
-   **[onCallBegin()](atlas.en-us.api_console.meta/api_console/sforce_api_console_oncallbegin.htm)**
    Registers a function that is called when a call begins (comes in). This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.
-   **[onCallEnd()](atlas.en-us.api_console.meta/api_console/sforce_api_console_oncallend.htm)**
    Registers a function that is called when a call ends. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.
-   **[onCallLogSaved()](atlas.en-us.api_console.meta/api_console/sforce_api_console_oncalllogsaved.htm)**
    Registers a function that is fired when an interaction log saves a call log. Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later.
-   **[onSendCTIMessage()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onsendctimessage.htm)**
    Registers a function that is fired when a message is sent with the [sendCTIMessage()](atlas.en-us.api_console.meta/api_console/sforce_api_console_sendctimessage.htm "Sends a message to the CTI adapter or Open CTI. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later."). Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later.
-   **[sendCTIMessage()](atlas.en-us.api_console.meta/api_console/sforce_api_console_sendctimessage.htm)**
    Sends a message to the CTI adapter or Open CTI. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.
-   **[setCallAttachedData()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcallattacheddata.htm)**
    Sets the call data associated with a call object ID. Use to get information or send information between an interaction log and a custom console component.This method is only available in API version 31.0 or later.
-   **[setCallObjectIds()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcallobjectids.htm)**
    Sets call object IDs, in ascending order of arrival. This method is only available in API version 31.0 or later.

## Related Topics

- fireOnCallBegin() (atlas.en-us.api_console.meta/api_console/sforce_api_console_fireoncallbegin.htm)
- fireOnCallEnd() (atlas.en-us.api_console.meta/api_console/sforce_api_console_fireoncallend.htm)
- fireOnCallLogSaved() (atlas.en-us.api_console.meta/api_console/sforce_api_console_fireoncalllogsaved.htm)
- onCallLogSaved() (atlas.en-us.api_console.meta/api_console/sforce_api_console_oncalllogsaved.htm)
- getCallAttachedData() (atlas.en-us.api_console.meta/api_console/sforce_api_console_getcallattacheddata.htm)
- getCallObjectIds() (atlas.en-us.api_console.meta/api_console/sforce_api_console_getcallobjectids.htm)
- onCallBegin() (atlas.en-us.api_console.meta/api_console/sforce_api_console_oncallbegin.htm)
- onCallEnd() (atlas.en-us.api_console.meta/api_console/sforce_api_console_oncallend.htm)
- onSendCTIMessage() (atlas.en-us.api_console.meta/api_console/sforce_api_console_onsendctimessage.htm)
- sendCTIMessage() (atlas.en-us.api_console.meta/api_console/sforce_api_console_sendctimessage.htm)
