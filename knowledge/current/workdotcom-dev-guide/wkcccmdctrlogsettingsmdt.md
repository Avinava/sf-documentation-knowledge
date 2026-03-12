---
title: "wkcc__CmdCtrLogSettings__mdt"
domain: workdotcom-dev-guide
topic: wkcccmdctrlogsettingsmdt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.351Z
estimatedTokens: 466
keywords: [wkcc__CmdCtrLogSettings__mdt, Custom, metadata, record, named, configuring, logging, Workplace, Command, Center, Wellness, Check, enable, disable, configure]
---

# wkcc__CmdCtrLogSettings__mdt

> Custom metadata type that contains a record named Default for configuring
      logging in Workplace Command Center and Wellness Check. You can enable or disable
      logging and configure whether, and for how long, Salesforce keeps old log messages. The
      wkcc__CmdCtrLog__c custom object stores the log messages. This custom metadata type is
    available in orgs that have Workplace Command Center installed.

# wkcc\_\_CmdCtrLogSettings\_\_mdt

Custom metadata type that contains a record named Default for configuring logging in Workplace Command Center and Wellness Check. You can enable or disable logging and configure whether, and for how long, Salesforce keeps old log messages. The wkcc\_\_CmdCtrLog\_\_c custom object stores the log messages. This custom metadata type is available in orgs that have Workplace Command Center installed.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| wkcc__DoesDelPersistentData__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, Work.com deletes old log messages from the wkcc__CmdCtrLog__c custom object until it reaches the value of the wkcc__MaxPersistentDataRows__c field. For example, let’s say wkcc__MaxPersistentDataRows__cequals 2000 and the number of log messages in the custom object wkcc__CmdCtrLog__c exceeds 2000. In this case, Work.com deletes old log messages until the number is back down to 2000. Default value is false. |
| wkcc__EnableLogging__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, logging is enabled for Workplace Command Center and Wellness Employee Check. Default value is true. |
| wkcc__MaxPersistentDataRows__c | TypedoublePropertiesFilter, Nillable, SortDescriptionWhen the wkcc__DoesDelPersistentData__c field is set to true, this field determines the maximum number of log messages to keep in the wkcc__CmdCtrLog__c custom object. |

#### See Also

-   [Understand Logging](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm "Work.com captures errors and exceptions that originate from Workplace Command Center and Wellness Check and adds them as log messages to the wkcc__CmdCtrLog__c custom object.")

## Related Topics

- Understand Logging (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm)
