---
title: ACME Refund Policy
---

## Refund Policy

All customers have 30 days from purchase to request a refund.

{% if audience == "internal" %}
**Internal:** VIP refunds require director approval and should be logged in Salesforce.
{% endif %}

{% if audience == "partner" %}
**Partner:** Please coordinate client refund requests with your ACME account manager.
{% endif %}

{% if audience == "customer" %}
**Customer:** For any refund, contact our customer support team at support@acme.com.
{% endif %}
