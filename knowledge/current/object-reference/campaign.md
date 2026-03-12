---
title: "Campaign"
domain: object-reference
topic: campaign
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.021Z
estimatedTokens: 4799
keywords: [Campaign, tracks, marketing, direct, mail, promotion, webinar, trade, show, Calls, Special, Access, Rules, Usage, Associated]
---

# Campaign

> Represents and tracks a marketing campaign, such as a direct mail
			promotion, webinar, or trade show.

# Campaign

Represents and tracks a marketing campaign, such as a direct mail promotion, webinar, or trade show.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| ActualCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of money spent to run the campaign. Label is Actual Cost in Campaign. |
| AmountAllOpportunities | TypecurrencyPropertiesFilter, SortDescriptionAmount of money in all opportunities associated with the campaign, including closed/won opportunities. Label is Value Opportunities in Campaign. |
| AmountWonOpportunities | TypecurrencyPropertiesFilter, SortDescriptionAmount of money in closed or won opportunities associated with the campaign. Label is Value Won Opportunities in Campaign. |
| BriefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the brief that's associated with the campaign. A brief contains additional context about the goals and audience for the campaign. The label is Brief.Relationship NameBriefRelationship TypeLookupRefers ToRecord |
| BudgetedCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of money budgeted for the campaign. Label is Budgeted Cost in Campaign. |
| CampaignImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the campaign image. Available in API version 42.0 and later. Only available to orgs with Partner Community licenses and Digital Experience enabled or orgs that have installed the Direct Marketing Managed package. |
| CampaignMemberRecordTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe record type ID for CampaignMember records associated with the campaign.This is a relationship field.Relationship NameCampaignMemberRecordTypeRelationship TypeLookupRefers ToRecordType |
| CampaignStage | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field is available with Marketing Cloud Growth and Advanced editions. The lifecycle stage of the campaign based on the status of all of its related flows. Possible values are:In PlanningIn ProgressCompletedErrorCanceledPaused |
| CreatedByID | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who created the campaign.This is a relationship field.Relationship NameCreatorRelationship TypeLookupRefers ToUser |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Description | TypetextareaPropertiesNillableDescriptionDescription of the campaign. Limit: 32 KB. Only the first 255 characters display in reports. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionEnding date for the campaign. Responses received after this date are still counted. |
| ExpectedResponse | TypepercentPropertiesFilter, Nillable, SortDescriptionPercentage of responses you expect to receive for the campaign. |
| ExpectedRevenue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of money you expect to generate from the campaign. |
| HierarchyActualCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated field for the total amount of money spent to run the campaigns in a campaign hierarchy. Label is Total Actual Cost in Hierarchy. |
| HierarchyAmountAllOpportunities | TypecurrencyPropertiesFilter, SortDescriptionAmount of money in all opportunities associated with the campaign in a campaign hierarchy, including closed/won opportunities. Label is Value Opportunities in Hierarchy. |
| HierarchyAmountWonOpportunities | TypecurrencyPropertiesFilter, SortDescriptionThe amount of money in closed or won opportunities associated with the campaign in a campaign hierarchy. Label is Value Won Opportunities in Hierarchy. |
| HierarchyBudgetedCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated field for the total amount of money budgeted for the campaigns in a campaign hierarchy. Label isTotal Budgeted Cost in Hierarchy. |
| HierarchyExpectedRevenue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated field for the total amount of money you expect to generate from the campaign in a campaign hierarchy. Label is Total Expected Revenue in Hierarchy. |
| HierarchyNumberOfContacts | TypeintPropertiesFilterDescriptionCalculated field for the number of contacts associated with the campaign hierarchy. Label is Total Contacts in Hierarchy. |
| HierarchyNumberOfConvertedLeads | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated field for the number of converted leads from the campaign in a campaign hierarchy. Label is Converted Leads in Hierarchy. |
| HierarchyNumberOfLeads | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated field for the number of leads from the campaign in a campaign hierarchy. Label is Leads in Hierarchy. |
| HierarchyNumberOfOpportunities | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated field for the number of opportunities related to the campaign in a campaign hierarchy. Label is Opportunities in Hierarchy. |
| HierarchyNumberOfResponses | TypecurrencyPropertiesFilter, Nillable, SortDescriptionNumber of contacts and unconverted leads with a Member Status equivalent to “Responded” for the campaign in a campaign hierarchy. Label is Responses in Hierarchy. |
| HierarchyNumberOfWonOpportunities | TypeintPropertiesFilter, Group, SortDescriptionThe number of closed or won opportunities associated with the campaign. Label is Won Opportunities in Hierarchy. |
| HierarchyNumberSent | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated field for the total number of individuals targeted by the campaign in a campaign hierarchy. For example, the number of email messages sent. The label is Num Sent in Hierarchy. |
| HierarchyTotalEmailsDelivered | TypeintPropertiesFilterDescriptionCalculated field for emails delivered related to the campaign in a campaign hierarchy. Label is Total Emails Delivered in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| HierarchyTotalFormSubmissions | TypeintPropertiesFilterDescriptionCalculated field for form submissions related to the campaign in a campaign hierarchy. Label is Total Form Submissions in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| HierarchyTotalFormViews | TypeintPropertiesFilterDescriptionCalculated field for form views related to the campaign in a campaign hierarchy. Label is Total Form Views in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| HierarchyTotalLandingPageFormSubmissions | TypeintPropertiesFilterDescriptionCalculated field for form submissions from a landing page related to the campaign in a campaign hierarchy. Label is Total Landing Page Form Submissions in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| HierarchyTotalLandingPageViews | TypeintPropertiesFilterDescriptionCalculated field for landing page views related to the campaign in a campaign hierarchy. Label is Total Landing Page Views in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| HierarchyUniqueEmailOpens | TypeintPropertiesFilterDescriptionCalculated field for email opens related to the campaign in a campaign hierarchy. Excludes repeat opens. Label is Unique Email Opens in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| HierarchyUniqueEmailTrackedLinkClicks | TypeintPropertiesFilterDescriptionCalculated field for unique email link clicks related to the campaign in a campaign hierarchy. Excludes repeat clicks. Label is Unique Email Clicks in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| HierarchyUniqueMarketingLinkClicks | TypeintPropertiesFilterDescriptionCalculated field for unique marketing link clicks related to the campaign in a campaign hierarchy. Excludes repeat clicks. Label is Unique Marketing Link Clicks in Hierarchy. This field is available with Marketing Cloud Account Engagement. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this campaign is active (true) or not (false). The default value is false. The label is Active. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is one of the following, whichever is the most recent:The due date of the most recent event logged against the record.The due date of the most recently closed task associated with the record. |
| LastModifiedById | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who last updated the campaign.This is a relationship field.Relationship NameLast ModifiedRelationship TypeLookupRefers ToUser |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, Sort,DescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, Sort,DescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Name of the campaign. Limit: is 80 characters. |
| NumberOfContacts | TypeintPropertiesFilter, Group, SortDescriptionNumber of contacts associated with the campaign. Label is Total Contacts. |
| NumberOfConvertedLeads | TypeintPropertiesFilter, Group, SortDescriptionNumber of leads that were converted to an account and contact due to the marketing efforts in the campaign. Label is Converted Leads. |
| NumberOfLeads | TypeintPropertiesFilter, Group, SortDescriptionThe number of leads associated with the campaign. Label is Leads in Campaign. |
| NumberOfOpportunities | TypeintPropertiesFilter, Group, SortDescriptionThe number of opportunities associated with the campaign. Label is Opportunities in Campaign. |
| NumberOfResponses | TypeintPropertiesFilter, Group, SortDescriptionThe number of contacts and unconverted leads with a Member Status equivalent to “Responded” for the campaign. Label is Responses in Campaign. |
| NumberOfWonOpportunities | TypeintPropertiesFilter, Group, SortDescriptionThe number of closed or won opportunities associated with the campaign. Label is Won Opportunities in Campaign. |
| NumberSent | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of individuals targeted by the campaign. For example, the number of emails sent. Label is Num Sent. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who owns this campaign. Default value is the user logging in to the API to perform the create.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentCampaign | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionThe campaign above the selected campaign in the campaign hierarchy. |
| ParentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the parent Campaign record, if any.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCampaign |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionStarting date for the campaign. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionStatus of the campaign, for example, Planned, In Progress. Limit: 40 characters. |
| TenantId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the associated Marketing Cloud Account Engagement business unit. Read-only. Available with Marketing Cloud Account Engagement in API version 51.0 and later.This is a relationship field.Relationship NameBusiness UnitRelationship TypeLookupRefers ToPardotTenant |
| TotalAmountAllOpportunities | TypecurrencyPropertiesFilterDescriptionCalculated field for total amount of all opportunities associated with the campaign hierarchy, including closed/won opportunities. Label is Total Value Opportunities in Hierarchy. |
| TotalAmountAllWonOpportunities | TypecurrencyPropertiesFilterDescriptionCalculated field for amount of all closed/won opportunities associated with the campaign hierarchy. Label is Total Value Won Opportunities in Hierarchy. |
| TotalEmailsDelivered | TypeintPropertiesFilterDescriptionCalculated field for emails delivered related to the campaign. Label is Total Emails Delivered in Campaign. This field is available with Marketing Cloud Account Engagement. |
| TotalFormSubmissions | TypeintPropertiesFilterDescriptionCalculated field for form submissions related to the campaign. Label is Total Form Submissions in Campaign. This field is available with Marketing Cloud Account Engagement. |
| TotalFormViews | TypeintPropertiesFilterDescriptionCalculated field for form views related to the campaign. Label is Total Form Views in Campaign. This field is available with Marketing Cloud Account Engagement. |
| TotalLandingPageFormSubmissions | TypeintPropertiesFilterDescriptionCalculated field for form submissions from a landing page related to the campaign. Label is Total Landing Page Form Submissions in Campaign. This field is available with Marketing Cloud Account Engagement. |
| TotalLandingPageViews | TypeintPropertiesFilterDescriptionCalculated field for landing page views related to the campaign. Label is Total Landing Page Views in Campaign. This field is available with Marketing Cloud Account Engagement. |
| TotalNumberofLeads | TypeintPropertiesFilterDescriptionCalculated field for total number of leads associated with the campaign hierarchy. This number also includes converted leads. Label is Total Leads in Hierarchy. |
| TotalNumberofOpportunities | TypeintPropertiesFilterDescriptionCalculated field for the total number of opportunities associated with the campaign hierarchy. Label is Total Opportunities in Hierarchy. |
| TotalNumberofResponses | TypeintPropertiesFilterDescriptionCalculated field for number of contacts and unconverted leads that have a Member Status equivalent to “Responded” for the campaign hierarchy. Label is Total Responses in Hierarchy. |
| TotalNumberofWonOpportunities | TypeintPropertiesFilterDescriptionCalculated field for the total number of won opportunities associated with the campaign hierarchy. Label is Total Won Opportunities in Hierarchy. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionType of campaign, for example, Direct Mail or Referral Program. Limit: 40 characters. |
| UniqueEmailOpens | TypeintPropertiesFilterDescriptionCalculated field for email opens related to the campaign. Excludes repeat opens. Label is Unique Email Opens in Campaign. This field is available with Marketing Cloud Account Engagement. |
| UniqueEmailTrackedLinkClicks | TypeintPropertiesFilterDescriptionCalculated field for unique email link clicks related to the campaign. Excludes repeat clicks. Label is Unique Email Clicks in Campaign. This field is available with Marketing Cloud Account Engagement. |
| UniqueMarketingLinkClicks | TypeintPropertiesFilterDescriptionCalculated field for unique marketing link clicks related to the campaign. Excludes repeat clicks. Label is Unique Marketing Link Clicks in Campaign. This field is available with Marketing Cloud Account Engagement. |

## Usage

Client applications can create, update, delete, and query Attachment records associated with a campaign via the API.

The Campaign object is defined only for those organizations that have the marketing feature enabled and valid marketing licenses. In addition, it is accessible only to those users that are enabled as marketing users. If the organization does not have the marketing feature or valid marketing licenses, this object does not appear in the describeGlobal() call, and you can’t use describeSObjects() or query() with the Campaign object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The main constituent of a campaign is a CampaignMember. You will commonly need to update campaigns with CampaignMember.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CampaignChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[CampaignFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 18.0)

Feed tracking is available for the object.

[CampaignHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 40.0)

History is available for tracked fields of the object.

[CampaignOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignownersharingrule.htm "Represents the rules for sharing a campaign with User records other than the owner or anyone above the owner in the role hierarchy.")

Sharing rules are available for the object.

[CampaignShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignshare.htm "Represents a sharing entry on a Campaign.")

Sharing is available for the object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- CampaignChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CampaignFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CampaignHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CampaignOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignownersharingrule.htm)
- CampaignShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignshare.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
