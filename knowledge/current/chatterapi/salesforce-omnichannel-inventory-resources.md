---
title: "Salesforce Omnichannel Inventory Resources"
domain: chatterapi
topic: salesforce-omnichannel-inventory-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.049Z
estimatedTokens: 1356
keywords: [Salesforce, Omnichannel, Inventory, Resources, Manage, across, locations]
---

# Salesforce Omnichannel Inventory Resources

> Manage inventory across locations. Available in Salesforce Omnichannel
      Inventory.

# Salesforce Omnichannel Inventory Resources

Manage inventory across locations. Available in Salesforce Omnichannel Inventory.

Available resources are:

| Resource | Description |
| --- | --- |
| /commerce/oci/availability/availability-records/actions/get-availability | Retrieve inventory availability data for one or more products at one or more inventory locations or location groups. |
| /commerce/oci/availability-records/actions/batch-update | Update a batch of inventory records to Omnichannel Inventory. Add a new inventory record or update on hand, future quantity, future date, safety stock count, and shipping eligibility to an existing inventory record. |
| /commerce/oci/availability-records/uploads | Upload an inventory availability data file to Omnichannel Inventory. |
| /commerce/oci/availability-records/uploads/uploadId | Retrieve the status of an inventory availability upload job. |
| /commerce/inventory/check-availability | Get information about inventory availability for products in locations or location groups in your commerce inventory system. Provides available to fulfill, available to order, and on hand quantity information. |
| /commerce/inventory/levels | Get information about inventory levels for products in locations and location groups in your commerce inventory system. |
| /commerce/oci/location-graph/uploads | Asynchronously publish information about your inventory locations and location groups to Omnichannel Inventory. The publish includes records whose IsEnabled and ShouldSyncWithOci fields are both true. This method returns an ID that you can use to retrieve the status of the publish job. |
| /commerce/oci/location-graph/uploads/uploadId | Retrieve the status of a publish location structure job. |
| /commerce/oci/reservation/actions/reservations | Create an inventory reservation in Omnichannel Inventory. |
| /commerce/oci/reservation/actions/fulfillments | Fulfill one or more inventory reservations. |
| /commerce/oci/reservation/actions/releases | Release one or more existing inventory reservations to free up that inventory. |
| /commerce/oci/reservation/actions/transfers | Transfer one or more inventory reservations between locations or location groups. This API doesn’t change physical quantities, but reduces the reserved quantity at the source and increases it at the destination. |
| /commerce/oci/reservation/actions/update | Updates an existing reservation in Omnichannel Inventory. Add, remove, and update quantities for existing SKUs in the reservation. |

-   **[Availability Records, Batch Update](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_batch_update.htm)**
    Update a batch of inventory records to Omnichannel Inventory. Add a new inventory record or update on hand, future quantity, future date, safety stock count, and shipping eligibility to an existing inventory record.
-   **[Availability Records, Get Availability](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_get_availability.htm)**
    Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.
-   **[Availability Records, Upload](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_upload.htm)**
    Asynchronously upload inventory data to Omnichannel Inventory and check the status of upload jobs. Upload inventory data using either a NDJSON or CSV file.
-   **[Inventory Check Availability](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_inventory_check_availability.htm)**
    Get information about inventory availability for products in locations or location groups in your commerce inventory system. Provides available to fulfill, available to order, and on hand quantity information.
-   **[Inventory Levels](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_inventory_get_levels.htm)**
    Get information about inventory levels for products in locations and location groups in your commerce inventory system.
-   **[Location Graph, Upload](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_location_graph_upload.htm)**
    Asynchonously upload inventory location and location group data to Omnichannel Inventory and check the status of upload jobs.
-   **[Reservations, Create](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_reservation_create.htm)**
    Create an inventory reservation in Omnichannel Inventory.
-   **[Reservations, Fulfill](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_reservation_fulfill.htm)**
    Fulfill one or more inventory reservations.
-   **[Reservations, Release](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_reservation_release.htm)**
    Release one or more existing inventory reservations to free up that inventory.
-   **[Reservations, Transfer](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_reservation_transfer.htm)**
    Transfer one or more inventory reservations between locations or location groups. This API doesn’t change physical quantities, but reduces the reserved quantity at the source and increases it at the destination.
-   **[Reservations, Update](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_reservation_update.htm)**
    Updates an existing reservation in Omnichannel Inventory. Add, remove, and update quantities for existing SKUs in the reservation.

## Related Topics

- /commerce/oci/availability/availability-records/actions/get-availability (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_get_availability.htm)
- /commerce/oci/availability-records/actions/batch-update (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_batch_update.htm)
- /commerce/oci/availability-records/uploads (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_upload.htm)
- /commerce/oci/availability-records/uploads/uploadId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_upload.htm)
- /commerce/inventory/check-availability (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_inventory_check_availability.htm)
- /commerce/inventory/levels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_inventory_get_levels.htm)
- /commerce/oci/location-graph/uploads (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_location_graph_upload.htm)
- /commerce/oci/location-graph/uploads/uploadId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_location_graph_upload.htm)
- /commerce/oci/reservation/actions/reservations (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_reservation_create.htm)
- /commerce/oci/reservation/actions/fulfillments (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_reservation_fulfill.htm)
