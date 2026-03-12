---
title: "OutboundEngagementTmplView"
domain: referral-marketing
topic: outboundengagementtmplview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.942Z
estimatedTokens: 626
keywords: [OutboundEngagementTmplView, outbound, engagement, template, API, version, 65.0, later, Calls]
---

# OutboundEngagementTmplView

> Represents the details of an outbound engagement template. This object
      is available in API version 65.0 and later.

# OutboundEngagementTmplView

Represents the details of an outbound engagement template. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| BusinessArea | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the business area that is the outbound engagement template is for.Possible values are:LoyaltyProgramsPromotions—Loyalty Programs and PromotionsOfferManagement—Loyalty Programs and Promotions |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the template used to create the outbound engagement. |
| IconUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the of the outbound engagement template icon. |
| Purpose | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe business purpose of the outbound engagement template. |
| SourcePath | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe internal source path of the outbound engagement template. |
| TargetName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the page that the outbound engagement template is for. |
| TargetType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of page that the outbound engagement template is for.Possible values are:HomePageImplicitRecordPage |
| TemplateCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe category of the outbound engagement template.Possible values are:EventSegment |
| TemplateDescription | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the outbound engagement template. |
| TemplateDeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the outbound engagement template. |
| TemplateName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the outbound engagement template. |
| TemplateType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of template.Possible values are:CampaignFlow |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the Salesforce product that the outbound engagement template belongs to.Possible values are:GlobalPromotions—Global Promotions ManagementLoyaltyManagementOfferManagementReferralMarketing |
