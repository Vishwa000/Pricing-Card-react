import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  var priceDetail = [
    {
      plan: "Free",
      price: "$0",
      features: [
        {
          title: "Single User",
          Font: true,
        },
        {
          title: "5GB Storage",
          Font: true,
        },
        {
          title: "Unlimited Public Projects",
          Font: true,
        },
        {
          title: "Community Access",
          Font: true,
        },
        {
          title: "Unlimited Private Projects",
          Font: true,
        },
        {
          title: " Dedicated Phone Support",
          textmute: true,
        },
        {
          title: "Free Subdomain",
          textmute: true,
        },
        {
          title: "Monthly Status Reports",
          textmute: true,
        },
      ],
    },
    {
      plan: "Plus",
      price: "$9",
      features: [
        {
          title: "5 Users",
          isBold: true,
          Font: true,
        },
        {
          title: "50GB Storage",
          Font: true,
        },
        {
          title: "Unlimited Public Projects",
          Font: true,
        },
        {
          title: "Community Access",
          Font: true,
        },
        {
          title: "Unlimited Private Projects",
          Font: true,
        },
        {
          title: " Dedicated Phone Support",
          Font: true,
        },
        {
          title: "Free Subdomain",
          Font: true,
        },
        {
          title: "Monthly Status Reports",
          textmute: true,
        },
      ],
    },
    {
      plan: "Pro",
      price: "$49",
      features: [
        {
          title: "Unlimited Users",
          isBold: true,
          Font: true,
        },
        {
          title: "150GB Storage",
          Font: true,
        },
        {
          title: "Unlimited Public Projects",
          Font: true,
        },
        {
          title: "Community Access",
          Font: true,
        },
        {
          title: "Unlimited Private Projects",
          Font: true,
        },
        {
          title: " Dedicated Phone Support",
          Font: true,
        },
        {
          title: "Unlimited Free Subdomain",
          Font: true,
        },
        {
          title: "Monthly Status Reports",
          Font: true,
        },
      ],
    },
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {priceDetail.map((card) => {
            return <Card card={card}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
