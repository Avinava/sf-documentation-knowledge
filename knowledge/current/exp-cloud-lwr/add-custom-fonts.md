---
title: "Add Custom Fonts"
domain: exp-cloud-lwr
topic: add-custom-fonts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.551Z
estimatedTokens: 853
keywords: [Add, Custom, Fonts, uploading, font, file, resource, Alternatively, that’s, hosted, externally, Upload]
---

# Add Custom Fonts

> You can add custom fonts by uploading the font file as a static resource.
    Alternatively, you can reference a file that’s hosted externally.

# Add Custom Fonts

You can add custom fonts by uploading the font file as a static resource. Alternatively, you can reference a file that’s hosted externally.

## Upload Fonts as a Static Resource

To upload your custom font as a static resource and reference it within the head markup:

1.  In Setup, in the Quick Find box, enter Static Resources, and then select **Static Resources**.
2.  Click **New**, upload the file, and give the static resource a name. Keep a note of the resource name. If your site has public pages, select **Public** in the Cache Control setting. If you don’t make the font resource publicly available, the page uses the browser’s default font instead.
3.  To add a reference to the font in your site’s head markup, return to Experience Builder, and click **Settings** | **Advanced** | **Edit Head Markup**.
4.  Insert the @font-face declaration. For example:

    ```

    ```

    -   To reference a single font file, use the syntax { basePath }/sfsites/c/resource/static\_resource\_name.

        For example, if you upload a font file called myFirstFont.woff and name the resource MyFonts, the URL is { basePath }/sfsites/c/resource/MyFonts.

    -   To reference a font file within a .zip file, include the folder structure, but omit the .zip file name. Use the syntax { basePath }/sfsites/c/resource/static\_resource\_name/font\_folder/font\_file.

        For example, if you upload a file called fonts.zip, which contains bold/myFirstFont.woff, and you name the resource MyFonts, the URL is { basePath }/sfsites/c/resource/MyFonts/bold/myFirstFont.woff.

5.  In the Text section of the Theme panel, click the Base Font Family dropdown list or the Font Family dropdown list for a specific text property, and select **Use Custom Font**.

    ![Text panel showing Base Font Family and Font Family dropdown lists](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding_custom_font_picklist.png&folder=exp_cloud_lwr)

6.  Add the font family name that you entered in the Head Markup editor—for example, myFirstFont—and save your changes.

    ![Confirmation window for adding a custom font](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding_custom_font_modal.png&folder=exp_cloud_lwr)


![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

Make sure that the font file format, for example, woff, matches your markup. Also make sure that your fallback values, such as Helvetica, sans-serif, and so on, are properly defined for your brand. To learn more, see [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face).

## Use Externally Hosted Fonts

You can use fonts that are hosted outside Salesforce, such as [Google Fonts](https://fonts.google.com/). However, to access externally hosted files, you must also update the Content Security Policy (CSP) for your org by adding the hosts to your list of Trusted URLs. Otherwise, an error appears indicating that the resources can’t be accessed.

For example, for Google Fonts, add:

-   https://fonts.googleapis.com to access the Google Fonts style sheet
-   https://fonts.gstatic.com to access fonts from Google Font

For details on how to add a Trusted URL with the required CSP directives, see [Manage Trusted URLs](https://help.salesforce.com/s/articleView?id=xcloud.security_trusted_urls_manage.htm&type=5&language=en_US "HTML (New Window)").

## Code Examples

```
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-styling-hooks.min.css?{ versionKey}" />
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-slds-extensions.min.css?{ versionKey}" />

<style>
   @font-face {
      font-family: 'myFirstFont';
      /* Replace myFonts with your resource name */
      src: url('{ basePath }/sfsites/c/resource/myFonts') format('woff');
   }
</style>
```
