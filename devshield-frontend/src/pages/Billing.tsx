export default function Billing() {

 async function subscribe() {

  const res = await fetch("http://localhost:3002/api/billing/checkout", {
    method: "POST",
  });

  const data = await res.json();

  window.location.href = data.url;

}

  return (
    <div className="card">

      <h2>💳 DevShield Pro</h2>

      <p>$29 / month</p>

      <button onClick={subscribe}>
        Upgrade Plan
      </button>

    </div>
  );
}