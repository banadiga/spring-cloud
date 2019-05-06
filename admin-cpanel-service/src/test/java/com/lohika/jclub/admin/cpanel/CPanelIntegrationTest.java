package com.lohika.jclub.admin.cpanel;

import org.junit.Test;

import static io.restassured.RestAssured.when;

import static org.hamcrest.Matchers.equalTo;

public class CPanelIntegrationTest extends BaseIntegrationTest {

  @Test
  public void loadIndexPage() {
    when()
        .get("/index.html")
        .then()
        .statusCode(200)
        .body("html.head.title", equalTo("Administrator CPanel"));
  }
}
