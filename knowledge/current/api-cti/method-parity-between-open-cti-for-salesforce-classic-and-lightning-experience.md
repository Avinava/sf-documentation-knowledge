---
title: "Method Parity Between Open CTI for Salesforce Classic and Lightning
      Experience"
domain: api-cti
topic: method-parity-between-open-cti-for-salesforce-classic-and-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.795Z
estimatedTokens: 787
keywords: [Parity, Open, CTI, Salesforce, Classic, Lightning, Experience, provided, two, APIs, aren’t, always, renamed]
---

# Method Parity Between Open CTI for Salesforce Classic and Lightning
      Experience

> The methods provided in the two APIs aren’t always the same. Some Salesforce Classic
    methods aren’t available in Lightning Experience and some have been renamed.

# Method Parity Between Open CTI for Salesforce Classic and Lightning Experience

The methods provided in the two APIs aren’t always the same. Some Salesforce Classic methods aren’t available in Lightning Experience and some have been renamed.

| Salesforce Classic Method | Available in Lightning Experience? | Notes About Support in Lightning Experience | Go to Salesforce Classic API | Go to Lightning Experience API |
| --- | --- | --- | --- | --- |
| disableClickToDial() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| enableClickToDial() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| getCallCenterSettings() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| getDirectoryNumbers() |  | Not yet supported. | Link | N/A |
| getPageInfo() |  | The same functionality is provided in the Open CTI for Lightning method getAppViewInfo. | Link | Link |
| getSoftphoneLayout() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| isInConsole() |  | Not yet supported. | Link | N/A |
| isVisible() |  | The same functionality is provided in the Open CTI for Lightning isSoftphonePanelVisible. | Link | Link |
| notifyInitializationComplete() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| onClickToDial() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| onFocus() |  | The same functionality is provided in the Open CTI for Lightning method onNavigationChange. | Link | Link |
| refreshPage() |  | The same functionality is provided in the Open CTI for Lightning method refreshView. | Link | Link |
| refreshRelatedList() |  | The same functionality is provided in the Open CTI for Lightning method refreshView. | Link | Link |
| reloadFrame() |  | The same functionality is provided in the Open CTI for Lightning method refreshView. | Link | Link |
| runApex() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| saveLog() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| screenPop() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| searchAndGetScreenPopUrl() |  | To recreate this functionality, use searchAndScreenPop in Open CTI for Lightning | Link | Link |
| searchAndScreenPop() |  | Uses the same method name in Open CTI for Lightning. | Link | Link |
| setSoftphoneHeight() |  | The same functionality is provided in the Open CTI for Lightning method setSoftphonePanelHeight. | Link | Link |
| setSoftphoneWidth() |  | The same functionality is provided in the Open CTI for Lightning method setSoftphonePanelWidth. | Link | Link |
| setVisible() |  | The same functionality is provided in the Open CTI for Lightning method setSoftphonePanelVisibility. | Link | Link |

#### See Also

-   [Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm "The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.")

## Related Topics

- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_disableclicktodial.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_disableclicktodial_lex.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_enableclicktodial.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_enableclicktodial_lex.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_getcallcentersettings.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_getcallcentersettings_lex.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_getdirectorynumbers.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_getpageinfo.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_getappviewinfo_lex.htm)
- Link (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_getsoftphonelayout.htm)
