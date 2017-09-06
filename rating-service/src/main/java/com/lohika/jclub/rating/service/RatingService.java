package com.lohika.jclub.rating.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

@RefreshScope
@Service
public class RatingService {

  @Value("${rate}")
  private int rate;

  public BigDecimal calculateRating(Apartment apartment) {
    return new BigDecimal(
        (apartment.getSqft() / apartment.getPrice()) * rate,
        new MathContext(3, RoundingMode.HALF_UP));
  }
}
