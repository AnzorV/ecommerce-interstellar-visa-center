import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className="bg-comet-trail">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis harum
        eum quam incidunt iusto eos labore in odio pariatur vitae! Ad dolor
        minima modi est. Officia quasi aliquam dolores ipsum? Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Explicabo facere architecto
        alias, praesentium pariatur aliquid, vitae magnam dicta vero, corrupti
        molestias consequuntur. Quos deserunt, ratione non accusantium nemo ipsa
        corporis.
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  );
};

export default Home;
