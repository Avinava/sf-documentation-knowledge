---
title: "Command Center Data Triggers"
domain: workdotcom-dev-guide
topic: command-center-data-triggers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.308Z
estimatedTokens: 1394
keywords: [Command, Center, Data, Triggers, Work.com, installs, uses, Employee, Individual, User, Location, Adding, modifying, records, objects]
---

# Command Center Data Triggers

> Work.com installs and uses Command Center data triggers on Employee, Individual, User,
    and Location. Adding or modifying records for these objects can trigger changes in related
    objects. It’s also possible to disable the triggers for data loads.

# Command Center Data Triggers

Work.com installs and uses Command Center data triggers on Employee, Individual, User, and Location. Adding or modifying records for these objects can trigger changes in related objects. It’s also possible to disable the triggers for data loads.

When the Work.com managed package is installed into an org, triggers on Employee, Individual, User, and Location are added, along with a wkcc\_\_TriggerSettings\_\_c custom object with records that control whether these triggers are enabled or disabled.

## Command Center Employee Trigger

The Employee trigger executes on both insert and update. If the employee has no IndividualId set, a new Individual record is inserted and associated with the employee, populating the new record with the relevant field data from the Employee, using the following Employee-to-Individual field mapping:

-   OwnerId => OwnerId
-   FirstName => FirstName
-   LastName => LastName
-   DateOfBirth => Birthdate
-   JobProfile => Occupation

If the IndividualId is already set, the trigger still populates the same standard fields in the Individual, to ensure the two records match. The Employee is the source of truth; Individual is based on Employee. This does *not* include any other fields that other packages or customers add to an org. Adding fields to Individual is not recommended.

After initially inserting an employee, individuals are by default not kept in sync with later employee updates. To keep them in sync, set the custom setting value wkcc\_\_Settings\_\_c.wkcc\_\_EmployeeIndividualSyncDisabled\_\_c to false. Once this setting is set to false, all changes to the synched Employee fields are pushed to the related Individual.

In addition to updating Individual, the Employee trigger also helps to link the Employee to a User. This reconciliation is done using the Employee Number field. When an Employee is inserted or updated, the trigger queries Users for any records that don't already have an associated Individual and where User.EmployeeNumber uniquely matches Employee.EmployeeNumber.

Importantly, if duplicate User records are found matching the Employee Number, *neither* User record is updated. The trigger does not attempt to guess which user should be linked to the employee. The IndividualId on User remains blank until the customer either explicitly sets it, or removes the duplicate Employee Number in Users.

## Command Center User Trigger

The User trigger runs on insert and update. If a user record does not already have an IndividualId set, and it does have an Employee Number value, then the Employee entity is queried for employees matching that Employee Number. If a unique match is found, the User is linked to the same Individual as the matching Employee.

As with the Employee trigger, the User trigger does not decide between users if duplicates are found. However, the User trigger does not query the database itself to find possible duplicate users outside of the users passed to the trigger itself. Thus if a User is inserted or updated with the same Employee Number as another User that was not inserted or updated in the same transaction, that User is linked to the matching Employee’s Individual.

Regardless, in all cases, if the customer decides to populate Employee Number, then Employee Number should be treated as a unique identifier.

No other data is synchronized out of the box with Command Center. Other packages still require more, such as Person Account with Health Cloud, or Service Resource with Field Service Lightning. Regardless of the implementation choice, the Individual should be used to link these entities together.

## Command Center Location Trigger

The Location trigger is responsible for recreating fields or records that are materialized from Locations. This includes the wkcc\_\_LocationPath\_\_c field values, and the pre-aggregated Location Wellness Facts used to display hierarchical summaries in the Command Center.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=workdotcom_dev_guide)

#### Note

Populate the location hierarchy and recalculate wellness data anytime you disable or re-enable b2w\_LocationTrigger. Run these batch jobs from the Command Center Settings tab, following Salesforce Help [Populate the Location Hierarchy](https://help.salesforce.com/articleView?id=wcc_setup_populate_location.htm&type=5&language=en_US).

## Enable and Disable Triggers

Use the wkcc\_\_TargetSettings\_\_c object to enable and disable Work.com data triggers. This is useful if you’re doing a large data upload or modifying several records at once that already have related field values set up properly.

The Work.com package adds a record in wkcc\_\_TargetSettings\_\_c for each trigger. The record Name field uses the following format: b2w\_Object NameTrigger. For example, the record that corresponds to the Employee trigger has a Name value of “b2w\_EmployeeTrigger”.

## Bulk Limitations With Triggers Enabled

When Work.com triggers are enabled, bulk operations on affected Work.com objects may incur additional limits. For EmployeeCrisisAssessment, batch sizes should be limited to 3000 records. For Location, batch sizes should be limited to 4000 records.

#### See Also

-   [wkcc\_\_TriggerSettings\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__triggersettings__c.htm "Represents the current state of data triggers for Employee, Location, and other Work.com related objects. This object is available in orgs that have Work.com installed.")

## Related Topics

- wkcc__TriggerSettings__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_wkcc__triggersettings__c.htm)
