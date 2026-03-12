---
title: "AccountRelationshipShareRule"
domain: object-reference
topic: accountrelationshipsharerule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.700Z
estimatedTokens: 1093
keywords: [AccountRelationshipShareRule, rule, determines, records, shared, how, they, account, relationship, shares, level, access, granted, API, version]
---

# AccountRelationshipShareRule

> Represents the rule that determines which object records are shared,
         how they are shared, the account relationship type that shares the records, and the level
         of access granted to the records. This object is available in API version 45.0 and
         later.

# AccountRelationshipShareRule

Represents the rule that determines which object records are shared, how they are shared, the account relationship type that shares the records, and the level of access granted to the records. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(). describeSObjects(), query(), retrieve(), update(). upsert()

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of access granted by the share rule. Valid values are:Read (Read Only)Edit (Read/Write) |
| AccountToCriteriaField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCriteria that must be met for the data to be shared.Possible values are:Account.OwnerIdAccount.ParentIdCampaign.OwnerIdCase.AccountIdCase.OwnerIdContact.AccountIdContact.OwnerIdLead.ConvertedAccountIdLead.OwnerIdLead.PartnerAccountIdOpportunity.PartnerAccountIdOrder.AccountIdOrder.ActivatedByIdOrder.CompanyAuthorizedByIdOrder.OwnerIdPartnerFundAllocation.CreatedByIdPartnerFundAllocation.ChannelPartnerIdPartnerFundAllocation.OwnerIdPartnerFundClaim.CreatedByIdPartnerFundClaim.OwnerIdPartnerFundRequest.ChannelPartnerIdPartnerFundRequest.CreatedByIdPartnerFundRequest.OwnerIdPartnerMarketingBudget.CreatedByIdPartnerMarketingBudget.ChannelPartnerIdPartnerMarketingBudget.OwnerId |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA meaningful explanation of the sharing rule. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the record in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EntityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of data shared by this rule. Values are:AccountCampaignCaseContactLeadOrderPartnerFundAllocationPartnerFundClaimPartnerFundRequestPartnerMarketingBudget |
| Language | TypepicklistPropertiesCreate, Defaulted on create. Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the account relationship share rule. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label assigned to the sharing rule to identify it. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| StaticFormulaCriteria | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA way to further filter what data gets shared. This must be a deterministic formula and spanning is not allowed. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionMust match the type of an account relationship for data to be shared according to the AccountToCriteriaField and the StaticForumulaCriteria. |
