// config.js

/**
 * Configuration file for defining global constants and environment-specific settings.
 * 
 * API_BASE_URL:
 * - Base URL for all API requests made from the frontend.
 * - Easily switchable for different environments (development, staging, production).
 * 
 * Example usage:
 *   fetch(`${API_BASE_URL}/api/appointments`)
 */

export const API_BASE_URL = "http://localhost:8080";
const ENV = process.env.NODE_ENV || "development";

export const API_BASE_URL = {
  development: "http://localhost:8080",
  staging: "https://staging.hospitalcms.com",
  production: "https://hospitalcms.com",
}[ENV];
