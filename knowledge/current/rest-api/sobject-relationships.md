---
title: "sObject Relationships"
domain: rest-api
topic: sobject-relationships
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.711Z
keywords: [sObject, Relationships]
---

# sObject Relationships

# sObject Relationships

Accesses records by traversing object relationships via friendly URLs. You can retrieve, update, or delete the record associated with the traversed relationship field. If there are multiple related records, you can retrieve the complete set of associated records. This resource is available in REST API version 36.0 and later.

-   **[Get Records Using sObject Relationships](atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships_get.htm)**  
    Gets a record based on the specified object, record ID, and relationship field. The fields and field values of the record are returned in the response body. If there are multiple related records, you can retrieve the complete set of associated records.
-   **[Update Records Using sObject Relationships](atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships_patch.htm)**  
    Updates a parent record based on the specified object, record ID, and relationship field name. Field values provided in the request body replace the existing values in the record. Only a child-to-parent relationship can be traversed when you update records.
-   **[Delete Records Using sObject Relationships](atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships_delete.htm)**  
    Deletes a parent record based on the specified object, record ID, and relationship field name. Only a child-to-parent relationship can be traversed when you delete records.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions_default_values_id.htm "sObject Quick Action Default Values by ID")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm "sObject User Password")