package com.progressoft.induction;
import java.math.BigDecimal;

public enum SnackType {
  CHEWING_GUM(Money.HALF_DINAR),
  CHIPS(Money.QUARTER_DINAR),
  CHOCOLATE(Money.DINAR);

  private BigDecimal _price;
  BigDecimal getPrice(){
    return _price;
  }
  SnackType(BigDecimal price){
    _price = price;
  }
  
}

