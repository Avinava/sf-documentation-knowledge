---
title: "Case"
domain: object-reference
topic: case
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.256Z
estimatedTokens: 4300
keywords: [Case, customer, issue, problem, Calls, Usage, Assignment, Rules, Separating, Accounts, Contacts, Cases, _case, Java, Associated]
---

# Case

> Represents a case, which is a customer issue or
		problem.

# Case

Represents a case, which is a customer issue or problem.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account associated with this case.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AssetWarrantyID | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Asset associated with the warranty. Must be a valid asset warranty ID. |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the business hours associated with this case. |
| Comments | TypetextareaPropertiesCreate, Delete, Layout, Nillable, Query, Retrieve, Search, Sort, Undelete, UpdateDescriptionUsed to insert a new CaseComment. Email textarea has a length of 4000 chars. |
| CaseNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAssigned automatically when each case is inserted. It can't be set directly, and it can't be modified after the case is created. |
| ClosedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the case was closed. |
| CommunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the zone associated with this case.This field is available in API version 24.0 and later. |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| ContactEmail | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionEmail address for the contact. The Case.ContactEmail field displays the Email field on the contact that is referenced by Case.ContactId. Label is Contact Email. This field is available in API version 38.0 and later. |
| ContactFax | TypephonePropertiesFilter, Group, Nillable, SortDescriptionFax number for the contact. Label is Contact Fax. This field is available in API version 38.0 and later. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated contact.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| ContactMobile | TypephonePropertiesFilter, Group, Nillable, SortDescriptionMobile telephone number for the contact. Label is Contact Mobile. This field is available in API version 38.0 and later. |
| ContactPhone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionTelephone number for the contact. Label is Contact Phone. This field is available in API version 38.0 and later. |
| CreatorFullPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s profile photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| CreatorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the user who posted the question or reply. Only the first name of internal users (agents) appears to portal users in the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| CreatorSmallPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s thumbnail photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA text description of the case. Limit: 32 KB. |
| FeedItemId | TypereferencePropertiesCreate, Group, Nillable, SortDescriptionID of the question in Chatter associated with the case. This field is available in API version 33.0 and later, and is only accessible in organizations where Question-to-Case is enabled. |
| HasCommentsUnreadByOwner | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a case contains comments that the case owner hasn’t read (true) or not (false). |
| HasSelfServiceComments | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a case has comments added by a Self-Service user (true) or not (false). Only visible when Customer Portal is enabled. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the case is closed (true) or open (false). This field is controlled by the Status field; it can't be set directly. Label is Closed. |
| IsClosedOnCreate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the case was closed at the same time that it was created (true) or not (false). This flag is read-only and is automatically set when a record is created. It can't be set to true unless the IsClosed flag is also true. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsEscalated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the case has been escalated (true) or not. A case's escalated state does not affect how you can use a case, or whether you can query, delete, or update it. You can set this flag via the API. Label is Escalated. |
| IsSelfServiceClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the case is closed for Self-Service users (true) or not (false). |
| IsStopped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an entitlement process on a case is stopped (true) or not (false). |
| IsVisibleInSelfService | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the case can be viewed in the Customer Service Portal, Partner Service Portal, and Self-Service Portal (true) or not (false). This field is applied for case visibility in the Partner Relationship Management, Customer Service Portal, and the earlier version of Self Service Portal. The field does not alter sharing and will not prevent usage of a direct URL to a case if a portal user has read or write access. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the case. The Language field is available when you enable Einstein Case Classification in Enterprise, Performance, and Unlimited edition orgs with Service Cloud. By default, only Einstein classification apps use this field. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MasterRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this object was deleted as the result of a merge, this field contains the ID of the record that was kept. If this object was deleted for any other reason, or has not been deleted, the value is null.This is a relationship field.Relationship NameMasterRecordRelationship TypeLookupRefers ToCase |
| Origin | TypepicklistPropertiesCreate, Filter, Group, Nillable,Sort, UpdateDescriptionThe source of the case, such as Email, Phone, or Web. Label is Case Origin. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the contact who owns the case.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent case in the hierarchy. The label is Parent Case.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCase |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe importance or urgency of the case, such as High, Medium, or Low. |
| QuestionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe question in the answers zone that is associated with the case. This field does not appear if you don't have an answers zone enabled. |
| Reason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the case was created, such as Instructions not clear, or User didn’t attend training. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. |
| ServiceContractId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionRequired. ID of the ServiceContract associated with the entitlement. Must be a valid ID. |
| SlaStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionShows the time that the case entered an entitlement process. If you have the Edit permission on cases, you can update or reset the time.This field is available in API version 18.0 and later. |
| SourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the social post source. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the case, such as New, Closed, or Escalated. This field directly controls the IsClosed flag. Each predefined Status value implies an IsClosed flag value. For more information, see CaseStatus. |
| StopStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time an entitlement process was stopped on the case.This field is available in API version 18.0 and later. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subject of the case. Limit: 255 characters. |
| SuppliedCompany | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe company name that was entered when the case was created. Label is Company. |
| SuppliedEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address that was entered when the case was created. Label is Email.If your organization has an active auto-response rule, SuppliedEmail is required when creating a case via the API. Auto-response rules use the email in the contact specified by ContactId. If no email address is in the contact record, the email specified here is used. |
| SuppliedName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name that was entered when the case was created. Label is Name. |
| SuppliedPhone | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number that was entered when the case was created. Label is Phone. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of case, such as Feature Request or Question. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you are importing Case data and need to set the value for an audit field, such as CreatedDate, contact Salesforce. Audit fields are automatically updated during API operations unless you request to set these fields yourself.

## Usage

Use the Case object to manage cases for your organization. Client applications can query, update, and delete Attachment records associated with a case via the API.

## Assignment Rules

When you query or update a case, your client application can have the case automatically assigned to one or more User records based on assignment rules that have been configured in the user interface. To use this feature, your client application must set either of the following options (but not both) in the AssignmentRuleHeader used in the create or update:

| Field | Field Type | Details |
| --- | --- | --- |
| assignmentRuleId | reference | ID of the assignment rule to use. Can be an inactive assignment rule. If unspecified and useDefaultRule is true, then the default assignment rule is used. To find the ID for a given assignment rule, query the AssignmentRule object (specifying RuleType="caseAssignment"), iterate through the returned AssignmentRule objects, find the one you want to use, retrieve its ID, and then specify its ID in this field in the AssignmentRuleHeader. |
| useDefaultRule | boolean | Specifies whether to use the default rule for rule-based assignment (true) or not (false). The default rule is assigned by users in the Salesforce user interface. |

For a code example that shows setting the AssignmentRuleHeader for a Lead (which is similar to setting the AssignmentRuleHeader for a Case), see Lead.

## Separating Accounts from Contacts in Cases

In releases before 8.0, the AccountId could not be specified, it was derived from the contact’s account. This behavior will continue to be supported in future releases, but you can also now specify an AccountId. If you do not specify the AccountId during the creation of a case, the value will default to the contact’s AccountId.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When a record is updated, if the ContactId has not changed, then the AccountId is not regenerated. This prevents the API from overwriting a value previously changed in the Salesforce user interface. However, if an API call changes the ContactId and the AccountId field is empty, then the AccountId is generated using the contact’s account.

## Using \_case with Java

Depending on the development tool you use, you might need to write your application using \_case instead of Case, because case is a reserved word in Java.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CaseChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[CaseFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 18.0)

Feed tracking is available for the object.

[CaseHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CaseOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseownersharingrule.htm "Represents the rules for sharing a case with users other than the owner.")

Sharing rules are available for the object.

[CaseShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseshare.htm "Represents a sharing entry on a Case.")

Sharing is available for the object.

#### See Also

-   [Account](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm "Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners).")

-   [CaseMilestone](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casemilestone.htm "Represents a milestone (required step in a customer support process) on a Case. This object is available in API version 18.0 and later.")

## Related Topics

- Email field on the contact (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contact.htm)
- CaseChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CaseFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CaseHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CaseOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseownersharingrule.htm)
- CaseShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseshare.htm)
- Account (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm)
- CaseMilestone (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casemilestone.htm)
