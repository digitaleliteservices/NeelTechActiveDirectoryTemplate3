import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    const verify = async () => {
      const orderId = localStorage.getItem("orderId");

      if (!orderId) {
        alert("Invalid payment");
        window.location.href = "/active-directory";
        return;
      }

      for (let i = 0; i < 5; i++) {
        const res = await fetch(
          //   `http://localhost:9000/api/active-dir/verify-payment?orderId=${orderId}`,
          `https://api.neeltechnologies.com/api/active-dir/verify-payment?orderId=${orderId}`,
        );

        const data = await res.json();

        // ✅ SUCCESS
        if (data.status === "COMPLETED") {
          localStorage.removeItem("orderId");
          window.location.href =
            "https://chat.whatsapp.com/I0yVSOKX6DRIfMsvlcBN76";
          return;
        }

        // ❌ FAILED
        if (data.status === "FAILED") {
          localStorage.removeItem("orderId");
          alert("Payment failed or cancelled ❌");
          window.location.href = "/active-directory";
          return;
        }

        await new Promise((r) => setTimeout(r, 2000));
      }

      alert("Payment not confirmed yet. Please try again.");
      window.location.href = "/active-directory";
    };

    verify();
  }, []);

  return <h2>Verifying payment...</h2>;
};

export default PaymentSuccess;
