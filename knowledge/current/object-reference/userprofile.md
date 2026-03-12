---
title: "UserProfile"
domain: object-reference
topic: userprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.920Z
estimatedTokens: 5835
keywords: [UserProfile, Chatter, user, profile, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# UserProfile

> Represents a Chatter user
    profile.

# UserProfile

Represents a Chatter user profile.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object has been deprecated as of API version 32.0. Use the [User](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm "Represents a user in your organization.") object to query information about a user in API version 32.0 and later.

## Supported Calls

describeLayout(), query(), retrieve()

## Special Access Rules

-   Information in hidden fields in a user's profile isn’t searchable by external users (with a portal profile) in an Experience Cloud site. For example, if a user in a site has a hidden email address and an external user searches for it, the user record isn’t returned in the search results. Hidden field values also aren’t returned when external users perform searches on nonhidden fields. So if an external user searches for a user's name (can’t be hidden), any hidden field values associated with the user record such as a hidden email address aren’t returned in the search results.

    internal users belonging to the same Experience Cloud site can search for and view hidden field values in search results.

-   Any fields that have been restricted in visibility will be returned empty, whether or not they are, and will not be removed from the field listing.

## Fields

| Field | Details |
| --- | --- |
| AboutMe | TypetextareaPropertiesFilter, Nillable, SortDescriptionInformation about the user, such as areas of interest or skills. |
| Address (beta) | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address. Read-only. See Address Compound Fields for details on compound address fields. |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe city associated with the user profile. |
| CompanyName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe company associated with the user profile. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe country associated with the user profile. |
| Email | TypeemailPropertiesFilter, Group, idLookup, SortDescriptionThe email address associated with the user profile. |
| Fax | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe fax number associated with the user profile. |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s first name. |
| FullPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionThe URL for the user's profile photo if Chatter is enabled.The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo is uploaded, the URL returned for an older photo isn’t guaranteed to return a photo. Query this field for the URL of the most recent photo. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the user has access to log in (true) or not (false). You can modify a User's active status from the user interface or via the API. |
| IsBadged | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the user is visually badged (true) or not (false). Users of the same Chatter user type (internal, external) are badged. Different user types are not badged. |
| LastName | TypestringPropertiesFilter, Group, SortDescriptionThe user’s last name. |
| Latitude (beta) | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Longitude to specify the precise geolocation of an address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations |
| Longitude (beta) | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Longitude to specify the precise geolocation of an address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations |
| ManagerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who manages this user. |
| MobilePhone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe user’s mobile or cellular phone number. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionConcatenation of FirstName and LastName. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe user’s phone number. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s postal or ZIP code. Label is Zip/Postal Code. |
| SmallPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionThe URL for a thumbnail of the user's profile photo if Chatter is enabled.The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo is uploaded, the URL returned for an older photo isn’t guaranteed to return a photo. Query this field for the URL of the most recent photo. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe state associated with the user profile. |
| Street | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe street address associated with the user profile. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s business title, such as “Vice President.” |
| UserPreferencesActivityRemindersPopup | TypebooleanPropertiesFilterDescriptionWhen true, a reminder window automatically opens when an activity reminder is due. Corresponds to the Trigger alert when reminder comes due checkbox at the Reminders page in the personal settings in the user interface. |
| UserPreferencesApexPagesDeveloperMode | TypebooleanPropertiesFilterDescriptionWhen true, indicates that the user has enabled developer mode for editing Visualforce pages and controllers. |
| UserPreferencesDisableAllFeedsEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email for all updates to Chatter feeds, based on the types of feed emails and digests the user has enabled. |
| UserPreferencesDisableBookmarkEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone comments on a Chatter feed item after the user has bookmarked it. |
| UserPreferencesDisableChangeCommentEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone comments on a change the user has made, such as an update to their profile. |
| UserPreferencesDisableEndorsementEmail | TypebooleanPropertiesFilterDescriptionWhen false, the member automatically receives email every time someone endorses them for a topic. |
| UserPreferencesDisableFeedbackEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives emails related to WDC feedback. This includes when someone requests or offers feedback, shares feedback with the user, or reminds the user to answer a feedback request. |
| UserPreferencesDisableFileShareNotificationsForApi | TypebooleanPropertiesFilterDescriptionWhen false, email notifications are sent from the person who shared the file to the users that the file is shared with. |
| UserPreferencesDisableFollowersEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone starts following the user in Chatter. |
| UserPreferencesDisableLaterCommentEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone comments on a feed item after the user has commented on the feed item. |
| UserPreferencesDisableLikeEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone likes their post or comment. |
| UserPreferencesDisableMentionsPostEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time they’re mentioned in posts. |
| UserPreferencesDisableMessageEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email for Chatter messages sent to the user. |
| UserPreferencesDisableProfilePostEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone posts to the user’s profile. |
| UserPreferencesDisableRewardEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives emails related to WDC rewards. This includes when someone someone gives a reward to the user. |
| UserPreferencesDisableSharePostEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time their post is shared. |
| UserPreferencesDisableWorkEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user receives emails related to WDC feedback, goals, and coaching. The user must also sign up for individual emails listed on the WDC email settings page. When true, the user will not receive any emails related to WDC feedback, goals, or coaching even if they are signed up for individual emails. |
| UserPreferencesDisCommentAfterLikeEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone comments on a post that the user liked. |
| UserPreferencesDisMentionsCommentEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time the user is mentioned in comments. |
| UserPreferencesDisProfPostCommentEmail | TypebooleanPropertiesFilterDescriptionWhen false, the user automatically receives email every time someone comments on posts on the user’s profile. |
| UserPreferencesEnableAutoSubForFeeds | TypebooleanPropertiesFilterDescriptionWhen true, the user automatically subscribes to feeds for any objects that the user creates. |
| UserPreferencesEventRemindersCheckboxDefault | TypebooleanPropertiesFilterDescriptionWhen true, a reminder popup is automatically set on the user's events. Corresponds to the By default, set reminder on Events to... checkbox on the Reminders page in the user interface. This field is related to UserPreference and customizing activity reminders. |
| UserPreferencesHideChatterOnboardingSplash | TypebooleanPropertiesFilterDescriptionWhen true, the initial Chatter onboarding prompts do not appear. |
| UserPreferencesHideCSNDesktopTask | TypebooleanPropertiesFilterDescriptionWhen true, the Chatter recommendations panel never displays the recommendation to install Chatter Desktop. |
| UserPreferencesHideCSNGetChatterMobileTask | TypebooleanPropertiesFilterDescriptionWhen true, the Chatter recommendations panel never displays the recommendation to install Chatter Mobile. |
| UserPreferencesHideS1BrowserUI | TypebooleanPropertiesFilterDescriptionControls the interface that the user sees when logging in to Salesforce from a supported mobile browser. If false, the user is automatically redirected to the Salesforce mobile web. If true, the user sees the full Salesforce site. The default value is false. Label is Salesforce User.This field is available in API version 29.0 or later. |
| UserPreferencesHideSecondChatterOnboardingSplash | TypebooleanPropertiesFilterDescriptionWhen true, the secondary Chatter onboarding prompts do not appear. |
| UserPreferencesReminderSoundOff | TypebooleanPropertiesFilterDescriptionWhen true, a sound automatically plays when an activity reminder is due. Corresponds to the Play a reminder sound checkbox on the Reminders page in the user interface. |
| UserPreferencesShowCityToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the city field in the user’s contact information. City is visible only to internal members of the user’s organization when:This field is false. When false, this field returns the value #N/A.City is visible to external members in an Experience Cloud site when:This field is true, orThis field is false but UserPreferencesShowCityToGuestUsers is true, which overrides this field’s value.External users are users with Community, Customer Portal, or partner portal licenses.The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowCityToGuestUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the city field in the user’s contact information. When true, city is visible to guest users. Guest users can access public Site.com and Salesforce sites, and public pages in Experience Cloud sites, via the Guest User license associated with each site. When false, this field returns the value #N/A.When true, this field overrides the value false in UserPreferencesShowCityToExternalUsers, making the user’s city visible to external members.The default value is false. This field is available in API version 28.0 and later. |
| UserPreferencesShowCountryToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the country field in the user’s contact information. Country is visible only to internal members of the user’s organization when:This field is false. When false, this field returns the value #N/A.Country is visible to external members in an Experience Cloud site when:This field is true, orThis field is false but UserPreferencesShowCountryToGuestUsers is true, which overrides this field’s value.External users are users with Community, Customer Portal, or partner portal licenses.The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowCountryToGuestUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the country field in the user’s contact information. When true, country is visible to guest users. Guest users can access public Site.com and Salesforce sites, and public pages in Experience Cloud sites, via the Guest User license associated with each site. When false, this field returns the value #N/A.When true, this field overrides the value false in UserPreferencesShowCountryToExternalUsers, making the user’s country visible to external members.The default value is false. This field is available in API version 28.0 and later. |
| UserPreferencesShowEmailToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the email address field in the user’s contact information. Email address is visible only to internal members of the user’s organization when this field is false. Email address is visible to external members in an Experience Cloud site when this field is true. External users are users with Community, Customer Portal, or partner portal licenses.When false, this field returns the value #N/A. The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowFaxToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the fax number field in the user’s contact information. Fax number is visible only to internal members of the user’s organization when this field is false. Fax number is visible to external members in an Experience Cloud site when this field is true. External users are users with Community, Customer Portal, or partner portal licenses.When false, this field returns the value #N/A. The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowManagerToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the manager field in the user’s contact information. Manager is visible only to internal members of the user’s organization when this field is false. Manager is visible to external members in an Experience Cloud site when this field is true. External users are users with Community, Customer Portal, or partner portal licenses.When false, this field returns the value #N/A. The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowMobilePhoneToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the mobile device number field in the user’s contact information. The number is visible only to internal members of the user’s organization when this field is false. The number is visible to external members in an Experience Cloud site when this field is true. External users are users with Community, Customer Portal, or partner portal licenses.When false, this field returns the value #N/A. The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowPostalCodeToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the postal or ZIP code field in the user’s contact information. Postal code is visible only to internal members of the user’s organization when:This field is false. When false, this field returns the value #N/A.Postal code is visible to external members in an Experience Cloud site when:This field is true, orThis field is false but UserPreferencesShowPostalCodeToGuestUsers is true, which overrides this field’s value.External users are users with Community, Customer Portal, or partner portal licenses.The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowPostalCodeToGuestUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the postal or ZIP code field in the user’s contact information. When true, postal code is visible to guest users. Guest users can access public Site.com and Salesforce sites, and public pages in Experience Cloud sites, via the Guest User license associated with each site. When false, this field returns the value #N/A.When true, this field overrides the value ​false in UserPreferencesShowPostalCodeToExternalUsers, making the user’s postal code visible to external members.The default value is false. This field is available in API version 28.0 and later. |
| UserPreferencesShowProfilePicToGuestUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the user’s profile photo. When true, the photo is visible to guest users in an Experience Cloud site. Guest users can access public Site.com and Salesforce sites, and public pages in Experience Cloud sites, via the Guest User license associated with each site.When false, this field returns the stock photo. The default value is false. This field is available in API version 28.0 and later. |
| UserPreferencesShowStateToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the state field in the user’s contact information. State is visible only to internal members of the user’s organization when:This field is false. When false, this field returns the value #N/A.State is visible to external members in an Experience Cloud site when:This field is true, orThis field is false but UserPreferencesShowStateToGuestUsers is true, which overrides this field’s value.External users are users with Community, Customer Portal, or partner portal licenses.When false, this field returns the value #N/A. The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowStateToGuestUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the state field in the user’s contact information. When true, state is visible to guest users. Guest users can access public Site.com and Salesforce sites, and public pages in Experience Cloud sites, via the Guest User license associated with each site. When false, this field returns the value #N/A.When true, this field overrides the value false in UserPreferencesShowStateToExternalUsers, making the user’s state visible to external members.The default value is false. This field is available in API version 28.0 and later. |
| UserPreferencesShowStreetAddressToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the street address field in the user’s contact information. The address is visible only to internal members of the user’s organization when this field is false. The address is visible to external members in an Experience Cloud site when this field is true. External users are users with Community, Customer Portal, or partner portal licenses.When false, this field returns the value #N/A. The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesShowTitleToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the business title field in the user’s contact information. Title is visible only to internal members of the user’s organization when:This field is false. When false, this field returns the value #N/A.Title is visible to external members in an Experience Cloud site when:This field is true, orThis field is false but UserPreferencesShowTitleToGuestUsers is true, which overrides this field’s value.External users are users with Community, Customer Portal, or partner portal licenses.The default value is true. This field is available in API version 26.0 and later. |
| UserPreferencesShowTitleToGuestUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the business title field in the user’s contact information. When true, title is visible to guest users. Guest users can access public Site.com and Salesforce sites, and public pages in Experience Cloud sites, via the Guest User license associated with each site. When false, this field returns the value #N/A.When true, this field overrides the value false in UserPreferencesShowTitleToExternalUsers, making the user’s title visible to external members.The default value is false. This field is available in API version 28.0 and later. |
| UserPreferencesShowWorkPhoneToExternalUsers | TypebooleanPropertiesFilterDescriptionIndicates the visibility of the work phone number field in the user’s contact information. The number is visible only to internal members of the user’s organization when this field is false. The number is visible to external members in an Experience Cloud site when this field is true. External users are users with Community, Customer Portal, or partner portal licenses.When false, this field returns the value #N/A. The default value is false. This field is available in API version 26.0 and later. |
| UserPreferencesTaskRemindersCheckboxDefault | TypebooleanPropertiesFilterDescriptionWhen true, a reminder popup is automatically set on the user's tasks. Corresponds to the By default, set reminder on Tasks to... checkbox on the Reminders page in the user interface. This field is related to UserPreference and customizing activity reminders. |

## Usage

Use this object to query Chatter—related information about the user. While the User object contains all the information about a user and is historically tied to user management, UserProfile is a read-only entity that contains the information that is relevant in a Chatter context.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[UserProfileFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 18.0–26.0)

Feed tracking is available for the object.

## Related Topics

- User (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm)
- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
- UserProfileFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
