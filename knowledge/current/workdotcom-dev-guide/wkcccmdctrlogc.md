---
title: "wkcc__CmdCtrLog__c"
domain: workdotcom-dev-guide
topic: wkcccmdctrlogc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.339Z
estimatedTokens: 820
keywords: [wkcc__CmdCtrLog__c, Stores, log, messages, errors, exceptions, Workplace, Command, Center, Wellness, Check, message, error, originating, Apex]
---

# wkcc__CmdCtrLog__c

> Stores log messages (errors and exceptions) from Workplace Command Center and
      Wellness Check. Each log message contains information about the error, such as the
      originating Apex class, affected objects, logging level, user who executed the operation, and
      more. This object is available in orgs that have Work.com installed.

# wkcc\_\_CmdCtrLog\_\_c

Stores log messages (errors and exceptions) from Workplace Command Center and Wellness Check. Each log message contains information about the error, such as the originating Apex class, affected objects, logging level, user who executed the operation, and more. This object is available in orgs that have Work.com installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean the record was only referenced and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this log message. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create(). |
| wkcc__ClassName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionApex class from which the error originated. |
| wkcc__Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLogging level for the operation that caused the error.Possible values are:DEBUGERRORINFOWARN |
| wkcc__Message__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe error or exception. For example: Update failed. First exception on row 0 with id 1315w0000TwPnAAk: first error: FIELD_CUSTOM_VALIDATION_EXCEPTION. Location error message 1 for updating the parent location: []. |
| wkcc__ObjectIdList__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionComma-separated list of IDs for the standard and custom objects affected by the operation that caused the error. For example: 1315w0000TwPnAAk, 1315w0000TwQQAA0, 1315w0000TwQRAA0, 1315w0000TwREAAO. |
| wkcc__ObjectName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the error was a result of a failed DML operation (insert, update, delete), then this field contains the object of the DML operation. For example: Location. |
| wkcc__Package__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| wkcc__ResponseJson__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReserved for future use. |
| wkcc__StackTrace__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReserved for future use. |
| wkcc__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who initiated the operation that caused the error. |

#### See Also

-   [Understand Logging](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm "Work.com captures errors and exceptions that originate from Workplace Command Center and Wellness Check and adds them as log messages to the wkcc__CmdCtrLog__c custom object.")

## Related Topics

- Understand Logging (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm)
