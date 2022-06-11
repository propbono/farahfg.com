import React from "react";
import {
  LightningBoltIcon,
  GlobeIcon,
  TruckIcon,
} from "@heroicons/react/solid";
import { Section } from "../section/section";
import { Container } from "../container/container";
import { ProductCardIcon } from "../product-card-icon/product-card-icon";

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" className="z-5 my-4 md:mt-[-14rem] relative">
      <Container>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          <ProductCardIcon
            icon={<GlobeIcon />}
            title="Worldwide transport"
            content="Organize and be responsible for shipments to reach the destination to remote areas around the world."
          />
          <ProductCardIcon
            icon={<LightningBoltIcon />}
            title="Door to Door Delivery"
            content="Our company has the ability to fulfil any delivery terms based on client's requirements."
          />
          <ProductCardIcon
            icon={<TruckIcon />}
            title="Ground Transport"
            content="We have a freight forwarding network that is connected to every remote area in various countries. "
          />
        </div>
      </Container>
    </Section>
  );
};
