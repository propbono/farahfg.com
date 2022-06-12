import React from "react";
import { Section } from "../section/section";
import { Container } from "../container/container";
import { ProductCardIcon } from "../product-card-icon/product-card-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faTruck,
  faGlobeAmericas,
  faBoxesPacking,
  faBoltLightning,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  icon: "w-16 h-16 p-4 text-white align-middle transition duration-1000 ease-linear bg-primary group-hover:bg-secondary rounded-2xl",
};
export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" className="z-5 my-4 md:mt-[-14rem] relative">
      <Container>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <ProductCardIcon
            icon={
              <FontAwesomeIcon icon={faGlobeAmericas} className={styles.icon} />
            }
            title="Worldwide transport"
            content="Our freight forwarding services network connected to every remote area in various countries in the northern, eastern, southern and western continents."
          />
          <ProductCardIcon
            icon={
              <FontAwesomeIcon icon={faBoltLightning} className={styles.icon} />
            }
            title="Door to Door Delivery"
            content="Our company has the ability to fulfil any delivery terms based on client’s requirements. All of our skillful and experienced employees able to handle any jobs with the highest standards of service."
          />
          <ProductCardIcon
            icon={<FontAwesomeIcon icon={faTruck} className={styles.icon} />}
            title="Ground Transport"
            content="We have a freight forwarding network that is connected to every remote area in various countries. Shipping to major countries in the world as well as to small countries in the northern, eastern, southern and western continents. "
          />
          <ProductCardIcon
            icon={
              <FontAwesomeIcon icon={faHandshake} className={styles.icon} />
            }
            title="Inland Services"
            content="Organize and be responsible for shipments to reach the destination to remote areas around the world. "
          />
          <ProductCardIcon
            icon={
              <FontAwesomeIcon icon={faWarehouse} className={styles.icon} />
            }
            title="Warehousing"
            content="All of our skillful and experienced employees able to handle any jobs with the highest standards of service. With wide range circle global logistics network, Farah Freight Group has several transit warehouses at ports and airports in various cities around the world. Thus, every item sent using our logistics services will remain safe and in good condition."
          />
          <ProductCardIcon
            icon={
              <FontAwesomeIcon icon={faBoxesPacking} className={styles.icon} />
            }
            title="Packaging And Storage"
            content="Every shipment is ensured in accordance with the security standards that have been set. Packaging and storage of each item is of particular concern so that its condition is maintained until it reaches its destination and recipient. "
          />
        </div>
      </Container>
    </Section>
  );
};
