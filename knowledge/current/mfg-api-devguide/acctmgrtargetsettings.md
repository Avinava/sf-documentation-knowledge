---
title: "AcctMgrTargetSettings"
domain: mfg-api-devguide
topic: acctmgrtargetsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.152Z
estimatedTokens: 488
keywords: [AcctMgrTargetSettings, settings, account, manager, targets, define, distribution, frequency, hierarchy, team, members, assignments, price, book, displays]
---

# AcctMgrTargetSettings

> Represents the settings of account manager targets. These settings define the
      distribution frequency, the hierarchy of team members for assignments, and the default price
      book of account manager targets. This object also displays the record usage details by account
      manager targets in your Salesforce org.  This object is available in API version 49.0 and
    later.

# AcctMgrTargetSettings

Represents the settings of account manager targets. These settings define the distribution frequency, the hierarchy of team members for assignments, and the default price book of account manager targets. This object also displays the record usage details by account manager targets in your Salesforce org. This object is available in API version 49.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mfg_api_devguide)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

GET, POST, PATCH, PUT

## Fields

| Field | Details |
| --- | --- |
| AcctMgrPeriodicTargetDstrCnt | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of existing records in the AcctMgrTargetDstr object. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name for AcctMgrTargetSettings. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata type in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the account manager target settings. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for AcctMgrTargetSettings. This internal label doesn’t get translated. |
| Metadata | TypeAcctMgrTargetSettingsPropertiesCreate, Nillable, UpdateDescriptionThe corresponding metadata type. |
| PeriodType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the type of period to use for account manager target’s distribution.The valid values are:MonthQuarterWeekYear |
| PricebookId | TypeStringPropertiesFilter, Group, NillableDescriptionThe ID of the price book. |
| TeamMemberHierarchyType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe hierarchy type of team members for account manager target assignments.The valid values are:ForecastsHierarchy—Derived from the Forecasts Hierarchy setupManagerHierarchy—Derived from the Manager field of a user |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AcctMgrTargetSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <periodType>Month</periodType>
   <teamMemberHierarchyType>ManagerHierarchy</teamMemberHierarchyType>   
</AcctMgrTargetSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>AcctMgrTargetSettings</name>
    </types>
<version>49.0</version>
</Package>
```
