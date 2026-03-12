---
title: "PartnerStagedData"
domain: channel-revenue-management-dev-guide
topic: partnerstageddata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.438Z
estimatedTokens: 1435
keywords: [PartnerStagedData, data, partners, point, sale, reported, inventory, stored, further, processing, downstream, processes, tracking, reconciliation, ship]
---

# PartnerStagedData

> Represents data from partners, such as point of sale and reported inventory
         data, stored for further processing before being used in downstream processes such as
         inventory tracking, inventory reconciliation, and ship and debit claim validation.
      This object is available in API version 64.0 and later.

# PartnerStagedData

Represents data from partners, such as point of sale and reported inventory data, stored for further processing before being used in downstream processes such as inventory tracking, inventory reconciliation, and ship and debit claim validation. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account ID of the partner that shares the data.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AccountName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account name of the partner that shares the data. |
| ActivityDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The activity date for the partner staged data record, such as a transaction date or an inventory reported as of date. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| ExternalRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the partner staged data record in an external system. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location ID that's associated with the partner staged data record.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| LocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location name that's associated with the partner staged data record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the partner staged data record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe name of the location that's associated with the partner staged data record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product ID associated with the partner staged data record.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the product that's associated with the partner staged data record. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the product in a sale transaction or an inventory report. |
| ResalePrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price at which a partner sells a product to a customer. |
| SalePrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price at which a manufacturer sells a product to a partner. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the partner staged data record.Possible values are:FailedNewProcessedThe default value is New. |
| StatusMessage | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA message with the details of the partner stage data record's status. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of the partner staged data record.Possible values are:PartnerReportedInventoryDocumentPointOfSaleDocumentPointOfSaleReturnDocumentSaleDocumentThe default value is SaleDocument. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The usage type of the partner staged data record.Possible values are:ChannelRevenueManagementThe default value is ChannelRevenueManagement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartnerStagedDataHistory](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartnerStagedDataOwnerSharingRule](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartnerStagedDataShare](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartnerStagedDataHistory (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm)
- PartnerStagedDataOwnerSharingRule (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- PartnerStagedDataShare (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm)
