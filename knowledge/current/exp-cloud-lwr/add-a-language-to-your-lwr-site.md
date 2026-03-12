---
title: "Add a Language to Your LWR Site"
domain: exp-cloud-lwr
topic: add-a-language-to-your-lwr-site
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.763Z
estimatedTokens: 1104
keywords: [Add, Language, LWR, Site, offer, multiple, languages, Settings, panel, Experience, Builder, including, appears, selector, easy]
---

# Add a Language to Your LWR Site

> To offer your site in multiple languages, first add each language to the site
                from the Settings panel in Experience Builder. You can offer your site in up to 40
                languages, including your default site language. Each language that you add appears
                in the language selector in Experience Builder for easy navigation between different
                translations of your site. To make the translations available to your site visitors,
                add the Language Selector component to your site.

# Add a Language to Your LWR Site

To offer your site in multiple languages, first add each language to the site from the Settings panel in Experience Builder. You can offer your site in up to 40 languages, including your default site language. Each language that you add appears in the language selector in Experience Builder for easy navigation between different translations of your site. To make the translations available to your site visitors, add the Language Selector component to your site.

1.  In the Settings panel in Experience Builder, select **Languages**.

    ![Languages page in Experience Builder Settings](/docs/resources/img/en-us/260.0?doc_id=images%2Fmultilingual_lwr_settings_languages.png&folder=exp_cloud_lwr)

2.  In the Languages panel, click **Edit Languages** (1).
3.  In the Edit site languages window, select the language from the Available Languages list, move it to the Site Languages list, and save your changes. You can add more than one language at a time. On enhanced LWR sites, the available languages are limited to the languages that are enabled in your Salesforce org.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

    #### Note

    Standard components in LWR sites offer limited support for right-to-left languages. For the best customer experience in these languages, use custom Lightning web components.

4.  To make the language available to your site visitors, select **Activate and show in the language selector** (2) in the Languages panel.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

    #### Tip

    Deselect this option until you’re ready to publish content in that language.

5.  Optionally, set the fallback language for each language that you add (3).

    On your published multilingual site, if any text isn’t translated into a visitor’s selected site language, the text appears in the fallback language. For example, if you add translations for French and French (Canadian) to your site, you can designate French as the fallback language for French (Canadian). If you don’t designate a fallback language, the fallback is your default site language.

    Multilingual sites support only one level of fallback language. For example, if French (Canadian) falls back to French, then your site’s default language is the only fallback language allowed for French.

    Experience Builder prevents you from creating fallback language loops. For example, if French is the fallback language for French (Canadian), then French (Canadian) isn’t available to select as the fallback language for French. Similarly, if the fallback language for French (Morocco) is French (Canadian), then French (Morocco) also is unavailable to select as the fallback language for French.

    On enhanced LWR sites, any language that has a designated fallback language can’t itself be a fallback language. For example, if you designate French as the fallback language for French (Canadian), then French (Canadian) can’t be the fallback for any other language.

6.  Optionally, to determine how the language is listed in the language selector on your site, customize the label for the site language (4).

To rearrange the Site Languages list in the order that you want, use the grabber icon for a language (5). These changes also affect the order of languages in the language selectors in Experience Builder and on your site.

In Experience Builder, to view your site in another site language, use the language selector.

![Language selector icon in Experience Builder, showing its menu of languages](/docs/resources/img/en-us/260.0?doc_id=images%2Fmultilingual_lwr_builder_language_selector.png&folder=exp_cloud_lwr)

#### See Also

-   [Export Content from Your LWR Site for Translation](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_export_content.htm "After you add a language to your site, you can export the site content to send it to your localization team or vendor for translation.")

-   [Set the Default Language on Your LWR Site](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_set_default_language.htm "When you create an LWR site, the default site language is English (US). If you want to change it to a different default language, update the default language as soon as possible after you create the site to avoid losing content.")

## Related Topics

- Export Content from Your LWR Site for Translation (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_export_content.htm)
- Set the Default Language on Your LWR Site (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/multilingual_lwr_set_default_language.htm)
