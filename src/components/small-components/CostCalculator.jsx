import { Container } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function CostCalculator() {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(10000);
  const [totalPrice, setTotalPrice] = useState(30);

  const adjustQuantity = (adjustment) => {
    setQuantity((prevQuantity) => {
      // Determine new quantity within bounds
      let newQuantity = Math.max(
        10000,
        Math.min(200000, prevQuantity + adjustment)
      );

      // Calculate steps
      let steps;
      if (newQuantity <= 100000) {
        steps = (newQuantity - 10000) / 5000;
      } else {
        // For quantities above 100,000
        const extraSteps = (newQuantity - 100000) / 50000;
        steps = 18 + extraSteps; // 18 steps to 100,000 + extra steps above 100,000
      }

      // Calculate and update total price
      const price = 30 + steps * 15 - steps;
      setTotalPrice(price);

      return newQuantity;
    });
  };

  return (
    <div className="cost_Calculator_section_container">
      <Container maxWidth="lg">
        <section className="cost-calculator-section">
          <h2>{t("cost_calculator_header")}</h2>
          <label dir="ltr">{t("how_many_business")}</label>
          <div className="slider-controls">
            <button
              onClick={() => adjustQuantity(quantity <= 100000 ? -5000 : -50000)}
            >
              -
            </button>
            <div className="quantity-display">{quantity}</div>
            <button
              onClick={() => adjustQuantity(quantity < 100000 ? 5000 : 50000)}
            >
              +
            </button>
          </div>
          <h3>{t("total_price")}</h3>
          <div className="total-price">${totalPrice}</div>
        </section>
      </Container>
    </div>
  );
}

export default CostCalculator;
