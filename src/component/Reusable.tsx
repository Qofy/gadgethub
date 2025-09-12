import type { ReactNode } from "react";
import "../style/home.css"
import { Link } from "react-scroll";
import { NavLink } from "react-router";

interface ScrollButton {
  type: 'scroll';
  to: string;
  className: string;
  text: string;
}

interface NavLinkButton {
  type: 'navlink';
  to: string;
  className: string;
  text: string;
}

interface RegularButton {
  type: 'button';
  className: string;
  text: string;
  onClick: () => void;
}

type ButtonConfig = ScrollButton | NavLinkButton | RegularButton;

interface ReusableSectionProps {
  className?: string;
  title?: string;
  titleSpan?: string;
  description?: string | ReactNode;
  buttons?: ButtonConfig[];
  children?: ReactNode;
  imageContent?: ReactNode;
  imageClassName?: string;
  contentClassName?: string;
  reverse?: boolean;
}

function ReusableSection({ 
  className = "main-section",
  title,
  titleSpan,
  description,
  buttons = [],
  children,
  imageContent,
  imageClassName = "product-image",
  contentClassName = "main-content",
  reverse = false
}: ReusableSectionProps) {
  
  const sectionContent = (
    <div className={contentClassName}>
      {title && (
        <h1 className="main-title">
          {titleSpan ? (
            <>
              {title} <span>{titleSpan}</span>
            </>
          ) : (
            title
          )}
        </h1>
      )}
      
      {description && (
        typeof description === 'string' ? (
          <p className="main-description">{description}</p>
        ) : (
          description
        )
      )}
      
      {buttons.length > 0 && (
        <div className="btn">
          {buttons.map((btn, index) => {
            if (btn.type === 'scroll') {
              return (
                <Link
                  key={index}
                  to={btn.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={btn.className}
                >
                  {btn.text}
                </Link>
              );
            } else if (btn.type === 'navlink') {
              return (
                <NavLink
                  key={index}
                  to={btn.to}
                  className={btn.className}
                >
                  {btn.text}
                </NavLink>
              );
            } else if (btn.type === 'button') {
              return (
                <button
                  key={index}
                  className={btn.className}
                  onClick={btn.onClick}
                >
                  {btn.text}
                </button>
              );
            }
            return null;
          })}
        </div>
      )}
      
      {children}
    </div>
  );

  const imageSection = imageContent && (
    <div className={imageClassName}>
      {imageContent}
    </div>
  );

  return (
    <div className={className}>
      {reverse ? (
        <>
          {imageSection}
          {sectionContent}
        </>
      ) : (
        <>
          {sectionContent}
          {imageSection}
        </>
      )}
    </div>
  );
}

export default ReusableSection;