---
title: "User"
domain: sfFieldRef
topic: user
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:15.974Z
estimatedTokens: 4228
keywords: [User, organization]
---

# User

> Represents a user in your organization.

# User

Represents a user in your organization.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AboutMe | About Me | textarea |  | 1000 |  |  |
| AccountId | Account ID | reference |  | 18 |  |  |
| Address | Address | address |  |  |  |  |
| Alias | Alias | string |  | 8 |  |  |
| BadgeText | User Photo badge text overlay | string |  | 80 |  |  |
| BannerPhotoUrl | URL for banner photo | url |  | 1024 |  |  |
| CallCenterId | Call Center ID | reference |  | 18 |  |  |
| City | City | string |  | 40 |  |  |
| CommunityNickname | Nickname | string |  | 40 |  |  |
| CompanyName | Company Name | string |  | 80 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DefaultCurrencyIsoCode | Default Currency ISO Code | picklist |  | 3 |  |  |
| DefaultGroupNotificationFrequency | Default Notification Frequency when Joining Groups | picklist |  | 40 |  |  |
| DelegatedApproverId | Delegated Approver ID | reference |  | 18 |  |  |
| Department | Department | string |  | 80 |  |  |
| DigestFrequency | Chatter Email Highlights Frequency | picklist |  | 40 |  |  |
| Division | Division | string |  | 80 |  |  |
| Email | Email | email |  | 128 |  |  |
| EmailEncodingKey | Email Encoding | picklist |  | 40 |  |  |
| EmailPreferencesAutoBcc | AutoBcc | boolean |  |  |  |  |
| EmailPreferencesAutoBccStayInTouch | AutoBccStayInTouch | boolean |  |  |  |  |
| EmailPreferencesStayInTouchReminder | StayInTouchReminder | boolean |  |  |  |  |
| EmployeeNumber | Employee Number | string |  | 20 |  |  |
| EndDay | End of Day | picklist |  | 40 |  |  |
| Extension | Extension | phone |  | 40 |  |  |
| Fax | Fax | phone |  | 40 |  |  |
| FederationIdentifier | SAML Federation ID | string |  | 512 |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| ForecastEnabled | Allow Forecasting | boolean |  |  |  |  |
| FullPhotoUrl | Url for full-sized Photo | url |  | 1024 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| HasUserVerifiedEmail | User Verified Email | boolean |  |  |  |  |
| HasUserVerifiedPhone | User Verified Mobile Number | boolean |  |  |  |  |
| Id | User ID | id |  | 18 |  |  |
| IndividualId | Individual ID | reference |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsExtIndicatorVisible | Show external indicator | boolean |  |  |  |  |
| IsPartner | Is Partner | boolean |  |  |  |  |
| IsPortalEnabled | Is Portal Enabled | boolean |  |  |  |  |
| IsProfilePhotoActive | Has Profile Photo | boolean |  |  |  |  |
| JigsawImportLimitOverride | Data.com Monthly Addition Limit | int | 9 |  |  |  |
| LanguageLocaleKey | Language | picklist |  | 40 |  |  |
| LastLoginDate | Last Login | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LastPasswordChangeDate | Last Password Change or Reset | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| LocaleSidKey | Locale | picklist |  | 40 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| ManagerId | Manager ID | reference |  | 18 |  |  |
| MediumBannerPhotoUrl | URL for Android banner photo | url |  | 1024 |  |  |
| MediumPhotoUrl | URL for medium profile photo | url |  | 1024 |  |  |
| MobilePhone | Mobile | phone |  | 40 |  |  |
| Name | Full Name | string |  | 121 |  |  |
| NumberOfFailedLogins | Failed Login Attempts | int | 9 |  |  |  |
| OfflinePdaTrialExpirationDate | Sales Anywhere Trial Expiration Date | datetime |  |  |  |  |
| OfflineTrialExpirationDate | Offline Edition Trial Expiration Date | datetime |  |  |  |  |
| OutOfOfficeMessage | Out of office message | string |  | 40 |  |  |
| PasswordExpirationDate | Password Expiration Date | datetime |  |  |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PortalRole | Portal Role Level | picklist |  | 40 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| ProfileId | Profile ID | reference |  | 18 |  |  |
| ReceivesAdminInfoEmails | Admin Info Emails | boolean |  |  |  |  |
| ReceivesInfoEmails | Info Emails | boolean |  |  |  |  |
| SenderEmail | Email Sender Address | email |  | 80 |  |  |
| SenderName | Email Sender Name | string |  | 80 |  |  |
| Signature | Email Signature | textarea |  | 1333 |  |  |
| SmallBannerPhotoUrl | URL for IOS banner photo | url |  | 1024 |  |  |
| SmallPhotoUrl | Photo | url |  | 1024 |  |  |
| StartDay | Start of Day | picklist |  | 40 |  |  |
| State | State/Province | string |  | 80 |  |  |
| StayInTouchNote | Stay-in-Touch Email Note | string |  | 512 |  |  |
| StayInTouchSignature | Stay-in-Touch Email Signature | textarea |  | 512 |  |  |
| StayInTouchSubject | Stay-in-Touch Email Subject | string |  | 80 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SuAccessExpirationDate | SU Access Expiration Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeZoneSidKey | Time Zone | picklist |  | 40 |  |  |
| Title | Title | string |  | 80 |  |  |
| UserPermissionsAvantgoUser | AvantGo User | boolean |  |  |  |  |
| UserPermissionsCallCenterAutoLogin | Auto-login To Call Center | boolean |  |  |  |  |
| UserPermissionsInteractionUser | Flow User | boolean |  |  |  |  |
| UserPermissionsJigsawProspectingUser | Data.com User | boolean |  |  |  |  |
| UserPermissionsKnowledgeUser | Knowledge User | boolean |  |  |  |  |
| UserPermissionsLiveAgentUser | Chat User | boolean |  |  |  |  |
| UserPermissionsMarketingUser | Marketing User | boolean |  |  |  |  |
| UserPermissionsOfflineUser | Offline User | boolean |  |  |  |  |
| UserPermissionsSFContentUser | Salesforce CRM Content User | boolean |  |  |  |  |
| UserPermissionsSiteforceContributorUser | Site.com Contributor User | boolean |  |  |  |  |
| UserPermissionsSiteforcePublisherUser | Site.com Publisher User | boolean |  |  |  |  |
| UserPermissionsSupportUser | Service Cloud User | boolean |  |  |  |  |
| UserPermissionsWorkDotComUserFeature | WDC User | boolean |  |  |  |  |
| UserPreferencesActionLauncherEinsteinGptConsent | ActionLauncherEinsteinGptConsent | boolean |  |  |  |  |
| UserPreferencesActivityRemindersPopup | ActivityRemindersPopup | boolean |  |  |  |  |
| UserPreferencesAllowConversationReminders | AllowConversationReminders | boolean |  |  |  |  |
| UserPreferencesApexPagesDeveloperMode | ApexPagesDeveloperMode | boolean |  |  |  |  |
| UserPreferencesAssistiveActionsEnabledInActionLauncher | AssistiveActionsEnabledInActionLauncher | boolean |  |  |  |  |
| UserPreferencesAutoForwardCall | AutoForwardCall | boolean |  |  |  |  |
| UserPreferencesAutoLogCallAsTask | AutoLogCallAsTask | boolean |  |  |  |  |
| UserPreferencesBRELookupTableWelcomeMat | BRELookupTableWelcomeMat | boolean |  |  |  |  |
| UserPreferencesCacheDiagnostics | CacheDiagnostics | boolean |  |  |  |  |
| UserPreferencesContentEmailAsAndWhen | ContentEmailAsAndWhen | boolean |  |  |  |  |
| UserPreferencesContentNoEmail | ContentNoEmail | boolean |  |  |  |  |
| UserPreferencesCreateLEXAppsWTShown | CreateLEXAppsWTShown | boolean |  |  |  |  |
| UserPreferencesDisCommentAfterLikeEmail | DisCommentAfterLikeEmail | boolean |  |  |  |  |
| UserPreferencesDisMentionsCommentEmail | DisMentionsCommentEmail | boolean |  |  |  |  |
| UserPreferencesDisProfPostCommentEmail | DisProfPostCommentEmail | boolean |  |  |  |  |
| UserPreferencesDisableAllFeedsEmail | DisableAllFeedsEmail | boolean |  |  |  |  |
| UserPreferencesDisableBookmarkEmail | DisableBookmarkEmail | boolean |  |  |  |  |
| UserPreferencesDisableChangeCommentEmail | DisableChangeCommentEmail | boolean |  |  |  |  |
| UserPreferencesDisableEndorsementEmail | DisableEndorsementEmail | boolean |  |  |  |  |
| UserPreferencesDisableFeedbackEmail | DisableFeedbackEmail | boolean |  |  |  |  |
| UserPreferencesDisableFileShareNotificationsForApi | DisableFileShareNotificationsForApi | boolean |  |  |  |  |
| UserPreferencesDisableFollowersEmail | DisableFollowersEmail | boolean |  |  |  |  |
| UserPreferencesDisableLaterCommentEmail | DisableLaterCommentEmail | boolean |  |  |  |  |
| UserPreferencesDisableLikeEmail | DisableLikeEmail | boolean |  |  |  |  |
| UserPreferencesDisableMentionsPostEmail | DisableMentionsPostEmail | boolean |  |  |  |  |
| UserPreferencesDisableMessageEmail | DisableMessageEmail | boolean |  |  |  |  |
| UserPreferencesDisableProfilePostEmail | DisableProfilePostEmail | boolean |  |  |  |  |
| UserPreferencesDisableSharePostEmail | DisableSharePostEmail | boolean |  |  |  |  |
| UserPreferencesDisableWorkEmail | DisableWorkEmail | boolean |  |  |  |  |
| UserPreferencesDismissPersonalSpaceLegalMessage | DismissPersonalSpaceLegalMessage | boolean |  |  |  |  |
| UserPreferencesDismissRecordChannelsSuggestedObjects | DismissRecordChannelsSuggestedObjects | boolean |  |  |  |  |
| UserPreferencesDismissReuseUpdateReminderModal | DismissReuseUpdateReminderModal | boolean |  |  |  |  |
| UserPreferencesEnableAutoSubForFeeds | EnableAutoSubForFeeds | boolean |  |  |  |  |
| UserPreferencesEnableLwrLexPilot | EnableLwrLexPilot | boolean |  |  |  |  |
| UserPreferencesEnableVoiceCallRecording | EnableVoiceCallRecording | boolean |  |  |  |  |
| UserPreferencesEventRemindersCheckboxDefault | EventRemindersCheckboxDefault | boolean |  |  |  |  |
| UserPreferencesExcludeMailAppAttachments | ExcludeMailAppAttachments | boolean |  |  |  |  |
| UserPreferencesFavoritesShowTopFavorites | FavoritesShowTopFavorites | boolean |  |  |  |  |
| UserPreferencesFavoritesWTShown | FavoritesWTShown | boolean |  |  |  |  |
| UserPreferencesGlobalNavBarWTShown | GlobalNavBarWTShown | boolean |  |  |  |  |
| UserPreferencesGlobalNavGridMenuWTShown | GlobalNavGridMenuWTShown | boolean |  |  |  |  |
| UserPreferencesHasCelebrationBadge | HasCelebrationBadge | boolean |  |  |  |  |
| UserPreferencesHasSentWarningEmail | HasSentWarningEmail | boolean |  |  |  |  |
| UserPreferencesHasSentWarningEmail238 | HasSentWarningEmail238 | boolean |  |  |  |  |
| UserPreferencesHasSentWarningEmail240 | HasSentWarningEmail240 | boolean |  |  |  |  |
| UserPreferencesHideBiggerPhotoCallout | HideBiggerPhotoCallout | boolean |  |  |  |  |
| UserPreferencesHideBrowseProductRedirectConfirmation | HideBrowseProductRedirectConfirmation | boolean |  |  |  |  |
| UserPreferencesHideCSNDesktopTask | HideCSNDesktopTask | boolean |  |  |  |  |
| UserPreferencesHideCSNGetChatterMobileTask | HideCSNGetChatterMobileTask | boolean |  |  |  |  |
| UserPreferencesHideChatterOnboardingSplash | HideChatterOnboardingSplash | boolean |  |  |  |  |
| UserPreferencesHideEndUserOnboardingAssistantModal | HideEndUserOnboardingAssistantModal | boolean |  |  |  |  |
| UserPreferencesHideLightningMigrationModal | HideLightningMigrationModal | boolean |  |  |  |  |
| UserPreferencesHideManagedEcaMobilePubModal | HideManagedEcaMobilePubModal | boolean |  |  |  |  |
| UserPreferencesHideOnlineSalesAppTabVisibilityRequirementsModal | HideOnlineSalesAppTabVisibilityRequirementsModal | boolean |  |  |  |  |
| UserPreferencesHideOnlineSalesAppWelcomeMat | HideOnlineSalesAppWelcomeMat | boolean |  |  |  |  |
| UserPreferencesHideS1BrowserUI | HideS1BrowserUI | boolean |  |  |  |  |
| UserPreferencesHideSecondChatterOnboardingSplash | HideSecondChatterOnboardingSplash | boolean |  |  |  |  |
| UserPreferencesHideSfxWelcomeMat | HideSfxWelcomeMat | boolean |  |  |  |  |
| UserPreferencesJigsawListUser | JigsawListUser | boolean |  |  |  |  |
| UserPreferencesLightningExperiencePreferred | LightningExperiencePreferred | boolean |  |  |  |  |
| UserPreferencesLiveAgentMiawSetupDeflection | LiveAgentMiawSetupDeflection | boolean |  |  |  |  |
| UserPreferencesNativeEmailClient | NativeEmailClient | boolean |  |  |  |  |
| UserPreferencesNewLightningReportRunPageEnabled | NewLightningReportRunPageEnabled | boolean |  |  |  |  |
| UserPreferencesOutboundBridge | OutboundBridge | boolean |  |  |  |  |
| UserPreferencesPathAssistantCollapsed | PathAssistantCollapsed | boolean |  |  |  |  |
| UserPreferencesPreviewCustomTheme | PreviewCustomTheme | boolean |  |  |  |  |
| UserPreferencesPreviewLightning | PreviewLightning | boolean |  |  |  |  |
| UserPreferencesReceiveNoNotificationsAsApprover | ReceiveNoNotificationsAsApprover | boolean |  |  |  |  |
| UserPreferencesReceiveNotificationsAsDelegatedApprover | ReceiveNotificationsAsDelegatedApprover | boolean |  |  |  |  |
| UserPreferencesRecordHomeReservedWTShown | RecordHomeReservedWTShown | boolean |  |  |  |  |
| UserPreferencesRecordHomeSectionCollapseWTShown | RecordHomeSectionCollapseWTShown | boolean |  |  |  |  |
| UserPreferencesReminderSoundOff | ReminderSoundOff | boolean |  |  |  |  |
| UserPreferencesReverseOpenActivitiesView | ReverseOpenActivitiesView | boolean |  |  |  |  |
| UserPreferencesSRHOverrideActivities | SRHOverrideActivities | boolean |  |  |  |  |
| UserPreferencesSendListEmailThroughExternalService | SendListEmailThroughExternalService | boolean |  |  |  |  |
| UserPreferencesShowCityToExternalUsers | ShowCityToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowCityToGuestUsers | ShowCityToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowCountryToExternalUsers | ShowCountryToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowCountryToGuestUsers | ShowCountryToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowEmailToExternalUsers | ShowEmailToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowEmailToGuestUsers | ShowEmailToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowFaxToExternalUsers | ShowFaxToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowFaxToGuestUsers | ShowFaxToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowForecastingChangeSignals | ShowForecastingChangeSignals | boolean |  |  |  |  |
| UserPreferencesShowForecastingRoundedAmounts | ShowForecastingRoundedAmounts | boolean |  |  |  |  |
| UserPreferencesShowManagerToExternalUsers | ShowManagerToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowManagerToGuestUsers | ShowManagerToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowMobilePhoneToExternalUsers | ShowMobilePhoneToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowMobilePhoneToGuestUsers | ShowMobilePhoneToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowPostalCodeToExternalUsers | ShowPostalCodeToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowPostalCodeToGuestUsers | ShowPostalCodeToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowProfilePicToGuestUsers | ShowProfilePicToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowStateToExternalUsers | ShowStateToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowStateToGuestUsers | ShowStateToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowStreetAddressToExternalUsers | ShowStreetAddressToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowStreetAddressToGuestUsers | ShowStreetAddressToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowTerritoryTimeZoneShifts | ShowTerritoryTimeZoneShifts | boolean |  |  |  |  |
| UserPreferencesShowTitleToExternalUsers | ShowTitleToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowTitleToGuestUsers | ShowTitleToGuestUsers | boolean |  |  |  |  |
| UserPreferencesShowWorkPhoneToExternalUsers | ShowWorkPhoneToExternalUsers | boolean |  |  |  |  |
| UserPreferencesShowWorkPhoneToGuestUsers | ShowWorkPhoneToGuestUsers | boolean |  |  |  |  |
| UserPreferencesSortFeedByComment | SortFeedByComment | boolean |  |  |  |  |
| UserPreferencesSuppressEventSFXReminders | SuppressEventSFXReminders | boolean |  |  |  |  |
| UserPreferencesSuppressTaskSFXReminders | SuppressTaskSFXReminders | boolean |  |  |  |  |
| UserPreferencesTaskRemindersCheckboxDefault | TaskRemindersCheckboxDefault | boolean |  |  |  |  |
| UserPreferencesUserDebugModePref | UserDebugModePref | boolean |  |  |  |  |
| UserRoleId | Role ID | reference |  | 18 |  |  |
| UserType | User Type | picklist |  | 40 |  |  |
| Username | Username | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
