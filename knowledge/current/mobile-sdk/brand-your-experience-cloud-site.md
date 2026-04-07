---
title: "Brand Your Experience Cloud Site"
domain: mobile-sdk
topic: brand-your-experience-cloud-site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:29.899Z
estimatedTokens: 612
keywords: [Brand, Experience, Cloud, Site, Salesforce, Tabs, Visualforce, template, customize, look, feel, Workspaces, adding, company, logo]
---

# Brand Your Experience Cloud Site

> If you are using the Salesforce Tabs + Visualforce template, you can customize the look
  and feel of your Experience Cloud site in Experience Workspaces. You can customize by adding your
  company logo, colors, and copyright. Customizing these elements ensures that your Experience Cloud
  site matches your company’s branding and is instantly recognizable to your site
  members.

# Brand Your Experience Cloud Site

If you are using the Salesforce Tabs + Visualforce template, you can customize the look and feel of your Experience Cloud site in Experience Workspaces. You can customize by adding your company logo, colors, and copyright. Customizing these elements ensures that your Experience Cloud site matches your company’s branding and is instantly recognizable to your site members.

![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=mobile_sdk)

#### Warning

**Mobile SDK does not support building apps that wrap Experience Builder sites.**

1.  Open [Experience Workspaces](https://help.salesforce.com/s/articleView?id=experience.networks_workspaces.htm&type=5&language=en_US).
2.  Click **Administration** | **Branding**.
3.  Use the lookups to choose a header and footer for the Experience Cloud site.

    The files you’re choosing for header and footer must have been previously uploaded to the Documents tab and must be publicly available. The header can be .html, .gif, .jpg, or .png. The footer must be an .html file. The maximum file size for .html files is 100 KB combined. The maximum file size for .gif, .jpg, or .png files is 20 KB. Let’s say you have a header .html file that’s 70 KB and you want to use an .html file for the footer. The footer .html file can be only 30 KB.

    The header you choose replaces the Salesforce logo below the global header. The footer you choose replaces the standard Salesforce copyright and privacy footer.

4.  To select from predefined color schemes, click **Select Color Scheme**. To select a color from the color picker, click the text box next to the page section fields.

    Some of the selected colors impact your Experience Cloud site login page and how your site looks in the Salesforce mobile app as well.

    | Color Choice | Where it Appears |
    | --- | --- |
    | Header Background | Top of the page, under the black global header. If an HTML file is selected in the Header field, it overrides this color choice.Top of the login page.Login page in the Salesforce mobile app. |
    | Page Background | Background color for all pages in your Experience Cloud site, including the login page. |
    | Primary | Tab that is selected. |
    | Secondary | Top borders of lists and tables.Button on the login page. |
    | Tertiary | Background color for section headers on edit and detail pages. |

5.  Click **Save**.
