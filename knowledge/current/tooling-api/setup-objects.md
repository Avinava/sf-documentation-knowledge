---
title: "Setup Objects"
domain: tooling-api
topic: setup-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:43.601Z
estimatedTokens: 4982
keywords: [Setup, Objects, interact, metadata, declarative, development, own, version, restrict, amount, data, push, app, mobile, phone]
---

# Setup Objects

> Use setup objects to interact with metadata for declarative development. For example,
        you can create your own version of Setup, or restrict the amount of data required to push to
        an app to a mobile phone.

# Setup Objects

Use setup objects to interact with metadata for declarative development. For example, you can create your own version of Setup, or restrict the amount of data required to push to an app to a mobile phone.

[AuthorizedEmailDomain](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_authorizedemaildomain.htm "Represents an authorized domain for email verification. This object is available in API version 64.0 and later.")

Represents an authorized domain for email verification.

[BusinessProcess](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_businessprocess.htm "Represents a business process.")

Represents a business process.

[CleanDataService](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_cleandataservice.htm "Represents a data service that adds and updates data in existing records in an org.")

Represents a data service that adds and updates data in existing records in an org.

[CleanRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_cleanrule.htm#tooling_api_objects_cleanrule "Represents a data integration rule that controls how a data service adds and updates data for existing records in an org.")

Represents a data integration rule that controls how a data service adds and updates data for existing records in an org.

[CompactLayout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayout.htm "Represents the values that define a compact page layout.")

Represents the values that define a compact page layout.

[CompactLayoutInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayoutinfo.htm "Represents the metadata for a custom or standard compact layout.")

Represents the metadata for a custom or standard compact layout.

[CompactLayoutItemInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayoutiteminfo.htm "Represents a field selected for a compact layout, and the order of that field in the compact layout.")

Represents a field selected for a compact layout, and the order of that field in the compact layout.

[CustomField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfield.htm "Represents a custom field on a custom object that stores data unique to your organization. Includes access to the associated CustomField object and related fields in Salesforce Metadata API. Available from API version 28.0 or later.")

Represents a custom field on a custom object that stores data unique to your organization.

[CustomFieldMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfieldmember.htm "Represents the working copy of a field for editing or saving in a MetadataContainer. This object is available in API version 33.0 and later.")

Represents the working copy of a field for editing or saving in a MetadataContainer.

[CustomObject](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customobject.htm "Represents a custom object that stores data unique to your organization. Includes access to the associated CustomObject object and related fields in Salesforce Metadata API. Available from API version 31.0 or later.")

Represents a custom object that stores data unique to your organization. Includes access to the associated CustomObject object and related fields in Salesforce Metadata API.

[CustomTab](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customtab.htm "Represents a custom tab.")

Represents a custom tab.

DataAssessmentConfigItem

Represents a saved configuration for a specific vendor’s package for data assessment.

[DataIntegrationRecordPurchasePermission](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_dataintegrationrecordpurchasepermission.htm#tooling_api_objects_dataintegrationrecordpurchasepermission "Represents Lightning Data purchase credits that a Salesforce admin has granted to users. Available in Tooling API version 42.0 and later.")

Represents Lightning Data purchase credits that a Salesforce admin has granted to users.

[DuplicateJobDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_duplicatejobdefinition.htm#tooling_api_objects_duplicatejobdefinition "Setup object defining a job that identifies duplicate record items globally. Available in Tooling API version 42.0 and later.")

Setup object defining a job that identifies duplicate record items globally.

[DuplicateJobMatchingRuleDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_duplicatejobmatchingruledefinition.htm#tooling_api_objects_duplicatejobmatchingruledefinition "Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition. Available in Tooling API version 42.0 and later.")

Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition.

[Document](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_document.htm#tooling_api_objects_document "Represents a file that a user has uploaded. Unlike Attachment records, documents are not attached to a parent object. Available in Tooling API version 38.0 and later.")

Represents a file that a user has uploaded. Unlike Attachment records, documents are not attached to a parent object.

[EmailTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_emailtemplate.htm "Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.")

Represents a template for an email, mass email, list email, or HVS email.

[EntityDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm "Provides row-based access to metadata about standard and custom objects.")

Provides row-based access to metadata about standard and custom objects.

[EntityLimit](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitylimit.htm#tooling_api_objects_entitylimit "Represents the limits for an object as displayed in the Setup UI.")

Represents the limits for an object as displayed in the Setup UI.

[FieldDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fielddefinition.htm "Represents a standard or custom field, providing row-based access to field metadata. Contrast FieldDefinition with EntityParticle, which represents each element of a field that can be presented in a user interface. FieldDefinition has parity with metadata type Field.")

Represents a standard or custom field, providing row-based access to field metadata. Contrast FieldDefinition with EntityParticle, which represents each element of a field that can be presented in a user interface. FieldDefinition has parity with metadata type Field.

[FieldMapping](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldmapping.htm#tooling_api_objects_fieldmapping "Represents a mapping between fields in an object in the org and fields in a data service. A data service uses two separate field maps: one controls how the data service matches records in an object, and the other controls how the data service adds or updates data for an existing record.")

Represents a mapping between fields in an object in the org and fields in a data service. A data service uses two separate field maps: one controls how the data service matches records in an object, and the other controls how the data service adds or updates data for an existing record.

[FieldMappingField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldmappingfield.htm#tooling_api_objects_fieldmappingfield "Represents a field in an object in the org that maps to a field in a data service.")

Represents a field in an object in the org that maps to a field in a data service.

[FieldMappingRow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldmappingrow.htm#tooling_api_objects_fieldmappingrow "Represents a field in a data service record that maps to a field in an object record in the org.")

Represents a field in a data service record that maps to a field in an object record in the org.

[FieldSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldset.htm "Represents the metadata for a group of fields. Available from API version 33.0 or later.")

Represents the metadata for a group of fields.

[FlexiPage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flexipage.htm "Represents a Lightning page. A Lightning page is a customizable page composed of regions containing Lightning components.")

Represents a Lightning page. A Lightning page is a customizable page composed of regions containing Lightning components.

[Flow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flow.htm "Use the Flow object to retrieve and update specific flow versions.")

Use the Flow object to retrieve and update specific flow versions.

[FlowDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowdefinition.htm "The parent of a set of flow versions.")

The parent of a set of flow versions.

[Group](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_group.htm#tooling_api_objects_group "Represents a set of User records. Groups can contain individual users, other groups, or the users in a particular role or territory. In addition, groups can contain all users below a particular role or territory in the hierarchy. Available in Tooling API version 38.0 and later.")

Represents a set of User records. Groups can contain individual users, other groups, or the users in a particular role or territory. In addition, groups can contain all users below a particular role or territory in the hierarchy.

[HistoryRetentionJob](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_historyretentionjob.htm "Represents the body of retained data from the archive, and the status of the archived data. Available in API version 29.0 or later.")

Represents the body of retained data from the archive, and the status of the archived data.

[KeywordList](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_keywordlist.htm "Represents a list of keywords used in Experience Cloud site moderation. Available in Tooling API version 36.0 and later.")

Represents a list of keywords used in Experience Cloud site moderation.

[Layout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_layout.htm "Represents a page layout.")

Represents a page layout.

[LookupFilter](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_lookupfilter.htm#tooling_api_objects_lookupfilter "Represents a lookup filter, which restricts the valid values and lookup dialog results for lookup, master-detail, and hierarchical relationship fields.")

Represents a lookup filter, which restricts the valid values and lookup dialog results for lookup, master-detail, and hierarchical relationship fields.

[MatchingRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_matchingrule.htm#tooling_api_objects_matchingrule "Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition. Available in Tooling API version 42.0 and later.")

Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition. Available in Tooling API version 42.0 and later.

[MenuItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_menuitem.htm "Represents a menu item.")

Represents a menu item.

[ModerationRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_moderationrule.htm "Represents a rule used in your Experience Cloud site to moderate member-generated content. Available in Tooling API version 36.0 and later.")

Represents a rule used in your Experience Cloud site to moderate member-generated content.

[PermissionSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to users without changing their profile or reassigning profiles. Available in API version 28.0 and later.")

Represents a set of permissions that’s used to grant more access to users without changing their profile or reassigning profiles. Available in API version 28.0 and later.

[PermissionSetAssignment](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsetassignment.htm "Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.")

Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.

[PermissionSetGroup](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsetgroup.htm "Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed. Available in Tooling API version 45.0 and later.")

Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed. Available in Tooling API version 45.0 and later.

[PermissionSetGroupComponent](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsetgroupcomponent.htm "A junction object that relates the PermissionSetGroup and PermissionSet objects via their respective IDs; enables permission set group recalculation to determine the aggregated permissions for the group. Available in Tooling API version 45.0 and later.")

A junction object that relates the PermissionSetGroup and PermissionSet objects via their respective IDs; enables permission set group recalculation to determine the aggregated permissions for the group. Available in Tooling API version 45.0 and later.

[PermissionSetTabSetting](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsettabsetting.htm "Represents a tab’s settings for a profile or permission set. Use PermissionSetTabSetting for manipulating tab visibility on profiles and permission sets. Available in Tooling API version 37.0 and later.")

Represents a tab’s settings for a profile or permission set. Use PermissionSetTabSetting for manipulating tab visibility on profiles and permission sets. Available in Tooling API version 37.0 and later.

[Profile](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_profile.htm "Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.")

Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce.

[ProfileLayout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_profilelayout.htm "Represents a profile layout.")

Represents a profile layout.

[QuickActionDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_quickactiondefinition.htm "Represents the definition of a quick action.")

Represents the definition of a quick action.

[QuickActionList](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_quickactionlist.htm "Represents a list of quick actions.")

Represents a list of quick actions.

[QuickActionListItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_quickactionlistitem.htm "Represents an item in a quick action list.")

Represents an item in a quick action list.

[RecentlyViewed](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_recentlyviewed.htm "Represents metadata entities typically found in Setup such as page layout definitions, workflow rule definitions, and email templates that the current user has recently viewed.")

Represents metadata entities typically found in Setup such as page layout definitions, workflow rule definitions, and email templates that the current user has recently viewed.

[RecordType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_recordtype.htm "Represents a custom record type.")

Represents a custom record type.

[SearchLayout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_searchlayout.htm "Represents a search layout defined for an object.")

Represents a search layout defined for an object.

[Scontrol](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_scontrol.htm "Represents a custom s-control, which is custom content that our system hosts, but client applications execute. An s-control can contain any type of content that you can display or run in a Web browser.")

Represents a custom s-control, which is custom content that our system hosts, but client applications execute. An s-control can contain any type of content that you can display or run in a Web browser.

[User](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_user.htm "Represents a user. You can retrieve standard fields on User with the Tooling API, but custom fields can’t be retrieved.")

Represents a user. You can retrieve standard fields on User with the Tooling API, but custom fields can’t be retrieved.

[WebLink](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_weblink.htm#tooling_api_objects_weblink "Represents a custom button or link. Available in the Tooling APIfrom API version 34.0 or later.")

Represents a custom button or link.

[ValidationRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_validationrule.htm "Represents a validation rule or workflow rule which specifies the formula for when a condition is met. Available from API version 34.0 or later.")

Represents a validation rule or workflow rule which specifies the formula for when a condition is met.

[WorkflowAlert](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowalert.htm "Represents a workflow alert. A workflow alert is an email generated by a workflow rule or approval process and sent to designated recipients.")

Represents a workflow alert. A workflow alert is an email generated by a workflow rule or approval process and sent to designated recipients.

[WorkflowFieldUpdate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowfieldupdate.htm "Represents a workflow field update.")

Represents a workflow field update.

[WorkflowOutboundMessage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowoutboundmessage.htm "Represents an outbound message. An outbound message sends information to a designated endpoint, like an external service. Outbound messages are configured from Setup. You must configure the external endpoint and create a listener for the messages using the SOAP API.")

Represents an outbound message. An outbound message sends information to a designated endpoint, like an external service. Outbound messages are configured from Setup. You must configure the external endpoint and create a listener for the messages using the SOAP API.

[WorkflowRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowrule.htm "Represents a workflow rule that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.")

Represents a workflow rule that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.

[WorkflowTask](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowtask.htm "Represents a workflow task that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.")

Represents a workflow task that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.

## Related Topics

- AuthorizedEmailDomain (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_authorizedemaildomain.htm)
- BusinessProcess (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_businessprocess.htm)
- CleanDataService (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_cleandataservice.htm)
- CleanRule (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_cleanrule.htm)
- CompactLayout (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayout.htm)
- CompactLayoutInfo (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayoutinfo.htm)
- CompactLayoutItemInfo (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayoutiteminfo.htm)
- CustomField (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfield.htm)
- CustomFieldMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfieldmember.htm)
- CustomObject (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customobject.htm)
