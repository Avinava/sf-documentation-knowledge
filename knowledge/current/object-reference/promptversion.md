---
title: "PromptVersion"
domain: object-reference
topic: promptversion
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.704Z
estimatedTokens: 3629
namespace: NamespacePrefix
keywords: [PromptVersion, in-app, guidance, prompt, walkthrough, API, version, 46.0, later, Calls, Special, Access, Rules, Prompts, Walkthroughs]
---

# PromptVersion

> Represents an in-app guidance prompt or walkthrough. Available
      in API version 46.0 and later.

**Namespace:** `NamespacePrefix`

# PromptVersion

Represents an in-app guidance prompt or walkthrough. Available in API version 46.0 and later.

Prompts and walkthroughs help users discover your products and services, adopt your processes, or learn how to use a new feature. Add prompts and walkthroughs in Lightning Experience pages or apps or in supported Experience Cloud site pages. Add an optional action button or link that goes to a URL. Track views, action button clicks, and walkthrough completions.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To add, edit, manage, and view prompts and walkthroughs in Lightning Experience or in Experience Cloud sites, see [Considerations for Creating In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_prompt_consider.htm&type=5&language=en_US "HTML (New Window)") and [Permissions for Creating and Accessing In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_wt_license.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for permissions.

## Prompts and Walkthroughs in Managed Packages

For considerations about including in-app guidance in a managed package, see [Guidelines for In-App Guidance in Managed Packages](https://help.salesforce.com/articleView?id=customhelp_iag_packages.htm&language=en_US) in Salesforce Help.

For more information about creating managed packages, see [Create a First-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/creating_packages.htm).

Unmanaged packages must contain a namespace prefix. For more information, see [Register a Namespace for a First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm) and [What happens to my namespace prefix when I install a package?](https://help.salesforce.com/articleView?id=faq_distribution_installing_what_happens_to_my.htm&language=en_US).

## Fields

| Field | Details |
| --- | --- |
| ActionButtonLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel for the action button or link. Maximum of 25 characters. For a walkthrough, specify this value on the last step. |
| ActionButtonLink | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionURL for the action button or link. Maximum of 1,000 characters. You can’t use the GROUP BY option in a SOQL query for this field. For a walkthrough, specify this value on the last step. |
| Body | TypetextareaPropertiesCreate, UpdateDescriptionBody content.In API version 60.0 and later, enter up to 4,000 characters for all prompt types.In earlier API versions, enter up to 240 characters for floating prompts and targeted prompts. Enter up to 4,000 characters for docked prompts.For docked prompts, the maximum characters include HTML markup, not just readable text. |
| DelayDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of days between occurrences. For a walkthrough, specify this value on the first step. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription. Maximum of 255 characters. |
| DismissButtonLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel for the dismiss button of a floating or targeted prompt. Maximum of 15 characters. |
| DisplayPosition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe position of a floating prompt on the page. Valid values are:TopLeftTopCenterTopRightMiddleLeftMiddleCenterMiddleRightBottomLeftBottomCenterBottomRight |
| DisplayType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of prompt. Valid values are:DockedComposer—A docked promptFloatingPanel—A floating promptTargeted—A targeted prompt. Available in API version 52.0 and later. |
| ElementRelativePosition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe location of a targeted prompt relative to the element. This field is available in API version 52.0 and later. Valid values are:BottomCenterBottomLeftBottomRightLeftBottomLeftCenterLeftTopRightBottomRightCenterRightTopTopCenterTopLeftTopRight |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date to stop showing the in-app guidance. For a walkthrough, specify this value on the first step. |
| Experience | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field corresponds to the Environment picklist in In-App Guidance Builder. Available in version 60.0 and later.Possible values are:Lightning—Default. The in-app guidance is used in a Lightning Experience app or page.Site—The in-app guidance is used in a supported Experience Cloud site page. |
| ExperienceContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired if the value of Experience is Site. The ID of the Experience Cloud site context associated with the in-app guidance prompt. Available in version 60.0 and later.This field is a polymorphic relationship field.Relationship NameExperienceContextRelationship TypeLookupRefers ToSite |
| Header | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel for the header of a docked prompt. This value is the label contained in the window’s browser bar. Maximum of 36 characters. |
| ImageAltText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the alt text of an image. Required if ImageLocation or ImageID is specified. |
| ImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ContentAsset that holds the image. Required if ImageLocation or ImageAltText is specified.This is a relationship field.Relationship NameImageRelationship TypeLookupRefers ToContentAsset |
| ImageLocation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the location of the image in relation to the body text. Required if ImageID or ImageAltText is specified. Valid values are:TopBottomRight, which is for floating or targeted prompts onlyLeft, which is for floating or targeted prompts only |
| IndexWithIsPublished | TypestringPropertiesFilter, idLookup, Nillable, SortDescriptionUsed by Salesforce for efficient querying. |
| IndexWithoutIsPublished | TypestringPropertiesFilter, idLookup, Nillable, SortDescriptionUsed by Salesforce for efficient querying. |
| IsPublished | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the in-app guidance is active (true) or not (false). |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label. Maximum of 80 characters. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the in-app guidance.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToPrompt |
| PublishedByUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user who activated the in-app guidance. If the in-app guidance is part of a package, this value is the user who installed the package.This is a relationship field.Relationship NamePublishedByUserRelationship TypeLookupRefers ToUser |
| PublishedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the date the in-app guidance was activated. If installed from a package, this value is the date when the package was installed. For walkthroughs, this field can only be specified on the first step. |
| ReferenceElementContext | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUsed by Salesforce to identify the element that the targeted prompt is associated with. Available in API version 52.0 and later. |
| ShouldDisplayActionButton | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an action button or link is included (true) or not (false). |
| ShouldIgnoreGlobalDelay | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the in-app guidance ignores the global time delay and instead shows on page load (true) or not (false). This field is available in API version 48.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the date to start showing the in-app guidance. For a walkthrough, specify this value on the first step.In API version 48.0 and earlier, this field is required. |
| StepNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired for walkthroughs only. Indicates the number of the last step the user viewed or interacted with in a walkthrough. Include up to 10 steps. Numbers must be consecutive without repeated or skipped numbers. Available in API version 49.0 and later. |
| TargetAppDeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe app’s developer name where the in-app guidance appears. Deprecated in API version 51.0 and later. |
| TargetAppNamespacePrefix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe app’s namespace prefix where the in-app guidance appears. This value must match the target app’s NamespacePrefix in the org that the package is being installed into. Maximum of 15 characters. Deprecated in API version 51.0 and later. |
| TargetPageKey1 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Used by Salesforce to identity the prompt’s page location along with targetPageKey2, targetPageKey3, targetPageKey4, and targetPageType. |
| TargetPageKey1Ref | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUsed by Salesforce to identify the prompt’s page location along with TargetPageKey2, TargetPageKey3, TargetPageKey4, and TargetPageType. |
| TargetPageKey2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed by Salesforce to identify the prompt’s page location along with TargetPageKey1, TargetPageKey3, TargetPageKey4, and TargetPageType. |
| TargetPageKey3 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed by Salesforce to identify the prompt’s page location along with TargetPageKey1, TargetPageKey2, TargetPageKey4, and TargetPageType. |
| TargetPageKey4 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed by Salesforce to identify the page location along with TargetPageKey1, TargetPageKey2, TargetPageKey3, and TargetPageType. This field is available in API version 53.0 and later. |
| TargetPageType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of page where the in-app guidance appears. |
| TargetRecordType | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed by Salesforce to determine if in-app guidance is specific to a record type. This field is available in API version 53.0 and later.Relationship NameTargetRecordTypeRelationship TypeLookupRefers ToRecordType |
| ThemeColor | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates which custom theme color is applied to the in-app guidance. Required if ThemeSaturation is specified. For a walkthrough, specify this value on the first step. Valid values are:Theme1—derived from the current brand colorTheme2—derived from the current page background colorTheme3—derived from the current global header colorTheme4—derived from the current app theme color |
| ThemeSaturation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates which color value, or saturation, is applied to the in-app guidance that has a custom theme color. Required if ThemeColor is specified. For a walkthrough, specify this value on the first step. Valid values are:DarkLight |
| TimesToDisplay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired if recurrences are scheduled. The maximum number of times to show the in-app guidance. Salesforce detects whether the user interacts with the in-app guidance, then determines whether to show the in-app guidance again or cancel scheduled recurrences. Maximum value of 30. For a walkthrough, specify this value on the first step. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The label for the title. Maximum of 36 characters. |
| UserAccess | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates which permissions can see the in-app guidance. Valid values are:Everyone, which indicates that there’s no permission restrictionsSpecificPermissions, which indicates that only users with all the specific user permissions specified can see the in-app guidanceIn API version 48.0 and earlier, this field is required. |
| UserProfileAccess | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates which profiles can see the in-app guidance. This field is available in API version 48.0 and later. Valid values are:Everyone, which indicates that there are no profile restrictionsSpecificProfiles, which indicates that users with any of the specified user profiles can see the in-app guidance |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The number remains 1 since multiple versions aren’t saved in the org. |
| VideoLink | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe embed URL for a video in a docked prompt. Maximum of 1,000 characters. You can specify this field or the image field, but not both. This field is available in API version 48.0 and later. See Considerations for Creating In-App Guidance. |
