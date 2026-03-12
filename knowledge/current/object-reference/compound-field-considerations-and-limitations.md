---
title: "Compound Field Considerations and Limitations"
domain: object-reference
topic: compound-field-considerations-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:03.178Z
estimatedTokens: 1404
keywords: [Compound, Considerations, Limitations, Address, geolocation, convenient, result, concise, clear, code, things, consider, apps]
---

# Compound Field Considerations and Limitations

> Address and geolocation compound fields are convenient and result in more concise,
    clear code. Here are some things to consider when using them in your apps.

# Compound Field Considerations and Limitations

Address and geolocation compound fields are convenient and result in more concise, clear code. Here are some things to consider when using them in your apps.

Both address and geolocation compound fields have the following limitations.

-   Compound fields are read-only. To update field values, modify the individual field components.
-   Compound fields are accessible only through SOAP API, REST API, and Apex. The compound versions of fields aren’t accessible anywhere in the Salesforce user interface.
-   Although compound fields can be queried with the Location and Address Apex classes, they’re editable only as components of the actual field. Read and set geolocation field components by appending “\_\_latitude\_\_s” or “\_\_longitude\_\_s” to the field name, instead of the usual “\_\_c.” For example:

    ```

    ```

    You can’t access or set the compound value.
-   You can’t use compound fields in Visualforce—for example, in an <apex:outputField\>. To access or update field values, use the individual field components.
-   If you select compound fields for export in the Data Loader, they cause error messages. To export values, use individual field components.
-   Custom geolocation and location fields on standard addresses aren’t supported with email templates.
-   You can’t use compound fields in lookup filters, except to filter distances that are within or not within given ranges. You can use distance lookup filters only in the Metadata API.
-   The only formula functions that you can use with compound fields are ISBLANK, ISCHANGED, and ISNULL. You can’t use BLANKVALUE, CASE, NULLVALUE, PRIORVALUE, or the equality and comparison operators with compound fields. The equality and comparison operators include \= and \== (equal), <> and != (not equal), < (less than), \> (greater than), <= (less than or equal), \>= (greater than or equal), && (AND), and || (OR).

Address compound fields have the following limitations.

-   Compound address fields are available only for address fields that exist as part of the standard objects included in Salesforce.
-   To add custom address fields on standard and custom objects, enable Custom Address Fields. For more information see the [Custom Address Fields Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.caf_dev_guide.meta/caf_dev_guide/caf_dev_guide.htm).
-   In Developer, Professional, Enterprise, Unlimited, and Performance editions, Salesforce can automatically add or update geolocation fields for Account, Contact, Lead, and WorkOrder records. To use this feature, your administrator must enable the geo data integration rule for each object. For all other objects and editions, set values for latitude and longitude by using Salesforce CLI, SOAP or REST API, or a geocoding service. You can then use address fields as locatable values. To find geocoding services, search AppExchange.
-   The accuracy subfield of address fields is populated only when an address is geocoded. Typically, geocoding service providers provide accuracy data for an address’s latitude and longitude coordinates.
-   Address fields can’t be used in WHERE statements in SOQL. Address fields aren’t filterable, but the isFilterable() method of the DescribeFieldResult Apex class erroneously returns true for address fields.

Geolocation compound fields have the following limitations.

-   Geolocation fields aren’t supported in custom settings.
-   Geolocation fields aren’t available in dashboards or Schema Builder.
-   Geolocation fields are available in Visual Workflow and in formula-based workflow and approvals, but they can’t be used in filter-based workflow updates and approvals.
-   DISTANCE formulas are supported in:
    -   Entry criteria for workflow rules and approval processes
    -   Field update actions in workflow rules and approval processes
    -   Custom validation rules
    -   Lookup filters (in the Metadata API only)
-   Geolocation fields and latitude and longitude on standard addresses aren’t supported in Salesforce to Salesforce.
-   In Developer, Professional, Enterprise, Unlimited, and Performance editions, Salesforce can automatically add or update geolocation fields for Account, Contact, Lead, and WorkOrder records. To use this feature, your administrator must enable the geo data integration rule for each object. For all other objects and editions, set values for latitude and longitude by using SOQL, SOAP or REST API, or a geocoding service. You can then use address fields as locatable values. To find geocoding services, search AppExchange.
-   Geolocation fields are supported in SOQL with the following limitations.

    -   DISTANCE and GEOLOCATION are supported in WHERE and ORDER BY clauses in SOQL, but not in GROUP BY. DISTANCE is supported in SELECT clauses.
    -   DISTANCE supports only the logical operators > and <, returning values within (<) or beyond (>) a specified radius.
    -   When using the GEOLOCATION function in SOQL queries, the geolocation field must precede the latitude and longitude coordinates. For example, DISTANCE(warehouse\_location\_\_c, GEOLOCATION(37.775,-122.418), 'km') works but DISTANCE(GEOLOCATION(37.775,-122.418), warehouse\_location\_\_c, 'km') doesn’t work.
    -   Apex bind variables aren’t supported for the units parameter in the DISTANCE function. This query doesn’t work.

        ```

        ```


    For more information and examples, see the [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## Code Examples

```
Double theLatitude = myObject__c.aLocation__latitude__s;
myObject__c.aLocation__longitude__s = theLongitude;
```

```apex
String units = 'mi';
List<Account> accountList = 
    [SELECT ID, Name, BillingLatitude, BillingLongitude 
     FROM Account 
     WHERE DISTANCE(My_Location_Field__c, GEOLOCATION(10,10), :units) < 10];
```
