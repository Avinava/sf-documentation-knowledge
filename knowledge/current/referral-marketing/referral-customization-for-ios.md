---
title: "Referral Customization for iOS"
domain: referral-marketing
topic: referral-customization-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.029Z
estimatedTokens: 436
keywords: [Referral, Customization, iOS, build, Mobile, SDK, customize, components, modify, referral-related, configuration, MyNTORewards, sample, app, Settings]
---

# Referral Customization for iOS

> After you build the Referral Mobile SDK for iOS, you can customize the referral UI
        components, and modify the referral-related configuration in the MyNTORewards sample app.

# Referral Customization for iOS

After you build the Referral Mobile SDK for iOS, you can customize the referral UI components, and modify the referral-related configuration in the MyNTORewards sample app.

## UI Customization

The referral UI components are available in LoyaltyMobileSDK-iOS/SampleApps/MyNTORewards/MyNTORewards/Referral/Views.

For example, to include Gmail as one of the options to share a referral code:

-   Add the new Gmail icon in the LoyaltyMobileSDK-iOS/SampleApps/MyNTORewards/MyNTORewards/Assets.xcassets folder.
-   Open the LoyaltyMobileSDK-iOS/SampleApps/MyNTORewards/MyNTORewards/Referral/Views/ReferAFriendView.swift file in Xcode, and add the new icon ID to the list of icon IDs.

```

```

## Settings Customization

You can modify the referral program details in the LoyaltyMobileSDK-iOS/SampleApps/SampleApps/MyNTORewards/MyNTORewards/AppSettings.swift file.

Here are all the properties you can modify.

```

```

-   promotionCode: The default promotion code.
-   referralDateFormat and referralDateFormatWithoutTime: The referral activity date format with and without time.
-   referralProgramName: The default referral program name.
-   referralTermsLink: An external Terms and Conditions link.

For a complete walkthrough of the referral feature in the MyNTORewards app, see [Walkthrough of the Sample App](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/mobile_sdk_experience_sampleapp.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=referral_marketing)

#### Note

An advocate can refer a friend only once. When an advocate makes repeated attempts to refer a friend, you can show a custom message based on your company’s branding.

## Code Examples

```
HStack("spacing":15){
   "Button"{
      "showShareSheet.toggle()"
   }"label":{
      "Image(""ic-fb"")"
   }".sheet(isPresented":"$showShareSheet)"{
      "ActivityViewController(activityItems":[
         "shareText"
      ]")"
   }"Button"{
      "showShareSheet.toggle()"
   }"label":{
      "Image(""ic-ig"")"
   }".sheet(isPresented":"$showShareSheet)"{
      "ActivityViewController(activityItems":[
         "shareText"
      ]")"
   }"Button"{
      "shareToWhatsApp(text":"shareText)"
   }"label":{
      "Image(""ic-whatsapp"")"
   }"Button"{
      "shareToTwitter(text":"shareText)"
   }"label":{
      "Image(""ic-twitter"")"
   }"Button"{
      "shareToGmail(text":"shareText)"
   }"label":{
      "Image(""ic-gmail"")"
   }"Button"{
      "showShareSheet.toggle()"
   }"label":{
      "Image(""ic-share"")"
   }
```

```
// Referral settings
static let referralProgramName = loyaltyProgramName
// Configure the referral promotion details below, where a user can enroll and refer from the My Referrals screen
static let promotionCode = "TEMPRP7"
static let referralDateFormat = "yyyy-MM-dd'T'HH:mm:ss"
static let referralDateFormatWithoutTime = "yyyy-MM-dd"
/* Provided an example link here instead of the actual Terms and Conditions link.
Replace with valid terms and conditions link while using the feature */
static let referralTermsLink = "https://www.google.com"
```
