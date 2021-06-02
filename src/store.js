import { writable } from 'svelte/store'

if (!window.__svelte_notifications_store__) {
  window.__svelte_notifications_store__ = writable()
}

export const notification = window.__svelte_notifications_store__

