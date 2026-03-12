---
title: "Opportunity"
domain: object-reference
topic: opportunity
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:13.494Z
estimatedTokens: 6638
keywords: [Opportunity, sale, pending, deal, Calls, Usage, Sample, Code—Java, Associated, Objects, Additional, Considerations]
---

# Opportunity

> Represents an opportunity, which is a sale or pending
		deal.

# Opportunity

Represents an opportunity, which is a sale or pending deal.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Field Type |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account associated with this opportunity.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
|  |  |
| ActivityMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric.This field is a relationship field.Relationship NameActivityMetricRefers ToActivityMetric |
| ActivityMetricRollupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric rollup.This field is a relationship field.Relationship NameActivityMetricRollupRefers ToActivityMetricRollup |
| AgeInDays | TypeintPropertiesAggregate, Filter, Group, Nillable, SortDescriptionThe number of days since the opportunity was created, calculated by the current date minus the created_date field. This field is available in API version 52.0 and later if you enabled Pipeline Inspection. |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEstimated total sale amount. For opportunities with products, the amount is the sum of the related products. Any attempt to update this field, if the record has products, will be ignored. The update call will not be rejected, and other fields will be updated as specified, but the Amount will be unchanged. |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of a related Campaign. This field is defined only for those organizations that have the campaign feature Campaigns enabled. The User must have read access rights to the cross-referenced Campaign object in order to create or update that campaign into this field on the opportunity.This is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CloseDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Date when the opportunity is expected to close. |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the contact associated with this opportunity, set as the primary contact. Read-only field that is derived from the opportunity contact role, which is created at the same time the opportunity is created. This field can only be populated when it’s created, and can’t be updated. To update the value in this field, change the IsPrimary flag on the OpportunityContactRole associated with this opportunity. Available in API version 46.0 and later. |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contract that’s associated with this opportunity.This is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization.If the organization has multicurrency and a Pricebook2 is specified on the opportunity (that is, the Pricebook2Id field is not blank), then the currency value of this field must match the currency of the PricebookEntry records that are associated with any opportunity line items it has. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText description of the opportunity. Limit: 32,000 characters. |
| ExpectedRevenue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRead-only field that is equal to the product of the opportunity Amount field and the Probability. You can’t directly set this field, but you can indirectly set it by setting the Amount or Probability fields. |
| ExportStatus | TypepicklistPropertiesFilter, Restricted picklist, SortDescriptionDerived field for the record map for Partner Connect. The export status of this opportunity to the partner’s connected org. To see this field, enable Partner Connect and add the Export Vendor Records to an Authorized Partner Org user permission to the cosell export user. See Set Up Partner Connect as a Vendor in Salesforce Help. Available in API version 62.0 and later. |
| Fiscal | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf fiscal years are not enabled, the name of the fiscal quarter or period in which the opportunity CloseDate falls. Use YYYY Q format, for example, '2006 1' for first quarter of 2006. |
| FiscalQuarter | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the fiscal quarter. Valid values are 1, 2, 3, or 4. |
| FiscalYear | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the fiscal year, for example, 2006. |
| ForecastCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRestricted picklist field. It is implied, but not directly controlled, by the StageName field. You can override this field to a different value than is implied by the StageName value. The values of this field are fixed enumerated values. The field labels are localized to the language of the user performing the operation, if localized versions of those labels are available for that language in the user interface.In API version 12.0 and later, the value of this field is automatically set based on the value of the ForecastCategoryName and can’t be updated any other way. The field properties Create, Defaulted on create, Nillable, and Update are not available in version 12.0.Possible values are:BestCaseClosedForecastMostLikelyOmittedPipeline |
| ForecastCategoryName | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the forecast category. It is implied, but not directly controlled, by the StageName field. You can override this field to a different value than is implied by the StageName value. Available in API version 12.0 and later.Possible values are:Best CaseClosedCommitMost LikelyOmittedPipeline |
| HasOpenActivity | TypebooleanPropertiesDefaulted on create, Group,DescriptionIndicates whether an opportunity has an open event or task (true) or not (false). Available in API version 35.0 and later. |
| HasOpportunityLineItem | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only field that indicates whether the opportunity has associated line items. A value of true means that Opportunity line items have been created for the opportunity. An opportunity can have opportunity line items only if the opportunity has a price book. The opportunity line items must correspond to PricebookEntry objects that are listed in the opportunity Pricebook2. However, you can insert opportunity line items on an opportunity that does not have an associated Pricebook2. For the first opportunity line item that you insert on an opportunity without a Pricebook2, the API automatically sets the Pricebook2Id field, if the opportunity line item corresponds to a PricebookEntry in an active Pricebook2 that has a CurrencyIsoCode field that matches the CurrencyIsoCode field of the opportunity. If the Pricebook2 is not active or the CurrencyIsoCode fields do not match, then the API returns an error. You can’t update the Pricebook2Id or PricebookId fields if opportunity line items exist on the Opportunity. You must delete the line items before attempting to update the PricebookId field. |
| HasOverdueTask | TypebooleanPropertiesDefaulted on create, Group,DescriptionIndicates whether an opportunity has an overdue task (true) or not (false). Available in API version 35.0 and later. |
| IqScore | TypeintPropertiesAggregate, Filter, Group, Nillable, SortDescriptionThe likelihood, measured on a scale of 1 to 99, that an opportunity will be won. Einstein Opportunity Scoring must be enabled. Available in API version 41.0 and later. Label is Opportunity Score. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDirectly controlled by StageName. You can query and filter on this field, but you can’t directly set it in a create, upsert, or update request. It can only be set via StageName. Label is Closed. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsExcludedFromTerritory2Filter | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUsed for Filter-Based Opportunity Territory Assignment (Pilot in Spring ’15 / API version 33). Indicates whether the opportunity is excluded (True) or included (False) each time the APEX filter is executed. |
| IsPriorityRecord | TypebooleanPropertiesDefaulted on create, GroupDescriptionShows whether the user has marked the opportunity as important (True) or not (False). The default value is false. Available in API version 53.0 and later. |
| IsPrivate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, only the opportunity owner, users above that role in the hierarchy, and admins can view the opportunity or query it via the API. When you mark opportunities as private, opportunity teams, opportunity splits, and sharing are removed. Label is Private. The default value is False. |
| IsSplit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only field that indicates whether credit for the opportunity is split between opportunity team members. Label is IsSplit. This field is available in versions 14.0 and later for organizations that enabled Opportunity Splits during the pilot period.This field should not be used. However, it’s documented for the benefit of pilot customers who find references to IsSplit in code. |
| IsWon | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDirectly controlled by StageName. You can query and filter on this field, but you can’t directly set the value. It can only be set via StageName. Label is Won. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is one of the following, whichever is the most recent:Due date of the most recent event logged against the record.Due date of the most recently closed task associated with the record. |
| LastActivityInDays | TypeintPropertiesAggregate, Filter, Group, Nillable, SortDescriptionThe number of days since the last completed event or task for the record, calculated by the current date minus the last_activity field. If the last_activity field is null, this field is null. This field is available in API version 52.0 and later if you enabled Pipeline Inspection. |
| LastAmountChangedHistoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the OpportunityHistory record that contains information about when the opportunity Amount field was last updated in Winter ’21 or later. Information includes the date and time of the change and the user who made the change. Available in API version 50.0 and later.This is a relationship field.Relationship NameLastAmountChangedHistoryRelationship TypeLookupRefers ToOpportunityHistory |
| LastCloseDateChangedHistoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the OpportunityHistory record that contains information about when the opportunity Close Date field was last updated in Winter ’21 or later. Information includes the date and time of the change and the user who made the change. Available in API version 50.0 and later.This is a relationship field.Relationship NameLastCloseDateChangedHistoryRelationship TypeLookupRefers ToOpportunityHistory |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastStageChangeDate | TypedatetimePropertiesAggregate, Filter, Nillable, SortDescriptionThe date of the last change made to the Stage field on this opportunity record. This field is available in API version 52.0 and later. |
| LastStageChangeInDays | TypeintPropertiesAggregate, Filter, Group, Nillable, SortDescriptionThe number of days since the last change was made to the Stage field on the opportunity record, calculated by the current date minus the last_stage_change_date field. If the last_stage_change_date is null, then this field contains the value for AgeInDays. This field is available in API version 52.0 and later if you enabled Pipeline Inspection. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LeadSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource of this opportunity, such as Advertisement or Trade Show. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. A name for this opportunity. Limit: 120 characters. |
| NextStep | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of next task in closing opportunity. Limit: 255 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User who has been assigned to work this opportunity.If you update this field, the previous owner's access becomes Read Only or the access specified in your organization-wide default for opportunities, whichever is greater.If you have set up opportunity teams in your organization, updating this field has different consequences depending on your version of the API:For API version 12.0 and later, sharing records are kept, as they are for all objects. (All previous opportunity team members are kept on the opportunity team.)For API version before 12.0, sharing records are deleted. (All previous opportunity team members are removed from the opportunity team.)For API version 16.0 and later, users must have the Transfer Record permission in order to update (transfer) account ownership using this field.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| PartnerAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the partner account for the partner user that owns this opportunity. Available if Partner Relationship Management is enabled or if digital experiences is enabled and you have partner portal licenses.If you are uploading opportunities using API version 15.0 or earlier, and one of the opportunities in the batch has a partner user as the owner, the Partner Account field on all opportunities in the batch is set to that partner user’s account regardless of whether the partner user is the owner. In version 16.0, the Partner Account field is set to the appropriate account for the partner user that owns the opportunity. If the owner of the opportunity is not a partner user, this field remains empty. |
| Pricebook2Id | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionID of a related Pricebook2 object. The Pricebook2Id field indicates which Pricebook2 applies to this opportunity. The Pricebook2Id field is defined only for those organizations that have products enabled as a feature. You can specify values for only one field (Pricebook2Id or PricebookId)—not both fields. For this reason, both fields are declared nillable.This is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| PricebookId | TypereferencePropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionUnavailable as of version 3.0. As of version 8.0, the Pricebook object is no longer available. Use the Pricebook2Id field instead, specifying the ID of the Pricebook2 record. |
| Probability | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionPercentage of estimated confidence in closing the opportunity. It is implied, but not directly controlled, by the StageName field. You can override this field to a different value than what is implied by the StageName.If you're changing the Probability field through the API using a partner WSDL call, or an Apex before trigger, and the value may have several decimal places, we recommend rounding the value to a whole number. For example, the following Apex in a before trigger uses the round method to change the field value: o.probability = o.probability.round(); |
| PushCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times an opportunity’s close date has been pushed out by one calendar month. For example, moving a close date from April to May counts as one push, but moving from April 1 to April 30 doesn't count. The total is not decreased when the close date is moved in. Available in API version 53.0 and later. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. |
| StageName | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Current stage of this record. The StageName field controls several other fields on an opportunity. Each of the fields can be directly set or implied by changing the StageName field. In addition, the StageName field is a picklist, so it has additional members in the returned describeSObjectResult to indicate how it affects the other fields. To obtain the stage name values in the picklist, query the OpportunityStage object. If the StageName is updated, then the ForecastCategoryName, IsClosed, IsWon, and Probability are automatically updated based on the stage-category mapping. |
| SyncedQuoteID | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionRead only in an Apex trigger. The ID of the Quote that syncs with the opportunity. Setting this field lets you start and stop syncing between the opportunity and a quote. The ID has to be for a quote that is a child of the opportunity. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the territory that is assigned to the opportunity. Available only if Enterprise Territory Management has been enabled for your organization. Users who have full access to an opportunity’s account can assign any territory from the active model to the opportunity. Users who do not can assign only a territory that is also assigned to the opportunity’s account. The same restriction applies to territory assignments made via Apex in system mode. |
| TotalOpportunityQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of items included in this opportunity. Used in quantity-based forecasting. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of opportunity. For example, Existing Business or New Business. Label is Opportunity Type. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When importing opportunity data, users need the Set Audit Fields upon Record Creation permission to assign values to audit fields such as CreatedDate. Audit fields are automatically updated during API operations unless you set these fields yourself.

## Usage

Use the Opportunity object to manage information about a sale or pending deal. You can also sync this object with a child Quote. To update an Opportunity, your client application needs Edit permission on opportunities. You can create, update, delete, and query Attachment records associated with an opportunity via the API. To split credit for an opportunity among multiple opportunity team members, use the OpportunitySplit object.

Client applications can also create or update opportunity objects by converting a Lead with convertLead().

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

On opportunities and opportunity products, the workflow rules, validation rules, and Apex triggers fire when an update to a child opportunity product or schedule causes an update to the parent record. This means your custom application logic is enforced when there are updates to the parent record, ensuring higher data quality and compliance with your organization’s business policies.

## Sample Code—Java

This code starts the sync between an object and a child quote.

```

```

This code stops the sync between an object and a child quote.

```

```

## Associated Objects

This object has these associated objects. Unless noted, they are available in the same API version as this object.

[OpportunityChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 44.0)

Change events are available for the object.

[OpportunityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm) (API version 18.0)

Feed tracking is available for the object.

[OpportunityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityhistory.htm "Represents the stage history of an opportunity.")

History is available for tracked fields of the object.

[OpportunityOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityownersharingrule.htm "Represents a rule for sharing an opportunity with users other than the owner.")

Sharing rules are available for the object.

[OpportunityShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityshare.htm "Represents a sharing entry on an Opportunity.")

Sharing is available for the object.

## Additional Considerations

If you are using before triggers to set Stage and Forecast Category for an opportunity record, the behavior is as follows:

-   If you set Stage and Forecast Category, the opportunity record contains those exact values.
-   If you set Stage but not Forecast Category, the Forecast Category value on the opportunity record defaults to the one associated with trigger Stage.
-   If you reset Stage to a value specified in an API call or incoming from the user interface, the Forecast Category value should also come from the API call or user interface. If no value for Forecast Category is specified and the incoming Stage is different than the trigger Stage, the Forecast Category defaults to the one associated with trigger Stage. If the trigger Stage and incoming Stage are the same, the Forecast Category is not defaulted.

If you are cloning an opportunity with products, the following events occur in order:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If errors occur on an opportunity product, you must return to the opportunity and fix the errors before cloning.

If any opportunity products contain unique custom fields, you must null them out before cloning the opportunity.

-   The parent opportunity is saved according to the [order of execution](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm).
-   The opportunity products are saved according to the [order of execution](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm).

#### See Also

-   [OpportunityCompetitor](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitycompetitor.htm "Represents a competitor on an Opportunity.")

-   [OpportunityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityhistory.htm "Represents the stage history of an opportunity.")

-   [OpportunityLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitem.htm "Represents an opportunity line item, which is a member of the list of Product2 products associated with an Opportunity.")

-   [OpportunityLineItemSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitemschedule.htm "Represents information about the quantity, revenue distribution, and delivery dates for a particular OpportunityLineItem.")

-   [OpportunityFieldHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityfieldhistory.htm "Represents the history of changes to the values in the fields of an opportunity. This object is available in versions 13.0 and later.")

-   [Quote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm "Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later.")

-   [QuoteLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm "Represents a quote line item, which is a member of the list of Product2 products associated with a quote, along with other information about those line items on that quote. Available in API version 18.0 and later.")

-   [PartnerNetworkConnection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkconnection.htm "Represents a Salesforce to Salesforce connection between Salesforce organizations.")

## Code Examples

```apex
public void startQuoteSync() {
         Opportunity opp = new Opportunity(); 
         opp.setId(new ID("006D000000CpOSy")); 
         opp.setSyncedQuoteId(new ID("0Q0D000000002OZ")); 
   // Invoke the update call and save the results
   try {
      SaveResult[] saveResults = binding.update(new SObject[] {opp});
      // check results and do more processing after the update call ...
   }
   catch (Exception ex) {
      System.out.println("An unexpected error has occurred." + ex.getMessage());
      return;
 }
}
```

```apex
public void stopQuoteSync() {
         Opportunity opp = new Opportunity(); 
         opp.setId(new ID("006D000000CpOSy")); 
         opp.setFieldsToNull(new String[]  {"SyncedQuoteId"} );
   // Invoke the update call and save the results
   try {
      SaveResult[] saveResults = binding.update(new SObject[] {opp});
      // check results and do more processing after the update call ...
   }
   catch (Exception ex) {
      System.out.println("An unexpected error has occurred." + ex.getMessage());
      return;
 }
}
```

## Related Topics

- OpportunityHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityhistory.htm)
- OpportunityOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityownersharingrule.htm)
- OpportunityShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityshare.htm)
- OpportunityCompetitor (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitycompetitor.htm)
- OpportunityLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitem.htm)
- OpportunityLineItemSchedule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitemschedule.htm)
- OpportunityFieldHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityfieldhistory.htm)
- Quote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm)
- QuoteLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm)
- PartnerNetworkConnection (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkconnection.htm)
