---
title: "Datacloud Resources"
domain: chatterapi
topic: datacloud-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:14.915Z
estimatedTokens: 431
keywords: [Datacloud, Resources, purchase, Data.com, contacts, companies, purchases, including, how, credits, add, selected, import, CRM]
---

# Datacloud Resources

> Information about Datacloud resources used to purchase
    Data.com contacts or companies. Use the Datacloud resources to
      purchase Data.com contacts or companies and get information about your purchases, including
      how many credits are available for your use. You can also add contacts to selected companies
      or import contacts to your CRM.

# Datacloud Resources

Information about Datacloud resources used to purchase Data.com contacts or companies. Use the Datacloud resources to purchase Data.com contacts or companies and get information about your purchases, including how many credits are available for your use. You can also add contacts to selected companies or import contacts to your CRM.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/datacloud/companies/companyId | Get company information. |
| /connect/datacloud/contacts/contactId | Get the contact information for the specified contact. |
| /connect/datacloud/contact-imports | Import records as contacts or leads. |
| /connect/datacloud/orders | Purchase the contacts or companies for the listed IDs. |
| /connect/datacloud/orders/orderId | Get information for an order. |
| /connect/datacloud/orders/orderId/companies | Get all the order information about all companies. |
| /connect/datacloud/orders/orderId/contacts | Get all the order information for a specific order for contacts. |
| /connect/datacloud/usage/userId | Get usage information for a Monthly user or a Listpool user. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Related Topics

- /connect/datacloud/companies/companyId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_companies_companyid.htm)
- /connect/datacloud/contacts/contactId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_contacts_cotactid.htm)
- /connect/datacloud/contact-imports (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_contact_import.htm)
- /connect/datacloud/orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_orders.htm)
- /connect/datacloud/orders/orderId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_orderid.htm)
- /connect/datacloud/orders/orderId/companies (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_orderid_companies.htm)
- /connect/datacloud/orders/orderId/contacts (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_orderid_contacts.htm)
- /connect/datacloud/usage/userId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_datacloud_usage.htm)
