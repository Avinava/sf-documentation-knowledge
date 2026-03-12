---
title: "Referral Customization for Android"
domain: referral-marketing
topic: referral-customization-for-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.004Z
estimatedTokens: 534
keywords: [Referral, Customization, Android, build, Mobile, SDK, customize, components, modify, referral-related, configuration, MyNTORewards, sample, app, Settings]
---

# Referral Customization for Android

> After you build the Referral Mobile SDK for Android, you can customize the referral UI
    components, and modify the referral-related configuration in the MyNTORewards sample app.

# Referral Customization for Android

After you build the Referral Mobile SDK for Android, you can customize the referral UI components, and modify the referral-related configuration in the MyNTORewards sample app.

## UI Customization

The referral UI components are available in the /LoyaltyMobileSDK-Android/SampleApps/MyNTORewards/src/main/java/com/salesforce/loyalty/mobile/myntorewards/views/components package.

For example, to include the Gmail icon as one of the sharing options in the app:

-   Add the new Gmail icon in the LoyaltyMobileSDK-Android/SampleApps/MyNTORewards/src/main/res/drawable folder.
-   Open the LoyaltyMobileSDK-Android/SampleApps/MyNTORewards/src/main/java/com/salesforce/loyalty/mobile/myntorewards/utilities/ShareType.kt file in Android Studio, and add an entry for Gmail that contains the new icon ID, the Gmail package name, and the INTENT\_TYPE\_MAIL constant inside the ShareType enum class.

```

```

## Settings Customization

You can modify the referral program details in the LoyaltyMobileSDK-Android/SampleApps/MyNTORewards/src/main/java/com/salesforce/loyalty/mobile/myntorewards/referrals/ReferralConfig.kt file.

Here are all the properties you can modify.

```

```

-   REFERRAL\_DEFAULT\_PROMOTION\_CODE and REFERRAL\_DEFAULT\_PROMOTION\_ID: The default promotion code and ID.
-   REFERRAL\_DURATION: The period in days for which the referral details are to be displayed. By default, the sample app shows the referral information of the last 90 days.
-   REFERRAL\_PROGRAM\_NAME: The default referral program name.
-   REFERRAL\_TANDC\_LINK: An external Terms and Conditions link.

For a complete walkthrough of the referral feature in the MyNTORewards app, see [Walkthrough of the Sample App](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/mobile_sdk_experience_sampleapp.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=referral_marketing)

#### Note

An advocate can refer a friend only once. When an advocate makes repeated attempts to refer a friend, you can show a custom message based on your company’s branding.

## Code Examples

```
* This class holds the all possible social media sharing options
 * To customise the social media icons, change the iconIds configured below
 * To add new sharing option, add below with iconId, packageName and Intent share type
 */
enum class ShareType(@DrawableRes val iconId: Int, val packageName: String?, val intentShareType: String? = ShareType.INTENT_TYPE_TEXT) {
    FACEBOOK(R.drawable.ic_facebook, ShareType.FACEBOOK_APP_PACKAGE, ShareType.INTENT_TYPE_IMAGE),
    INSTAGRAM(R.drawable.ic_instagram, ShareType.INSTAGRAM_APP_PACKAGE),
    WHATSAPP(R.drawable.ic_whatsapp, ShareType.WHATSAPP_APP_PACKAGE),
    TWITTER(R.drawable.ic_twitter, ShareType.TWITTER_APP_PACKAGE),
    GMAIL(R.drawable.ic_gmail, ShareType.GMAIL_APP_PACKAGE, ShareType.INTENT_TYPE_MAIL),
    SHARE_OTHERS(R.drawable.ic_share, null); // Package name is null as its generic sharing option

    companion object {
        const val INTENT_TYPE_TEXT = "text/plain"
        const val INTENT_TYPE_IMAGE = "image/*"
        const val INTENT_TYPE_MAIL = "message/rfc822"
        const val FACEBOOK_APP_PACKAGE = "com.facebook.katana"
        const val WHATSAPP_APP_PACKAGE = "com.whatsapp"
        const val INSTAGRAM_APP_PACKAGE = "com.instagram.android"
        const val TWITTER_APP_PACKAGE = "com.twitter.android"
        const val GMAIL_APP_PACKAGE = "com.google.android.gm"
    }
}
```

```
/**
 * Referral configuration class
 */
object ReferralConfig {
    // Referral Program Name
    const val REFERRAL_PROGRAM_NAME = "NTO Insider"
    // Configure Referral Promotion Details below, where user can also able to enroll and refer from My Referrals screen
    const val REFERRAL_DEFAULT_PROMOTION_CODE = "TEMPRP7"
    const val REFERRAL_DEFAULT_PROMOTION_ID = "0c81Q0000004UL4QAM"
    // Referral duration - By default, showing the last 90days of referrals info
    const val REFERRAL_DURATION = 90
    /* Provided random link here instead of actual Terms and Conditions link.
    Replace with valid terms and conditions link while using the feature */
    const val REFERRAL_TANDC_LINK = "https://www.google.co.in/"
}
```
