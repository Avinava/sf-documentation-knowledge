---
title: "Contact"
domain: object-reference
topic: contact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.816Z
estimatedTokens: 6507
keywords: [Contact, person, associated, account, Calls, Special, Access, Rules, Usage, Objects]
---

# Contact

> Represents a contact, which is a person associated with an
			account.

# Contact

Represents a contact, which is a person associated with an account.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), merge(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Customer Portal users can access only portal-enabled contacts.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account that’s the parent of this contact.We recommend that you update up to 50 contacts simultaneously when changing the accounts on contacts enabled for a Customer Portal or partner portal. We also recommend that you make this update after business hours.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActionCadenceAssigneeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the sales rep designated to work the lead through their assigned cadence. This field is available in API version 48.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| ActionCadenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the lead’s assigned cadence. This field is available in API version 48.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| ActionCadenceState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe state of the current action cadence tracker. This field is available in API version 50.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set.Possible values are:CompleteErrorInitializingPausedProcessingRunning |
| ActiveTrackerCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of cadences that are actively running on this contact. This field is available in API version 57.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| ActivityMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric.This field is a relationship field.This field is available in API version 41.0 and later.Relationship NameActivityMetricRefers ToActivityMetric |
| ActivityMetricRollupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric rollup.This field is a relationship field.This field is available in API version 41.0 and later.Relationship NameActivityMetricRollupRefers ToActivityMetricRollup |
| AssistantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assistant’s name. |
| AssistantPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assistant’s phone number. Label is Asst. Phone. |
| Birthdate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s birthdate.Filter criteria for report filters, list view filters, and SOQL queries ignore the year portion of the Birthdate field. For example, this SOQL query returns contacts with birthdays later in the year than today:SELECT Name, Birthdate FROM Contact WHERE Birthdate > TODAY |
| BuyerAttributes | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionIf Automatic Contact Enhancements or Buyer Relationship Map is enabled, this field contains the role of the contact in the opportunity or account. Possible values are:BusinessUser—For example, an end user. Key value.Buyer—Key valueChampion—Key valueDecisionMaker—Shown in green on a contact in the buyer relationship map UI. Key value.Detractor—Shown in red on a contact in the buyer relationship map UI. Key value.EvaluatorExecutiveSponsor—Key valueTechnicalExpertKey values represent key contacts on an opportunity or account. If a buyer relationship map doesn’t have contacts with key values, then Salesforce prompts you to add them. Having all key values represented on the map provides a full view of the deal or account, increasing sales success.WarningTo ensure that the buyer relationship map feature works as expected, don't modify field values. For example, if you change Detractor to Detract, the value isn’t shown in red in a buyer relationship map.This field is available with all profiles except custom and minimum-access. To provide access, use field-level security in Object Manager. |
| CanAllowPortalSelfReg | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this contact can self-register for your Customer Portal (true) or not (false). |
| CleanStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the record’s clean status as compared with Data.com. Values include: Matched, Different, Acknowledged, NotFound, Inactive, Pending, SelectMatch, or Skipped.Several values for CleanStatus appear with different labels on the contact record.Matched appears as In SyncAcknowledged appears as ReviewedPending appears as Not Compared |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| ContactSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf Automatic Contact Creation is enabled, this field indicates whether the contact was created automatically. A possible value is:Auto Create |
| Department | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s department. |
| DepartmentGroup | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf Automatic Contact Enhancements or Buyer Relationship Map is enabled, this field contains the business unit, function, or department that the contact belongs to in the organization. Possible values are:chiefExecutive—Key valuecustomerSuccess—For example, wealth management, consumer banking, subject matter experts, or healthcare research experts.finance—Includes pricing and procurement. Key value.humanResourceslegal—Key valuemarketingothersalessupport—For example, tech support or customer support.tech—For example, IT or engineering. Key value.Key values represent key contacts on an opportunity or account. If a buyer relationship map doesn’t have contacts with key values, then Salesforce prompts you to add them. Having all key values represented on the map provides a full view of the deal or account, increasing sales success. This field is available with all profiles except custom and minimum-access. To provide access, use field-level security in Object Manager. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the contact. Label is Contact Description up to 32 KB. |
| DoNotCall | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the contact doesn’t want to receive calls. |
| Email | TypeemailPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe contact’s email address. |
| EmailBouncedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIf bounce management is activated and an email sent to the contact results in a hard bounce, the date and time of the bounce.NoteEmail bounce functionality isn't triggered by record updates, including updates to this field. |
| EmailBouncedReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf bounce management is activated and an email sent to the contact results in a hard bounce, the reason for the bounce.NoteEmail bounce functionality isn't triggered by record updates, including updates to this field. |
| Fax | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s fax number. Label is Business Fax. |
| FirstCallDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time of the first call placed to the contact. This field is available in API version 48.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| FirstEmailDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time of the first email sent to the contact. This field is available in API version 48.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s first name up to 40 characters. |
| GenderIdentity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe contact’s internal experience of their gender, which may or may not correspond to their designated sex at birth. |
| HasOptedOutOfEmail | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contact doesn’t want to receive email from Salesforce (true) or does (false). Label is Email Opt Out. |
| HasOptedOutOfFax | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contact prohibits receiving faxes. |
| HomePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s home phone number. Label is Home Phone. |
| IndividualId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the data privacy record associated with this contact. This field is available if Data Protection and Privacy is enabled.This is a relationship field.Relationship NameIndividualRelationship TypeLookupRefers ToIndividual |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsEmailBounced | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf bounce management is activated and an email is sent to a contact, indicates whether the email results in a soft or hard bounce (true) or not (false). |
| IsPersonAccount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. Indicates whether this account has a record type of Person Account (true) or not (false). Label is Is Person Account. |
| IsPriorityRecord | TypebooleanPropertiesDefaulted on create, GroupDescriptionShows whether the user has marked the contact as important (True) or not (False). The default value is false. Available in API version 59.0 and later. |
| Jigsaw | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the company’s ID in Data.com. If an account has a value in this field, it means that the account was imported from Data.com. If the field value is null, the account wasn’t imported from Data.com. Maximum size is 20 characters. Available in API version 22.0 and later. Label is Data.com Key.ImportantThe Jigsaw field is exposed in the API to support troubleshooting for import errors and reimporting of corrected data. Do not modify this value. |
| JigsawContactId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the contact in reference to Jigsaw.ImportantThe Jigsaw field is exposed in the API to support troubleshooting for import errors and reimporting of corrected data. Don’t modify the value in the Jigsaw field. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is the most recent of either:Due date of the most recent event logged against the record.Due date of the most recently closed task associated with the record. |
| LastName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Last name of the contact up to 80 characters. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LeadSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the lead that was converted to this contact. |
| MailingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the mailing address. Read-only. For details on compound address fields, see Address Compound Fields. |
| MailingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the mailing address’s state and country. |
| MailingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, Update, Query, Restricted picklist, NillableDescriptionAccuracy level of the geocode for the mailing address. For details on geolocation compound field, see Compound Field Considerations and Limitations. |
| MailingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with MailingLongitude to specify the precise geolocation of a mailing address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| MailingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with MailingLatitude to specify the precise geolocation of a mailing address. Acceptable values are numbers between –180 and 180 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| MailingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the mailing address’s state and country. |
| MailingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address for mailing address. |
| MasterRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this record was deleted as the result of a merge, this field contains the ID of the record that remains. If this record was deleted for any other reason, or hasn’t been deleted, the value is null.This is a relationship field.Relationship NameMasterRecordRelationship TypeLookupRefers ToContact |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s middle name. Maximum size is 40 characters. |
| MobilePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContact’s mobile phone number. Label is Mobile Phone. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionConcatenation of FirstName, MiddleName, LastName, and Suffix up to 203 characters, including whitespaces. |
| OtherAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the other address. Read-only. For details on compound address fields, see Address Compound Fields. |
| OtherCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the alternate address’s state and country. |
| OtherGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the other address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| OtherLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with OtherLongitude to specify the precise geolocation of an alternate address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| OtherLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with OtherLatitude to specify the precise geolocation of an alternate address. Acceptable values are numbers between –180 and 180 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| OtherPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone for alternate address. |
| OtherPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the alternate address’s state and country. |
| OtherStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet for alternate address. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this contact.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number for the contact. Label is Business Phone. |
| PhotoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionPath to be combined with the URL of a Salesforce instance (Example: https://yourInstance.salesforce.com/) to generate a URL to request the social network profile image associated with the contact. Generated URL returns an HTTP redirect (code 302) to the social network profile image for the contact.Empty if Social Accounts and Contacts isn't enabled or if Social Accounts and Contacts is disabled for the requesting user. |
| Pronouns | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe contact’s personal pronouns, reflecting their gender identity. Others can use these pronouns to refer to the contact in the third person. The entry is selected from a picklist of available values, which the administrator sets. Maximum 40 characters.Possible values are:He/HimHe/TheyNot ListedShe/HerShe/TheyThey/Them |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. |
| ReportsToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact that this contact reports to.This is a relationship field.Relationship NameReportsToRelationship TypeLookupRefers ToContact |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHonorific abbreviation, word, or phrase to be used in front of name in greetings, such as Dr. or Mrs. |
| ScheduledResumeDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the action cadence tracker is going to resume after it’s paused or on a wait step. This field is available in API version 54.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| Suffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName suffix of the contact. Maximum size is 40 characters. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle of the contact, such as CEO or Vice President. |
| TitleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf Automatic Contact Enhancements or Buyer Relationship Map is enabled, this field contains the hierarchical position that the contact holds in the organization. In the UI, this field is shown as Seniority Level. Possible values are:ceo—Key valuedirectorOrManager—Key valueexecutive—Key valueindividualContributorvp—VP or Head of Department. Key value.Key values represent key contacts on an opportunity or account. If a buyer relationship map doesn’t show contacts with key values, then Salesforce prompts you to add them. Having all key values represented on the map provides a complete picture of the deal or account, increasing sales success. This field is available with all profiles except custom and minimum-access. To provide access, use field-level security in Object Manager. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When importing contact data, users need the Set Audit Fields upon Record Creation permission to assign values to audit fields such as CreatedDate. Audit fields are automatically updated during API operations unless you set these fields yourself.

## Usage

Use this object to manage individual people who are associated with an account. You can create, query, delete, or update any attachment associated with a contact.

Create or update contacts by converting a lead with the convertLead() call.

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[ContactFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 18.0)

Feed tracking is available for the object.

[ContactHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 11.0)

History is available for tracked fields of the object.

[ContactOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactownersharingrule.htm "Represents the rules for sharing a contact with a User other than the owner.")

Sharing rules are available for the object.

[ContactShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactshare.htm "Represents a list of access levels to a Contact along with an explanation of the access level. For example, if you have access to a record because you own it, the ContactAccessLevel is All and RowCause is Owner.")

Sharing is available for the object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Code Examples

```
SELECT Name, Birthdate
FROM Contact
WHERE Birthdate > TODAY
```

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
- AccountChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContactFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ContactHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContactOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactownersharingrule.htm)
- ContactShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactshare.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
