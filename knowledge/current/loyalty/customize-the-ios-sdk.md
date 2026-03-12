---
title: "Customize the iOS SDK"
domain: loyalty
topic: customize-the-ios-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.180Z
estimatedTokens: 521
keywords: [Customize, iOS, SDK, build, Loyalty, Management, Mobile, colors, fonts, suit, requirements, replace, images, logos, included]
---

# Customize the iOS SDK

> After you build the Loyalty Management Mobile SDK for iOS, you can customize the colors
  and fonts to suit your requirements. You can also replace the existing images and logos included
  in the SDK for the sample app.

# Customize the iOS SDK

After you build the Loyalty Management Mobile SDK for iOS, you can customize the colors and fonts to suit your requirements. You can also replace the existing images and logos included in the SDK for the sample app.

1.  Customize the colors.
    1.  With your Sample Apps project open in Xcode, select **MyNTORewards** | **MyNTORewards** | **Assets** | **Colors**.
    2.  To modify an existing colorset, click **Any Appearance**, and under Color, edit the Hex value.
    3.  To add the dark color, click **Dark**, and from Content, select a color.
    4.  To add a color theme, open the **MyNTORewards** | **MyNTORewards** | **Misc** | **Color** file, and add a color theme to the sample code.

        For example, to add blue color to the theme, use this code:

        ```

        ```

    5.  To use a color in the app, use these sample codes as view or within view modifier:

        ```

        ```

        Or background(Color.theme.\[color\])

        For example, to add Blue color to the theme, use this code as view or within view modifier:

        ```

        ```

        Or background(Color.theme.blue)

2.  Add your font to the iOS app.
    1.  [Add your font to the Xcode project.](https://sarunw.com/posts/swiftui-custom-font/)
    2.  Add your font to the **MyNTORewards** | **MyNTORewards** | **Info.plist** file.
3.  Use the font that you added in the app.
    1.  With your Sample Apps project open in Xcode, select **MyNTORewards** | **MyNTORewards** | **UICompnents** | **FontStyles.swift** file.
    2.  Edit the file and add the location where you want to use the font. For example, to customize a footer text, use this sample code:

        ```

        ```

    3.  In the Text view, call the font style as a new modifier with the sample code:

        ```

        ```

    4.  Save your changes.
4.  To replace an image, go to **MyNTORewards** | **MyNTORewards** | **Assets** | **Images**. For example, to replace a logo, go to the**MyNTORewards** | **MyNTORewards** | **Assets** | **Icons**folder, and modify the logo file.

## Code Examples

```
struct ColorTheme {let blue = Color("BlueColor")}
```

```
ZStack {
       Color.theme.[color]
}
```

```
ZStack {
       Color.theme.blue
}
```

```
static var footerText: Font {
                            return Font.custom("SFPro-Regular", size: 16)
}
```

```
Text("Footer")
                            .font(.footerText)
```
