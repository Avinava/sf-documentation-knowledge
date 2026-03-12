---
title: "OpportunityRelatedDeleteLog"
domain: object-reference
topic: opportunityrelateddeletelog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.593Z
estimatedTokens: 665
keywords: [OpportunityRelatedDeleteLog, audit, log, deletion, opportunity-related, child, records, opportunity, team, members, product, splits, API, version, 59.0]
---

# OpportunityRelatedDeleteLog

> Represents an audit log of the deletion of opportunity-related child
         records, such as opportunity team members, product splits, or opportunity splits. This
      object is available in API version 59.0 and later.

# OpportunityRelatedDeleteLog

Represents an audit log of the deletion of opportunity-related child records, such as opportunity team members, product splits, or opportunity splits. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only when the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization.When multicurrency is enabled, and a Pricebook2 is specified on the parent opportunity (that is, the Pricebook2Id field isn’t blank on the opportunity record referenced by this object’s OpportunityId), then the value must match the currency of the CurrencyIsoCode field on the PricebookEntry records that are associated with this object.Possible values are:AED—UAE DirhamCAD—Canadian DollarINR—Indian RupeeUSD—U.S. DollarThe default value is USD. |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was deleted.Possible values are:DoubleDynamicEnumEntityIdStaticEnumText |
| DeleteLog | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, Sort |
| FieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe name of the field that was deleted.Possible values are:OpportunityLineItemSplit.SplitOwnerIdOpportunityLineItemSplit.SplitPercentageOpportunityLineItemSplit.SplitTypeIdOpportunitySplit.SplitOwnerIdOpportunitySplit.SplitPercentageOpportunitySplit.SplitTypeIdOpportunityTeamMember.TeamMemberRoleOpportunityTeamMember.UserIdProduct2.Name |
| OpportunityId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the associated opportunity.This field is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| Parent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the record that was deleted. Records with the same Parent text indicate that the value shown in the Value field came from the same record that was previously deleted. Refer to the FieldName field to see which field is being tracked. |
| SobjectType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe object that’s being recorded for this row of data. Possible values are:OpportunityLineItemSplitOpportunitySplitOpportunityTeamMember |
| Value | TypeanyTypePropertiesNillable, SortDescriptionThe value of the field that was deleted. |
