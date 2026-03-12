---
title: "Financial Services Cloud Custom Triggers"
domain: financial-services-cloud-object-reference
topic: financial-services-cloud-custom-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.757Z
estimatedTokens: 3815
namespace: FinServ
keywords: [Financial, Services, Cloud, Custom, Triggers, ensure, data, flows, correctly, objects, Trigger, Behavior, sObjects, Relation, Rollup]
---

# Financial Services Cloud Custom Triggers

> Custom triggers ensure that data flows correctly through the Financial Services Cloud
    custom objects and fields.

**Namespace:** `FinServ`

# Financial Services Cloud Custom Triggers

Custom triggers ensure that data flows correctly through the Financial Services Cloud custom objects and fields.

Custom triggers use the FinServ namespace prefix. For example, FinServ\_\_AccountTrigger, which is a custom trigger on Account that performs tasks on Account, Contact, and the relationship object AccountAccountRelation.

| Trigger Name | Host Object |
| --- | --- |
| FinServ__AccountAccountRelationTrigger.trigger | AccountAccountRelation |
| FinServ__AccountContactRelationTrigger.trigger | AccountContactRelation |
| FinServ__AccountTrigger.trigger | Account |
| FinServ__AlertTrigger.trigger | Alert |
| FinServ__AssetsAndLiabilitiesTrigger.trigger | AssetsAndLiabilities |
| FinServ__ContactContactRelationTrigger.trigger | ContactContactRelation |
| FinServ__ContactTrigger.trigger | Contact |
| FinServ__EventTrigger.trigger | Event |
| FinServ__FinancialAccountRoleTrigger.trigger | FinancialAccountRole |
| FinServ__FinancialAccountTrigger.trigger | FinancialAccount |
| FinServ__FinancialGoalTrigger.trigger | FinancialGoal |
| FinServ__FinancialHoldingTrigger.trigger | FinancialHolding |
| FinServ__LeadTrigger.trigger | Lead |
| FinServ__OpportunityTrigger.trigger | Opportunity |
| FinServ__RBLFilterCriteriaTrigger.trigger | RBLFilterCriteria |
| FinServ__ReciprocalRoleTrigger.trigger | ReciprocalRole |
| FinServ__RevenueTrigger.trigger | Revenue |
| FinServ__RollupByLookupConfigTrigger.trigger | RollupByLookupConfig |
| FinServ__SecuritiesTrigger.trigger | Securities |
| FinServ__TaskTrigger.trigger | Task |
| FinServ__InsurancePolicyTrigger.trigger | InsurancePolicy |
| FinServ__ClaimTrigger.trigger | Claim |

## Trigger Behavior

The package provides triggers on sObjects, Relation sObjects, and Rollup sObjects. Each object type’s trigger checks for various conditions and then performs tasks based on what it finds. Each object has one trigger. The following list explains trigger behavior by object.

## sObjects

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

The Account triggers support orgs using either the individual or person account models. Where the person account model is in use, the steps involving the creation of a Contact aren’t needed.

Account

**Before insert:** If the record type indicates that the account isn’t a portion of an individual, IndividualType is set to blank.

**After insert:** If the user creates an account of record type Individual, create an individual contact linked to the account. Also assigns topics based on the value in the field after an account has been created.

The steps to create an individual contact and assign topics are:

-   For each account created, creates a contact.
-   For each contact, adds AccountId.
-   For each account, in a **future** method, adds ContactId.
-   Sets IndividualId\_\_c to AccountId concatenated with the current date.

**Before update:** Validates that the update on the account:

-   Hasn’t changed the account’s record type from individual to another record type, and hasn’t changed from one individual record type to another.
-   Hasn’t changed the account’s record type from another record type to an individual record type.

**After update:** Syncs the contact associated with the updated account to reflect the updated fields. The following fields are synced:

-   AccountName
-   OwnerId
-   IndividualType\_\_c
-   RecordTypeId

**Before delete:** Helps perform cascade deletes. Gathers all the rollup objects related to the account to be deleted.

**After delete:** Rolls back the rollup objects related to the deleted account.

Contact

**Before insert:** Creates an individual (Account - Representing Party) when the individual contact is promoted as an individual as follows.

-   For each account that is passed, creates a contact.
-   For each contact, adds AccountId.
-   For each account, in a **future** method, adds ContactId.
-   Sets IndividualId\_\_c to AccountId concatenated with the current datetime.

**After insert:** Validates that the referenced individual account does not have a contact associated with it. This check is bypassed during a lead conversion.

**Before update:** Validates that the update on the account record:

-   Hasn’t changed the record type of the account from individual to another record type.
-   Hasn’t changed the record type of the account from any other record type to an individual.
-   Validates that the referenced individual account does not have a contact associated with it.

**After update:** Syncs the account associated with the updated contact to reflect the updated fields. The following fields are synced:

-   AccountName
-   OwnerId
-   IndividualType\_\_c
-   RecordTypeId

Reciprocal Role

**After insert:** If the role has the flag to create a reciprocal role set, creates a Reciprocal Role sObject for the inverse role.

**Before delete:** Where there is an inverse Reciprocal Role sObject record, delete that record.

RollupByLookupConfig

**Before insert:** Validates each new RollupByLookupConfig object according to these rules:

-   Can’t insert a duplicate RollupByLookupConfig object. Duplicate records are those that share combination of ToObject\_\_c, ToField\_\_c, and LookupField\_\_c.
-   Can’t exceed 40 active RollupByLookupConfig objects.
-   The fields and lookups on the RollupByLookupConfig object must be valid.
-   The Where Clause field must contain a correctly formatted SQL expression.

**Before update:** Performs the same actions as before insert.

**Before delete:** Validates that the RollupByLookupConfig object isn’t active (active objects can’t be deleted).

RBLFilterCriteria

**Before insert:** Validates each new RBLFilterCriteria object according to these rules:

-   A RBLFilterCriteria object can’t be inserted when its parent is active.
-   The fields on the RBLFilterCriteria object must be valid.
-   The Operator must be valid ('greater than', 'equals', 'greater than or equals to', 'contains', 'not equal to', 'less than', 'less than or equal to', 'not contains', 'not like', 'starts with', 'ends with', 'in').

**Before update:** Performs the same actions as before insert.

**Before delete:** Validates that the RBLFilterCriteria object’s parent RollupByLookupConfig object isn’t active (RBLFilterCriteria objects with an active parent RollupByLookupConfig object can’t be deleted).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

Alerts and Securities sObjects don’t have triggers.

## Relation sObjects

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

Rollup calculation triggers are fired when Enable Rollup Summary is enabled in the Wealth Application Config custom setting. For more details, see [Temporarily Disable Rollups to Accelerate Data Loads](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_show_disable_rollups.htm?search_text=Enable%20Rollup%20Summary).

AccountContactRelation (ACR)

**Before insert:** Populates RecordTypeId and Date for each ACR record to be inserted. Ensures that each ACR obeys these requirements:

-   No multiple primary members for a given household.
-   Contact portion can’t be a member of multiple households.
-   No multiple ACR records with the same AccountId and ContactId combination.

**After insert:** Recalculates the rollups for all groups in which member or business ACRs have changed.

**Before update:** Performs the same actions as before insert.

**After update:** Performs the same actions as after insert.

**Before delete:** Ensures that none of the ACRs to be deleted are of the record type Group. Also recalculates rollups for all groups when any member or business ACRs have changed.

AccountAccountRelation (AAR)

**After insert:** If the auto-create inverse setting is selected, create the inverse record.

**Before update:** Checks to see if records are being deactivated. If so, sets EndDate\_\_c as the day of the update, and if the auto-create inverse setting is selected deactivates the inverse record.

**Before delete:** If the auto-create inverse setting is selected, delete the inverse record of the AAR.

ContactContactRelation (CCR)

**After insert:** If the auto-create inverse setting is selected, creates the inverse record.

**Before update:** If records are being deactivated, sets EndDate\_\_c as today, and if the auto-create inverse setting is selected deactivates the inverse record.

**Before delete:** If the auto-create inverse setting is selected, deletes the inverse record of the CCR.

## Rollup sObjects

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

Rollup sObject triggers provide for updating Household\_\_c, which points to the account portion of the group that they roll up to. Usually, the rollup calculation is also calculated.

Household triggers are fired when Enable Group Record Rollups is enabled in the Wealth Application Config custom setting. After the triggers are fired, any active rollup calculations are performed when Enable Rollup Summary is enabled in the Wealth Application Config. For more details, see [Temporarily Disable Rollups to Accelerate Data Loads](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_show_disable_rollups.htm?search_text=Enable%20Rollup%20Summary).

Financial Account

**Before insert:** Sets the value of the owner type when a FinancialAccount record is updated. Then sets Household\_\_c to the account portion of the group that it’s rolling up to.

**After insert:**

-   Creates a primary owner financial account role for the new financial account.
-   If defined, creates joint owner roles and user-selected roles.
-   Performs the rollup calculation.

**Before update:** Performs the same actions as before insert.

**After update:** Performs the same actions as after insert.

**Before delete:** Deactivates all Financial Account Roles related to the Financial Account by performing an UPDATE to set Active value to False.

**After delete:** Performs the rollup calculation.

Financial Account Role (FAR)

**Before insert:** If RelatedContact\_\_c of the FAR record is associated with an individual account, updates RelatedAccount\_\_c to that of the individual account.

**After insert:** For FAR records of type Joint Owner, updates the Joint Owner field on the associated Financial Account record, then performs the rollup calculations.

**Before update:** Performs the same actions as before insert and, if the user has chosen to deactivate the FAR records, sets the end day to the current day.

**After update:** Performs the rollup calculations.

**Before delete:** Blocks the deletion of any FAR records of type Primary Owner. FAR records of type Primary Owner must be deleted from the associated Financial Account record. For FAR records of type Joint Owner, updates the Joint Owner field on the associated Financial Account record.

**After delete:** Performs the rollup calculations.

Assets and Liabilities

**Before insert:** Sets Household\_\_c to the account portion of the group that it’s rolling up to.

**Before update:** Performs the same action as before insert.

Financial Goals

**Before insert:** Sets Household\_\_c of the FinancialGoal record to the account portion of the group that the financial goal is rolling up to.

**Before update:** Performs the same action as before insert.

Financial Holdings

**Before insert:** Retrieves financial account fields based on the FinancialHolding record and then populates Household\_\_c and PrimaryOwner on the financial holding to be inserted.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

Financial holdings aren’t part of the rollup objects, so no rollup is performed.

Revenue

**After insert:** Performs the rollup calculations.

**After update:** Performs the rollup calculations.

**After delete:** Performs the rollup calculations.

Tasks

**Before insert:** Sets Household\_\_c of the Task record to the account portion of the group that the task is rolling up to.

**After insert:** Updates the Next and Last interaction for the Contact that is associated with the task.

**Before update:** Performs the same action as before insert.

**After update:** Performs the same action as after insert.

**After delete:** Performs the same action as after insert.

Events

**Before insert:** Sets Household\_\_c of the Event record to the account portion of the group that the event is rolling up to.

**After insert:** Updates the Next and Last interaction for the Contact that is related to the event.

**Before update:** Performs the same action as before insert.

**After update:** Performs the same action as after insert.

**After delete:** Performs the same action as after insert.

Leads

**Before insert:** For individual data models only, this trigger maps the lead name to the company name field and updates the company name to the employer field for leads converted into individuals. It also checks and performs household rollup for referrals and stamps the ReferredByContact\_\_con the Lead object.

**After insert:** Updates the Next and Last interaction for the Contact that is related to the event.

**Before update:** For the individual data model, this trigger maps the lead name to the company name field and updates the employer field for leads converted into individuals. It validates data to ensure that Referral-mapped type Lead records are not associated with non-individuals and restricts mixed Account and Contact individual and non-individual record types. It also prevents any lead with expressed interest from being converted to a new individual. Additionally, it checks and performs household rollup for referrals and stamps the ReferredByContact\_\_c field on the Lead object.

**After update:** Ensures that the lead-converted contact is set as the primary contact on the account and that the opportunity linked to the lead is updated with the appropriate record type. After the lead is converted, it updates the converted accounts with the referred-by values from the lead. Additionally, it calculates and updates referral scores for the contact.

Opportunities

**Before insert:** Sets Household\_\_c of the Opportunity record to the account portion of the group that the opportunity is rolling up to.

**Before update:** Performs the same action as before insert.

Insurance Policy

**Before insert:** Sets Household\_\_c of the Insurance Policy record to the account portion of the household that the insurance policy is rolling up to.

**Before update:** Performs the same action as before insert.

Claim

**Before insert:** Sets Household\_\_c of the Claim record to the account portion of the household that the claim is rolling up to.

**Before update:** Performs the same action as before insert.
