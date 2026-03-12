---
title: "Customize the Android SDK"
domain: loyalty
topic: customize-the-android-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.175Z
estimatedTokens: 638
keywords: [Customize, Android, SDK, build, Loyalty, Management, Mobile, colors, fonts, strings]
---

# Customize the Android SDK

> After you build the Loyalty Management Mobile SDK for Android, you can customize the
  colors, fonts, and strings.

# Customize the Android SDK

After you build the Loyalty Management Mobile SDK for Android, you can customize the colors, fonts, and strings.

1.  Customize the colors.
    1.  With your Sample Apps project open in Android Studio, open the **MyNTORewards** | **src** | **main** | **java** | **com** | **salesforce** | **loyalty** | **mobile** | **myntorewards** | **ui** | **theme** | **Color.kt** file.
    2.  To add a color to the Android UI theme or as another app color, edit the Color.kt file.

        For example, to add blue as one of the app colors, open the Color.kt file, and under //App Colors, add the val Blue = Color(0x0000FF33) code.

    3.  Save the Color.kt file.
    4.  To add the new color in any of the component definitions, add an entry or replace an entry with the new color.

        For example, to replace the vibrant purple 40 color with blue, in any of the files, replace color = VibrantPurple40 with color = Blue.

    5.  Clean and rebuild your project in Android Studio.
2.  Add a font to the Android UI theme.
    1.  With your Sample Apps project open in Android Studio, go to the **MyNTORewards** | **src** | **main** | **res** | **font** folder.
    2.  In the font folder, paste a .ttf file with the font script that you want to add.
    3.  Open the **MyNTORewards** | **src** | **main** | **java** | **com** | **salesforce** | **loyalty** | **mobile** | **myntorewards** | **ui** | **theme** | **Type.kt** file.
    4.  Edit the Type.kt file, and add the file that you added in the font folder.

        For example, to add Arial as one of the fonts, edit the Type.kt file to add the sample code:

        ```

        ```

    5.  Save the Type.kt file.
    6.  Add this font in any of the component definitions.

        For example, to replace the sf\_pro font on the My Transactions page with Arial, replace fontFamily = font\_sf\_pro with fontFamily = font\_arial.

    7.  Clean and rebuild your project in Android Studio.
3.  Customize the UI labels or strings used in your Sample App.
    1.  Open the **MyNTORewards** | **src** | **main** | **res** | **values** | **strings.xml** file.
    2.  Edit any text included in the <string> tag.

        For example, to change the text Membership Number to Membership ID, replace all the strings that contain Membership Number with Membership ID.

    3.  Save the strings.xml file.
    4.  Clean and rebuild your project in Android Studio.
4.  To replace an image, go to **MyNTORewards** | **src** | **main** | **res** | **drawable**, and replace the image.

## Code Examples

```
val font_arial = FontFamily(
    Font(R.font.arial)
)
```
