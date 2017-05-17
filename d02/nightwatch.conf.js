require('nightwatch-cucumber')({
})

module.exports = {
  "src_folders" : [],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "features/support/chromedriver.js",

  "selenium" : {
    "start_process" : false
  },

  "test_settings" : {
    "default" : {
      "selenium_port"  : 9515,
      "selenium_host"  : "localhost",
			"default_path_prefix" : "",
      "screenshots": {
        "enabled": true,
        "on_failure": true,
        "path": "reports/screenshots/selenium"
      },
      "desiredCapabilities": {
          "browserName": "chrome",
          "chromeOptions" : {
              "args" : ["--no-sandbox"]
          },
          "acceptSslCerts": true
      }
    }
  }
}
