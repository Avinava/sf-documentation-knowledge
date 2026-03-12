---
title: "wkcc__CmdCtrLogEvent__e"
domain: workdotcom-dev-guide
topic: wkcccmdctrlogevente
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.347Z
estimatedTokens: 592
keywords: [wkcc__CmdCtrLogEvent__e, log, messages, errors, exceptions, Workplace, Command, Center, Wellness, Check, insert, platform, event, Apex, trigger]
---

# wkcc__CmdCtrLogEvent__e

> Contains log messages (errors and exceptions) from Workplace Command Center and
      Wellness Check. On insert into this platform event, an Apex trigger (LogEventTrigger)
      adds a corresponding record into the wkcc__CmdCtrLog__c custom object with the same
      fields. This platform event is available in orgs that have Work.com
    installed.

# wkcc\_\_CmdCtrLogEvent\_\_e

Contains log messages (errors and exceptions) from Workplace Command Center and Wellness Check. On insert into this platform event, an Apex trigger (LogEventTrigger) adds a corresponding record into the wkcc\_\_CmdCtrLog\_\_c custom object with the same fields. This platform event is available in orgs that have Work.com installed.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| ReplayId | TypestringPropertiesNillableDescriptionPlatform events system field. See Platform Events Fields. |
| wkcc__ClassName__c | TypestringPropertiesCreate, NillableDescriptionApex class from which the error originated. |
| wkcc__Level__c | TypestringPropertiesCreate, NillableDescriptionLogging level for the operation that caused the error.Possible values are:DEBUGERRORINFOWARN |
| wkcc__Message__c | TypetextareaPropertiesCreate, NillableDescriptionThe error or exception. For example: Update failed. First exception on row 0 with id 1315w0000TwPnAAk: first error: FIELD_CUSTOM_VALIDATION_EXCEPTION. Location error message 1 for updating the parent location: []. |
| wkcc__ObjectIDs__c | TypetextareaPropertiesCreate, NillableDescriptionComma-separated list of IDS for the standard and custom object affected by the operation that caused the error. For example: 1315w0000TwPnAAk, 1315w0000TwQQAA0, 1315w0000TwQRAA0, 1315w0000TwREAAO. |
| wkcc__ObjectName__c | TypestringPropertiesCreate, NillableDescriptionIf the error was a result of a failed DML operation (insert, update, delete), then this field contains the object of the DML operation. For example: Location. |
| wkcc__Package__c | TypestringPropertiesCreate, NillableDescriptionReserved for future use. |
| wkcc__ResponseJson__c | TypetextareaPropertiesCreate, NillableDescriptionReserved for future use. |
| wkcc__StackTrace__c | TypetextareaPropertiesCreate, NillableDescriptionReserved for future use. |
| wkcc__User__c | TypestringPropertiesCreate, NillableDescriptionUser who initiated the operation that caused the error. |

#### See Also

-   [Understand Logging](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm "Work.com captures errors and exceptions that originate from Workplace Command Center and Wellness Check and adds them as log messages to the wkcc__CmdCtrLog__c custom object.")

## Related Topics

- Understand Logging (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm)
