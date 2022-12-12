import {
  faBridgeCircleXmark,
  faCheck,
  faCoffee,
  faXmark,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ card }) {
  return (
    <>
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">
              {card.plan}
            </h5>
            <h6 class="card-price text-center">
              {card.price}
              <span class="period">/month✔</span>
            </h6>
            <hr />
            <ul class="fa-ul">
              {card.features.map((item) => {
                return (
                  <li class={item.textmute ? `text-muted` : ``}>
                    <FontAwesomeIcon icon={item.Font ? faCheck : faXmark} />
                    <span>
                      {item.isBold ? <strong>{item.title}</strong> : item.title}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div class="d-grid">
              <a href="#" class="btn  text-uppercase">
                <strong>Buy Now</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
