---
title: "Legacy Page Security Plugin (Apex)"
domain: cpq-dev-api
topic: legacy-page-security-plugin-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.813Z
estimatedTokens: 400
keywords: [Legacy, Security, Plugin, Apex, Salesforce, CPQ, plugins, let, developers, control, field-level, visibility, data, entry, mode]
---

# Legacy Page Security Plugin (Apex)

> The Salesforce CPQ Apex page security plugins let developers control field-level
        visibility or data entry mode in Salesforce CPQ VisualForce pages.

# Legacy Page Security Plugin (Apex)

The Salesforce CPQ Apex page security plugins let developers control field-level visibility or data entry mode in Salesforce CPQ VisualForce pages.

| Available in: All Salesforce CPQ Editions |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

Salesforce CPQ has deprecated support for Apex page security plugins. Review [Javascript Page Security Plugin](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_javascript_page_security_plugin.htm "Use Javascript functions to control field visibility and editability on your CPQ quotes.") for information on the currently-supported version.

The Legacy Page Security Plugin handles two types of use cases.

Show or hide fields on each quote line

For example, you’re selling training classes and you want to capture how many students are participating in the class. Use the page security plugin to hide a student number field.

Make quote line fields read-only or writable

For example, you allow your users to specify the subscription term on each quote line, but you have some products that can only be quoted on a 12-month basis. Use the page security plugin to make the Subscription Term field read-only for such products, while keeping it writable for the other products.

To use the Legacy Page Security Plugin, first create an Apex class. Then enter the Apex class name in the Legacy Page Security Plugin setting in the Salesforce CPQ package settings. You can call only one Apex class at a time in the Legacy Page Security Plugin.

## Example

```

```

## Code Examples

```apex
global class MyPageSecurityPlugin implements SBQQ.PageSecurityPlugin2 {
    public Boolean isFieldEditable(String pageName, Schema.SObjectField field) {
        return null;
    }
    
    public Boolean isFieldEditable(String pageName, Schema.SObjectField field, SObject record) {
        return null;
    }
    
    public Boolean isFieldVisible(String pageName, Schema.SObjectField field) {
        return null;
    }
    
    public Boolean isFieldVisible(String pageName, Schema.SObjectField field, SObject record) {
        if ((pageName == 'EditLines') && (record instanceof SBQQ__QuoteLine__c)) {
            SBQQ__QuoteLine__c line = (SBQQ__QuoteLine__c)record;
            if ((line.SBQQ__Bundle__c == true) && (field != SBQQ__QuoteLine__c.SBQQ__ProductName__c)) {
                return false;
            }
        }
        return null;
    }
}
```

## Related Topics

- Javascript Page Security Plugin (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_javascript_page_security_plugin.htm)
