---
title: "PipelineInspectionListView"
domain: object-reference
topic: pipelineinspectionlistview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.889Z
estimatedTokens: 1274
keywords: [PipelineInspectionListView, pipeline, view, intelligence, saved, filter, opportunity, records, specific, criteria, account, lead, contact, API, version]
---

# PipelineInspectionListView

> Represents a pipeline view, an intelligence view, or a saved filter. A pipeline view shows a set of opportunity records, based on specific criteria. An intelligence view shows a set of account, lead, or contact records, based on specific criteria. This object is available in API version 53.0 and later.

# PipelineInspectionListView

Represents a pipeline view, an intelligence view, or a saved filter. A pipeline view shows a set of opportunity records, based on specific criteria. An intelligence view shows a set of account, lead, or contact records, based on specific criteria. This object is available in API version 53.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, enable the Pipeline Inspection user permission and the Pipeline Inspection setting. To create and modify list views, users must have the Create and Customize List Views permission. To create and modify public list views, users must have the Manage Public List Views permission.

## Fields

| Field | Details |
| --- | --- |
| ChangePeriodLiteralType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe date literal associated with the pipeline changes metrics group, used for filtering by a custom time period.Possible values are:CUSTOM_DATEFOUR_WEEKS_AGOONE_MONTH_AGOONE_WEEK_AGOSTART_OF_THE_PERIODTHIS_MONTHTHIS_WEEKTHREE_MONTHS_AGOTHREE_WEEKS_AGOTWO_MONTHS_AGOTWO_WEEKS_AGO |
| ChangePeriodStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date used when filtering by a custom time period for pipeline changes metrics and forecast category metrics groups. |
| DateLiteralType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe date literal associated with the pipeline and intelligence views, used for filtering by the close date, created date, or activity date.Possible values are:AccountsContacts & LeadsOpportunitiesALL_TIME * * * *CUSTOM_DATEDATE_NONE *LAST_180_DAYS *LAST_365_DAYS *LAST_90_DAYS *LAST_MONTHNEXT_FISCAL_QUARTERNEXT_MONTHNEXT_WEEKTHIS_FISCAL_QUARTERTHIS_MONTHTHIS_WEEK* Available in API version 60.0 and later.** Available on the "My Important" list views. |  | Accounts | Contacts & Leads | Opportunities | ALL_TIME |  | * * | * * | CUSTOM_DATE |  |  |  | DATE_NONE * |  |  |  | LAST_180_DAYS * |  |  |  | LAST_365_DAYS * |  |  |  | LAST_90_DAYS * |  |  |  | LAST_MONTH |  |  |  | NEXT_FISCAL_QUARTER |  |  |  | NEXT_MONTH |  |  |  | NEXT_WEEK |  |  |  | THIS_FISCAL_QUARTER |  |  |  | THIS_MONTH |  |  |  | THIS_WEEK |  |  |  |
|  | Accounts | Contacts & Leads | Opportunities |
| ALL_TIME |  | * * | * * |
| CUSTOM_DATE |  |  |  |
| DATE_NONE * |  |  |  |
| LAST_180_DAYS * |  |  |  |
| LAST_365_DAYS * |  |  |  |
| LAST_90_DAYS * |  |  |  |
| LAST_MONTH |  |  |  |
| NEXT_FISCAL_QUARTER |  |  |  |
| NEXT_MONTH |  |  |  |
| NEXT_WEEK |  |  |  |
| THIS_FISCAL_QUARTER |  |  |  |
| THIS_MONTH |  |  |  |
| THIS_WEEK |  |  |  |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date used when filtering by a custom time period for close dates. |
| IsSystemManaged | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the system is managing changes to visibility and deletion of a pipeline view (true) or not (false).The default value is false. |
| ListViewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated ListView record. This field is unique within your organization.This is a relationship field.Relationship NameListViewRelationship TypeLookupRefers ToListView |
| MarketSegments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe customer segments selected in the Prospecting Center view.This field is available in API version 61.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date used when filtering by a custom time period for close dates. |
| SummaryField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe opportunity field specified in a pipeline view to summarize pipeline inspection metrics.Possible values are standard field names or custom field IDs for custom currency and number fields.AmountExpectedRevenueTotalOpportunityQuantitycustom_field_IDThis field is available in API version 56.0 and later. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user whose records you want to see by default in the list view. This field is a relationship field.This field is available in API version 58.0 and later.Relationship NameUserRelationship TypeLookupRefers ToUser |
| ViewType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe corresponding API name for the pipeline or intelligence view type.Possible values are:MY_ACCOUNTS–Available in API version 60.0 and later.MY_CONTACTSMY_IMPORTANT_ACCOUNTS–Available in API version 60.0 and later.MY_IMPORTANT_CONTACTSMY_IMPORTANT_LEADSMY_IMPORTANT_OPPORTUNITIESMY_LEADSMY_PIPELINEMY_PROSPECTING_CENTER_ACCOUNTS–Available in API version 61.0 and later. |

## Usage

Use this object to retrieve the metadata for a pipeline inspection view.
