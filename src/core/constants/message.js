const messages = {
  // General
  SUCCESS: "Operation successful",
  ERROR: "Something went wrong",
  NOT_FOUND: "Resource not found",
  INVALID_REQUEST: "Invalid request data",
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "Forbidden",
  SERVER_ERROR: "Internal server error",

  // User
  USER_CREATED: "User created successfully",
  USER_EXISTS: "User already exists",
  USER_NOT_FOUND: "User not found",
  USER_UPDATED: "User updated successfully",
  USER_DELETED: "User deleted successfully",

  // Auth
  INVALID_PASSWORD: "Invalid password",
  LOGIN_SUCCESS: "Login successful",
  LOGIN_FAILED: "Invalid email or password",
  LOGOUT_SUCCESS: "Logout successful",
  TOKEN_INVALID: "Token is invalid or expired",

  // Validation
  VALIDATION_FAILED: "Validation failed",
  MISSING_FIELDS: "Required fields are missing",

  // Product
  PRODUCT_CREATED: "Product created successfully",
  PRODUCT_UPDATED: "Product updated successfully",
  PRODUCT_DELETED: "Product deleted successfully",
  PRODUCT_NOT_FOUND: "Product not found",

  // Database
  DB_CONNECTION_SUCCESS: "Database connected",
  DB_CONNECTION_FAILED: "Database connection failed",
};

module.exports = messages;
