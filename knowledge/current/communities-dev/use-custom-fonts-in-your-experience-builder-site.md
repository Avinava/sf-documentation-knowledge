---
title: "Use Custom Fonts in Your Experience Builder Site"
domain: communities-dev
topic: use-custom-fonts-in-your-experience-builder-site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.273Z
estimatedTokens: 618
keywords: [Custom, Fonts, Experience, Builder, Site, Upload, resources, primary, throughout, you’ve, font, file, zip]
---

# Use Custom Fonts in Your Experience Builder Site

> Upload custom fonts as static resources and use them for primary and header fonts
    throughout your site. If you’ve more than one font file to upload, use a .zip file.

# Use Custom Fonts in Your Experience Builder Site

Upload custom fonts as static resources and use them for primary and header fonts throughout your site. If you’ve more than one font file to upload, use a .zip file.

1.  In Setup, enter Static Resources in the Quick Find box, and then select **Static Resources**.
2.  Click **New**, upload the file, and give the static resource a name. Keep a note of the resource name.

    If your site has public pages, select **Public** in the Cache Control setting. If you don’t make the font resource publicly available, the page uses the browser’s default font instead.

3.  In Experience Builder, open the CSS editor by clicking **Theme** | **![Open Menu](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_communities%2Fimages%2Fcommunity_builder_manager3.png&folder=communities_dev)** | **Edit CSS**.
4.  Use the @font-face CSS rule to reference the uploaded font.

    For example:

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

    #### Note

    format() is an optional hint that describes the format of the font referenced in the URL.

    -   To reference a single font file, use the syntax /path\_prefix/s/sfsites/c/resource/resource\_name, where path\_prefix is the URL value that was added when you created the site, such as myPartnerSite.

        For example, if you upload a file called myFirstFont.woff and name the resource MyFonts, the URL is /myPartnerSite/s/sfsites/c/resource/MyFonts.

    -   To reference a file in a .zip file, include the folder structure but omit the .zip file name. Use the syntax /path\_prefix/s/sfsites/c/resource/resource\_name/font\_folder/font\_file.

        So if you upload fonts.zip, which contains bold/myFirstFont.woff, and you name the resource MyFonts, the URL is /myPartnerSite/s/sfsites/c/resource/MyFonts/bold/myFirstFont.woff.


5.  In the Theme panel, select **Fonts**, select the Primary Font or Header Fonts dropdown list, and then click **Use Custom Font**.![Use Custom Font button in Theme panel](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fcommunity_builder_customfont1.png&folder=communities_dev)
6.  Add the font family name that you entered in the CSS editor—for example, myFirstFont—and save your changes.![Enter font family name in Use Custom Font dialog box](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fcommunity_builder_customfont3.png&folder=communities_dev)

## Code Examples

```
@font-face {
    font-family: 'myFirstFont';
    src: url('/myPartnerSite/s/sfsites/c/resource/MyFonts/bold/myFirstFont.woff') format('woff');
}
```
