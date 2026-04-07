---
title: "SendDefinitionList"
domain: mc-apis
topic: senddefinitionlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:24.996Z
estimatedTokens: 597
keywords: [SendDefinitionList, audience, associated, email, send, definition]
---

# SendDefinitionList

> The SendDefinitionList object specifies audience associated with an email send definition.

# SendDefinitionList

The SendDefinitionList object specifies audience associated with an email send definition.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| CustomObjectID | xsd:string | Represents the ID of the sendable data extension used as part of a send. |
| DataSourceTypeID | DataSourceTypeEnum | Defines data source to be used as part of send. Valid values include:ListCustomObjectDomainExclusionSalesForceReportSalesForceCampaignFilterDefinitionOptOutList |
| FilterDefinition | FilterDefinition | Defines filters to apply to an audience. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsTestObject | xsd:boolean | Indicates the specified send is a test send. A value of true indicates a test send. |
| List | List | List associated with an object. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| Parameters | APIProperty[] | Container for key value pairs of parameters for objects. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SalesForceObjectID | xsd:string | Identifies Salesforce object accessed via API interactions. The Salesforce instance determines this ID. |
| SendDefinitionListType | SendDefinitionListTypeEnum | Defines type of send definition list. Valid values include:SourceListExclusionListDomainExclusionOptOutList |
