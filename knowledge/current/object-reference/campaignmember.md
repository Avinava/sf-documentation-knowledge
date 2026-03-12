---
title: "CampaignMember"
domain: object-reference
topic: campaignmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.055Z
estimatedTokens: 3149
keywords: [CampaignMember, relationship, campaign, either, lead, contact, Accounts, Members, setting, enabled, org, represent, account, Calls, Special]
---

# CampaignMember

> The CampaignMember object represents the relationship between a
   campaign and either a lead or a contact. If the Accounts as Campaign Members setting is enabled
   in an org, CampaignMember can also represent the relationship between a campaign and an
   account.

# CampaignMember

The CampaignMember object represents the relationship between a campaign and either a lead or a contact. If the Accounts as Campaign Members setting is enabled in an org, CampaignMember can also represent the relationship between a campaign and an account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the account related to the campaign. This field is available only if the Accounts as Campaign Members setting is enabled in the org.This field is a relationship field.Relationship NameRelated Record IDRelationship TypeLookupRefers ToAccount |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the campaign related to the lead or contact.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe city for the address of the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the city for the account. |
| CompanyOrAccount | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe company or account of the lead or contact. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRequired. The ID of a contact that's related to the campaign.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. This field contains the ISO code for any currency allowed by the organization. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe country for the address of the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the country for the account. |
| Description | TypetextareaPropertiesNillableDescriptionThe description of the associated lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the description of the account. |
| DoNotCall | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the lead or contact doesn’t want to be called. In orgs with the Accounts as Campaign Members setting enabled, this field can indicate the account doesn’t want to be called. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionEmail address for the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the email address for the account. |
| Fax | TypephonePropertiesFilter, Group, Nillable, SortDescriptionFax number for the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the fax number for the account. |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first name of the lead or contact. |
| FirstRespondedDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThis field indicates the date that the campaign member received a status of Responded. |
| HasOptedOutOfEmail | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field indicates the email opt-out preference for the lead or contact. A value of false indicates that the lead or contact is opted in to emails. A value of true indicates that they’re opted out. In orgs with the Accounts as Campaign Members setting enabled, this field can be the opt-out preference for the account email address. |
| HasOptedOutOfFax | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field indicates the fax opt-out preferences for the lead or contact. A value of false indicates that the lead or contact is opted in to receiving faxes. A value of true indicates that they’re opted out. In orgs with the Accounts as Campaign Members setting enabled, this field can indicate the account has opted out of faxes. |
| HasResponded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field indicates whether the campaign member has responded to the campaign (true) or not (false). Label is Responded. |
| LastName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe last name of the lead or contact. The limit is 80 characters. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRequired. The ID of a lead that's related to the campaign.This field is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| LeadOrContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of a lead or contact that's related to the campaign. In orgs with the Accounts as Campaign Members setting enabled, this field also accepts an account ID. |
| LeadOrContactOwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the owner of the associated lead or contact owner. In orgs with the Accounts as Campaign Members setting enabled, this field can be the owner of the account.This field is a polymorphic relationship field.Relationship NameLeadOrContactOwnerRelationship TypeLookupRefers ToGroup, User |
| LeadSource | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe source where the lead was obtained. |
| MobilePhone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe mobile phone number of the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the mobile phone number for the account. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first and last name of the lead or contact that's related to the campaign member. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number of the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the phone number for the account. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe postal code for the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the postal code for the account. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. To change the record type, modify the CampaignMemberRecordTypeId field on the associated Campaign. |
| Salutation | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSalutation for the lead or contact. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe state for the address of the lead or contact. The limit is 80 characters. In orgs with the Accounts as Campaign Members setting enabled, this field can be the state of the account address. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the HasResponded flag on this object. You can't directly set the HasResponded flag, as it’s read-only. You can set it indirectly by setting this field in a create or update call. Each predefined value implies a HasResponded flag value. Each time you update this field, you implicitly update the HasResponded flag. In the Salesforce user interface, Marketing users can define valid status values for the Status picklist. They can choose one status as the default status. For each Status field value, they can also select which values to count as “Responded,” meaning that the HasResponded flag is set to true for those values. The limit is 40 characters.When you create or update campaign members, use the text value for Status instead of the ID from the CampaignMemberStatus object. |
| Street | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe street for the address of the lead or contact. In orgs with the Accounts as Campaign Members setting enabled, this field can be the street of the account address. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionTitle for the lead or contact. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates if the campaign member is a lead or a contact. In orgs with the Accounts as Campaign Members setting enabled, this field can indicate an account. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you’re importing CampaignMember data into Salesforce and want to set the value for an audit field, such as CreatedDate, contact Salesforce. Audit fields are automatically updated during API operations unless you request to set these fields yourself.

## Usage

Each record has a unique ID, and must contain either a ContactId or a LeadId, but can't contain both. Any attempt to create a single record with both results in a successful insert but only the ContactId is inserted. However, you can create two separate records on a Campaign—one for the Lead and one for the Contact.

In orgs with the Accounts as Campaign Members setting enabled, the unique ID can be an AccountID.

Standard fields from a lead or contact are associated with the CampaignMember object, but you can’t query them directly. To include a Phone in your query, for example, query the field from the Lead object.

```

```

This object is defined only for orgs that have the marketing feature and valid marketing licenses. If your org doesn’t have the marketing feature or valid marketing licenses, this object doesn’t appear in the describeGlobal() call, and you can't use describeSObjects() or query() with this object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you want to track lead-based campaign members you convert to contacts, provide both a ContactId and a LeadId. Otherwise, only use one ID type.

To issue create() requests to the API, your account only requires read access to campaigns.

If the record doesn’t exist for the specified ContactId or LeadId, then a new record is created. If the record exists, an error is returned and no update is made. To update an existing record, specify the ID of the CampaignMember record to update.

To delete a record, specify the ID of the CampaignMember record.

When creating or updating records, the Status field value specified in the call is verified as a valid status for the given Campaign:

-   If the specified Status value is a valid status, the value is updated, and the HasResponded field is updated to either true or false, depending on the Status value association with HasResponded.
-   If the specified Status value isn’t a valid status, the API assigns the default status to the Status field and updates the HasResponded field with the associated value. However, if the given Campaign doesn’t have a default status, the API assigns the value specified in the call to the Status field, and the HasResponded field is set to false.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CampaignMemberChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 46.0)

Change events are available for the object.

#### See Also

-   [Campaign](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaign.htm "Represents and tracks a marketing campaign, such as a direct mail promotion, webinar, or trade show.")

-   [CampaignMemberStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignmemberstatus.htm "One or more member status values defined for a campaign.")

## Code Examples

```
SELECT Id, (SELECT Phone FROM Lead)
FROM CampaignMember
```

## Related Topics

- CampaignMemberChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Campaign (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaign.htm)
- CampaignMemberStatus (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignmemberstatus.htm)
