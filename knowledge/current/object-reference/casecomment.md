---
title: "CaseComment"
domain: object-reference
topic: casecomment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.271Z
estimatedTokens: 1145
keywords: [CaseComment, comment, additional, associated, Case, Calls, Usage]
---

# CaseComment

> Represents a comment that provides additional information about the
			associated Case.

# CaseComment

Represents a comment that provides additional information about the associated Case.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommentBody | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionText of the CaseComment. The maximum size of the comment body is 4,000 bytes. Label is Body. |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| CreatorFullPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s profile photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| CreatorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the user who posted the question or reply. Only the first name of internal users (agents) appears to portal users in the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| CreatorSmallPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s thumbnail photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsNotificationSelected | TypebooleanPropertiesCreate, Defaulted on create, UpdateDescriptionIndicates whether an email notification is sent to the case contact when a CaseComment is created or updated. When this field is queried, it always returns null.This field is available only when the Enable Case Comment Notification to Contacts setting is enabled on the Support Settings page in Setup. To send email notifications for CaseComment, you must use the EmailHeader triggerUserEmail.Available in API version 43.0 and later. |
| IsPublished | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the CaseComment is visible to customers in the Self-Service portal (true) or not (false). Label is Published. This is the only CaseComment field that can be updated via the API. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort,DescriptionRequired. ID of the parent Case of the CaseComment.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCase |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you're importing CaseComment data and must set the value for an audit field, such as CreatedDate, contact Salesforce. Record id's can't delete CaseComments entities when calling the Database.delete() Apex method or its analogous SOAP API. Audit fields are automatically updated during API operations unless you request to set these fields yourself.

## Usage

In the Salesforce user interface, comments are entered by a User working on a Case. All users have access to create and view CaseComment in the Salesforce user interface and when using the API. In the API, CaseComment records can't be modified after insertion unless the user has the “Modify All Records” object-level permission for Cases or the “Modify All Data” permission. If not, users can only update the IsPublished field, and can't delete CaseComment.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
