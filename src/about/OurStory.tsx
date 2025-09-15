import type { JSX } from "react";
import ReusableSection from "../component/Reusable";

function OurStory(): JSX.Element {
  const buttons = [
    {
      type: 'button' as const,
      className: "contact-button",
      text: "Get in Touch",
      onClick: (): void => {
        window.location.href = '/contact';
      }
    }
  ];

  const storyDescription = (
    <div>
      <p>Founded in 2020, GadgetHub started with a simple mission: to bring the best gadgets to tech enthusiasts around the world. Our founders, Jane Doe and John Smith, shared a passion for technology and innovation, which led them to create a platform where customers could find cutting-edge products at competitive prices.</p>
      <p>Over the years, we have grown from a small startup to a leading online retailer, thanks to our commitment to quality, customer service, and continuous improvement. We believe in building lasting relationships with our customers and strive to exceed their expectations with every purchase.</p>
      <p>At GadgetHub, we are more than just a store; we are a community of tech lovers who are excited about the future of technology. Join us on our journey as we continue to explore new frontiers and bring you the latest and greatest in gadgets.</p>
    </div>
  );

  const imageContent = (
    <img 
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
      alt="Our Story" 
    />
  );

  return (
    <ReusableSection
      className="our-story"
      title="Our Story"
      description={storyDescription}
      buttons={buttons}
      imageContent={imageContent}
      imageClassName="our-story-image"
      contentClassName="our-story-content"
      reverse={false} // This will put image first, content second if needed
    />
  );
}

export default OurStory ;