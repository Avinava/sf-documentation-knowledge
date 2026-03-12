---
title: "Billing Fields on Dispute"
domain: revenue-cloud
topic: billing-fields-on-dispute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.450Z
estimatedTokens: 656
keywords: [Billing, Dispute, involves, invoice, disputed, lines, include, amount, approved, subtype, status, API, version, 66.0, later]
---

# Billing Fields on Dispute

> Represents the details of a billing dispute that involves one invoice and one
         or more disputed invoice lines. The details include the disputed amount, the approved
         amount, and the dispute type, subtype and status. This object is available in API
      version 66.0 and later.

# Billing Fields on Dispute

Represents the details of a billing dispute that involves one invoice and one or more disputed invoice lines. The details include the disputed amount, the approved amount, and the dispute type, subtype and status. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Billing Operations User or the Billing Customer Service User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| InvoiceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice ID associated with the dispute.This field is a relationship field.Relationship NameInvoiceRefers ToInvoice |
| RevisedDueDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe revised due date for the invoice. |
| BillingSuspensionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when billing for the account is suspended. |
| BillingResumptionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when billing for the account is resumed. |
| RevisedBillToContact | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revised billing contact for the invoice.This field is a relationship field.Relationship NameContactRefers ToContact |
| ResolutionAction | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe action taken to resolve the dispute.Valid values are:Resolve with No ActionIssue Credit Memo |
| ResolutionActionStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the resolution action.Valid values are:In ProgressClosedError |
| MaySetContactAsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the revised billing contact is set as default for future invoices (true) or not (false).The default value is false. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the cloud or function that uses the Billing Dispute Management feature.Valid value is Billing. |

#### See Also

-   [*Financial Services Cloud Developer Guide*: Dispute](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_dispute.htm)
