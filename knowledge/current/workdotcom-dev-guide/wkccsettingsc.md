---
title: "wkcc__Settings__c"
domain: workdotcom-dev-guide
topic: wkccsettingsc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.411Z
estimatedTokens: 515
keywords: [wkcc__Settings__c, Settings, Workplace, Command, Center, application, orgs, Work.com, installed, wkcc, _Settings, Calls]
---

# wkcc__Settings__c

> Settings for the Workplace Command Center application. This object is
    available in orgs that have Work.com installed.

# wkcc\_\_Settings\_\_c

Settings for the Workplace Command Center application. This object is available in orgs that have Work.com installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe record name. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe setup owner ID. |
| wkcc__EmployeeIndividualSyncDisabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, Employee and Individual data is not kept in sync after initial creation of the Employee record. If false, Employee and Individual data is kept in sync by pushing field changes from Employee to the corresponding fields in Individual. The default value is true. |
| wkcc__LocationWellnessStagingBatchSize__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe batch sized used when processing the location wellness staging records. This value must be between 1 and 200 or it will be ignored. The default is 200. Lower this value if the batch process encounters governor limit errors. |
| wkcc__LocationWellnessStagingScheduleMins__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe number of minutes used for scheduling and rescheduling the next run of the batch that processes the location wellness staging records. This number must be between 0 and 1440 or it will be ignored. The default is 5. |
| wkcc__SendSurveyBatchSize__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe batch size used when sending surveys. This value must be between 1 and 5000 or it will be ignored. The default is 200. Lower this value if the batch process encounters governor limit errors. |
