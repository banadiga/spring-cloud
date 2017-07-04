package com.lohika.jclub.rating.client;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.Matchers.nullValue;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = RatingServiceClientTestApplication.class)
public class RatingServiceClientFallbackTest {

  @Autowired
  private RatingServiceClient ratingServiceClient;

  private Apartment apartment = Apartment.builder()
      .location("location")
      .price(1.5d)
      .sqft(1.3d)
      .build();


  @Test
  public void getRating() {
    Rating actual = ratingServiceClient.getRating(apartment);

    assertThat(actual, nullValue());
  }
}
