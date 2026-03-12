---
title: "Integration Procedures for Enterprise Sales
                        Management"
domain: esm-developer-guide
topic: integration-procedures-for-enterprise-sales-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:26.955Z
estimatedTokens: 315
keywords: [Integration, Procedures, Enterprise, Sales, Management, Every, org, includes, number]
---

# Integration Procedures for Enterprise Sales
                        Management

> Every Enterprise Sales Management org includes a
                      number of Integration Procedures that are used by Enterprise
                        Sales Management.

# Integration Procedures for Enterprise Sales Management

Every Enterprise Sales Management org includes a number of Integration Procedures that are used by Enterprise Sales Management.

For more information about the Integration Procedures, download [this PDF](https://volt.my.salesforce.com/sfc/p/o0000000IKm8/a/3m000000nWtR/Nf9B.CihqCn92zqpvrU5SJAQzm2CFAYwrU1JFI2RN2Y).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=esm_developer_guide)

#### Note

Some components have been renamed to align with the naming conventions of Omnistudio Standard Runtime, to provide support for it. For more information, download [this PDF.](https://volt.my.salesforce.com/sfc/p/o0000000IKm8/a/3m000000htxw/tB15IalfyHRjNUVx59XdBeeM.nXKzpxNC5ansXxsmTQ)

Note that for the ESM\_checkServiceQualification and ESM\_checkAddressValidation IPs, you must add the base URL of your TMF API endpoint to remote site settings, as follows:

1.  In your Enterprise Sales Management org, go to Settings and click Setup.
2.  In Quick Find, enter, and click Remote Site Settings.
3.  Click New Remote Site.
4.  Enter the Remote Site Name.
5.  Enter the URL in the Remote Site URL. For example:

    ```

    ```

6.  Select the Active checkbox.
7.  Click Save.

## Code Examples

```
http://demo8317683.mockable.io/
```
