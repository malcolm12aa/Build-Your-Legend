export const app = () => document.querySelector("#app");
export const escapeHtml = (text = "") => String(text).replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch]));
