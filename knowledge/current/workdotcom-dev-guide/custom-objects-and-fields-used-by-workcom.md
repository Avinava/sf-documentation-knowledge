---
title: "Custom Objects and Fields Used by Work.com"
domain: workdotcom-dev-guide
topic: custom-objects-and-fields-used-by-workcom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.300Z
estimatedTokens: 2210
keywords: [Custom, Objects, Work.com, data, model, includes, several]
---

# Custom Objects and Fields Used by Work.com

> The Work.com data model includes several custom objects and fields.

# Custom Objects and Fields Used by Work.com

The Work.com data model includes several custom objects and fields.

The Work.com package installs custom objects used for Workplace Command Center. Also, installing Work.com also adds custom fields to Location and Task.

-   **[Employee](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_employee.htm)**
    Work.com uses the Employee standard object to track information about users who are students, volunteers, and other roles in addition to employees. Some managed packages also install custom fields for the Employee standard object.
-   **[Location](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)**
    Location is used by Work.com to represent a physical location, with a visitor address, with extra custom fields added by Work.com. If location search filtering for all levels is enabled in the org, a location can also be an abstraction.
-   **[Address](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_address.htm)**
    Work.com uses the Address standard object to store data about a workplace location address. The Workplace Command Center managed package installs custom fields for the Address standard object.
-   **[Task](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_task.htm)**
    Work.com uses the Task standard object and custom fields to list tasks in the Operations Feed for Command Center. Employee Service uses the Task standard object and custom fields to list tasks in a transition plan for HR Service Center. The managed packages for each product install the indicated fields for the Task standard object.
-   **[wkcc\_\_CmdCtrLog\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlog__c.htm)**
    Stores log messages (errors and exceptions) from Workplace Command Center and Wellness Check. Each log message contains information about the error, such as the originating Apex class, affected objects, logging level, user who executed the operation, and more. This object is available in orgs that have Work.com installed.
-   **[wkdw\_\_ArticleToFlowLink\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkdw__articletoflowlink__c.htm)**
    Create new custom object in order to let customer configure which flows will be invocable from Knowledge Article page in community. This object is available in API version 53.0 and later.
-   **[wkcc\_\_CmdCtrLogEvent\_\_e](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlogevent__e.htm)**
    Contains log messages (errors and exceptions) from Workplace Command Center and Wellness Check. On insert into this platform event, an Apex trigger (LogEventTrigger) adds a corresponding record into the wkcc\_\_CmdCtrLog\_\_c custom object with the same fields. This platform event is available in orgs that have Work.com installed.
-   **[wkcc\_\_CommandCenterMapping\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_commandcentermapping__c.htm)**
    Stores the mappings for all tabs in the Command Center Settings app, which you access from App Launcher. This object is available in orgs that have Workplace Command Center installed.
-   **[wkdw\_\_HealthVerification\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_hr_sforce_api_objects_wkdw__healthverification__c.htm)**
    Represents a request for verification of a user’s COVID-19 status.
-   **[wkcc\_\_LocationWellnessAggregation\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__locationwellnessaggregation__c.htm)**
    Aggregates wellness counts by location and status of employees directly linked to a location. This object is available in orgs that have Workplace Command Center version 4.2 and later installed.
-   **[wkcc\_\_LocationWellnessFact\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__locationwellnessfact__c.htm)**
    Aggregates wellness counts by location and status. This object rolls up the location hierarchy, aggregating status counts for all employees directly linked to a location or linked to any record in that location’s descendent hierarchy. This object is available in orgs that have Work.com installed.
-   **[wkcc\_\_LocationWellnessStaging\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__locationwellnessstaging__c.htm)**
    Deprecated. This object is a staging table for recalculating location wellness facts. Records are removed once the locations have been recalculated. This object is available in orgs that have version 4 or earlier of Work.com installed. This object was deprecated in version 4.2 of Workplace Command Center. In version 4.2 and later, the data in this object is no longer updated.
-   **[wkcc\_\_Settings\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__settings__c.htm)**
    Settings for the Workplace Command Center application. This object is available in orgs that have Work.com installed.
-   **[wkcc\_\_SurveyHistory\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__surveyhistory__c.htm)**
    Represents historical data from a specific sending of a survey. The data includes the name of the survey, when it started to be sent out, the schedule in force (if any), and the status of the sending operation. The history provides an audit trail that can be used for monitoring and troubleshooting survey issues. This object is available in API version 49.0 and later.
-   **[wkcc\_\_SurveySchedule\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__surveyschedule__c.htm)**
    Represents the details of a survey schedule in the org, including the selected survey, email template, and filter criteria. This object is available in API version 49.0 and later
-   **[wkcc\_\_SurveyScheduleRecipient\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__surveyschedulerecipient__c.htm)**
    Represents details about recipients of surveys sent out by a particular survey schedule. The recipients can be employees or locations. If you change the recipients for a scheduled survey, the updated recipients list is referenced the next time the scheduled survey goes out. This object is available in API version 49.0 and later.
-   **[wkcc\_\_TriggerSettings\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__triggersettings__c.htm)**
    Represents the current state of data triggers for Employee, Location, and other Work.com related objects. This object is available in orgs that have Work.com installed.
-   **[wkdw\_\_EmployeeWorkExperience\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_ew_sforce_api_objects_wkdw__employeeworkexperience__c.htm)**
    Stores work experience of an employee in the Employee Workspace community. This object is available in orgs that have the Employee Workspace managed package installed.
-   **[wkdw\_\_OnboardingTask\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_hr_sforce_api_objects_wkdw__onboardingtask__c.htm)**
    Custom object that represents a reusable task definition that defines the task assigned to an employee in a transition plan template.
-   **[wkdw\_\_OnboardingTemplate\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_hr_sforce_api_objects_wkdw__onboardingtemplate__c.htm)**
    Represents a custom object that represents a reusable task definition that defines the task assigned to an employee in a transition plan template.
-   **[wkdw\_\_OnboardingTemplateTask\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_hr_sforce_api_objects_wkdw__onboardingtemplatetask__c.htm)**
    Represents a custom object that is a junction object which serves to join a transition task to a transition plan.
-   **[wkdw\_\_TransitionPlan\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_hr_sforce_api_objects_wkdw__transitionplan__c.htm)**
    Custom object for a transition plan that is associated with an employee user. This object is available in API version 56.0 and later.
-   **[wkcc\_\_WorkQueueItem\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkc__workqueueitem__c.htm)**
    Coordinates Workplace Command Center background processing jobs, such as sending surveys or aggregating a location’s status. This object is available in orgs that have Workplace Command Center installed.

## Related Topics

- Employee (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_employee.htm)
- Location (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)
- Address (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_address.htm)
- Task (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_task.htm)
- wkcc__CmdCtrLog__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlog__c.htm)
- wkdw__ArticleToFlowLink__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkdw__articletoflowlink__c.htm)
- wkcc__CmdCtrLogEvent__e (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_cmdctrlogevent__e.htm)
- wkcc__CommandCenterMapping__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_commandcentermapping__c.htm)
- wkdw__HealthVerification__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_hr_sforce_api_objects_wkdw__healthverification__c.htm)
- wkcc__LocationWellnessAggregation__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__locationwellnessaggregation__c.htm)
