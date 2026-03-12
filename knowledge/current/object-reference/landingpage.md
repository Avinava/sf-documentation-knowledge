---
title: "LandingPage"
domain: object-reference
topic: landingpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.531Z
estimatedTokens: 1964
keywords: [LandingPage, Account, Engagement, landing, web, visitor, reaches, clicking, link, advertisement, pages, created, synced, Salesforce, Lightning]
---

# LandingPage

> Represents an Account Engagement landing page. A landing page is a
			web page that a visitor reaches after clicking a link or advertisement. Landing pages
			can be created in Account Engagement and synced to Salesforce or created on the Landing
			Page object in Account Engagement Lightning App. This object is available in API
		version 42.0 and later.

# LandingPage

Represents an Account Engagement landing page. A landing page is a web page that a visitor reaches after clicking a link or advertisement. Landing pages can be created in Account Engagement and synced to Salesforce or created on the Landing Page object in Account Engagement Lightning App. This object is available in API version 42.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object, your org must use Account Engagement and users need the CRM User or Sales User permission set. To create, update, or delete a builder landing page, the Use Account Engagement Content Experience permission set is required.

## Fields

| Field Name | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related campaign. |
| ContentLastSaved | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time of the last time someone changed and saved the landing page Name, Campaign, Content, IsHideFromSearchEngineIndex, or Vanity URL fields. This field is available in API version 53.0 and later. |
| ContentLastSavedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user who last changed and saved the Content body. This is a relationship field. This field is available in API version 53.0 and later.Relationship NameContentLastSavedRelationship TypeLookupRefers ToUser |
| FallbackUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL used to redirect viewers after the landing page is unpublished. This field is available in API version 54.0 and later. |
| FooterCode | TypetextareaPropertiesCreate, Nillable, UpdateDescription<Script>, <style>, and <link> code added before the landing page’s closing body tag. This field is available in API version 54.0 and later. |
| FormErrorRate | TypepercentPropertiesFilter, Group, SortDescriptionThe percentage of errors made on the landing page form. Calculated as total errors divided by total views. |
| FormSubmissionRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of form submissions based on the total number of landing page views. |
| HeaderCode | TypetextareaPropertiesCreate, Nillable, UpdateDescription<Script>, <style>, and <link> code added to the head tag of the landing page. This field is available in API version 54.0 and later. |
| IsHideFromSearchEngineIndex | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the landing page is hidden from search engine indexing. The default value is false. This field is available in API version 53.0 and later. |
| LastPublished | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time of the last time someone published the landing page. This field is available in API version 53.0 and later. |
| LastPublishedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user who last published the landing page. This is a relationship field. This field is available in API version 53.0 and later.Relationship NameLastPublishedRelationship TypeLookupRefers ToUser |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed this record. If this value is null, this record might only have been referenced (see LastReferencedDate) and not viewed. This field is available in API version 53.0 and later. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionThe name of the landing page. |
| PublicLink | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL where the landing page is available. This field is available in API version 53.0 and later. |
| Source | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates where the landing page was created. The default value is Salesforce. This field is available in API version 53.0 and later. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the state of the landing page: Draft, Published, or Published (Changes Pending). The default value is Draft. This field is available in API version 53.0 and later. |
| TotalFormErrors | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe total number of times a visitor or prospect enters an invalid email address or leaves a required field blank on a landing page form. |
| TotalFormSubmissions | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of times a form on the landing page has been submitted. |
| TotalTrackedLinkClicks | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of times prospects clicked a link on the landing page’s thank you page. |
| TotalViews | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe total number of times visitors and prospects viewed your landing page. This total includes multiple views from the same person. |
| UniqueFormErrors | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of individual visitors and prospects who made an error on the form. This metric doesn’t include multiple errors from the same person. |
| UniqueFormSubmissions | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of individual visitors who submitted a form on the landing page. This metric doesn’t include multiple submissions from the same person. |
| UniqueTrackedLinkClicks | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of times a prospect clicked a link on the landing page’s thank you page. This metric doesn’t include multiple clicks of the same link. |
| UniqueViews | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of individual visitors and prospects who viewed your landing page. This metric doesn’t include multiple views from the same person. |
| VanityUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom path that’s appended to tracker domains to create a vanity URL. This field doesn’t support scheme or domain values. This field is available in API version 53.0 and later. |

## Associated Objects

This object has the following associated objects. Unless otherwise noted, they’re available in the same API version as this object.

[LandingPageChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[LandingPageFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- LandingPageChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- LandingPageFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
