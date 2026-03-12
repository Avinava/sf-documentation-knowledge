---
title: "StandardObjectName History History"
domain: channel-revenue-management-dev-guide
topic: standardobjectname-history-history
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.166Z
estimatedTokens: 848
keywords: [StandardObjectName, History, StandardObjectNameHistory, model, objects, associated, standard, represent, changes, Calls, Special, Access, Rules, Follow]
---

# StandardObjectName History History

> StandardObjectNameHistory is the model for all
      history objects associated with standard objects. These objects represent the history of
      changes to the values in the fields of a standard object.

# StandardObjectName History History

StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.

The object name is variable and uses StandardObjectNameHistory syntax. For example, AccountHistory represents the history of changes to the values of an account record’s fields. We list the available associated history objects at the end of this topic. For specific version information, see the documentation for the standard object.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountHistory, see the special access rules for Account.

## Fields

| Field Name | Details |
| --- | --- |
| StandardObjectNameId | TypereferencePropertiesFilter, Group, SortDescriptionID of the standard object. |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionOld value of the field that was changed. |

## Objects That Follow This Model

These objects follow the standard pattern for associated history objects.

-   [AccountLeadTime](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_accountleadtime.htm)
-   [BatchJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_batchjob.htm)
-   [BatchJobPart](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_batchjobpart.htm)
-   [BatchJobPartFailedRecord](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_batchjobpartfailedrecord.htm)
-   [PartnerStagedData](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerstageddata.htm)
-   [PartnerUnsoldInventory](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerunsoldinventory.htm)
-   [PartnerUnsoldInvLedger](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerunsoldinvledger.htm)
-   [PtnrInvItmRecon](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvitmrecon.htm)
-   [PtnrInvItmReconTrace](https://developer.salesforce.com/docs/atlas.en-us.260.0.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvitmrecontrace.htm)
