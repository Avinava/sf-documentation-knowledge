---
title: "ScratchOrgInfo"
domain: object-reference
topic: scratchorginfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.686Z
estimatedTokens: 2829
namespace: Type
keywords: [ScratchOrgInfo, scratch, org, audit, log, keep, creation, deletion, API, version, 41.0, later, Calls, Associated, Objects]
---

# ScratchOrgInfo

> Represents a scratch org and its audit log. Use this object to
			create a scratch org and keep a log of its creation and deletion. This object is
		available in API version 41.0 and later.

**Namespace:** `Type`

# ScratchOrgInfo

Represents a scratch org and its audit log. Use this object to create a scratch org and keep a log of its creation and deletion. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AdminEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe email address of the scratch org’s Administration user. The read only SignupEmail field is populated with this value. If you don't provide a value for AdminEmail, the field is left blank and the SignupEmail is populated with the email address of the org user who is creating this object. |
| AuthCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA one-time authorization code that can be exchanged for an OAuth access token and refresh token using standard Salesforce APIs. It’s used with ConnectedAppCallbackUrl and ConnectedAppConsumerKey, when the specified connected app hasn't been configured with an X.509 certificate. This field is read only. |
| ConnectedAppCallbackUrl | TypetextareaPropertiesCreateDescriptionRequired. When used with ConnectedAppConsumerKey, it specifies the callback URL used for OAuth. If using Salesforce CLI, the default is http://localhost:1717/OauthRedirect. |
| ConnectedAppConsumerKey | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. When used with ConnectedAppCallbackUrl, it specifies the connected app that is approved automatically during scratch org creation. If using Salesforce CLI and the default connected app, indicate PlatformCLI. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe two-character, upper-case ISO-3166 country code. You can find a full list of these codes at several sites, such as: www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html. The language of the scratch org is auto-determined based on the value of this field. If you don’t specify a value, this field defaults to the Dev Hub’s country code. |
| DeletedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user who requested that the scratch org be deleted. This field is read only. |
| DeletedDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the DeletedBy user requested that the scratch org be deleted. This field is read only. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA free-form text field for you to enter a description of this scratch org. |
| DurationDays | TypeintPropertiesCreate, Filter, Nillable, Group, SortDescriptionNumber of days after which the scratch org expires. Valid values are 1–30. The default is 7. |
| Edition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionRequired if you don’t provide Snapshot or SourceOrg. The org edition of this scratch org. Valid values are Group, Developer, Enterprise, and Professional. |
| ErrorCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error code if the scratch org creation isn’t successful. This field is read only. |
| ExpirationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate when the scratch org expires. This field is read only. |
| Features | TypetextareaPropertiesCreate, NillableDescriptionA semi-colon delimited list of the features enabled in this scratch org, such as MultiCurrency. See the Salesforce DX Developer Guide for the full list of valid features. |
| HasSampleData | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionSpecifies whether the scratch org contains sample data. If set to true, the sample data is similar to the data in a Salesforce free trial org. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the scratch org being created. Specify the language using a language code listed under "Supported Languages" in Salesforce Help. For example, use zh_CN for simplified Chinese. The value you select overrides the language set by locale.If you don’t specify a value, the language is based on the Country used during scratch org creation. If you don’t specify a value for Country, the value defaults to the Dev Hub’s country. |
| LastLoginDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date of the last user login to the scratch org. This field is read only. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. This field is read only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. This field is read only. |
| LoginUrl | TypetextareaPropertiesNillableDescriptionA URL that logs you in to the scratch org. This field is read only. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe auto-generated ID of this scratch org. This field is read only. |
| Namespace | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe namespace you want to associate with this scratch org. The value of this field corresponds to the NamespacePrefix field of the NamespaceRegistry object that describes your namespace. |
| OrgName | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. The name of the scratch org. This name appears as the Organization Name in the Company Information Setup page. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created this scratch org. |
| Release | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe release of the scratch org. During Salesforce's major release transitions, this field allows you to select the Salesforce release version, based on the version of your Dev Hub. This field is available in API version 46.0 and later. Valid values are:CurrentPreviewPreviousSee Select the Salesforce Release for a Scratch Org for more information. |
| ScratchOrg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe org ID of the scratch org. This field is read only. |
| SignupCountry | TypestringPropertiesFilter, Group, SortDescriptionThe country code of the scratch org. This field is populated with the value of the Country field. If you didn’t provide a value for Country, it’s the country code of the Dev Hub. This field is read only. |
| SignupEmail | TypeemailPropertiesFilter, Group, SortDescriptionThe email address of the scratch org’s Administration user. This field is populated with the value of the AdminEmail field. If you didn't provide a value for AdminEmail, it's the email address of your user in the Dev Hub. This field is read only. |
| SignupInstance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce instance on which this scratch org resides. This field is read only. |
| SignupLanguage | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the scratch org. This field is populated with the value of the Language field. If you didn’t provide a value for Language, it’s the language of the Dev Hub. This field is read only. |
| SignupTrialDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days between the scratch org's creation and expiration. This field is read only. |
| SignupUsername | TypestringPropertiesFilter, Group, SortDescriptionThe username of the Administration user of this scratch org. This field is populated with the value of the Username field. If you didn’t provide a value for Username, the value of this field is auto-generated. This field is read only. |
| Snapshot | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionIf this scratch org was created from a scratch org snapshot, then this field contains either the name or ID of the snapshot. Specifically, the name corresponds to the Name field of the snapshot’s record in the OrgSnapshot standard object; the ID corresponds to the record ID.If this scratch org wasn’t created from a snapshot, this field is empty.If you specify Snapshot, you can’t specify Edition or SourceOrg.This field is available in API version 61.0 and later. |
| SourceOrg | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the org whose shape (features, settings, limits, and licenses) information is used for creating scratch orgs. If you specify SourceOrg, you can’t specify Edition or Snapshot. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe status of the scratch org, such as active, expired, or deleted. This field is read only. |
| Username | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe username of the Administration user of this scratch org. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[ScratchOrgInfoFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ScratchOrgInfoHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ScratchOrgInfoShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [ActiveScratchOrg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activescratchorg.htm "Represents an active scratch org. This object is available in API version 41.0 and later.")

-   [NamespaceRegistry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namespaceregistry.htm "Represents a namespace that you can link to scratch orgs that were created from your org’s Dev Hub. You use the namespace when developing, packaging, and releasing an app. You can’t create this object with the API. Use the Link Namespace action in the Dev Hub graphical interface to insert a NamespaceRegistry record. This object is available in API version 41.0 and later.")

-   [*Salesforce DX Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev "
    Salesforce DX Developer Guide
    - HTML (New Window)")

## Related Topics

- ScratchOrgInfoFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ScratchOrgInfoHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ScratchOrgInfoShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- ActiveScratchOrg (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activescratchorg.htm)
- NamespaceRegistry (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namespaceregistry.htm)
