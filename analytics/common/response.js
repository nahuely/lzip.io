class Response {
  static getStatusCode(code) {
    let Result = {};
    Result[(exports.ACCEPTED = 202)] = "Accepted";
    Result[(exports.BAD_GATEWAY = 502)] = "Bad Gateway";
    Result[(exports.BAD_REQUEST = 400)] = "Bad Request";
    Result[(exports.CONFLICT = 409)] = "Conflict";
    Result[(exports.CONTINUE = 100)] = "Continue";
    Result[(exports.CREATED = 201)] = "Created";
    Result[(exports.EXPECTATION_FAILED = 417)] = "Expectation Failed";
    Result[(exports.FAILED_DEPENDENCY = 424)] = "Failed Dependency";
    Result[(exports.FORBIDDEN = 403)] = "Forbidden";
    Result[(exports.GATEWAY_TIMEOUT = 504)] = "Gateway Timeout";
    Result[(exports.GONE = 410)] = "Gone";
    Result[(exports.HTTP_VERSION_NOT_SUPPORTED = 505)] =
      "HTTP Version Not Supported";
    Result[(exports.IM_A_TEAPOT = 418)] = "I'm a teapot";
    Result[(exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419)] =
      "Insufficient Space on Resource";
    Result[(exports.INSUFFICIENT_STORAGE = 507)] = "Insufficient Storage";
    Result[(exports.INTERNAL_SERVER_ERROR = 500)] = "Server Error";
    Result[(exports.LENGTH_REQUIRED = 411)] = "Length Required";
    Result[(exports.LOCKED = 423)] = "Locked";
    Result[(exports.METHOD_FAILURE = 420)] = "Method Failure";
    Result[(exports.METHOD_NOT_ALLOWED = 405)] = "Method Not Allowed";
    Result[(exports.MOVED_PERMANENTLY = 301)] = "Moved Permanently";
    Result[(exports.MOVED_TEMPORARILY = 302)] = "Moved Temporarily";
    Result[(exports.MULTI_STATUS = 207)] = "Multi-Status";
    Result[(exports.MULTIPLE_CHOICES = 300)] = "Multiple Choices";
    Result[(exports.NETWORK_AUTHENTICATION_REQUIRED = 511)] =
      "Network Authentication Required";
    Result[(exports.NO_CONTENT = 204)] = "No Content";
    Result[(exports.NON_AUTHORITATIVE_INFORMATION = 203)] =
      "Non Authoritative Information";
    Result[(exports.NOT_ACCEPTABLE = 406)] = "Not Acceptable";
    Result[(exports.NOT_FOUND = 404)] = "Not Found";
    Result[(exports.NOT_IMPLEMENTED = 501)] = "Not Implemented";
    Result[(exports.NOT_MODIFIED = 304)] = "Not Modified";
    Result[(exports.OK = 200)] = "OK";
    Result[(exports.PARTIAL_CONTENT = 206)] = "Partial Content";
    Result[(exports.PAYMENT_REQUIRED = 402)] = "Payment Required";
    Result[(exports.PERMANENT_REDIRECT = 308)] = "Permanent Redirect";
    Result[(exports.PRECONDITION_FAILED = 412)] = "Precondition Failed";
    Result[(exports.PRECONDITION_REQUIRED = 428)] = "Precondition Required";
    Result[(exports.PROCESSING = 102)] = "Processing";
    Result[(exports.PROXY_AUTHENTICATION_REQUIRED = 407)] =
      "Proxy Authentication Required";
    Result[(exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431)] =
      "Request Header Fields Too Large";
    Result[(exports.REQUEST_TIMEOUT = 408)] = "Request Timeout";
    Result[(exports.REQUEST_TOO_LONG = 413)] = "Request Entity Too Large";
    Result[(exports.REQUEST_URI_TOO_LONG = 414)] = "Request-URI Too Long";
    Result[(exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416)] =
      "Requested Range Not Satisfiable";
    Result[(exports.RESET_CONTENT = 205)] = "Reset Content";
    Result[(exports.SEE_OTHER = 303)] = "See Other";
    Result[(exports.SERVICE_UNAVAILABLE = 503)] = "Service Unavailable";
    Result[(exports.SWITCHING_PROTOCOLS = 101)] = "Switching Protocols";
    Result[(exports.TEMPORARY_REDIRECT = 307)] = "Temporary Redirect";
    Result[(exports.TOO_MANY_REQUESTS = 429)] = "Too Many Requests";
    Result[(exports.UNAUTHORIZED = 401)] = "Unauthorized";
    Result[(exports.UNPROCESSABLE_ENTITY = 422)] = "Unprocessable Entity";
    Result[(exports.UNSUPPORTED_MEDIA_TYPE = 415)] = "Unsupported Media Type";
    Result[(exports.USE_PROXY = 305)] = "Use Proxy";
    if (Result.hasOwnProperty(code)) {
      return {
        status: Result[code],
        code: code
      };
    } else {
      throw new Error("Status code does not exist: " + code);
    }
  }
  static success(code, data) {
    return {
      ...Response.getStatusCode(code),
      code: code,
      data: data
    };
  }
  static fail(code, data) {
    return {
      ...Response.getStatusCode(code),
      data: data
    };
  }
  static error(code, message, data) {
    return {
      ...Response.getStatusCode(code),
      message: message,
      data: data
    };
  }
}

module.exports = Response;
