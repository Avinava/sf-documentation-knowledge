---
title: "AccountRelationhipShareRule"
domain: financial-services-cloud-object-reference
topic: accountrelationhipsharerule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.716Z
estimatedTokens: 378
keywords: [AccountRelationhipShareRule, rule, determines, records, shared, how, they, account, relationship, shares, level, access, granted]
---

# AccountRelationhipShareRule

> Represents the rule that determines which object records are shared, how they are
    shared, the account relationship type that shares the records, and the level of access granted
    to the records.

# AccountRelationhipShareRule

Represents the rule that determines which object records are shared, how they are shared, the account relationship type that shares the records, and the level of access granted to the records.

This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.

## AccountRelationhipShareRule

The FSC Insurance permission set in Financial Services Cloud exposes additional values for the accountToCriteriaField and entityType fields on the AccountRelationshipShareRule metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| accountToCriteriaField | string | Criteria that must be met for the data to be shared. This field shows these additional values for Insurance for Financial Services Cloud.BusinessMilestone.OwnerIdBusinessMilestone.PrimaryAccountIdClaim.AccountIdClaim.OwnerIdCustomerProperty.OwnerIdCustomerProperty.PrimaryOwnerIdInsurancePolicy.NameInsuredIdInsurancePolicy.OwnerIdPersonLifeEvent.OwnerId |
| entityType | string | The type of data shared by this rule. This field shows these additional values for Insurance for Financial Services Cloud.BusinessMilestoneClaimCustomerPropertyInsurancePolicyPersonLifeEvent |

#### See Also

-   [*Metadata API Developer Guide*: AccountRelationshipShareRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_accountrelationshipsharerule.htm "Metadata API Developer Guide:
    AccountRelationshipShareRule - HTML (New Window)")
