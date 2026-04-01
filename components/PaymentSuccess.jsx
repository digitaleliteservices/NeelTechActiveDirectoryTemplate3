// import { useEffect } from "react";

// const PaymentSuccess = () => {
//   useEffect(() => {
//     const verify = async () => {
//       const orderId = localStorage.getItem("orderId");

//       if (!orderId) {
//         alert("Invalid payment");
//         window.location.href = "/active-directory";
//         return;
//       }

//       for (let i = 0; i < 5; i++) {
//         const res = await fetch(
//             `http://localhost:9000/api/active-dir/verify-payment?orderId=${orderId}`,
//         //   `https://api.neeltechnologies.com/api/active-dir/verify-payment?orderId=${orderId}`,
//         );

//         const data = await res.json();

//         // ✅ SUCCESS
//         if (data.status === "COMPLETED") {
//           localStorage.removeItem("orderId");
//           window.location.href =
//             "https://chat.whatsapp.com/I0yVSOKX6DRIfMsvlcBN76";
//           return;
//         }

//         // ❌ FAILED
//         if (data.status === "FAILED") {
//           localStorage.removeItem("orderId");
//           alert("Payment failed or cancelled ❌");
//           window.location.href = "/active-directory";
//           return;
//         }

//         await new Promise((r) => setTimeout(r, 2000));
//       }

//       alert("Payment not confirmed yet. Please try again.");
//       window.location.href = "/active-directory";
//     };

//     verify();
//   }, []);

//   return <h2>Verifying payment...</h2>;
// };

// export default PaymentSuccess;

import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const [status, setStatus] = useState("Checking payment...");

  useEffect(() => {
    const verify = async () => {
      const orderId = localStorage.getItem("orderId");

      console.log("ORDER ID:", orderId);

      if (!orderId) {
        setStatus("Invalid payment ❌");
        setTimeout(() => {
          window.location.href = "/active-directory";
        }, 2000);
        return;
      }

      // ⏳ wait before checking
      await new Promise((res) => setTimeout(res, 3000));

      try {
        const res = await fetch(
          `https://api.neeltechnologies.com/api/active-dir/verify-payment?orderId=${orderId}`,
        );

        const data = await res.json();

        console.log("VERIFY RESPONSE:", data);

        // ✅ SUCCESS
        if (data.status === "COMPLETED") {
          setStatus("Payment Successful ✅");

          localStorage.removeItem("orderId");

          setTimeout(() => {
            window.location.href =
              "https://chat.whatsapp.com/I0yVSOKX6DRIfMsvlcBN76";
          }, 1500);

          return;
        }

        // ❌ FAILED / CANCELLED
        if (data.status === "FAILED") {
          setStatus("Payment Failed or Cancelled ❌");

          localStorage.removeItem("orderId");

          setTimeout(() => {
            window.location.href = "/active-directory";
          }, 2000);

          return;
        }

        // ⏳ STILL PENDING
        setStatus("Payment Pending ⏳ (please wait...)");

        // 🔁 retry after 2 sec
        setTimeout(verify, 2000);
      } catch (err) {
        console.error(err);
        setStatus("Error verifying payment ❌");

        setTimeout(() => {
          window.location.href = "/active-directory";
        }, 2000);
      }
    };

    verify();
  }, []);

  return <h1>{status}</h1>;
};

export default PaymentSuccess;
