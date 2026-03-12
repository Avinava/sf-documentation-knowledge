---
title: "Understand Logging"
domain: workdotcom-dev-guide
topic: understand-logging
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.456Z
estimatedTokens: 810
keywords: [Understand, Logging, Work.com, captures, errors, exceptions, originate, Workplace, Command, Center, Wellness, Check, adds, log, messages]
---

# Understand Logging

> Work.com captures errors and exceptions that originate from Workplace Command Center
    and Wellness Check and adds them as log messages to the wkcc__CmdCtrLog__c custom
    object.

# Understand Logging

Work.com captures errors and exceptions that originate from Workplace Command Center and Wellness Check and adds them as log messages to the wkcc\_\_CmdCtrLog\_\_c custom object.

While log messages originate from all parts of Work.com, most of them come from these operations or background jobs:

-   Sending a wellness check survey to one or more employees in one or more locations.
-   Processing survey responses.
-   Generating wellness counts based on the current wellness status of people associated with a particular location.

Work.com captures errors and exceptions asynchronously. It uses a custom platform event (wkcc\_\_CmdCtrLogEvent\_\_e) and an Apex trigger (LogEventTrigger) to capture the error even if the operation that caused it is rolled back. The error from a rolled back operation is useful because you can use it to troubleshoot potential problems and problems that actually happened.

Logging is enabled by default for Work.com. To disable logging, or configure other properties like how long to keep log messages, update the Command Center Log Settings custom metadata type in Setup. View log messages by creating a list view on the Command Center Logs object, which is visible by default in the App Launcher. As with other Salesforce objects, you can also create reports and Flows on Command Center Logs.

#### See Also

-   [*Salesforce Help*: Configure Logging](https://help.salesforce.com/articleView?id=wcc_setup_logging_config.html&language=en_US "
    Salesforce Help: Configure Logging - HTML (New Window)")

-   [*Salesforce Help*: View Log Messages](https://help.salesforce.com/articleView?id=wcc_setup_logging_view.html&language=en_US "
    Salesforce Help: View Log Messages - HTML (New Window)")

-   [wkcc\_\_CmdCtrLog\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlog__c.htm "Stores log messages (errors and exceptions) from Workplace Command Center and Wellness Check. Each log message contains information about the error, such as the originating Apex class, affected objects, logging level, user who executed the operation, and more. This object is available in orgs that have Work.com installed.")

-   [wkcc\_\_CmdCtrLogEvent\_\_e](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlogevent__e.htm "Contains log messages (errors and exceptions) from Workplace Command Center and Wellness Check. On insert into this platform event, an Apex trigger (LogEventTrigger) adds a corresponding record into the wkcc__CmdCtrLog__c custom object with the same fields. This platform event is available in orgs that have Work.com installed.")

-   [wkcc\_\_CmdCtrLogSettings\_\_mdt](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlogsettings__mdt.htm "Custom metadata type that contains a record named Default for configuring logging in Workplace Command Center and Wellness Check. You can enable or disable logging and configure whether, and for how long, Salesforce keeps old log messages. The wkcc__CmdCtrLog__c custom object stores the log messages. This custom metadata type is available in orgs that have Workplace Command Center installed.")

## Related Topics

- wkcc__CmdCtrLog__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlog__c.htm)
- wkcc__CmdCtrLogEvent__e (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlogevent__e.htm)
- wkcc__CmdCtrLogSettings__mdt (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlogsettings__mdt.htm)
