---
title: "TaxDisclosureSummary"
domain: netzero-cloud-dev-guide
topic: taxdisclosuresummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.283Z
estimatedTokens: 1678
keywords: [TaxDisclosureSummary, statistics, disclosure, business, entity, tax, jurisdictions, API, version, 57.0, later, Calls, Associated, Objects]
---

# TaxDisclosureSummary

> Represents statistics about the disclosure of business entity
         information to all tax jurisdictions. This object is available in API version 57.0 and
      later.

# TaxDisclosureSummary

Represents statistics about the disclosure of business entity information to all tax jurisdictions. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomerTaxCollected | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax collected from customers on behalf of a tax authority. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the tax disclosure statistics. |
| DisclosedBy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business entity disclosing the tax details. A business entity can be an individual or an organization. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reporting period for which the tax disclosure statistics are generated.This field is a relationship field.Relationship NameDisclsReportingPeriodRelationship TypeLookupRefers ToDisclsReportingPeriod |
| EmployeeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of employees within the tax jurisdiction. |
| EmployeeTaxWithheld | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax withheld and paid on behalf of employees. |
| EmployeeTotalIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total income of the employee, which includes salaries, bonuses, commissions, retirement savings contributions, and other financial benefits. |
| IncomeTaxAccrued | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe income tax accrued by an individual or organization within the tax jurisdiction. |
| IncomeTaxPaid | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe income tax paid by an individual or organization within the tax jurisdiction. |
| IndustryTaxDue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total industry taxes or payments due to governments. |
| IntraCompanyDebt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total intra-company debt held by a business entity in the tax jurisdiction. |
| IntraGroupTrxnRev | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue from intra-group transactions within the tax jurisdiction. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PrimaryActivity | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe primary activity of the business entity for which the tax disclosure is being done. |
| ProfitLossBeforeTax | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe profit or loss before tax within the tax jurisdiction. Enter a positive value that indicates profit before tax or negative value that indicates loss before tax. |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRelationship TypeLookupRefers ToAccount |
| TangibleAssetValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the tangible assets within the tax jurisdiction. |
| TaxJurisdiction | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe jurisdiction of the tax disclosure. |
| ThirdPartySalesRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue from third-party sales within the tax jurisdiction. |
| UncertainTaxPositionVal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total uncertain tax position value. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TaxDisclosureSummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 65.0)

Change events are available for the object.

[TaxDisclosureSummaryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TaxDisclosureSummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TaxDisclosureSummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TaxDisclosureSummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- TaxDisclosureSummaryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- TaxDisclosureSummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- TaxDisclosureSummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
