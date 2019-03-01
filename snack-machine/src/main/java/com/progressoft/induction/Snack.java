package com.progressoft.induction;


public class Snack {
  private SnackType type;
  private int quantity;

  Snack(SnackType type, int quantity){
    this.type = type;
    this.quantity = quantity;

  }
  void decreaseQuantity(){
    this.quantity--;
  }
  int quantity(){
    return this.quantity;
  }

}

